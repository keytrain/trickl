import React, { Component } from "react";
import { connect } from "react-redux";

import Thought from "./Thought";

import "./Dash.css";

class ColumnComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // timeline: [
      //   {
      //     date: new Date(),
      //     content: [],
      //   },
      // ],
      thoughts: props.children,
    };
  }

  addMessage = () => {
    // this.setState(prevState => {
    //   let today = new Date();
    //   if (today.toDateString() === prevState.timeline[0].date.toDateString()) {
    //     prevState.timeline[0].content.unshift({
    //       timestamp: `${gLib.pad(today.getHours(), 2)}:${gLib.pad(
    //         today.getMinutes(),
    //         2
    //       )}:${gLib.pad(today.getSeconds(), 2)}`,
    //       message: "A message",
    //     });
    //   } else {
    //     prevState.timeline.unshift({
    //       date: new Date(),
    //       content: [],
    //     });
    //   }
    //   this.forceUpdate();
    // });
  };

  render() {
    const { thoughtRoot } = this.props;
    const { thoughts } = this.state;
    return (
      <div>
        {thoughts.map(thought => (
          <Thought
            parentId={thoughtRoot}
            thought={thought.content.text}
            key={thought.id}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    data: {
      thoughts: { children },
    },
    currentUser: {
      userData: { thoughtRoot },
    },
  } = state;
  return {
    children,
    thoughtRoot,
  };
};

export default connect(mapStateToProps)(ColumnComponent);
