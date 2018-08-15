import React, { Component } from 'react';

// This wrapper is used for components that rely on data from DOM nodes e.g. from refs
// In current storybook implementation is possible that styling of component occur after
// it is available as a ref to react component.
// In this case, the component can receive wrong dimensions of its DOM node.

// This wrapper ensures that styling will be applied to DOM node before it is available as a ref to the component.
class DeferredRender extends Component {
  state = {
    isOn: false
  };
  on = () => this.setState({ isOn: true });
  componentDidMount() {
    setTimeout(this.on, 0);
  }
  render() {
    return this.state.isOn ? <div> {this.props.children} </div> : <p> Empty </p>;
  }
}

export { DeferredRender };
