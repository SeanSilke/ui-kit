import React, { Component } from 'react';
import { Notification } from '../notification';
import ActionVisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { PropTypes } from 'prop-types';
import './style.scss';

export class NotificationsList extends Component {
  renderQue = () => {
    return (
      this.props.queue
      && this.props.queue.slice(0, 3).map(item => {
        return (
          <CSSTransition key={item.id} classNames="notification" timeout={{ enter: 300, exit: 2000 }}>
            <Notification
              clickCallback={this.props.hideNotification}
              closeIcon={<ActionVisibilityOff color="#fff" style={{ height: '16px', width: '16px' }} />}
              key={item.id}
              {...item}
            />
          </CSSTransition>
        );
      })
    );
  };

  render() {
    return (
      <div className="notificationsList">
        <TransitionGroup>{this.props.showList ? this.renderQue() : null}</TransitionGroup>
      </div>
    );
  }
}

NotificationsList.propTypes = {
  showList: PropTypes.bool,
  hideNotification: PropTypes.func
  // queue: PropTypes.object
};
