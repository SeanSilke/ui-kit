/* eslint react/no-deprecated: 0 */
import React, { Component } from 'react';
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

export class Login extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.isAuthenticated) {
      nextProps.history.push('/');
    }

    if (nextProps.errorMessage) {
      this.props.onError(nextProps.errorMessage);
    }
  }

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
