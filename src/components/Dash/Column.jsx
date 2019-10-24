import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Tile from "./Tile";

import "./Column.css";
import { addThoughtRequest } from "../../actions/thoughtActions";

class ColumnComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  addThought = () => {
    const { addThought, thoughtRoot } = this.props;
    addThought(thoughtRoot, null);
  };

  render() {
    const { thoughtRoot, currColumnText } = this.props;
    return (
      <div className="column-container">
        {currColumnText ? (
          <Fragment>
            <div>
              {currColumnText.map((e, idx) => (
                <Tile
                  parentId={thoughtRoot}
                  thought={e.text ? e.text.split("\n")[0] : ""}
                  index={idx}
                  key={e.id}
                />
              ))}
            </div>
            <div className="add-thought-icon">
              <button
                className="button-secondary add-thought-button"
                onClick={this.addThought}
              >
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
