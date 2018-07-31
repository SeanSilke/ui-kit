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
          <ReactCSSTransitionGroup
            transitionName="notification"
            transitionAppear={true}
            transitionLeaveTimeout={600}
            transitionEnterTimeout={300}
            transitionAppearTimeout={0}
            key={`transition_${item.id}`}
          >
            <Notification
              clickCallback={this.props.hideNotification}
              closeIcon={<ActionVisibilityOff color="#fff" style={{ height: '16px', width: '16px' }} />}
              key={item.id}
              {...item}
            />
          </ReactCSSTransitionGroup>
        );
      })
    );
  };

  render() {
    return <div className="notificationsList">{this.props.showList ? this.renderQue() : null}</div>;
  }
}

NotificationsList.propTypes = {
  showList: PropTypes.bool,
  type: PropTypes.string,
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};
