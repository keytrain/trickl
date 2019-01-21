import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Thought from "./Thought";

import "./Column.css";
import { addThoughtRequest } from "../../actions/thoughtActions";

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

  addThought = () => {
    const { addThought, thoughtRoot } = this.props;
    addThought(thoughtRoot, " ");
  };

  render() {
    const { thoughtRoot, currColumnText } = this.props;
    return (
      <div>
        {currColumnText ? (
          <Fragment>
            <div>
              {currColumnText.map((text, idx) => (
                <Thought
                  parentId={thoughtRoot}
                  thought={text}
                  index={idx}
                  key={idx}
                />
              ))}
            </div>
            <div className="add-thought-icon">
              <button className="button-secondary" onClick={this.addThought}>
                +
              </button>
            </div>
          </Fragment>
        ) : (
          <div className="loading-content">Loading thoughts...</div>
        )}
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
  return {
    currColumnText,
    thoughtRoot,
  };
};

const mapDispatchToProps = dispatch => ({
  addThought: (id, text) => dispatch(addThoughtRequest({ id, text })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColumnComponent);
