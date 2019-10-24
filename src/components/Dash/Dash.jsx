import React, { Component, Fragment } from "react";
import { Redirect } from "react-router";
import { connect } from "react-redux";

import { setAuthenticated, logoutUser } from "../../actions/currentUserActions";
import Column from "./Column";

import "./Dash.css";
import Logo from "./Logo";
import Content from "./Content";

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
        {thoughtRoot && (
          <Fragment>
            <div className="sidebar-container">
              <div className="sidebar">
                <nav>
                  <div
                    className="user"
                    onClick={() =>
                      this.setState({ isProfileOpen: !isProfileOpen })
                    }
                  >
                    <Logo />
                  </div>
                </nav>
                {isProfileOpen && (
                  <div>
                    {/* <div className="profile-text">v0.1</div> */}
                    <div className="profile-actions">
                      <button
                        onClick={this.handleLogout}
                        className="button-secondary"
                      >
                        logout
                      </button>
                    </div>
                  </div>
                )}
                {thoughtRoot && <Column root={thoughtRoot} />}
              </div>
            </div>

            <div className="content-container">
              <div className="content">
                {thoughtRoot && <Content root={thoughtRoot} />}
              </div>
            </div>
          </Fragment>
        )}
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
