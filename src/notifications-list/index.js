import React, { Component } from 'react';
import { Notification } from '../notification';
import ActionVisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { PropTypes } from 'prop-types';
import './style.scss';

const closeIcon = <ActionVisibilityOff color="#fff" style={{ height: '16px', width: '16px' }} />;
const transitionTimeouts = { enter: 300, exit: 2000 };

export class NotificationsList extends Component {
  render() {
    const { queue, hideNotification, isVisible } = this.props;
    if (!isVisible) return null;
    const visiblePart = queue.slice(0, 3);

    return (
      <div className="notificationsList">
        <TransitionGroup>
          {visiblePart.map(
            item =>
              !item.viewed ? (
                <CSSTransition key={item.id} classNames="notification" timeout={transitionTimeouts}>
                  <Notification clickCallback={hideNotification} closeIcon={closeIcon} key={item.id} {...item} />
                </CSSTransition>
              ) : null
          )}
        </TransitionGroup>
      </div>
    );
  }
}

NotificationsList.defaultProps = {
  queue: []
};

NotificationsList.propTypes = {
  isVisible: PropTypes.bool,
  hideNotification: PropTypes.func,
  queue: PropTypes.array.isRequired
};
