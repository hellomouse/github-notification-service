const request = require('request')
const config = require('./config')

let pendingStatus = []; // contains all pending checks from travis as multiple are sent


module.exports = app => {

  // Shortens long GH urls using git.io
  let shortenUrl = (url, cb) => {
    // Posts to the api to create shorter url
    request.post('https://git.io/create', {form:{url}}, (err, res, body) => {
      if (err) app.error(`Shorten url failed for ${url}`);
      cb(`git.io/${body}`);
    });
  }

  // Format Repo Name into attention string
  let attFormat = (fullname, event) => {
    // [user|org]/[name]
    let org = fullname.split('/')[0] // or user
    let name = fullname.split('/')[1]
    return config.attentionString.replace('{org}', org).replace('{name}', name).replace('{event}', event)
  }

  app.irc = new (require('./irc'))(app);

  // App events
  app.on(['issues.opened', 'issues.closed', 'issues.reopened'], async context => {
      let payload = context.payload, att = attFormat(payload.repository.full_name, 'issue');

      shortenUrl(payload.issue.html_url, url => {
        app.irc.privmsg(`${att} \x0F| Issue #${payload.issue.number} ${payload.action} by ${payload.sender.login} on ${payload.repository.full_name} - ${url}`);
      });
  });

  app.on(['issue_comment.created', 'issue_comment.edited', 'issue_comment.deleted'], async context => {
    let payload = context.payload, att = attFormat(payload.repository.full_name, 'issue.comment');
    let colors = { created: '\x0303', edited: '\x0307', deleted: '\x0304' }; // Created: Green, Edited: Orange, Deleted: Red

    shortenUrl(payload.comment.html_url, url => {
      app.irc.privmsg(`${att} \x0F| ${payload.sender.login} ${colors[payload.action]}${payload.action}\x0F a comment - ${url}`);
    });
  });

  // Travis
  app.on('status', async context => {
    let payload = context.payload, att = attFormat(payload.repository.full_name, 'status');
    let colors = { success: '\x0303', pending: '\x0311', failure: '\x0304', error: '\x0301' }

    if (payload.state === 'pending') {
      if (pendingStatus.includes(payload.target_url)) return; // We don't want to send multiple pending messages to a channel - Potential spam
      pendingStatus.push(payload.target_url); // We'll use target_url as identifier
    } else if (pendingStatus.includes(payload.target_url)) pendingStatus.pop(payload);


    shortenUrl(payload.commit.html_url, url => {
      app.irc.privmsg(`${att} \x0F| [${colors[payload.state]}${payload.state.toUpperCase()}\x0F] | ${payload.description} - ${url} | ${payload.target_url ? payload.target_url.split('?')[0] : ''}`);
    });
  });

  app.on('push', async context => {
    let payload = context.payload, att = attFormat(payload.repository.full_name, 'push');
    
    if (!payload.commits.length) return; // We're not interested in branches 

    shortenUrl(payload.compare, url => {
      app.irc.privmsg(`${att} \x0F| ${payload.sender.login} pushed ${payload.commits.length} commit(s) to ${payload.ref.split('/')[2]} - ${url} - Description: \x0303${payload.head_commit.message}`);
    });
  });

  app.on('create', async context => {
    let payload = context.payload; 
    
    if (payload.ref_type === 'tag') return; // We're not handling tags yet
    let att = attFormat(payload.repository.full_name, 'branch-create');

    app.irc.privmsg(`${att} \x0F| ${payload.sender.login} \x0303created\x0F branch ${payload.ref} - ${payload.repository.html_url}`);
  });

  app.on('delete', async context => {
    let payload = context.payload; 
    
    if (payload.ref_type === 'tag') return; // We're not handling tags yet
    let att = attFormat(payload.repository.full_name, 'branch-delete');

    app.irc.privmsg(`${att} \x0F| ${payload.sender.login} \x0304deleted\x0F branch ${payload.ref} - ${payload.repository.html_url}`);
  });
};
