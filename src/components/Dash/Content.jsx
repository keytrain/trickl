import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Thought from "./Thought";

import "./Content.css";

class ContentComponent extends Component {
  render() {
    const { thoughtRoot, currColumnText, currThought } = this.props;
    return (
      <div className="content">
        {currColumnText.length > 0 && currThought !== null ? (
          <Fragment>
            <Thought
              parentId={thoughtRoot}
              thought={
                currColumnText[currThought].text
                  ? currColumnText[currThought].text
                  : ""
              }
              index={currThought}
              key={currColumnText[currThought].id}
            />
          </Fragment>
        ) : (
          <div className="loading-content" />
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
    data: { currColumnText, currThought },
  } = state;
  return {
    currColumnText,
    currThought,
    thoughtRoot,
  };
};

export default connect(mapStateToProps)(ContentComponent);
