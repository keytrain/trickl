import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { connect } from "react-redux"

import Auth from "./Auth/Auth"
import Login from "./Login/Login"
import Dash from "./Dash/Dash"
import NotFound from "./NotFound"

import "./App.css"
import { loadSession } from "../actions/currentUserActions"

class AppComponent extends Component {
  componentDidMount() {
    const { init } = this.props
    init()
  }

  render() {
    const { isLoadingSession } = this.props
    return (
      <Router>
        {isLoadingSession ? (
          <div>...</div>
        ) : (
          <Switch>
            <Route exact path="/" component={Auth} />
            <Route path="/dash" component={Dash} />
            <Route path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>
        )}
      </Router>
    )
  }
}

const mapStateToProps = state => {
  const {
    currentUser: {
      session: { loading },
    },
  } = state
  return { isLoadingSession: loading }
}

const mapDispatchToProps = dispatch => ({
  init: () => dispatch(loadSession()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent)
