import React from "react";
import { connect } from "react-redux";

import "./Tile.css";
import { setCurrentThought } from "../../actions/thoughtActions";

function TileComponent({ currThoughtIndex, index, thought, setThought }) {
  return (
    <div
      className="tile-container"
      onClick={() => {
        setThought(index);
      }}
    >
      <div className={`tile ${index === currThoughtIndex ? "tile-selected" : ""}`}>
        {thought.length > 0 ? thought : "untitled"}
      </div>
      {/* <div className="timestamp">
          <small>{thought.timestamp}</small>
        </div> */}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setThought: (index) => dispatch(setCurrentThought({ index })),
});

const mapStateToProps = (state) => {
  const {
    data: { currThought },
  } = state;
  return {
    currThoughtIndex: currThought,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TileComponent);
