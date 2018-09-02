/* eslint react/no-deprecated: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import { Col } from 'react-grid-system';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const style = {
  height: 'auto',
  width: 350,
  margin: '50px auto',
  padding: 24
};

export class LoginInner extends Component {
  login = null;
  password = null;

  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.login.input.value, this.password.input.value);
  };

  render() {
    return (
      <Col sm={12}>
        <Paper style={style} zDepth={5}>
          <form onSubmit={this.onSubmit}>
            <div>
              <TextField hintText="Логин" floatingLabelText="Логин" type="text" ref={c => (this.login = c)} />
            </div>
            <div>
              <TextField hintText="Пароль" floatingLabelText="Пароль" type="password" ref={c => (this.password = c)} />
            </div>
            <div>
              <RaisedButton type="submit">Войти</RaisedButton>
            </div>
          </form>
        </Paper>
      </Col>
    );
  }
}

LoginInner.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

// TODO: Move this component to main project
// It depends on the react-router implementation
// viz. nextProps.history
export class Login extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.isAuthenticated) {
      nextProps.history.push('/');
    }

    if (nextProps.errorMessage) {
      this.props.onError(nextProps.errorMessage);
    }
  }

  render() {
    return <LoginInner onSubmit={this.props.onSubmit} />;
  }
}

Login.propTypes = {
  isAuthenticated: PropTypes.bool,
  errorMessage: PropTypes.string,
  history: PropTypes.object.isRequired,
  onError: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};
