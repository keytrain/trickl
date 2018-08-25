import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class AuthComponent extends Component {
  render() {
    const { authenticated } = this.props;
    if (authenticated) {
      return <Redirect to={"/dash"} />;
    } else {
      return <Redirect to={"/login"} />;
    }
  }
}

const mapStateToProps = state => {
  const {
    currentUser: { authenticated },
  } = state;
  return {
    authenticated,
  };
};

export default connect(mapStateToProps)(AuthComponent);
