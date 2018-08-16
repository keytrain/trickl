import React, { Component } from "react"
import { connect } from "react-redux"

import gLib from "../../util/generalLibrary"
import { setAuthenticated, logoutUser } from "../../actions/currentUserActions"

class DashComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timeline: [
        {
          date: new Date(),
          content: [],
        },
      ],
    }
  }

  componentDidMount() {
    const { authenticated } = this.props
    if (!authenticated) {
      this.props.history.push("/login")
    }
  }

  componentDidUpdate() {
    const { authenticated } = this.props
    if (!authenticated) {
      this.props.history.push("/")
    }
  }

  addMessage = () => {
    this.setState(prevState => {
      let today = new Date()

      if (today.toDateString() === prevState.timeline[0].date.toDateString()) {
        prevState.timeline[0].content.unshift({
          timestamp: `${gLib.pad(today.getHours(), 2)}:${gLib.pad(
            today.getMinutes(),
            2
          )}:${gLib.pad(today.getSeconds(), 2)}`,
          message: "A message",
        })
      } else {
        prevState.timeline.unshift({
          date: new Date(),
          content: [],
        })
      }
      this.forceUpdate()
    })
  }

  handleEntry = e => {
    // e.target.style.height = "auto";
    // e.target.style.height = e.target.scrollHeight + "px";
  }

  handleLogout = event => {
    event.preventDefault()
    const { logout } = this.props
    logout()
  }

  render() {
    const { timeline } = this.state

    return (
      <div className="wrapper">
        <nav>
          <div className="logo">trickl</div>

          <div className="user">
            <button onClick={this.handleLogout} className="button-secondary">
              logout
            </button>
          </div>
        </nav>
        <div className="topics">
          <small>...</small>
          <div>
            webdev <small>...</small>
          </div>
          <div className="subtopic">
            trickl <small>...</small>
          </div>
        </div>
        <div className="content">
          <div className="topic-title">
            <h5>trickl</h5>
          </div>
          <div className="topic-actions">
            <button onClick={this.addMessage}>Add Entry</button>
          </div>
          {timeline.map(e => (
            <div key={e.date}>
              <div className="date">
                <small>{e.date.toDateString()}</small>
              </div>
              {e.content.map(e => (
                <div key={e.timestamp} className="entry-container">
                  <div className="timestamp">
                    <small>{e.timestamp}</small>
                  </div>
                  <div
                    contentEditable
                    className="entry"
                    onChange={this.handleEntry}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {
    currentUser: {
      session: { authenticated },
    },
  } = state
  return {
    authenticated,
  }
}

const mapDispatchToProps = dispatch => ({
  setAuth: status => dispatch(setAuthenticated(status)),
  logout: () => dispatch(logoutUser()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashComponent)
