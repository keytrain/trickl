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
      hasEmpty: false,
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
    this.addMessage();
  }

  componentDidUpdate() {
    const { authenticated } = this.props;
    if (!authenticated) {
      this.props.history.push("/");
    }
  }

  addMessage = () => {
    const { hasEmpty } = this.state;
    if (!hasEmpty) {
      this.setState(prevState => {
        prevState.hasEmpty = true;
        let today = new Date();

        if (
          today.toDateString() === prevState.timeline[0].date.toDateString()
        ) {
          prevState.timeline[0].content = [].concat(
            {
              timestamp: `${gLib.pad(today.getHours(), 2)}:${gLib.pad(
                today.getMinutes(),
                2
              )}:${gLib.pad(today.getSeconds(), 2)}`,
              message: "A message",
            },
            prevState.timeline[0].content
          );
          console.log(prevState.timeline[0].content);
        } else {
          prevState.timeline = [].concat(
            {
              date: new Date(),
              content: [],
            },
            prevState.timeline
          );
        }
      });
      this.forceUpdate();
    }
  };

  handleEntry = e => {
    const { style, value } = e.target;
    const { hasEmpty } = this.state;
    style.height = "auto";
    const newHeight = e.target.scrollHeight;
    style.height = newHeight + "px";
    if (hasEmpty && value.length) {
      this.setState({ hasEmpty: false });
    } else if (!hasEmpty && value.length === 0) {
      this.setState({ hasEmpty: true });
    }
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
          <div className="left" />
          <div className="logo">trickl</div>
          <div className="user">
            <div className="avatar" />
            <button onClick={this.handleLogout} className="button-secondary">
              logout
            </button>
          </div>
        </nav>
        <div className={"menu"}>
          <button className="add" onClick={this.addMessage}>
            text
          </button>
          <button className="add" onClick={this.addMessage}>
            category
          </button>
          <button className="add" onClick={this.addMessage}>
            progress
          </button>
        </div>
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
