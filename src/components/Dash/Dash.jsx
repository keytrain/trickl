import React, { Component } from "react";
import { connect } from "react-redux";

import { setAuthenticated, logoutUser } from "../../actions/currentUserActions";
import Column from "./Column";

import "./Dash.css";

class DashComponent extends Component {
  componentDidMount() {
    const { authenticated } = this.props;
    if (!authenticated) {
      this.props.history.push("/login");
    }
  }

  componentDidUpdate() {
    const { authenticated } = this.props;
    if (!authenticated) {
      this.props.history.push("/");
    }
  }

  handleLogout = event => {
    event.preventDefault();
    const { logout } = this.props;
    logout();
  };

  render() {
    const { thoughtRoot } = this.props;
    return (
      <div className="wrapper">
        <div className="content">
        </div>
        <nav>
          {/* <button className="add" onClick={this.addMessage}>
            +
          </button> */}
          <div className="user">
            <button onClick={this.handleLogout} className="button-secondary">
              logout
            </button>
          </div>
        </nav>
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
