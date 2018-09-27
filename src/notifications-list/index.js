import React, { Component } from 'react';
import { Notification } from '../notification';
import ActionVisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { PropTypes } from 'prop-types';
import './style.scss';

export class NotificationsList extends Component {
  renderQue = () => {
    return (
      this.props.queue
      && this.props.queue.slice(0, 3).map(item => {
        return (
          <Notification
            clickCallback={this.props.hideNotification}
            closeIcon={<ActionVisibilityOff color="#fff" style={{ height: '16px', width: '16px' }} />}
            key={item.id}
            {...item}
          />
        );
      })
    );
  };

  render() {
    return (
      <div className="notificationsList">
        <ReactCSSTransitionGroup
          transitionName="notification"
          transitionLeaveTimeout={300}
          transitionEnterTimeout={300}
          key={'transition_$'}
        >
          {this.props.showList ? this.renderQue() : null}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

NotificationsList.propTypes = {
  showList: PropTypes.bool,
  hideNotification: PropTypes.func
  // queue: PropTypes.object
};
