import React, { Component } from 'react';
import ActionInfo from 'material-ui/svg-icons/action/info';
import ActionCheckCircle from 'material-ui/svg-icons/action/check-circle';
import ActionReportProblem from 'material-ui/svg-icons/action/report-problem';
import AlertError from 'material-ui/svg-icons/alert/error';
import { PropTypes } from 'prop-types';
import './style.scss';

import ContentClear from 'material-ui/svg-icons/content/clear';

export class Notification extends Component {
  getIcon = () => {
    switch (this.props.type) {
      case 'warning':
        return <ActionReportProblem color="#ffcc00" />;
      case 'error':
        return <AlertError color="#ff0000" />;
      case 'done':
        return <ActionCheckCircle color="#33cc33" />;
      case 'info':
        return <ActionInfo color="#fff" />;
      default:
        return <ActionInfo color="#fff" />;
    }
  };

  onClose = () => {
    const { clickCallback, id } = this.props;
    if (clickCallback) clickCallback(id);
  };

  render() {
    return (
      <div className="notification">
        <div className="notificationIcon">{this.getIcon()}</div>
        {this.props.message}
        <div className="notificationClose" onClick={this.onClose}>
          {this.props.closeIcon}
        </div>
      </div>
    );
  }
}

Notification.defaultProps = {
  closeIcon: <ContentClear color="#fff" style={{ height: '16px', width: '16px' }} />
};

Notification.propTypes = {
  closeIcon: PropTypes.node,
  id: PropTypes.string,
  type: PropTypes.string,
  clickCallback: PropTypes.func,
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};
