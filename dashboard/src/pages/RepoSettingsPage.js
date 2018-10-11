import React from 'react';

import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Divider from '@material-ui/core/Divider';

import EventPicker from '../components/EventPicker';
import BackButton from '../components/BackButton';
import IRCSettings from '../components/IRCSettings';


import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import store, { storeGetRepoSettings } from '../store/store';

/** Repo settings page of the app */
class RepoSettingsPage extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    repoSettings: PropTypes.object.isRequired
  };

  /** Renders the component
   * @return {React.ReactElement}
   */
  render() {
    return (
      <React.Fragment>
        <BackButton/>
        <Paper className="app-paper">
          <Typography variant="title">
          Settings for {this.props.match.params.rUser}/{this.props.match.params.rName}
          </Typography>

          <br/>

          <FormGroup>
            <FormControlLabel
              control={
                <Switch id="enabled"/>
              }
              label="Enable this repository"
            />
            <IRCSettings />
            <Divider style={{ margin: '0 20px' }}/>
            <br /><br />
            <EventPicker/>
          </FormGroup>
        </Paper>
      </React.Fragment>
    );
  }

  /** Gets executed when the component is mounted */
  async componentDidMount() {
    await storeGetRepoSettings(store, `${this.props.match.params.rUser}/${this.props.match.params.rName}`);
  }
}

/** Maps redux state to RepoSettingsPage props
 * @param {Object} state
 * @return {Object}
 */
const mapStateToProps = state => {
  return {
    repoSettings: state.repoSettings
  };
};

export default withRouter(connect(mapStateToProps, null)(RepoSettingsPage));
