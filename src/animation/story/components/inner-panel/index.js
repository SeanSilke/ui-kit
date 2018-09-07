import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
// Here PureComponent is used to prevent unnecessary rerender
// If there is no shouldComponentUpdate the element will rerender
// for each animation stage e.g [exited, entering, entered, exiting]
export class InnerPanel extends PureComponent {
  render() {
    return (
      <div className={'inner_panel'}>
        {'key :'} {this.props.id}
      </div>
    );
  }
}

InnerPanel.propTypes = {
  id: PropTypes.number.isRequired
};
