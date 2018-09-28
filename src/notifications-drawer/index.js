import React, { Component } from 'react';
import { Notification } from '../notification';
import classNames from 'classnames';
import { PropTypes } from 'prop-types';
import './style.scss';
import { DrawerButton } from './components/drawer-button';

export class NotificationsDrawer extends Component {
  state = {
    open: false
  };

  toggleDrawer = () => this.setState({ open: !this.state.open });

  render() {
    const { open } = this.state;
    const { history, deleteNotification } = this.props;
    const containerClassName = classNames('notificationsDrawer', { open });
    return (
      <div>
        <div className={containerClassName}>
          {history.map(item => <Notification key={item.id} {...item} clickCallback={deleteNotification} />)}
        </div>
        <DrawerButton history={history} toggleDrawer={this.toggleDrawer} />
      </div>
    );
  }
}

NotificationsDrawer.defaultProps = {
  history: []
};

NotificationsDrawer.propTypes = {
  // changeView  is removed for now. I nned to define what is was for and then add it back
  history: PropTypes.array,
  deleteNotification: PropTypes.func
};
