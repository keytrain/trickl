import React, { Component } from "react";
import { Redirect } from "react-router";
import { connect } from "react-redux";

import { setAuthenticated, logoutUser } from "../../actions/currentUserActions";
import Column from "./Column";

import "./Dash.css";

class DashComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isProfileOpen: false,
    };
  }

  handleLogout = event => {
    event.preventDefault();
    const { logout } = this.props;
    logout();
  };

  render() {
    const { authenticated, thoughtRoot } = this.props;
    const { isProfileOpen } = this.state;

    if (!authenticated) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="wrapper">
        <nav>
          <div className="user">
            <div
              className="avatar"
              onClick={() => this.setState({ isProfileOpen: !isProfileOpen })}
            />
          </div>
        </nav>
        {isProfileOpen && (
          <div className="profile-actions">
            <button onClick={this.handleLogout} className="button-secondary">
              logout
            </button>
          </div>
        )}
        <div className="content">
          {thoughtRoot && <Column root={thoughtRoot} />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    currentUser: {
      session: { authenticated },
      userData,
    },
  } = state;
  return {
    authenticated,
    thoughtRoot: userData && userData.thoughtRoot,
  };
};

const mapDispatchToProps = dispatch => ({
  setAuth: status => dispatch(setAuthenticated(status)),
  logout: () => dispatch(logoutUser()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashComponent);
