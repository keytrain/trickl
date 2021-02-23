import React, { useState } from "react";
import { Redirect } from "react-router";
import { connect } from "react-redux";

import { setAuthenticated, logoutUser } from "../../actions/currentUserActions";
import Column from "./Column";

import "./Dash.css";
import Logo from "./Logo";
import Content from "./Content";
import { collapseSidebar } from "../../actions/uiActions";

function DashComponent({ authenticated, thoughtRoot, collapseSidebar, _collapseSidebar, logout }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  function handleLogout(event) {
    event.preventDefault();
    logout();
  }

  if (!authenticated) {
    return <Redirect to="/login" />;
  }
  return (
    <div className="wrapper">
      {thoughtRoot && (
        <>
          <div
            className={`sidebar-container ${collapseSidebar ? "sidebar-container-collapse" : ""}`}
          >
            <div className="sidebar">
              <nav>
                <div className="user">
                  <Logo />
                </div>
              </nav>
              {isProfileOpen && <div>{/* <div className="profile-text">v0.1</div> */}</div>}
              {thoughtRoot && <Column root={thoughtRoot} />}
              <div className="menu-bottom">
                <div className="profile-actions">
                  <button onClick={handleLogout} className="button-secondary">
                    logout
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`content-container ${collapseSidebar ? "content-container-collapse" : ""}`}
          >
            <div className="content">{thoughtRoot && <Content root={thoughtRoot} />}</div>
          </div>

          {/* <div
            className={`collapse-thought-container ${
              collapseSidebar ? "collapse-thought-transition" : ""
            }`}
          >
            <button className="collapse-thought-button" onClick={_collapseSidebar}></button>
          </div> */}
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
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

const mapDispatchToProps = (dispatch) => ({
  setAuth: (status) => dispatch(setAuthenticated(status)),
  logout: () => dispatch(logoutUser()),
  _collapseSidebar: (bool) => dispatch(collapseSidebar({ bool })),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashComponent);
