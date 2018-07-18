import React, { Component } from 'react';
import Select from 'react-select';
import Value from 'react-select/lib/Value';
import classNames from 'classnames';
import muiThemeable from 'material-ui/styles/muiThemeable';
import 'react-select/dist/react-select.css';
import './select_multiple.scss';

@muiThemeable()
export class SelectMultiple extends Component {
  state = {
    focus: false
  };

  onFocus = () => {
    this.setState({ focus: true });
  };

  onBlur = () => {
    this.setState({ focus: false });
  };

  ValueComponent = props => {
    props.value.className = '';
    if (props.value.value === this.props.highlighted) {
      props.value.className = 'Select-value-highlighted';
    }
    return <Value {...props} />;
  };

  isPlaceholderActive() {
    const { multi, value } = this.props;
    const { focus } = this.state;
    if (multi) return focus || (value && value.length);
    return focus || value;
  }

  placeholderColor() {
    const { primary1Color, disabledColor } = this.props.muiTheme.palette;
    if (this.isPlaceholderActive()) return primary1Color;
    return disabledColor;
  }

  render() {
    const placeholder = this.props.placeholder || 'Выберите значение';
    const classnames = classNames('Select-placeholder-custom', { active: this.isPlaceholderActive() });

    return (
      <div className="selectContainer" style={this.props.style}>
        <div style={{ width: '100%' }}>
          <div style={{ color: this.placeholderColor() }} className={classnames}>
            {placeholder}
          </div>
          <Select
            placeholder={placeholder}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            valueComponent={this.ValueComponent}
            {...this.props}
          />
        </div>
      </div>
    );
  }
}
