import React, { Component } from "react";
import { connect } from "react-redux";

import gLib from "../../util/generalLibrary";
import { setAuthenticated, logoutUser } from "../../actions/currentUserActions";
import Thought from "./Thought";

import "./Dash.css";

class DashComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeline: [
        {
          date: new Date(),
          content: [],
        },
      ],
    };
  }

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

  addMessage = () => {
    this.setState(prevState => {
      let today = new Date();

      if (today.toDateString() === prevState.timeline[0].date.toDateString()) {
        prevState.timeline[0].content.unshift({
          timestamp: `${gLib.pad(today.getHours(), 2)}:${gLib.pad(
            today.getMinutes(),
            2
          )}:${gLib.pad(today.getSeconds(), 2)}`,
          message: "A message",
        });
      } else {
        prevState.timeline.unshift({
          date: new Date(),
          content: [],
        });
      }
      this.forceUpdate();
    });
  };

  handleEntry = e => {
    const { style } = e.target;
    style.height = "auto";
    const newHeight = e.target.scrollHeight;
    style.height = newHeight + "px";
  };

  handleLogout = event => {
    event.preventDefault();
    const { logout } = this.props;
    logout();
  };

  render() {
    const { timeline } = this.state;

    return (
      <div className="wrapper">
        <nav>
          <button className="add" onClick={this.addMessage}>
            +
          </button>
          <div className="user">
            <button onClick={this.handleLogout} className="button-secondary">
              logout
            </button>
          </div>
        </nav>       
        {/* <div className="topics">
          <small>...</small>
          <div>
            webdev <small>...</small>
          </div>
          <div className="subtopic">
            trickl <small>...</small>
          </div>
        </div> */}

        <div className="content">
          {/* <div className="tags">#tags</div> */}
          {/* <div className="views">views</div> */}
          {/* <div className="">
            <textarea className="topic">topic</textarea>
          </div> */}
          {/* <div className="topic-actions">
            <span onClick={this.addMessage}>Add Entry</span>
          </div> */}
          {timeline.map(e => (
            <div key={e.date}>
              {/* <div className="date">
                <small>{e.date.toDateString()}</small>
              </div> */}
              {e.content.map((e, index) => (
                <Thought
                  key={index}
                  thought={e}
                  handleEntry={this.handleEntry}
                />
              ))}
            </div>
          ))}
        </div>
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    currentUser: {
      session: { authenticated },
    },
  } = state;
  return {
    authenticated,
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
