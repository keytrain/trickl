import React, { Component, Fragment } from "react";
import { Redirect } from "react-router";
import { connect } from "react-redux";

import {
  setAuthenticated,
  loginUserRequested,
  signUpRequested,
  verifySignUpRequested,
} from "../../actions/currentUserActions";

import "./Login.css";

class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      view: "login",
    };
  }

  handleEntry = event => {
    const { name, value } = event.target;
    this.setState({ [`${name}`]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { login, signUp, verifySignUp, signUpStatus } = this.props;
    const {
      email,
      password,
      confirmPassword,
      confirmationCode,
      view,
    } = this.state;
    if (signUpStatus === "VERIFY" || signUpStatus === "INCORRECT CODE") {
      if (!email || !password || !confirmationCode) return;
      verifySignUp(email, password, confirmationCode);
      return;
    }
    switch (view) {
      case "login":
        if (!email || !password) return;
        login(email, password);
        break;
      case "signup":
        if (!email || !password) return;
        if (confirmPassword === password) {
          signUp(email, password);
        }
        break;
      default:
    }
  };

  render() {
    const {
      email,
      password,
      confirmPassword,
      confirmationCode,
      view,
    } = this.state;
    const { loginStatus, authenticated, signUpStatus } = this.props;
    if (authenticated) {
      return <Redirect to="/dash" />;
    }
    return (
      <div className="login-container">
        <h1>trickl</h1>
        <h5>placeholder logo</h5>
        <div className="login-form">
          <form onSubmit={this.handleSubmit}>
            {signUpStatus !== "VERIFY" &&
              signUpStatus !== "INCORRECT CODE" &&
              signUpStatus !== "VERIFYING" && (
                <Fragment>
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
                </Fragment>
              )}
            {view === "signup" &&
              signUpStatus !== "VERIFY" &&
              signUpStatus !== "VERIFYING" &&
              signUpStatus !== "INCORRECT CODE" && (
                <div className="input-group">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={this.handleEntry}
                  />
                </div>
              )}
            {(signUpStatus === "VERIFY" ||
              signUpStatus === "VERIFYING" ||
              signUpStatus === "INCORRECT CODE") && (
              <div className="input-group">
                <label>Confirmation Code</label>
                <input
                  type="text"
                  name="confirmationCode"
                  value={confirmationCode}
                  onChange={this.handleEntry}
                />
              </div>
            )}
            <div className="login-actions">
              <button className="button" type="submit">
                {view === "signup" ? signUpStatus : loginStatus}
              </button>
              <button
                className="button-secondary"
                onClick={() => {
                  this.setState({
                    view: view === "login" ? "signup" : "login",
                  });
                }}
              >
                {view === "login" && "Sign Up"}
                {view === "signup" && "Back"}
              </button>
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
      session: { authenticated, loginStatus, signUpStatus },
    },
  } = state;
  return {
    authenticated,
    loginStatus,
    signUpStatus,
  };
};

const mapDispatchToProps = dispatch => ({
  setAuth: status => dispatch(setAuthenticated(status)),
  login: (email, password) => dispatch(loginUserRequested(email, password)),
  signUp: (email, password) => dispatch(signUpRequested(email, password)),
  verifySignUp: (email, password, confirmationCode) =>
    dispatch(verifySignUpRequested(email, password, confirmationCode)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);
