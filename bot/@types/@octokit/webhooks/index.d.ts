/* eslint-disable no-dupe-class-members, require-jsdoc, max-len, no-redeclare, @typescript-eslint/no-namespace */
declare module '@octokit/webhooks' {
  import http = require('http');

  type Options = {
    secret: string;
    path?: string;
    transform?: (
      event: Webhooks.WebhookEvent<any>
    ) => Webhooks.WebhookEvent<any> & { [key: string]: any };
  };

  namespace Webhooks {
    type WebhookPayloadWatchSender = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadWatch = {
      action: string;
      repository: PayloadRepository;
      sender: WebhookPayloadWatchSender;
    };
    type WebhookPayloadTeamAddSender = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadTeamAddOrganization = {
      login: string;
      id: number;
      node_id: string;
      url: string;
      repos_url: string;
      events_url: string;
      hooks_url: string;
      issues_url: string;
      members_url: string;
      public_members_url: string;
      avatar_url: string;
      description: string;
    };
    type WebhookPayloadTeamAddTeam = {
      name: string;
      id: number;
      node_id: string;
      slug: string;
      description: string;
      privacy: string;
      url: string;
      html_url: string;
      members_url: string;
      repositories_url: string;
      permission: string;
    };
    type WebhookPayloadTeamAdd = {
      team: WebhookPayloadTeamAddTeam;
      repository: PayloadRepository;
      organization: WebhookPayloadTeamAddOrganization;
      sender: WebhookPayloadTeamAddSender;
    };
    type WebhookPayloadTeamSender = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadTeamOrganization = {
      login: string;
      id: number;
      node_id: string;
      url: string;
      repos_url: string;
      events_url: string;
      hooks_url: string;
      issues_url: string;
      members_url: string;
      public_members_url: string;
      avatar_url: string;
      description: string;
    };
    type PayloadRepositoryPermissions = {
      pull: boolean;
      push: boolean;
      admin: boolean;
    };
    type WebhookPayloadTeamTeam = {
      name: string;
      id: number;
      node_id: string;
      slug: string;
      description: string;
      privacy: string;
      url: string;
      html_url: string;
      members_url: string;
      repositories_url: string;
      permission: string;
    };
    type WebhookPayloadTeam = {
      action: string;
      team: WebhookPayloadTeamTeam;
      repository: PayloadRepository;
      organization: WebhookPayloadTeamOrganization;
      sender: WebhookPayloadTeamSender;
    };
    type WebhookPayloadStatusSender = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadStatusBranchesItemCommit = { sha: string; url: string };
    type WebhookPayloadStatusBranchesItem = {
      name: string;
      commit: WebhookPayloadStatusBranchesItemCommit;
      protected: boolean;
    };
    type WebhookPayloadStatusCommitCommitter = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadStatusCommitAuthor = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadStatusCommitCommitVerification = {
      verified: boolean;
      reason: string;
      signature: string;
      payload: string;
    };
    type WebhookPayloadStatusCommitCommitTree = { sha: string; url: string };
    type WebhookPayloadStatusCommitCommitCommitter = {
      name: string;
      email: string;
      date: string;
    };
    type WebhookPayloadStatusCommitCommitAuthor = {
      name: string;
      email: string;
      date: string;
    };
    type WebhookPayloadStatusCommitCommit = {
      author: WebhookPayloadStatusCommitCommitAuthor;
      committer: WebhookPayloadStatusCommitCommitCommitter;
      message: string;
      tree: WebhookPayloadStatusCommitCommitTree;
      url: string;
      comment_count: number;
      verification: WebhookPayloadStatusCommitCommitVerification;
    };
    type WebhookPayloadStatusCommit = {
      sha: string;
      node_id: string;
      commit: WebhookPayloadStatusCommitCommit;
      url: string;
      html_url: string;
      comments_url: string;
      author: WebhookPayloadStatusCommitAuthor;
      committer: WebhookPayloadStatusCommitCommitter;
      parents: Array<any>;
    };
    type WebhookPayloadStatus = {
      id: number;
      sha: string;
      name: string;
      target_url: string | null;
      context: string;
      description: string | null;
      state: string;
      commit: WebhookPayloadStatusCommit;
      branches: Array<WebhookPayloadStatusBranchesItem>;
      created_at: string;
      updated_at: string;
      repository: PayloadRepository;
      sender: WebhookPayloadStatusSender;
    };
    type WebhookPayloadStarSender = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadStar = {
      action: string;
      starred_at: string;
      repository: PayloadRepository;
      sender: WebhookPayloadStarSender;
    };
    type WebhookPayloadSecurityAdvisorySecurityAdvisoryVulnerabilitiesItemFirstPatchedVersion = {
      identifier: string;
    };
    type WebhookPayloadSecurityAdvisorySecurityAdvisoryVulnerabilitiesItemPackage = {
      ecosystem: string;
      name: string;
    };
    type WebhookPayloadSecurityAdvisorySecurityAdvisoryVulnerabilitiesItem = {
      package: WebhookPayloadSecurityAdvisorySecurityAdvisoryVulnerabilitiesItemPackage;
      severity: string;
      vulnerable_version_range: string;
      first_patched_version: WebhookPayloadSecurityAdvisorySecurityAdvisoryVulnerabilitiesItemFirstPatchedVersion;
    };
    type WebhookPayloadSecurityAdvisorySecurityAdvisoryReferencesItem = {
      url: string;
    };
    type WebhookPayloadSecurityAdvisorySecurityAdvisoryIdentifiersItem = {
      value: string;
      type: string;
    };
    type WebhookPayloadSecurityAdvisorySecurityAdvisory = {
      ghsa_id: string;
      summary: string;
      description: string;
      severity: string;
      identifiers: Array<
      WebhookPayloadSecurityAdvisorySecurityAdvisoryIdentifiersItem
      >;
      references: Array<
      WebhookPayloadSecurityAdvisorySecurityAdvisoryReferencesItem
      >;
      published_at: string;
      updated_at: string;
      withdrawn_at: null;
      vulnerabilities: Array<
      WebhookPayloadSecurityAdvisorySecurityAdvisoryVulnerabilitiesItem
      >;
    };
    type WebhookPayloadSecurityAdvisory = {
      action: string;
      security_advisory: WebhookPayloadSecurityAdvisorySecurityAdvisory;
    };
    type WebhookPayloadRepositoryVulnerabilityAlertSender = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadRepositoryVulnerabilityAlertAlert = {
      id: number;
      affected_range: string;
      affected_package_name: string;
      external_reference: string;
      external_identifier: string;
      fixed_in: string;
      dismisser: WebhookPayloadRepositoryVulnerabilityAlertSender
    };
    type WebhookPayloadRepositoryVulnerabilityAlert = {
      action: string;
      alert: WebhookPayloadRepositoryVulnerabilityAlertAlert;
      repository: PayloadRepository;
      sender: WebhookPayloadRepositoryVulnerabilityAlertSender;
    };
    type WebhookPayloadRepositoryImportSender = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadRepositoryImportOrganization = {
      login: string;
      id: number;
      node_id: string;
      url: string;
      repos_url: string;
      events_url: string;
      hooks_url: string;
      issues_url: string;
      members_url: string;
      public_members_url: string;
      avatar_url: string;
      description: string;
    };
    type WebhookPayloadRepositoryImport = {
      status: string;
      repository: PayloadRepository;
      organization: WebhookPayloadRepositoryImportOrganization;
      sender: WebhookPayloadRepositoryImportSender;
    };
    type WebhookPayloadRepositorySender = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadRepository = {
      action: string;
      repository: PayloadRepository;
      sender: WebhookPayloadRepositorySender;
    };
    type WebhookPayloadRepositoryDispatchInstallation = {
      id: number;
      node_id: string;
    };
    type WebhookPayloadRepositoryDispatchSender = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadRepositoryDispatchOrganization = {
      login: string;
      id: number;
      node_id: string;
      url: string;
      repos_url: string;
      events_url: string;
      hooks_url: string;
      issues_url: string;
      members_url: string;
      public_members_url: string;
      avatar_url: string;
      description: string;
    };
    type WebhookPayloadRepositoryDispatchClientPayload = {
      unit: boolean;
      integration: boolean;
    };
    type WebhookPayloadRepositoryDispatch = {
      action: string;
      branch: string;
      client_payload: WebhookPayloadRepositoryDispatchClientPayload;
      repository: PayloadRepository;
      organization: WebhookPayloadRepositoryDispatchOrganization;
      sender: WebhookPayloadRepositoryDispatchSender;
      installation: WebhookPayloadRepositoryDispatchInstallation;
    };
    type WebhookPayloadReleaseSender = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadReleaseReleaseAuthor = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadReleaseRelease = {
      url: string;
      assets_url: string;
      upload_url: string;
      html_url: string;
      id: number;
      node_id: string;
      tag_name: string;
      target_commitish: string;
      name: null;
      draft: boolean;
      author: WebhookPayloadReleaseReleaseAuthor;
      prerelease: boolean;
      created_at: string;
      published_at: string;
      assets: Array<any>;
      tarball_url: string;
      zipball_url: string;
      body: null;
    };
    type WebhookPayloadRelease = {
      action: string;
      release: WebhookPayloadReleaseRelease;
      repository: PayloadRepository;
      sender: WebhookPayloadReleaseSender;
    };
    type WebhookPayloadPushSender = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadPushPusher = { name: string; email: string };
    type WebhookPayloadPushCommit = {
      'id': string;
      'tree_id': string;
      'distinct': boolean;
      'message': string;
      'timestamp': string;
      'url': string;
      'author': {

        'name': string;
        'email': string;
        'username': string;
      };
      'committer': {
        'name': string;
        'email': string;
        'username': string;
      };
      'added': string[];
      'removed': string[];
      'modified': string[];
    }
    type WebhookPayloadPush = {
      ref: string;
      before: string;
      after: string;
      created: boolean;
      deleted: boolean;
      forced: boolean;
      base_ref: string | null;
      compare: string;
      commits: Array<WebhookPayloadPushCommit>;
      head_commit: null;
      repository: PayloadRepository;
      pusher: WebhookPayloadPushPusher;
      sender: WebhookPayloadPushSender;
    };
    type WebhookPayloadPullRequestReviewCommentSender = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadPullRequestReviewCommentPullRequestLinksStatuses = {
      href: string;
    };
    type WebhookPayloadPullRequestReviewCommentPullRequestLinksCommits = {
      href: string;
    };
    type WebhookPayloadPullRequestReviewCommentPullRequestLinksReviewComment = {
      href: string;
    };
    type WebhookPayloadPullRequestReviewCommentPullRequestLinksReviewComments = {
      href: string;
    };
    type WebhookPayloadPullRequestReviewCommentPullRequestLinksComments = {
      href: string;
    };
    type WebhookPayloadPullRequestReviewCommentPullRequestLinksIssue = {
      href: string;
    };
    type WebhookPayloadPullRequestReviewCommentPullRequestLinksHtml = {
      href: string;
    };
    type WebhookPayloadPullRequestReviewCommentPullRequestLinksSelf = {
      href: string;
    };
    type WebhookPayloadPullRequestReviewCommentPullRequestLinks = {
      self: WebhookPayloadPullRequestReviewCommentPullRequestLinksSelf;
      html: WebhookPayloadPullRequestReviewCommentPullRequestLinksHtml;
      issue: WebhookPayloadPullRequestReviewCommentPullRequestLinksIssue;
      comments: WebhookPayloadPullRequestReviewCommentPullRequestLinksComments;
      review_comments: WebhookPayloadPullRequestReviewCommentPullRequestLinksReviewComments;
      review_comment: WebhookPayloadPullRequestReviewCommentPullRequestLinksReviewComment;
      commits: WebhookPayloadPullRequestReviewCommentPullRequestLinksCommits;
      statuses: WebhookPayloadPullRequestReviewCommentPullRequestLinksStatuses;
    };
    type WebhookPayloadPullRequestReviewCommentPullRequestBaseRepoOwner = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadPullRequestReviewCommentPullRequestBaseRepo = {
      id: number;
      node_id: string;
      name: string;
      full_name: string;
      private: boolean;
      owner: WebhookPayloadPullRequestReviewCommentPullRequestBaseRepoOwner;
      html_url: string;
      description: null;
      fork: boolean;
      url: string;
      forks_url: string;
      keys_url: string;
      collaborators_url: string;
      teams_url: string;
      hooks_url: string;
      issue_events_url: string;
      events_url: string;
      assignees_url: string;
      branches_url: string;
      tags_url: string;
      blobs_url: string;
      git_tags_url: string;
      git_refs_url: string;
      trees_url: string;
      statuses_url: string;
      languages_url: string;
      stargazers_url: string;
      contributors_url: string;
      subscribers_url: string;
      subscription_url: string;
      commits_url: string;
      git_commits_url: string;
      comments_url: string;
      issue_comment_url: string;
      contents_url: string;
      compare_url: string;
      merges_url: string;
      archive_url: string;
      downloads_url: string;
      issues_url: string;
      pulls_url: string;
      milestones_url: string;
      notifications_url: string;
      labels_url: string;
      releases_url: string;
      deployments_url: string;
      created_at: string;
      updated_at: string;
      pushed_at: string;
      git_url: string;
      ssh_url: string;
      clone_url: string;
      svn_url: string;
      homepage: null;
      size: number;
      stargazers_count: number;
      watchers_count: number;
      language: string;
      has_issues: boolean;
      has_projects: boolean;
      has_downloads: boolean;
      has_wiki: boolean;
      has_pages: boolean;
      forks_count: number;
      mirror_url: null;
      archived: boolean;
      disabled: boolean;
      open_issues_count: number;
      license: null;
      forks: number;
      open_issues: number;
      watchers: number;
      default_branch: string;
    };
    type WebhookPayloadPullRequestReviewCommentPullRequestBaseUser = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadPullRequestReviewCommentPullRequestBase = {
      label: string;
      ref: string;
      sha: string;
      user: WebhookPayloadPullRequestReviewCommentPullRequestBaseUser;
      repo: WebhookPayloadPullRequestReviewCommentPullRequestBaseRepo;
    };
    type WebhookPayloadPullRequestReviewCommentPullRequestHeadRepoOwner = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadPullRequestReviewCommentPullRequestHeadRepo = {
      id: number;
      node_id: string;
      name: string;
      full_name: string;
      private: boolean;
      owner: WebhookPayloadPullRequestReviewCommentPullRequestHeadRepoOwner;
      html_url: string;
      description: null;
      fork: boolean;
      url: string;
      forks_url: string;
      keys_url: string;
      collaborators_url: string;
      teams_url: string;
      hooks_url: string;
      issue_events_url: string;
      events_url: string;
      assignees_url: string;
      branches_url: string;
      tags_url: string;
      blobs_url: string;
      git_tags_url: string;
      git_refs_url: string;
      trees_url: string;
      statuses_url: string;
      languages_url: string;
      stargazers_url: string;
      contributors_url: string;
      subscribers_url: string;
      subscription_url: string;
      commits_url: string;
      git_commits_url: string;
      comments_url: string;
      issue_comment_url: string;
      contents_url: string;
      compare_url: string;
      merges_url: string;
      archive_url: string;
      downloads_url: string;
      issues_url: string;
      pulls_url: string;
      milestones_url: string;
      notifications_url: string;
      labels_url: string;
      releases_url: string;
      deployments_url: string;
      created_at: string;
      updated_at: string;
      pushed_at: string;
      git_url: string;
      ssh_url: string;
      clone_url: string;
      svn_url: string;
      homepage: null;
      size: number;
      stargazers_count: number;
      watchers_count: number;
      language: string;
      has_issues: boolean;
      has_projects: boolean;
      has_downloads: boolean;
      has_wiki: boolean;
      has_pages: boolean;
      forks_count: number;
      mirror_url: null;
      archived: boolean;
      disabled: boolean;
      open_issues_count: number;
      license: null;
      forks: number;
      open_issues: number;
      watchers: number;
      default_branch: string;
    };
    type WebhookPayloadPullRequestReviewCommentPullRequestHeadUser = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadPullRequestReviewCommentPullRequestHead = {
      label: string;
      ref: string;
      sha: string;
      user: WebhookPayloadPullRequestReviewCommentPullRequestHeadUser;
      repo: WebhookPayloadPullRequestReviewCommentPullRequestHeadRepo;
    };
    type WebhookPayloadPullRequestReviewCommentPullRequestUser = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadPullRequestReviewCommentPullRequest = {
      url: string;
      id: number;
      node_id: string;
      html_url: string;
      diff_url: string;
      patch_url: string;
      issue_url: string;
      number: number;
      state: string;
      locked: boolean;
      title: string;
      user: WebhookPayloadPullRequestReviewCommentPullRequestUser;
      body: string;
      created_at: string;
      updated_at: string;
      closed_at: null;
      merged_at: null;
      merge_commit_sha: string;
      assignee: null;
      assignees: Array<WebhookPayloadPullRequestReviewCommentPullRequestUser>;
      requested_reviewers: Array<WebhookPayloadPullRequestReviewCommentPullRequestUser>;
      requested_teams: Array<{
        name: string;
        id: number;
        node_id: string;
        slug: string;
        description: string;
        privacy: string;
        url: string;
        html_url: string;
        members_url: string;
        repositories_url: string;
        permission: string;
        parent: {
          name: string;
          id: number;
          node_id: string;
          slug: string;
          description: string;
          privacy: string;
          url: string;
          html_url: string;
          members_url: string;
          repositories_url: string;
          permission: string;
        };
      }>;
      labels: Array<any>;
      milestone: null;
      commits_url: string;
      review_comments_url: string;
      review_comment_url: string;
      comments_url: string;
      statuses_url: string;
      head: WebhookPayloadPullRequestReviewCommentPullRequestHead;
      base: WebhookPayloadPullRequestReviewCommentPullRequestBase;
      _links: WebhookPayloadPullRequestReviewCommentPullRequestLinks;
      author_association: string;
    };
    type WebhookPayloadPullRequestReviewCommentCommentLinksPullRequest = {
      href: string;
    };
    type WebhookPayloadPullRequestReviewCommentCommentLinksHtml = {
      href: string;
    };
    type WebhookPayloadPullRequestReviewCommentCommentLinksSelf = {
      href: string;
    };
    type WebhookPayloadPullRequestReviewCommentCommentLinks = {
      self: WebhookPayloadPullRequestReviewCommentCommentLinksSelf;
      html: WebhookPayloadPullRequestReviewCommentCommentLinksHtml;
      pull_request: WebhookPayloadPullRequestReviewCommentCommentLinksPullRequest;
    };
    type WebhookPayloadPullRequestReviewCommentCommentUser = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadPullRequestReviewCommentComment = {
      url: string;
      pull_request_review_id: number;
      id: number;
      node_id: string;
      diff_hunk: string;
      path: string;
      position: number;
      original_position: number;
      commit_id: string;
      original_commit_id: string;
      user: WebhookPayloadPullRequestReviewCommentCommentUser;
      body: string;
      created_at: string;
      updated_at: string;
      html_url: string;
      pull_request_url: string;
      author_association: string;
      _links: WebhookPayloadPullRequestReviewCommentCommentLinks;
    };
    type WebhookPayloadPullRequestReviewComment = {
      action: string;
      comment: WebhookPayloadPullRequestReviewCommentComment;
      pull_request: WebhookPayloadPullRequestReviewCommentPullRequest;
      repository: PayloadRepository;
      sender: WebhookPayloadPullRequestReviewCommentSender;
    };
    type WebhookPayloadPullRequestReviewSender = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadPullRequestReviewPullRequestLinksStatuses = {
      href: string;
    };
    type WebhookPayloadPullRequestReviewPullRequestLinksCommits = {
      href: string;
    };
    type WebhookPayloadPullRequestReviewPullRequestLinksReviewComment = {
      href: string;
    };
    type WebhookPayloadPullRequestReviewPullRequestLinksReviewComments = {
      href: string;
    };
    type WebhookPayloadPullRequestReviewPullRequestLinksComments = {
      href: string;
    };
    type WebhookPayloadPullRequestReviewPullRequestLinksIssue = { href: string };
    type WebhookPayloadPullRequestReviewPullRequestLinksHtml = { href: string };
    type WebhookPayloadPullRequestReviewPullRequestLinksSelf = { href: string };
    type WebhookPayloadPullRequestReviewPullRequestLinks = {
      self: WebhookPayloadPullRequestReviewPullRequestLinksSelf;
      html: WebhookPayloadPullRequestReviewPullRequestLinksHtml;
      issue: WebhookPayloadPullRequestReviewPullRequestLinksIssue;
      comments: WebhookPayloadPullRequestReviewPullRequestLinksComments;
      review_comments: WebhookPayloadPullRequestReviewPullRequestLinksReviewComments;
      review_comment: WebhookPayloadPullRequestReviewPullRequestLinksReviewComment;
      commits: WebhookPayloadPullRequestReviewPullRequestLinksCommits;
      statuses: WebhookPayloadPullRequestReviewPullRequestLinksStatuses;
    };
    type WebhookPayloadPullRequestReviewPullRequestBaseRepoOwner = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadPullRequestReviewPullRequestBaseRepo = {
      id: number;
      node_id: string;
      name: string;
      full_name: string;
      private: boolean;
      owner: WebhookPayloadPullRequestReviewPullRequestBaseRepoOwner;
      html_url: string;
      description: null;
      fork: boolean;
      url: string;
      forks_url: string;
      keys_url: string;
      collaborators_url: string;
      teams_url: string;
      hooks_url: string;
      issue_events_url: string;
      events_url: string;
      assignees_url: string;
      branches_url: string;
      tags_url: string;
      blobs_url: string;
      git_tags_url: string;
      git_refs_url: string;
      trees_url: string;
      statuses_url: string;
      languages_url: string;
      stargazers_url: string;
      contributors_url: string;
      subscribers_url: string;
      subscription_url: string;
      commits_url: string;
      git_commits_url: string;
      comments_url: string;
      issue_comment_url: string;
      contents_url: string;
      compare_url: string;
      merges_url: string;
      archive_url: string;
      downloads_url: string;
      issues_url: string;
      pulls_url: string;
      milestones_url: string;
      notifications_url: string;
      labels_url: string;
      releases_url: string;
      deployments_url: string;
      created_at: string;
      updated_at: string;
      pushed_at: string;
      git_url: string;
      ssh_url: string;
      clone_url: string;
      svn_url: string;
      homepage: null;
      size: number;
      stargazers_count: number;
      watchers_count: number;
      language: string;
      has_issues: boolean;
      has_projects: boolean;
      has_downloads: boolean;
      has_wiki: boolean;
      has_pages: boolean;
      forks_count: number;
      mirror_url: null;
      archived: boolean;
      disabled: boolean;
      open_issues_count: number;
      license: null;
      forks: number;
      open_issues: number;
      watchers: number;
      default_branch: string;
    };
    type WebhookPayloadPullRequestReviewPullRequestBaseUser = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadPullRequestReviewPullRequestBase = {
      label: string;
      ref: string;
      sha: string;
      user: WebhookPayloadPullRequestReviewPullRequestBaseUser;
      repo: WebhookPayloadPullRequestReviewPullRequestBaseRepo;
    };
    type WebhookPayloadPullRequestReviewPullRequestHeadRepoOwner = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadPullRequestReviewPullRequestHeadRepo = {
      id: number;
      node_id: string;
      name: string;
      full_name: string;
      private: boolean;
      owner: WebhookPayloadPullRequestReviewPullRequestHeadRepoOwner;
      html_url: string;
      description: null;
      fork: boolean;
      url: string;
      forks_url: string;
      keys_url: string;
      collaborators_url: string;
      teams_url: string;
      hooks_url: string;
      issue_events_url: string;
      events_url: string;
      assignees_url: string;
      branches_url: string;
      tags_url: string;
      blobs_url: string;
      git_tags_url: string;
      git_refs_url: string;
      trees_url: string;
      statuses_url: string;
      languages_url: string;
      stargazers_url: string;
      contributors_url: string;
      subscribers_url: string;
      subscription_url: string;
      commits_url: string;
      git_commits_url: string;
      comments_url: string;
      issue_comment_url: string;
      contents_url: string;
      compare_url: string;
      merges_url: string;
      archive_url: string;
      downloads_url: string;
      issues_url: string;
      pulls_url: string;
      milestones_url: string;
      notifications_url: string;
      labels_url: string;
      releases_url: string;
      deployments_url: string;
      created_at: string;
      updated_at: string;
      pushed_at: string;
      git_url: string;
      ssh_url: string;
      clone_url: string;
      svn_url: string;
      homepage: null;
      size: number;
      stargazers_count: number;
      watchers_count: number;
      language: string;
      has_issues: boolean;
      has_projects: boolean;
      has_downloads: boolean;
      has_wiki: boolean;
      has_pages: boolean;
      forks_count: number;
      mirror_url: null;
      archived: boolean;
      disabled: boolean;
      open_issues_count: number;
      license: null;
      forks: number;
      open_issues: number;
      watchers: number;
      default_branch: string;
    };
    type WebhookPayloadPullRequestReviewPullRequestHeadUser = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadPullRequestReviewPullRequestHead = {
      label: string;
      ref: string;
      sha: string;
      user: WebhookPayloadPullRequestReviewPullRequestHeadUser;
      repo: WebhookPayloadPullRequestReviewPullRequestHeadRepo;
    };
    type WebhookPayloadPullRequestReviewPullRequestUser = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadPullRequestReviewPullRequest = {
      url: string;
      id: number;
      node_id: string;
      html_url: string;
      diff_url: string;
      patch_url: string;
      issue_url: string;
      number: number;
      state: string;
      locked: boolean;
      title: string;
      user: WebhookPayloadPullRequestReviewPullRequestUser;
      body: string;
      created_at: string;
      updated_at: string;
      closed_at: null;
      merged_at: null;
      merge_commit_sha: string;
      assignee: null;
      assignees: Array<WebhookPayloadPullRequestReviewPullRequestUser>;
      requested_reviewers: Array<WebhookPayloadPullRequestReviewPullRequestUser>;
      requested_teams: Array<any>;
      labels: Array<any>;
      milestone: null;
      commits_url: string;
      review_comments_url: string;
      review_comment_url: string;
      comments_url: string;
      statuses_url: string;
      head: WebhookPayloadPullRequestReviewPullRequestHead;
      base: WebhookPayloadPullRequestReviewPullRequestBase;
      _links: WebhookPayloadPullRequestReviewPullRequestLinks;
      author_association: string;
    };
    type WebhookPayloadPullRequestReviewReviewLinksPullRequest = { href: string };
    type WebhookPayloadPullRequestReviewReviewLinksHtml = { href: string };
    type WebhookPayloadPullRequestReviewReviewLinks = {
      html: WebhookPayloadPullRequestReviewReviewLinksHtml;
      pull_request: WebhookPayloadPullRequestReviewReviewLinksPullRequest;
    };
    type WebhookPayloadPullRequestReviewReviewUser = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadPullRequestReviewReview = {
      id: number;
      node_id: string;
      user: WebhookPayloadPullRequestReviewReviewUser;
      body: null;
      commit_id: string;
      submitted_at: string;
      state: string;
      html_url: string;
      pull_request_url: string;
      author_association: string;
      _links: WebhookPayloadPullRequestReviewReviewLinks;
    };
    type WebhookPayloadPullRequestReview = {
      action: string;
      review: WebhookPayloadPullRequestReviewReview;
      pull_request: WebhookPayloadPullRequestReviewPullRequest;
      repository: PayloadRepository;
      sender: WebhookPayloadPullRequestReviewSender;
    };
    type WebhookPayloadPullRequestSender = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadPullRequestPullRequestLinksStatuses = { href: string };
    type WebhookPayloadPullRequestPullRequestLinksCommits = { href: string };
    type WebhookPayloadPullRequestPullRequestLinksReviewComment = {
      href: string;
    };
    type WebhookPayloadPullRequestPullRequestLinksReviewComments = {
      href: string;
    };
    type WebhookPayloadPullRequestPullRequestLinksComments = { href: string };
    type WebhookPayloadPullRequestPullRequestLinksIssue = { href: string };
    type WebhookPayloadPullRequestPullRequestLinksHtml = { href: string };
    type WebhookPayloadPullRequestPullRequestLinksSelf = { href: string };
    type WebhookPayloadPullRequestPullRequestLinks = {
      self: WebhookPayloadPullRequestPullRequestLinksSelf;
      html: WebhookPayloadPullRequestPullRequestLinksHtml;
      issue: WebhookPayloadPullRequestPullRequestLinksIssue;
      comments: WebhookPayloadPullRequestPullRequestLinksComments;
      review_comments: WebhookPayloadPullRequestPullRequestLinksReviewComments;
      review_comment: WebhookPayloadPullRequestPullRequestLinksReviewComment;
      commits: WebhookPayloadPullRequestPullRequestLinksCommits;
      statuses: WebhookPayloadPullRequestPullRequestLinksStatuses;
    };
    type WebhookPayloadPullRequestPullRequestBaseRepoOwner = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadPullRequestPullRequestBaseRepo = {
      id: number;
      node_id: string;
      name: string;
      full_name: string;
      private: boolean;
      owner: WebhookPayloadPullRequestPullRequestBaseRepoOwner;
      html_url: string;
      description: null;
      fork: boolean;
      url: string;
      forks_url: string;
      keys_url: string;
      collaborators_url: string;
      teams_url: string;
      hooks_url: string;
      issue_events_url: string;
      events_url: string;
      assignees_url: string;
      branches_url: string;
      tags_url: string;
      blobs_url: string;
      git_tags_url: string;
      git_refs_url: string;
      trees_url: string;
      statuses_url: string;
      languages_url: string;
      stargazers_url: string;
      contributors_url: string;
      subscribers_url: string;
      subscription_url: string;
      commits_url: string;
      git_commits_url: string;
      comments_url: string;
      issue_comment_url: string;
      contents_url: string;
      compare_url: string;
      merges_url: string;
      archive_url: string;
      downloads_url: string;
      issues_url: string;
      pulls_url: string;
      milestones_url: string;
      notifications_url: string;
      labels_url: string;
      releases_url: string;
      deployments_url: string;
      created_at: string;
      updated_at: string;
      pushed_at: string;
      git_url: string;
      ssh_url: string;
      clone_url: string;
      svn_url: string;
      homepage: null;
      size: number;
      stargazers_count: number;
      watchers_count: number;
      language: null;
      has_issues: boolean;
      has_projects: boolean;
      has_downloads: boolean;
      has_wiki: boolean;
      has_pages: boolean;
      forks_count: number;
      mirror_url: null;
      archived: boolean;
      disabled: boolean;
      open_issues_count: number;
      license: null;
      forks: number;
      open_issues: number;
      watchers: number;
      default_branch: string;
    };
    type WebhookPayloadPullRequestPullRequestBaseUser = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadPullRequestPullRequestBase = {
      label: string;
      ref: string;
      sha: string;
      user: WebhookPayloadPullRequestPullRequestBaseUser;
      repo: WebhookPayloadPullRequestPullRequestBaseRepo;
    };
    type WebhookPayloadPullRequestPullRequestHeadRepoOwner = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadPullRequestPullRequestHeadRepo = {
      id: number;
      node_id: string;
      name: string;
      full_name: string;
      private: boolean;
      owner: WebhookPayloadPullRequestPullRequestHeadRepoOwner;
      html_url: string;
      description: null;
      fork: boolean;
      url: string;
      forks_url: string;
      keys_url: string;
      collaborators_url: string;
      teams_url: string;
      hooks_url: string;
      issue_events_url: string;
      events_url: string;
      assignees_url: string;
      branches_url: string;
      tags_url: string;
      blobs_url: string;
      git_tags_url: string;
      git_refs_url: string;
      trees_url: string;
      statuses_url: string;
      languages_url: string;
      stargazers_url: string;
      contributors_url: string;
      subscribers_url: string;
      subscription_url: string;
      commits_url: string;
      git_commits_url: string;
      comments_url: string;
      issue_comment_url: string;
      contents_url: string;
      compare_url: string;
      merges_url: string;
      archive_url: string;
      downloads_url: string;
      issues_url: string;
      pulls_url: string;
      milestones_url: string;
      notifications_url: string;
      labels_url: string;
      releases_url: string;
      deployments_url: string;
      created_at: string;
      updated_at: string;
      pushed_at: string;
      git_url: string;
      ssh_url: string;
      clone_url: string;
      svn_url: string;
      homepage: null;
      size: number;
      stargazers_count: number;
      watchers_count: number;
      language: null;
      has_issues: boolean;
      has_projects: boolean;
      has_downloads: boolean;
      has_wiki: boolean;
      has_pages: boolean;
      forks_count: number;
      mirror_url: null;
      archived: boolean;
      disabled: boolean;
      open_issues_count: number;
      license: null;
      forks: number;
      open_issues: number;
      watchers: number;
      default_branch: string;
    };
    type WebhookPayloadPullRequestPullRequestHeadUser = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadPullRequestPullRequestHead = {
      label: string;
      ref: string;
      sha: string;
      user: WebhookPayloadPullRequestPullRequestHeadUser;
      repo: WebhookPayloadPullRequestPullRequestHeadRepo;
    };
    type WebhookPayloadPullRequestPullRequestUser = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadPullRequestPullRequest = {
      url: string;
      id: number;
      node_id: string;
      html_url: string;
      diff_url: string;
      patch_url: string;
      issue_url: string;
      number: number;
      state: string;
      locked: boolean;
      title: string;
      user: WebhookPayloadPullRequestPullRequestUser;
      body: string;
      created_at: string;
      updated_at: string;
      closed_at: null;
      merged_at: null;
      merge_commit_sha: null;
      assignee: WebhookPayloadPullRequestPullRequestUser;
      assignees: Array<WebhookPayloadPullRequestPullRequestUser>;
      requested_reviewers: Array<WebhookPayloadPullRequestPullRequestUser>;
      requested_teams: Array<any>;
      labels: Array<WebhookPayloadIssuesIssueLabelsItem>;
      milestone: null;
      commits_url: string;
      review_comments_url: string;
      review_comment_url: string;
      comments_url: string;
      statuses_url: string;
      head: WebhookPayloadPullRequestPullRequestHead;
      base: WebhookPayloadPullRequestPullRequestBase;
      _links: WebhookPayloadPullRequestPullRequestLinks;
      author_association: string;
      draft: boolean;
      merged: boolean;
      mergeable: null;
      rebaseable: null;
      mergeable_state: string;
      merged_by: WebhookPayloadPullRequestPullRequestUser;
      comments: number;
      review_comments: number;
      maintainer_can_modify: boolean;
      commits: number;
      additions: number;
      deletions: number;
      changed_files: number;
    };
    type WebhookPayloadPullRequest = {
      action: string;
      number: number;
      pull_request: WebhookPayloadPullRequestPullRequest;
      repository: PayloadRepository;
      sender: WebhookPayloadPullRequestSender;
      requested_team: any;
      requested_reviewer: WebhookPayloadPullRequestReviewPullRequestUser;
      label: WebhookPayloadIssuesIssueLabelsItem;
      assignee: WebhookPayloadPullRequestPullRequestUser;
    };
    type WebhookPayloadPublicSender = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadPublic = {
      repository: PayloadRepository;
      sender: WebhookPayloadPublicSender;
    };
    type WebhookPayloadProjectSender = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadProjectProjectCreator = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadProjectProject = {
      owner_url: string;
      url: string;
      html_url: string;
      columns_url: string;
      id: number;
      node_id: string;
      name: string;
      body: string;
      number: number;
      state: string;
      creator: WebhookPayloadProjectProjectCreator;
      created_at: string;
      updated_at: string;
    };
    type WebhookPayloadProject = {
      action: string;
      project: WebhookPayloadProjectProject;
      repository: PayloadRepository;
      sender: WebhookPayloadProjectSender;
    };
    type WebhookPayloadProjectColumnSender = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadProjectColumnProjectColumn = {
      url: string;
      project_url: string;
      cards_url: string;
      id: number;
      node_id: string;
      name: string;
      created_at: string;
      updated_at: string;
    };
    type WebhookPayloadProjectColumn = {
      action: string;
      project_column: WebhookPayloadProjectColumnProjectColumn;
      repository: PayloadRepository;
      sender: WebhookPayloadProjectColumnSender;
    };
    type WebhookPayloadProjectCardSender = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadProjectCardProjectCardCreator = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadProjectCardProjectCard = {
      url: string;
      project_url: string;
      column_url: string;
      column_id: number;
      id: number;
      node_id: string;
      note: string;
      archived: boolean;
      creator: WebhookPayloadProjectCardProjectCardCreator;
      created_at: string;
      updated_at: string;
    };
    type WebhookPayloadProjectCard = {
      action: string;
      project_card: WebhookPayloadProjectCardProjectCard;
      repository: PayloadRepository;
      sender: WebhookPayloadProjectCardSender;
    };
    type WebhookPayloadPageBuildSender = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadPageBuildBuildPusher = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadPageBuildBuildError = { message: null };
    type WebhookPayloadPageBuildBuild = {
      url: string;
      status: string;
      error: WebhookPayloadPageBuildBuildError;
      pusher: WebhookPayloadPageBuildBuildPusher;
      commit: string;
      duration: number;
      created_at: string;
      updated_at: string;
    };
    type WebhookPayloadPageBuild = {
      id: number;
      build: WebhookPayloadPageBuildBuild;
      repository: PayloadRepository;
      sender: WebhookPayloadPageBuildSender;
    };
    type WebhookPayloadPackageSender = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadPackagePackageRegistry = {
      about_url: string;
      name: string;
      type: string;
      url: string;
      vendor: string;
    };
    type WebhookPayloadPackagePackagePackageVersionAuthor = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadPackagePackagePackageVersionPackageFilesItem = {
      download_url: string;
      id: number;
      name: string;
      sha256: string;
      sha1: string;
      md5: string;
      content_type: string;
      state: string;
      size: number;
      created_at: string;
      updated_at: string;
    };
    type WebhookPayloadPackagePackagePackageVersionReleaseAuthor = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadPackagePackagePackageVersionRelease = {
      url: string;
      html_url: string;
      id: number;
      tag_name: string;
      target_commitish: string;
      name: string;
      draft: boolean;
      author: WebhookPayloadPackagePackagePackageVersionReleaseAuthor;
      prerelease: boolean;
      created_at: string;
      published_at: string;
    };
    type WebhookPayloadPackagePackagePackageVersion = {
      id: number;
      version: string;
      summary: string;
      body: string;
      body_html: string;
      release: WebhookPayloadPackagePackagePackageVersionRelease;
      manifest: string;
      html_url: string;
      tag_name: string;
      target_commitish: string;
      target_oid: string;
      draft: boolean;
      prerelease: boolean;
      created_at: string;
      updated_at: string;
      metadata: Array<any>;
      package_files: Array<
      WebhookPayloadPackagePackagePackageVersionPackageFilesItem
      >;
      author: WebhookPayloadPackagePackagePackageVersionAuthor;
      installation_command: string;
    };
    type WebhookPayloadPackagePackageOwner = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadPackagePackage = {
      id: number;
      name: string;
      package_type: string;
      html_url: string;
      created_at: string;
      updated_at: string;
      owner: WebhookPayloadPackagePackageOwner;
      package_version: WebhookPayloadPackagePackagePackageVersion;
      registry: WebhookPayloadPackagePackageRegistry;
    };
    type WebhookPayloadPackage = {
      action: string;
      package: WebhookPayloadPackagePackage;
      repository: PayloadRepository;
      sender: WebhookPayloadPackageSender;
    };
    type WebhookPayloadOrgBlockSender = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadOrgBlockOrganization = {
      login: string;
      id: number;
      node_id: string;
      url: string;
      repos_url: string;
      events_url: string;
      hooks_url: string;
      issues_url: string;
      members_url: string;
      public_members_url: string;
      avatar_url: string;
      description: string;
    };
    type WebhookPayloadOrgBlockBlockedUser = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadOrgBlock = {
      action: string;
      blocked_user: WebhookPayloadOrgBlockBlockedUser;
      organization: WebhookPayloadOrgBlockOrganization;
      sender: WebhookPayloadOrgBlockSender;
    };
    type WebhookPayloadOrganizationSender = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadOrganizationOrganization = {
      login: string;
      id: number;
      node_id: string;
      url: string;
      repos_url: string;
      events_url: string;
      hooks_url: string;
      issues_url: string;
      members_url: string;
      public_members_url: string;
      avatar_url: string;
      description: string;
    };
    type WebhookPayloadOrganizationMembershipUser = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadOrganizationMembership = {
      url: string;
      state: string;
      role: string;
      organization_url: string;
      user: WebhookPayloadOrganizationMembershipUser;
    };
    type WebhookPayloadOrganization = {
      action: string;
      membership: WebhookPayloadOrganizationMembership;
      organization: WebhookPayloadOrganizationOrganization;
      sender: WebhookPayloadOrganizationSender;
    };
    type WebhookPayloadMilestoneSender = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadMilestoneMilestoneCreator = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadMilestoneMilestone = {
      url: string;
      html_url: string;
      labels_url: string;
      id: number;
      node_id: string;
      number: number;
      title: string;
      description: string;
      creator: WebhookPayloadMilestoneMilestoneCreator;
      open_issues: number;
      closed_issues: number;
      state: string;
      created_at: string;
      updated_at: string;
      due_on: string;
      closed_at: null;
    };
    type WebhookPayloadMilestone = {
      action: string;
      milestone: WebhookPayloadMilestoneMilestone;
      repository: PayloadRepository;
      sender: WebhookPayloadMilestoneSender;
    };
    type WebhookPayloadMetaSender = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadMetaHookConfig = {
      content_type: string;
      insecure_ssl: string;
      url: string;
    };
    type WebhookPayloadMetaHook = {
      type: string;
      id: number;
      name: string;
      active: boolean;
      events: Array<string>;
      config: WebhookPayloadMetaHookConfig;
      updated_at: string;
      created_at: string;
    };
    type WebhookPayloadMeta = {
      action: string;
      hook_id: number;
      hook: WebhookPayloadMetaHook;
      repository: PayloadRepository;
      sender: WebhookPayloadMetaSender;
    };
    type WebhookPayloadMembershipOrganization = {
      login: string;
      id: number;
      node_id: string;
      url: string;
      repos_url: string;
      events_url: string;
      hooks_url: string;
      issues_url: string;
      members_url: string;
      public_members_url: string;
      avatar_url: string;
      description: string;
    };
    type WebhookPayloadMembershipTeam = {
      name: string;
      id: number;
      node_id: string;
      slug: string;
      description: string;
      privacy: string;
      url: string;
      html_url: string;
      members_url: string;
      repositories_url: string;
      permission: string;
    };
    type WebhookPayloadMembershipSender = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadMembershipMember = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadMembership = {
      action: string;
      scope: string;
      member: WebhookPayloadMembershipMember;
      sender: WebhookPayloadMembershipSender;
      team: WebhookPayloadMembershipTeam;
      organization: WebhookPayloadMembershipOrganization;
    };
    type WebhookPayloadMemberSender = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadMemberMember = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadMember = {
      action: string;
      member: WebhookPayloadMemberMember;
      repository: PayloadRepository;
      sender: WebhookPayloadMemberSender;
    };
    type WebhookPayloadMarketplacePurchaseMarketplacePurchasePlan = {
      id: number;
      name: string;
      description: string;
      monthly_price_in_cents: number;
      yearly_price_in_cents: number;
      price_model: string;
      has_free_trial: boolean;
      unit_name: string;
      bullets: Array<string>;
    };
    type WebhookPayloadMarketplacePurchaseMarketplacePurchaseAccount = {
      type: string;
      id: number;
      login: string;
      organization_billing_email: string;
    };
    type WebhookPayloadMarketplacePurchaseMarketplacePurchase = {
      account: WebhookPayloadMarketplacePurchaseMarketplacePurchaseAccount;
      billing_cycle: string;
      unit_count: number;
      on_free_trial: boolean;
      free_trial_ends_on: null;
      next_billing_date: string;
      plan: WebhookPayloadMarketplacePurchaseMarketplacePurchasePlan;
    };
    type WebhookPayloadMarketplacePurchaseSender = {
      login: string;
      id: number;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
      email: string;
    };
    type WebhookPayloadMarketplacePurchase = {
      action: string;
      effective_date: string;
      sender: WebhookPayloadMarketplacePurchaseSender;
      marketplace_purchase: WebhookPayloadMarketplacePurchaseMarketplacePurchase;
    };
    type WebhookPayloadLabelSender = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadLabelLabel = {
      id: number;
      node_id: string;
      url: string;
      name: string;
      color: string;
      default: boolean;
    };
    type WebhookPayloadLabel = {
      action: string;
      label: WebhookPayloadLabelLabel;
      repository: PayloadRepository;
      sender: WebhookPayloadLabelSender;
    };
    type WebhookPayloadIssuesSender = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadIssuesChanges = {};
    type WebhookPayloadIssuesIssueMilestoneCreator = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadIssuesIssueMilestone = {
      url: string;
      html_url: string;
      labels_url: string;
      id: number;
      node_id: string;
      number: number;
      title: string;
      description: string;
      creator: WebhookPayloadIssuesIssueMilestoneCreator;
      open_issues: number;
      closed_issues: number;
      state: string;
      created_at: string;
      updated_at: string;
      due_on: string;
      closed_at: string;
    };
    type WebhookPayloadIssuesIssueAssigneesItem = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadIssuesIssueAssignee = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadIssuesIssueLabelsItem = {
      id: number;
      node_id: string;
      url: string;
      name: string;
      color: string;
      default: boolean;
    };
    type WebhookPayloadIssuesIssueUser = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadIssuesIssue = {
      url: string;
      repository_url: string;
      labels_url: string;
      comments_url: string;
      events_url: string;
      html_url: string;
      id: number;
      node_id: string;
      number: number;
      title: string;
      user: WebhookPayloadIssuesIssueUser;
      labels: Array<WebhookPayloadIssuesIssueLabelsItem>;
      state: string;
      locked: boolean;
      assignee: WebhookPayloadIssuesIssueAssignee;
      assignees: Array<WebhookPayloadIssuesIssueAssigneesItem>;
      milestone: WebhookPayloadIssuesIssueMilestone;
      comments: number;
      created_at: string;
      updated_at: string;
      closed_at: null;
      author_association: string;
      body: string;
    };
    type WebhookPayloadIssues = {
      action: string;
      issue: WebhookPayloadIssuesIssue;
      changes: WebhookPayloadIssuesChanges;
      repository: PayloadRepository;
      sender: WebhookPayloadIssuesSender;
      label: WebhookPayloadIssuesIssueLabelsItem;
      assignee: WebhookPayloadIssuesIssueAssignee;
    };
    type WebhookPayloadIssueCommentSender = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadIssueCommentCommentUser = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadIssueCommentComment = {
      url: string;
      html_url: string;
      issue_url: string;
      id: number;
      node_id: string;
      user: WebhookPayloadIssueCommentCommentUser;
      created_at: string;
      updated_at: string;
      author_association: string;
      body: string;
    };
    type WebhookPayloadIssueCommentIssueMilestoneCreator = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadIssueCommentIssueMilestone = {
      url: string;
      html_url: string;
      labels_url: string;
      id: number;
      node_id: string;
      number: number;
      title: string;
      description: string;
      creator: WebhookPayloadIssueCommentIssueMilestoneCreator;
      open_issues: number;
      closed_issues: number;
      state: string;
      created_at: string;
      updated_at: string;
      due_on: string;
      closed_at: string;
    };
    type WebhookPayloadIssueCommentIssueAssigneesItem = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadIssueCommentIssueAssignee = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadIssueCommentIssueLabelsItem = {
      id: number;
      node_id: string;
      url: string;
      name: string;
      color: string;
      default: boolean;
    };
    type WebhookPayloadIssueCommentIssueUser = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadIssueCommentIssue = {
      url: string;
      repository_url: string;
      labels_url: string;
      comments_url: string;
      events_url: string;
      html_url: string;
      id: number;
      node_id: string;
      number: number;
      title: string;
      user: WebhookPayloadIssueCommentIssueUser;
      labels: Array<WebhookPayloadIssueCommentIssueLabelsItem>;
      state: string;
      locked: boolean;
      assignee: WebhookPayloadIssueCommentIssueAssignee;
      assignees: Array<WebhookPayloadIssueCommentIssueAssigneesItem>;
      milestone: WebhookPayloadIssueCommentIssueMilestone;
      comments: number;
      created_at: string;
      updated_at: string;
      closed_at: null;
      author_association: string;
      body: string;
    };
    type WebhookPayloadIssueComment = {
      action: string;
      issue: WebhookPayloadIssueCommentIssue;
      comment: WebhookPayloadIssueCommentComment;
      repository: PayloadRepository;
      sender: WebhookPayloadIssueCommentSender;
    };
    type WebhookPayloadInstallationRepositoriesSender = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadInstallationRepositoriesRepositoriesAddedItem = {
      id: number;
      node_id: string;
      name: string;
      full_name: string;
      private: boolean;
    };
    type WebhookPayloadInstallationRepositoriesInstallationPermissions = {
      administration: string;
      statuses: string;
      repository_projects: string;
      repository_hooks: string;
      pull_requests: string;
      pages: string;
      issues: string;
      deployments: string;
      contents: string;
      checks: string;
      metadata: string;
      vulnerability_alerts: string;
    };
    type WebhookPayloadInstallationRepositoriesInstallationAccount = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadInstallationRepositoriesInstallation = {
      id: number;
      account: WebhookPayloadInstallationRepositoriesInstallationAccount;
      repository_selection: string;
      access_tokens_url: string;
      repositories_url: string;
      html_url: string;
      app_id: number;
      target_id: number;
      target_type: string;
      permissions: WebhookPayloadInstallationRepositoriesInstallationPermissions;
      events: Array<any>;
      created_at: number;
      updated_at: number;
      single_file_name: null;
    };
    type WebhookPayloadInstallationRepositories = {
      action: string;
      installation: WebhookPayloadInstallationRepositoriesInstallation;
      repository_selection: string;
      repositories_added: Array<
      WebhookPayloadInstallationRepositoriesRepositoriesAddedItem
      >;
      repositories_removed: Array<WebhookPayloadInstallationRepositoriesRepositoriesAddedItem>;
      sender: WebhookPayloadInstallationRepositoriesSender;
    };
    type WebhookPayloadInstallationSender = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadInstallationRepositoriesItem = {
      id: number;
      name: string;
      full_name: string;
      private: boolean;
    };
    type WebhookPayloadInstallationInstallationPermissions = {
      metadata: string;
      contents: string;
      issues: string;
    };
    type WebhookPayloadInstallationInstallationAccount = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadInstallationInstallation = {
      id: number;
      account: WebhookPayloadInstallationInstallationAccount;
      repository_selection: string;
      access_tokens_url: string;
      repositories_url: string;
      html_url: string;
      app_id: number;
      target_id: number;
      target_type: string;
      permissions: WebhookPayloadInstallationInstallationPermissions;
      events: Array<string>;
      created_at: number;
      updated_at: number;
      single_file_name: string;
    };
    type WebhookPayloadInstallation = {
      action: string;
      installation: WebhookPayloadInstallationInstallation;
      repositories: Array<WebhookPayloadInstallationRepositoriesItem>;
      sender: WebhookPayloadInstallationSender;
    };
    type WebhookPayloadGollumSender = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadGollumPagesItem = {
      page_name: string;
      title: string;
      summary: null;
      action: string;
      sha: string;
      html_url: string;
    };
    type WebhookPayloadGollum = {
      pages: Array<WebhookPayloadGollumPagesItem>;
      repository: PayloadRepository;
      sender: WebhookPayloadGollumSender;
    };
    type WebhookPayloadGithubAppAuthorizationSender = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadGithubAppAuthorization = {
      action: string;
      sender: WebhookPayloadGithubAppAuthorizationSender;
    };
    type WebhookPayloadForkSender = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadForkForkeeOwner = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadForkForkee = {
      id: number;
      node_id: string;
      name: string;
      full_name: string;
      private: boolean;
      owner: WebhookPayloadForkForkeeOwner;
      html_url: string;
      description: null;
      fork: boolean;
      url: string;
      forks_url: string;
      keys_url: string;
      collaborators_url: string;
      teams_url: string;
      hooks_url: string;
      issue_events_url: string;
      events_url: string;
      assignees_url: string;
      branches_url: string;
      tags_url: string;
      blobs_url: string;
      git_tags_url: string;
      git_refs_url: string;
      trees_url: string;
      statuses_url: string;
      languages_url: string;
      stargazers_url: string;
      contributors_url: string;
      subscribers_url: string;
      subscription_url: string;
      commits_url: string;
      git_commits_url: string;
      comments_url: string;
      issue_comment_url: string;
      contents_url: string;
      compare_url: string;
      merges_url: string;
      archive_url: string;
      downloads_url: string;
      issues_url: string;
      pulls_url: string;
      milestones_url: string;
      notifications_url: string;
      labels_url: string;
      releases_url: string;
      deployments_url: string;
      created_at: string;
      updated_at: string;
      pushed_at: string;
      git_url: string;
      ssh_url: string;
      clone_url: string;
      svn_url: string;
      homepage: null;
      size: number;
      stargazers_count: number;
      watchers_count: number;
      language: null;
      has_issues: boolean;
      has_projects: boolean;
      has_downloads: boolean;
      has_wiki: boolean;
      has_pages: boolean;
      forks_count: number;
      mirror_url: null;
      archived: boolean;
      disabled: boolean;
      open_issues_count: number;
      license: null;
      forks: number;
      open_issues: number;
      watchers: number;
      default_branch: string;
      public: boolean;
    };
    type WebhookPayloadFork = {
      forkee: WebhookPayloadForkForkee;
      repository: PayloadRepository;
      sender: WebhookPayloadForkSender;
    };
    type WebhookPayloadDeploymentStatusSender = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadDeploymentStatusDeploymentCreator = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadDeploymentStatusDeploymentPayload = {};
    type WebhookPayloadDeploymentStatusDeployment = {
      url: string;
      id: number;
      node_id: string;
      sha: string;
      ref: string;
      task: string;
      payload: WebhookPayloadDeploymentStatusDeploymentPayload;
      original_environment: string;
      environment: string;
      description: null;
      creator: WebhookPayloadDeploymentStatusDeploymentCreator;
      created_at: string;
      updated_at: string;
      statuses_url: string;
      repository_url: string;
    };
    type WebhookPayloadDeploymentStatusDeploymentStatusCreator = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadDeploymentStatusDeploymentStatus = {
      url: string;
      id: number;
      node_id: string;
      state: string;
      creator: WebhookPayloadDeploymentStatusDeploymentStatusCreator;
      description: string;
      environment: string;
      target_url: string;
      created_at: string;
      updated_at: string;
      deployment_url: string;
      repository_url: string;
    };
    type WebhookPayloadDeploymentStatus = {
      deployment_status: WebhookPayloadDeploymentStatusDeploymentStatus;
      deployment: WebhookPayloadDeploymentStatusDeployment;
      repository: PayloadRepository;
      sender: WebhookPayloadDeploymentStatusSender;
    };
    type WebhookPayloadDeploymentSender = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadDeploymentDeploymentCreator = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadDeploymentDeploymentPayload = {};
    type WebhookPayloadDeploymentDeployment = {
      url: string;
      id: number;
      node_id: string;
      sha: string;
      ref: string;
      task: string;
      payload: WebhookPayloadDeploymentDeploymentPayload;
      original_environment: string;
      environment: string;
      description: null;
      creator: WebhookPayloadDeploymentDeploymentCreator;
      created_at: string;
      updated_at: string;
      statuses_url: string;
      repository_url: string;
    };
    type WebhookPayloadDeployment = {
      deployment: WebhookPayloadDeploymentDeployment;
      repository: PayloadRepository;
      sender: WebhookPayloadDeploymentSender;
    };
    type WebhookPayloadDeployKeySender = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadDeployKeyKey = {
      id: number;
      key: string;
      url: string;
      title: string;
      verified: boolean;
      created_at: string;
      read_only: boolean;
    };
    type WebhookPayloadDeployKey = {
      action: string;
      key: WebhookPayloadDeployKeyKey;
      repository: PayloadRepository;
      sender: WebhookPayloadDeployKeySender;
    };
    type WebhookPayloadDeleteSender = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadDelete = {
      ref: string;
      ref_type: string;
      pusher_type: string;
      repository: PayloadRepository;
      sender: WebhookPayloadDeleteSender;
    };
    type WebhookPayloadCreateSender = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadCreate = {
      ref: string;
      ref_type: string;
      master_branch: string;
      description: null;
      pusher_type: string;
      repository: PayloadRepository;
      sender: WebhookPayloadCreateSender;
    };
    type WebhookPayloadContentReferenceInstallation = {
      id: number;
      node_id: string;
    };
    type WebhookPayloadContentReferenceSender = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadContentReferenceContentReference = {
      id: number;
      node_id: string;
      reference: string;
    };
    type WebhookPayloadContentReference = {
      action: string;
      content_reference: WebhookPayloadContentReferenceContentReference;
      repository: PayloadRepository;
      sender: WebhookPayloadContentReferenceSender;
      installation: WebhookPayloadContentReferenceInstallation;
    };
    type WebhookPayloadCommitCommentSender = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadCommitCommentCommentUser = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadCommitCommentComment = {
      url: string;
      html_url: string;
      id: number;
      node_id: string;
      user: WebhookPayloadCommitCommentCommentUser;
      position: null;
      line: null;
      path: null;
      commit_id: string;
      created_at: string;
      updated_at: string;
      author_association: string;
      body: string;
    };
    type WebhookPayloadCommitComment = {
      action: string;
      comment: WebhookPayloadCommitCommentComment;
      repository: PayloadRepository;
      sender: WebhookPayloadCommitCommentSender;
    };
    type WebhookPayloadCheckSuiteSender = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadCheckSuiteCheckSuiteHeadCommitCommitter = {
      name: string;
      email: string;
    };
    type WebhookPayloadCheckSuiteCheckSuiteHeadCommitAuthor = {
      name: string;
      email: string;
    };
    type WebhookPayloadCheckSuiteCheckSuiteHeadCommit = {
      id: string;
      tree_id: string;
      message: string;
      timestamp: string;
      author: WebhookPayloadCheckSuiteCheckSuiteHeadCommitAuthor;
      committer: WebhookPayloadCheckSuiteCheckSuiteHeadCommitCommitter;
    };
    type WebhookPayloadCheckSuiteCheckSuiteAppPermissions = {
      administration: string;
      checks: string;
      contents: string;
      deployments: string;
      issues: string;
      members: string;
      metadata: string;
      organization_administration: string;
      organization_hooks: string;
      organization_plan: string;
      organization_projects: string;
      organization_user_blocking: string;
      pages: string;
      pull_requests: string;
      repository_hooks: string;
      repository_projects: string;
      statuses: string;
      team_discussions: string;
      vulnerability_alerts: string;
    };
    type WebhookPayloadCheckSuiteCheckSuiteAppOwner = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadCheckSuiteCheckSuiteApp = {
      id: number;
      node_id: string;
      owner: WebhookPayloadCheckSuiteCheckSuiteAppOwner;
      name: string;
      description: string;
      external_url: string;
      html_url: string;
      created_at: string;
      updated_at: string;
      permissions: WebhookPayloadCheckSuiteCheckSuiteAppPermissions;
      events: Array<any>;
    };
    type WebhookPayloadCheckSuiteCheckSuitePullRequestsItemBaseRepo = {
      id: number;
      url: string;
      name: string;
    };
    type WebhookPayloadCheckSuiteCheckSuitePullRequestsItemBase = {
      ref: string;
      sha: string;
      repo: WebhookPayloadCheckSuiteCheckSuitePullRequestsItemBaseRepo;
    };
    type WebhookPayloadCheckSuiteCheckSuitePullRequestsItemHeadRepo = {
      id: number;
      url: string;
      name: string;
    };
    type WebhookPayloadCheckSuiteCheckSuitePullRequestsItemHead = {
      ref: string;
      sha: string;
      repo: WebhookPayloadCheckSuiteCheckSuitePullRequestsItemHeadRepo;
    };
    type WebhookPayloadCheckSuiteCheckSuitePullRequestsItem = {
      url: string;
      id: number;
      number: number;
      head: WebhookPayloadCheckSuiteCheckSuitePullRequestsItemHead;
      base: WebhookPayloadCheckSuiteCheckSuitePullRequestsItemBase;
    };
    type WebhookPayloadCheckSuiteCheckSuite = {
      id: number;
      node_id: string;
      head_branch: string;
      head_sha: string;
      status: string;
      conclusion: string;
      url: string;
      before: string;
      after: string;
      pull_requests: Array<WebhookPayloadCheckSuiteCheckSuitePullRequestsItem>;
      app: WebhookPayloadCheckSuiteCheckSuiteApp;
      created_at: string;
      updated_at: string;
      latest_check_runs_count: number;
      check_runs_url: string;
      head_commit: WebhookPayloadCheckSuiteCheckSuiteHeadCommit;
    };
    type WebhookPayloadCheckSuite = {
      action: string;
      check_suite: WebhookPayloadCheckSuiteCheckSuite;
      repository: PayloadRepository;
      sender: WebhookPayloadCheckSuiteSender;
    };
    type WebhookPayloadCheckRunSender = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type PayloadRepositoryOwner = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
      name?: string;
      email?: string;
    };
    type PayloadRepository = {
      id: number;
      node_id: string;
      name: string;
      full_name: string;
      private: boolean;
      owner: PayloadRepositoryOwner;
      html_url: string;
      description: null | string;
      fork: boolean;
      url: string;
      forks_url: string;
      keys_url: string;
      collaborators_url: string;
      teams_url: string;
      hooks_url: string;
      issue_events_url: string;
      events_url: string;
      assignees_url: string;
      branches_url: string;
      tags_url: string;
      blobs_url: string;
      git_tags_url: string;
      git_refs_url: string;
      trees_url: string;
      statuses_url: string;
      languages_url: string;
      stargazers_url: string;
      contributors_url: string;
      subscribers_url: string;
      subscription_url: string;
      commits_url: string;
      git_commits_url: string;
      comments_url: string;
      issue_comment_url: string;
      contents_url: string;
      compare_url: string;
      merges_url: string;
      archive_url: string;
      downloads_url: string;
      issues_url: string;
      pulls_url: string;
      milestones_url: string;
      notifications_url: string;
      labels_url: string;
      releases_url: string;
      deployments_url: string;
      created_at: string | number;
      updated_at: string;
      pushed_at: string | number;
      git_url: string;
      ssh_url: string;
      clone_url: string;
      svn_url: string;
      homepage: null | string;
      size: number;
      stargazers_count: number;
      watchers_count: number;
      language: string | null;
      has_issues: boolean;
      has_projects: boolean;
      has_downloads: boolean;
      has_wiki: boolean;
      has_pages: boolean;
      forks_count: number;
      mirror_url: null;
      archived: boolean;
      disabled?: boolean;
      open_issues_count: number;
      license: null;
      forks: number;
      open_issues: number;
      watchers: number;
      default_branch: string;
      stargazers?: number;
      master_branch?: string;
      permissions?: PayloadRepositoryPermissions;
    };
    type WebhookPayloadCheckRunCheckRunPullRequestsItemBaseRepo = {
      id: number;
      url: string;
      name: string;
    };
    type WebhookPayloadCheckRunCheckRunPullRequestsItemBase = {
      ref: string;
      sha: string;
      repo: WebhookPayloadCheckRunCheckRunPullRequestsItemBaseRepo;
    };
    type WebhookPayloadCheckRunCheckRunPullRequestsItemHeadRepo = {
      id: number;
      url: string;
      name: string;
    };
    type WebhookPayloadCheckRunCheckRunPullRequestsItemHead = {
      ref: string;
      sha: string;
      repo: WebhookPayloadCheckRunCheckRunPullRequestsItemHeadRepo;
    };
    type WebhookPayloadCheckRunCheckRunPullRequestsItem = {
      url: string;
      id: number;
      number: number;
      head: WebhookPayloadCheckRunCheckRunPullRequestsItemHead;
      base: WebhookPayloadCheckRunCheckRunPullRequestsItemBase;
    };
    type WebhookPayloadCheckRunCheckRunAppPermissions = {
      administration: string;
      checks: string;
      contents: string;
      deployments: string;
      issues: string;
      members: string;
      metadata: string;
      organization_administration: string;
      organization_hooks: string;
      organization_plan: string;
      organization_projects: string;
      organization_user_blocking: string;
      pages: string;
      pull_requests: string;
      repository_hooks: string;
      repository_projects: string;
      statuses: string;
      team_discussions: string;
      vulnerability_alerts: string;
    };
    type WebhookPayloadCheckRunCheckRunAppOwner = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadCheckRunCheckRunApp = {
      id: number;
      node_id: string;
      owner: WebhookPayloadCheckRunCheckRunAppOwner;
      name: string;
      description: string;
      external_url: string;
      html_url: string;
      created_at: string;
      updated_at: string;
      permissions: WebhookPayloadCheckRunCheckRunAppPermissions;
      events: Array<any>;
    };
    type WebhookPayloadCheckRunCheckRunCheckSuiteAppPermissions = {
      administration: string;
      checks: string;
      contents: string;
      deployments: string;
      issues: string;
      members: string;
      metadata: string;
      organization_administration: string;
      organization_hooks: string;
      organization_plan: string;
      organization_projects: string;
      organization_user_blocking: string;
      pages: string;
      pull_requests: string;
      repository_hooks: string;
      repository_projects: string;
      statuses: string;
      team_discussions: string;
      vulnerability_alerts: string;
    };
    type WebhookPayloadCheckRunCheckRunCheckSuiteAppOwner = {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
    type WebhookPayloadCheckRunCheckRunCheckSuiteApp = {
      id: number;
      node_id: string;
      owner: WebhookPayloadCheckRunCheckRunCheckSuiteAppOwner;
      name: string;
      description: string;
      external_url: string;
      html_url: string;
      created_at: string;
      updated_at: string;
      permissions: WebhookPayloadCheckRunCheckRunCheckSuiteAppPermissions;
      events: Array<any>;
    };
    type WebhookPayloadCheckRunCheckRunCheckSuitePullRequestsItemBaseRepo = {
      id: number;
      url: string;
      name: string;
    };
    type WebhookPayloadCheckRunCheckRunCheckSuitePullRequestsItemBase = {
      ref: string;
      sha: string;
      repo: WebhookPayloadCheckRunCheckRunCheckSuitePullRequestsItemBaseRepo;
    };
    type WebhookPayloadCheckRunCheckRunCheckSuitePullRequestsItemHeadRepo = {
      id: number;
      url: string;
      name: string;
    };
    type WebhookPayloadCheckRunCheckRunCheckSuitePullRequestsItemHead = {
      ref: string;
      sha: string;
      repo: WebhookPayloadCheckRunCheckRunCheckSuitePullRequestsItemHeadRepo;
    };
    type WebhookPayloadCheckRunCheckRunCheckSuitePullRequestsItem = {
      url: string;
      id: number;
      number: number;
      head: WebhookPayloadCheckRunCheckRunCheckSuitePullRequestsItemHead;
      base: WebhookPayloadCheckRunCheckRunCheckSuitePullRequestsItemBase;
    };
    type WebhookPayloadCheckRunCheckRunCheckSuite = {
      id: number;
      node_id: string;
      head_branch: string;
      head_sha: string;
      status: string;
      conclusion: null;
      url: string;
      before: string;
      after: string;
      pull_requests: Array<
      WebhookPayloadCheckRunCheckRunCheckSuitePullRequestsItem
      >;
      app: WebhookPayloadCheckRunCheckRunCheckSuiteApp;
      created_at: string;
      updated_at: string;
    };
    type WebhookPayloadCheckRunCheckRunOutput = {
      title: null;
      summary: null;
      text: null;
      annotations_count: number;
      annotations_url: string;
    };
    type WebhookPayloadCheckRunCheckRun = {
      id: number;
      node_id: string;
      head_sha: string;
      external_id: string;
      url: string;
      html_url: string;
      details_url: string;
      status: string;
      conclusion: null;
      started_at: string;
      completed_at: null;
      output: WebhookPayloadCheckRunCheckRunOutput;
      name: string;
      check_suite: WebhookPayloadCheckRunCheckRunCheckSuite;
      app: WebhookPayloadCheckRunCheckRunApp;
      pull_requests: Array<WebhookPayloadCheckRunCheckRunPullRequestsItem>;
    };
    type WebhookPayloadCheckRun = {
      action: string;
      check_run: WebhookPayloadCheckRunCheckRun;
      repository: PayloadRepository;
      sender: WebhookPayloadCheckRunSender;
    };

    interface WebhookEvent<T> {
      id: string;
      name: string;
      payload: T;
      protocol?: 'http' | 'https';
      host?: string;
      url?: string;
    }
  }

  class Webhooks {
    constructor(options?: Options);

    public on(event: 'error', callback: (event: Error) => void): void;
    public on(
      event: '*' | string[],
      callback: (event: Webhooks.WebhookEvent<any>) => Promise<void> | void
    ): void;

    public on(
      event:
      | 'check_run'
      | 'check_run.completed'
      | 'check_run.created'
      | 'check_run.requested_action'
      | 'check_run.rerequested',
      callback: (
        event: Webhooks.WebhookEvent<Webhooks.WebhookPayloadCheckRun>
      ) => Promise<void> | void
    ): void;

    public on(
      event:
      | 'check_suite'
      | 'check_suite.completed'
      | 'check_suite.requested'
      | 'check_suite.rerequested',
      callback: (
        event: Webhooks.WebhookEvent<Webhooks.WebhookPayloadCheckSuite>
      ) => Promise<void> | void
    ): void;

    public on(
      event: 'commit_comment' | 'commit_comment.created',
      callback: (
        event: Webhooks.WebhookEvent<Webhooks.WebhookPayloadCommitComment>
      ) => Promise<void> | void
    ): void;

    public on(
      event: 'content_reference',
      callback: (
        event: Webhooks.WebhookEvent<Webhooks.WebhookPayloadContentReference>
      ) => Promise<void> | void
    ): void;

    public on(
      event: 'create',
      callback: (
        event: Webhooks.WebhookEvent<Webhooks.WebhookPayloadCreate>
      ) => Promise<void> | void
    ): void;

    public on(
      event: 'delete',
      callback: (
        event: Webhooks.WebhookEvent<Webhooks.WebhookPayloadDelete>
      ) => Promise<void> | void
    ): void;

    public on(
      event: 'deploy_key' | 'deploy_key.created' | 'deploy_key.deleted',
      callback: (
        event: Webhooks.WebhookEvent<Webhooks.WebhookPayloadDeployKey>
      ) => Promise<void> | void
    ): void;

    public on(
      event: 'deployment',
      callback: (
        event: Webhooks.WebhookEvent<Webhooks.WebhookPayloadDeployment>
      ) => Promise<void> | void
    ): void;

    public on(
      event: 'deployment_status',
      callback: (
        event: Webhooks.WebhookEvent<Webhooks.WebhookPayloadDeploymentStatus>
      ) => Promise<void> | void
    ): void;

    public on(
      event: 'fork',
      callback: (
        event: Webhooks.WebhookEvent<Webhooks.WebhookPayloadFork>
      ) => Promise<void> | void
    ): void;

    public on(
      event: 'github_app_authorization',
      callback: (
        event: Webhooks.WebhookEvent<
        Webhooks.WebhookPayloadGithubAppAuthorization
        >
      ) => Promise<void> | void
    ): void;

    public on(
      event: 'gollum',
      callback: (
        event: Webhooks.WebhookEvent<Webhooks.WebhookPayloadGollum>
      ) => Promise<void> | void
    ): void;

    public on(
      event:
      | 'installation'
      | 'installation.created'
      | 'installation.deleted'
      | 'installation.new_permissions_accepted',
      callback: (
        event: Webhooks.WebhookEvent<Webhooks.WebhookPayloadInstallation>
      ) => Promise<void> | void
    ): void;

    public on(
      event:
      | 'installation_repositories'
      | 'installation_repositories.added'
      | 'installation_repositories.removed',
      callback: (
        event: Webhooks.WebhookEvent<
        Webhooks.WebhookPayloadInstallationRepositories
        >
      ) => Promise<void> | void
    ): void;

    public on(
      event:
      | 'issue_comment'
      | 'issue_comment.created'
      | 'issue_comment.deleted'
      | 'issue_comment.edited',
      callback: (
        event: Webhooks.WebhookEvent<Webhooks.WebhookPayloadIssueComment>
      ) => Promise<void> | void
    ): void;

    public on(
      event:
      | 'issues'
      | 'issues.assigned'
      | 'issues.closed'
      | 'issues.deleted'
      | 'issues.demilestoned'
      | 'issues.edited'
      | 'issues.labeled'
      | 'issues.locked'
      | 'issues.milestoned'
      | 'issues.opened'
      | 'issues.pinned'
      | 'issues.reopened'
      | 'issues.transferred'
      | 'issues.unassigned'
      | 'issues.unlabeled'
      | 'issues.unlocked'
      | 'issues.unpinned',
      callback: (
        event: Webhooks.WebhookEvent<Webhooks.WebhookPayloadIssues>
      ) => Promise<void> | void
    ): void;

    public on(
      event: 'label' | 'label.created' | 'label.deleted' | 'label.edited',
      callback: (
        event: Webhooks.WebhookEvent<Webhooks.WebhookPayloadLabel>
      ) => Promise<void> | void
    ): void;

    public on(
      event:
      | 'marketplace_purchase'
      | 'marketplace_purchase.cancelled'
      | 'marketplace_purchase.changed'
      | 'marketplace_purchase.pending_change'
      | 'marketplace_purchase.pending_change_cancelled'
      | 'marketplace_purchase.purchased',
      callback: (
        event: Webhooks.WebhookEvent<Webhooks.WebhookPayloadMarketplacePurchase>
      ) => Promise<void> | void
    ): void;

    public on(
      event: 'member' | 'member.added' | 'member.deleted' | 'member.edited',
      callback: (
        event: Webhooks.WebhookEvent<Webhooks.WebhookPayloadMember>
      ) => Promise<void> | void
    ): void;

    public on(
      event: 'membership' | 'membership.added' | 'membership.removed',
      callback: (
        event: Webhooks.WebhookEvent<Webhooks.WebhookPayloadMembership>
      ) => Promise<void> | void
    ): void;

    public on(
      event: 'meta' | 'meta.deleted',
      callback: (
        event: Webhooks.WebhookEvent<Webhooks.WebhookPayloadMeta>
      ) => Promise<void> | void
    ): void;

    public on(
      event:
      | 'milestone'
      | 'milestone.closed'
      | 'milestone.created'
      | 'milestone.deleted'
      | 'milestone.edited'
      | 'milestone.opened',
      callback: (
        event: Webhooks.WebhookEvent<Webhooks.WebhookPayloadMilestone>
      ) => Promise<void> | void
    ): void;

    public on(
      event:
      | 'organization'
      | 'organization.deleted'
      | 'organization.member_added'
      | 'organization.member_invited'
      | 'organization.member_removed'
      | 'organization.renamed',
      callback: (
        event: Webhooks.WebhookEvent<Webhooks.WebhookPayloadOrganization>
      ) => Promise<void> | void
    ): void;

    public on(
      event: 'org_block' | 'org_block.blocked' | 'org_block.unblocked',
      callback: (
        event: Webhooks.WebhookEvent<Webhooks.WebhookPayloadOrgBlock>
      ) => Promise<void> | void
    ): void;

    public on(
      event: 'package' | 'package.published' | 'package.updated',
      callback: (
        event: Webhooks.WebhookEvent<Webhooks.WebhookPayloadPackage>
      ) => Promise<void> | void
    ): void;

    public on(
      event: 'page_build',
      callback: (
        event: Webhooks.WebhookEvent<Webhooks.WebhookPayloadPageBuild>
      ) => Promise<void> | void
    ): void;

    public on(
      event:
      | 'project_card'
      | 'project_card.converted'
      | 'project_card.created'
      | 'project_card.deleted'
      | 'project_card.edited'
      | 'project_card.moved',
      callback: (
        event: Webhooks.WebhookEvent<Webhooks.WebhookPayloadProjectCard>
      ) => Promise<void> | void
    ): void;

    public on(
      event:
      | 'project_column'
      | 'project_column.created'
      | 'project_column.deleted'
      | 'project_column.edited'
      | 'project_column.moved',
      callback: (
        event: Webhooks.WebhookEvent<Webhooks.WebhookPayloadProjectColumn>
      ) => Promise<void> | void
    ): void;

    public on(
      event:
      | 'project'
      | 'project.closed'
      | 'project.created'
      | 'project.deleted'
      | 'project.edited'
      | 'project.reopened',
      callback: (
        event: Webhooks.WebhookEvent<Webhooks.WebhookPayloadProject>
      ) => Promise<void> | void
    ): void;

    public on(
      event: 'public',
      callback: (
        event: Webhooks.WebhookEvent<Webhooks.WebhookPayloadPublic>
      ) => Promise<void> | void
    ): void;

    public on(
      event:
      | 'pull_request'
      | 'pull_request.assigned'
      | 'pull_request.closed'
      | 'pull_request.edited'
      | 'pull_request.labeled'
      | 'pull_request.locked'
      | 'pull_request.opened'
      | 'pull_request.ready_for_review'
      | 'pull_request.reopened'
      | 'pull_request.review_request_removed'
      | 'pull_request.review_requested'
      | 'pull_request.unassigned'
      | 'pull_request.unlabeled'
      | 'pull_request.unlocked'
      | 'pull_request.synchronize',
      callback: (
        event: Webhooks.WebhookEvent<Webhooks.WebhookPayloadPullRequest>
      ) => Promise<void> | void
    ): void;

    public on(
      event:
      | 'pull_request_review'
      | 'pull_request_review.dismissed'
      | 'pull_request_review.edited'
      | 'pull_request_review.submitted',
      callback: (
        event: Webhooks.WebhookEvent<Webhooks.WebhookPayloadPullRequestReview>
      ) => Promise<void> | void
    ): void;

    public on(
      event:
      | 'pull_request_review_comment'
      | 'pull_request_review_comment.created'
      | 'pull_request_review_comment.deleted'
      | 'pull_request_review_comment.edited',
      callback: (
        event: Webhooks.WebhookEvent<
        Webhooks.WebhookPayloadPullRequestReviewComment
        >
      ) => Promise<void> | void
    ): void;

    public on(
      event: 'push',
      callback: (
        event: Webhooks.WebhookEvent<Webhooks.WebhookPayloadPush>
      ) => Promise<void> | void
    ): void;

    public on(
      event:
      | 'release'
      | 'release.created'
      | 'release.deleted'
      | 'release.edited'
      | 'release.prereleased'
      | 'release.published'
      | 'release.unpublished',
      callback: (
        event: Webhooks.WebhookEvent<Webhooks.WebhookPayloadRelease>
      ) => Promise<void> | void
    ): void;

    public on(
      event: 'repository_dispatch',
      callback: (
        event: Webhooks.WebhookEvent<Webhooks.WebhookPayloadRepositoryDispatch>
      ) => Promise<void> | void
    ): void;

    public on(
      event:
      | 'repository'
      | 'repository.archived'
      | 'repository.created'
      | 'repository.deleted'
      | 'repository.edited'
      | 'repository.privatized'
      | 'repository.publicized'
      | 'repository.renamed'
      | 'repository.transferred'
      | 'repository.unarchived',
      callback: (
        event: Webhooks.WebhookEvent<Webhooks.WebhookPayloadRepository>
      ) => Promise<void> | void
    ): void;

    public on(
      event: 'repository_import',
      callback: (
        event: Webhooks.WebhookEvent<Webhooks.WebhookPayloadRepositoryImport>
      ) => Promise<void> | void
    ): void;

    public on(
      event:
      | 'repository_vulnerability_alert'
      | 'repository_vulnerability_alert.create'
      | 'repository_vulnerability_alert.dismiss'
      | 'repository_vulnerability_alert.resolve',
      callback: (
        event: Webhooks.WebhookEvent<
        Webhooks.WebhookPayloadRepositoryVulnerabilityAlert
        >
      ) => Promise<void> | void
    ): void;

    public on(
      event:
      | 'security_advisory'
      | 'security_advisory.performed'
      | 'security_advisory.published'
      | 'security_advisory.updated',
      callback: (
        event: Webhooks.WebhookEvent<Webhooks.WebhookPayloadSecurityAdvisory>
      ) => Promise<void> | void
    ): void;

    public on(
      event: 'star' | 'star.created' | 'star.deleted',
      callback: (
        event: Webhooks.WebhookEvent<Webhooks.WebhookPayloadStar>
      ) => Promise<void> | void
    ): void;

    public on(
      event: 'status',
      callback: (
        event: Webhooks.WebhookEvent<Webhooks.WebhookPayloadStatus>
      ) => Promise<void> | void
    ): void;

    public on(
      event:
      | 'team'
      | 'team.added_to_repository'
      | 'team.created'
      | 'team.deleted'
      | 'team.edited'
      | 'team.removed_from_repository',
      callback: (
        event: Webhooks.WebhookEvent<Webhooks.WebhookPayloadTeam>
      ) => Promise<void> | void
    ): void;

    public on(
      event: 'team_add',
      callback: (
        event: Webhooks.WebhookEvent<Webhooks.WebhookPayloadTeamAdd>
      ) => Promise<void> | void
    ): void;

    public on(
      event: 'watch' | 'watch.started',
      callback: (
        event: Webhooks.WebhookEvent<Webhooks.WebhookPayloadWatch>
      ) => Promise<void> | void
    ): void;

    public sign(data: any): string;
    public verify(eventPayload: any, signature: string): boolean;
    public verifyAndReceive(options: {
      id: string;
      name: string;
      payload: any;
      signature: string;
    }): Promise<void>;
    public receive(options: {
      id: string;
      name: string;
      payload: any;
    }): Promise<void>;
    public removeListener(
      event: string | string[],
      callback: (event: Webhooks.WebhookEvent<any>) => void
    ): void;
    public removeListener(
      event: string | string[],
      callback: (event: Webhooks.WebhookEvent<any>) => Promise<void>
    ): void;
    public middleware(
      request: http.IncomingMessage,
      response: http.ServerResponse,
      next?: (err?: any) => void
    ): void | Promise<void>;
  }

  export = Webhooks;
}
