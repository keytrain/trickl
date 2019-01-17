import React, { Component } from "react";
import { connect } from "react-redux";
import { createThoughtRequest } from "../../actions/thoughtActions";

import "./Thought.css";
class ThoughtComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      draft: "",
      dirty: false,
    };

    this.textArea = React.createRef();
  }

  componentDidMount() {
    this.refreshHeight();
  }

  componentDidUpdate() {
    const { thought } = this.props;
  }

  refreshHeight() {
    this.textArea.current.style.height = "auto";
    const newHeight = this.textArea.current.scrollHeight;
    this.textArea.current.style.height = newHeight + "px";
  }

  saveEntry = () => {
    const { parentId, createThought } = this.props;
    const { draft } = this.state;
    createThought(parentId, draft);
    this.setState({ dirty: false });
  };

  resetEntry = () => {
    this.setState({ draft: "", dirty: false });
  };

  handleEntry = e => {
    const { value } = e.target;
    this.refreshHeight();
    this.setState({ draft: value, dirty: true });
  };

  render() {
    const { thought } = this.props;
    const { draft, dirty } = this.state;
    return (
      <div className="entry-container">
        <textarea
          ref={this.textArea}
          rows="1"
          className="entry"
          onChange={this.handleEntry}
          value={dirty ? draft : thought}
        />
        {dirty && (
          <div className="entry-actions">
            <button className="button-secondary" onClick={this.resetEntry}>
              Cancel
            </button>
            <button className="button-secondary" onClick={this.saveEntry}>
              Save
            </button>
          </div>
        )}
        {/* <div className="timestamp">
          <small>{thought.timestamp}</small>
        </div> */}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createThought: (thoughtRoot, text) =>
    dispatch(createThoughtRequest({ thoughtRoot, text })),
});

export default connect(
  null,
  mapDispatchToProps
)(ThoughtComponent);
