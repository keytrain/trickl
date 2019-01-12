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
    const { thoughtRoot, currColumnText } = this.props;
    return (
      <div>
        {currColumnText &&
          currColumnText.map((text, idx) => (
            <Thought parentId={thoughtRoot} thought={text} key={idx} />
          ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    currentUser: {
      userData: { thoughtRoot },
    },
    data: { currColumnText },
  } = state;
  console.log(currColumnText);
  return {
    currColumnText,
    thoughtRoot,
  };
};

export default connect(mapStateToProps)(ColumnComponent);
