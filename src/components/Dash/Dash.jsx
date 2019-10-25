import React, { Component, Fragment } from "react";
import { Redirect } from "react-router";
import { connect } from "react-redux";

import { setAuthenticated, logoutUser } from "../../actions/currentUserActions";
import Column from "./Column";

import "./Dash.css";
import Logo from "./Logo";
import Content from "./Content";
import { collapseSidebar } from "../../actions/uiActions";

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
    const {
      authenticated,
      thoughtRoot,
      collapseSidebar,
      _collapseSidebar,
    } = this.props;
    const { isProfileOpen } = this.state;

    if (!authenticated) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="wrapper">
        {thoughtRoot && (
          <Fragment>
            <div
              className={`sidebar-container ${
                collapseSidebar ? "sidebar-container-collapse" : ""
              }`}
            >
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

            <div
              className={`content-container ${
                collapseSidebar ? "content-container-collapse" : ""
              }`}
            >
              <div className="content">
                {thoughtRoot && <Content root={thoughtRoot} />}
              </div>
            </div>

            <div
              className={`collapse-thought-container ${
                collapseSidebar ? "collapse-thought-transition" : ""
              }`}
            >
              <button
                className="collapse-thought-button"
                onClick={_collapseSidebar}
              >
                {`<`}
              </button>
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
    ui: { collapseSidebar },
  } = state;
  return {
    authenticated,
    collapseSidebar,
    thoughtRoot: userData && userData.thoughtRoot,
  };
};

const mapDispatchToProps = dispatch => ({
  setAuth: status => dispatch(setAuthenticated(status)),
  logout: () => dispatch(logoutUser()),
  _collapseSidebar: bool => dispatch(collapseSidebar({ bool })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashComponent);
