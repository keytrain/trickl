import React from "react";
import { connect } from "react-redux";

import Tile from "./Tile";

import "./Column.css";
import { addThoughtRequest } from "../../actions/thoughtActions";

function ColumnComponent({ addThought, currColumnText, thoughtRoot }) {
  function addNewThought() {
    addThought(thoughtRoot, null);
  }

  return (
    <div className="column-container">
      {currColumnText ? (
        <>
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
            <button className="add-thought-button" onClick={addNewThought}>
              new note
            </button>
          </div>
        </>
      ) : (
        <div className="loading-content">Loading thoughts...</div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  const {
    currentUser: {
      userData: { thoughtRoot },
    },
    data: { currColumnText },
    ui: { collapseSidebar },
  } = state;
  return {
    currColumnText,
    collapseSidebar,
    thoughtRoot,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addThought: (id, text) => dispatch(addThoughtRequest({ id, text })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ColumnComponent);
