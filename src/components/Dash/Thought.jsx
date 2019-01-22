import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  editThoughtRequest,
  delThoughtRequest,
} from "../../actions/thoughtActions";

import "./Thought.css";
class ThoughtComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      draft: props.thought,
      dirty: false,
      focus: false,
    };

    this.textArea = React.createRef();
  }

  componentDidMount() {
    this.refreshHeight();
  }

  refreshHeight() {
    this.textArea.current.style.height = "auto";
    const newHeight = this.textArea.current.scrollHeight;
    this.textArea.current.style.height = newHeight + "px";
  }

  saveEntry = () => {
    const { parentId, editThought, index } = this.props;
    const { draft } = this.state;
    editThought(parentId, index, draft);
    this.setState({ dirty: false });
  };

  resetEntry = () => {
    const { thought } = this.props;
    this.setState({ draft: thought, dirty: false });
  };

  handleEntry = e => {
    const { value } = e.target;
    this.refreshHeight();
    this.setState({ draft: value, dirty: true });
  };

  deleteEntry = () => {
    const { parentId, delThought, index } = this.props;
    delThought(parentId, index);
  };

  handleKeyDown = e => {
    this.textArea.current.blur();
    this.textArea.current.focus();
    const caretStart = this.textArea.current.selectionStart;
    const caretEnd = this.textArea.current.selectionEnd;
    if (e.ctrlKey) {
      switch (e.keyCode) {
        case 83:
          // s
          e.preventDefault();
          this.saveEntry();
          break;
        case 88:
          // cut
          e.preventDefault();
          break;
        default:
      }
    }
    if (e.keyCode === 9) {
      // tab
      e.preventDefault();
      if (caretStart === caretEnd) {
        this.insertTab(2);
      }
    }
  };

  insertTab = tabLength => {
    document.execCommand("insertText", false, "  ");
  };

  render() {
    const { draft, dirty } = this.state;
    return (
      <div className="entry-container">
        <textarea
          ref={this.textArea}
          rows="1"
          className="entry"
          onChange={this.handleEntry}
          value={draft}
          autoCapitalize="none"
          spellCheck="false"
          onKeyDown={this.handleKeyDown}
        />
        <div className="entry-actions">
          {dirty && (
            <Fragment>
              <button className="button-secondary" onClick={this.resetEntry}>
                Cancel
              </button>
              <button className="button-secondary" onClick={this.deleteEntry}>
                Delete
              </button>
              <button className="button-secondary" onClick={this.saveEntry}>
                Save
              </button>
            </Fragment>
          )}
        </div>
        {/* <div className="timestamp">
          <small>{thought.timestamp}</small>
        </div> */}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  editThought: (id, index, text) =>
    dispatch(editThoughtRequest({ id, index, text })),
  delThought: (id, index) => dispatch(delThoughtRequest({ id, index })),
});

export default connect(
  null,
  mapDispatchToProps
)(ThoughtComponent);
