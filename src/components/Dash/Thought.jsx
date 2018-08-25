import React, { Component } from "react"

class ThoughtComponent extends Component {
  render() {
    const { thought, handleEntry } = this.props
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
        {/* <div className="timestamp">
          <small>{thought.timestamp}</small>
        </div> */}
      </div>
    )
  }
}

export default ThoughtComponent
