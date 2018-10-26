import React, { Component } from "react";

import "./Thought.css";

class ThoughtComponent extends Component {
  render() {
    const { thought, handleEntry } = this.props;
    return (
      <div className="entry-container">
        {/* <div
      contentEditable
      className="entry"
      onChange={this.handleEntry}
    /> */}
        <textarea
          rows="1"
          className="entry"
          onChange={handleEntry}
          // value={thought.message}
        />
        <div className="meta">
          <span>{thought.timestamp}</span>
        </div>
      </div>
    );
  }
}

export default ThoughtComponent;
