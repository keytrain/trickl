import React, { useState } from "react";
import { Redirect } from "react-router";
import { connect } from "react-redux";

import {
  setAuthenticated,
  loginUserRequested,
  signUpRequested,
  verifySignUpRequested,
} from "../../actions/currentUserActions";

import "./Login.css";

function LoginComponent({ login, loginStatus, authenticated, signUp, verifySignUp, signUpStatus }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [view, setView] = useState("login");
  const [confirmationCode, setConfirmationCode] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleEmailEntry(event) {
    const { value } = event.target;
    setEmail(value);
  }

  function handlePasswordEntry(event) {
    const { value } = event.target;
    setPassword(value);
  }

  function handleConfirmationCodeEntry(event) {
    const { value } = event.target;
    setConfirmationCode(value);
  }

  function handleConfirmPasswordEntry(event) {
    const { value } = event.target;
    setConfirmPassword(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
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
  }

  if (authenticated) {
    return <Redirect to="/dash" />;
  }
  return (
    <div className="login-container">
      <h1>trickl</h1>
      <h5>a place for thoughts</h5>
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          {signUpStatus !== "VERIFY" &&
            signUpStatus !== "INCORRECT CODE" &&
            signUpStatus !== "VERIFYING" && (
              <>
                <div className="input-group">
                  <label>Email</label>
                  <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={handleEmailEntry}
                    autoFocus
                  />
                </div>
                <div className="input-group">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handlePasswordEntry}
                  />
                </div>
              </>
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
                  onChange={handleConfirmPasswordEntry}
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
                onChange={handleConfirmationCodeEntry}
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
                setView(view === "login" ? "signup" : "login");
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

const mapStateToProps = (state) => {
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

const mapDispatchToProps = (dispatch) => ({
  setAuth: (status) => dispatch(setAuthenticated(status)),
  login: (email, password) => dispatch(loginUserRequested(email, password)),
  signUp: (email, password) => dispatch(signUpRequested(email, password)),
  verifySignUp: (email, password, confirmationCode) =>
    dispatch(verifySignUpRequested(email, password, confirmationCode)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
