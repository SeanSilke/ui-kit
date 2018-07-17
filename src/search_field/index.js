/* eslint react/no-deprecated: 0 */
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { debounce } from 'lodash';

const style = { fontSize: '14px', color: '#222' };
const hintStyle = { color: '#222' };

export class SearchField extends Component {
  constructor(props) {
    super(props);
    const { value } = props;
    this.state = { value };
  }

  componentWillReceiveProps({ value }) {
    if (value !== this.state.search) {
      this.setState({ value });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.value === nextState.value) return false;
    return true;
  }

  _sendUpdate = debounce(() => (this.props.onChange ? this.props.onChange(this.state.value) : null), 200);

  onLocalChange = (e, value) => this.setState({ value }, this._sendUpdate);

  render() {
    const {
      onLocalChange,
      props,
      state: { value }
    } = this;

    const TextFieldProps = {
      style,
      hintStyle,
      name: 'search',
      fullWidth: true,
      ...props,
      value,
      onChange: onLocalChange
    };

    return <TextField {...TextFieldProps} />;
  }
}
