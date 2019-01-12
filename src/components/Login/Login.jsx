import React, { Component } from "react";
import { Redirect } from "react-router";
import { connect } from "react-redux";

import "./Login.css";
import { setAuthenticated, loginUser } from "../../actions/currentUserActions";

class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleEntry = event => {
    const { name, value } = event.target;
    this.setState({ [`${name}`]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { login } = this.props;
    const { email, password } = this.state;
    if (!email || !password) return;
    login(email, password);
  };

  render() {
    const { email, password } = this.state;
    const { loginStatus, authenticated } = this.props;
    if (authenticated) {
      return <Redirect to="/dash" />;
    }
    return (
      <div className="login-container">
        <h1>trickl</h1>
        <h5>placeholder logo</h5>
        <div className="login-form">
          <form onSubmit={this.handleSubmit}>
            <div className="input-group">
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={email}
                onChange={this.handleEntry}
                autoFocus
              />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleEntry}
              />
            </div>
            <div className="login-actions">
              <input className="button" type="submit" value={loginStatus} />
              <button className="button-secondary">Sign Up</button>
            </div>
          </form>
        </div>

        <div className="login-footer">
          <a href="https://github.com/keytrain/trickl">github</a>
          thanks for visiting
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    currentUser: {
      session: { authenticated, loginStatus },
    },
  } = state;
  return {
    authenticated,
    loginStatus,
  };
};

const mapDispatchToProps = dispatch => ({
  setAuth: status => dispatch(setAuthenticated(status)),
  login: (email, password) => dispatch(loginUser(email, password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);
