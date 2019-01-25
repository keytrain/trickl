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
      isEntryClosed: true,
    };

    this.textArea = React.createRef();
  }

  componentDidMount() {
    this.refreshHeight();
  }

  componentDidUpdate() {
    this.refreshHeight();
  }

  refreshHeight() {
    this.textArea.current.style.height = "inherit";
    if (
      this.textArea.current.style.height ===
      this.textArea.current.scrollHeight + "px"
    ) {
      return;
    }
    let newHeight = this.textArea.current.scrollHeight;
    if (newHeight > 499) {
      this.textArea.current.style.overflowY = "scroll";
    } else {
      this.textArea.current.style.overflowY = "hidden";
      newHeight = this.textArea.current.scrollHeight;
    }
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
    this.setState({ draft: thought, dirty: false }, () => {
      this.refreshHeight();
    });
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

  focusTextArea = () => {
    this.textArea.current.blur();
    this.textArea.current.focus();
  };

  handleKeyDown = e => {
    const caretStart = this.textArea.current.selectionStart;
    const caretEnd = this.textArea.current.selectionEnd;
    console.log(e.keyCode);
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
        case 90:
          // z
          this.focusTextArea();
          break;
        default:
      }
    } else {
      switch (e.keyCode) {
        case 9:
          // tab
          e.preventDefault();
          if (caretStart === caretEnd) {
            this.focusTextArea();
            this.insertTab(2);
          }
          break;
        case 27:
          // esc
          this.resetEntry();
          this.textArea.current.blur();
          break;
        default:
      }
    }
  };

  insertTab = tabLength => {
    document.execCommand("insertText", false, "  ");
  };

  handleTextAreaStyle = () => {
    const { draft } = this.state;
    let finalCSS = {};
    if (!draft) finalCSS.border = "1px dashed #ddd";
    return finalCSS;
  };

  checkEntryClosed = () => {
    if (this.state.isEntryClosed) {
      return "entry entry-closed";
    }
    return "entry";
  };

  render() {
    const { draft, dirty, isEntryClosed } = this.state;
    return (
      <div
        className="entry-container"
        onClick={() => {
          this.setState({ isEntryClosed: false });
        }}
      >
        <textarea
          ref={this.textArea}
          rows="1"
          className={this.checkEntryClosed()}
          style={this.handleTextAreaStyle()}
          disabled={isEntryClosed}
          onChange={this.handleEntry}
          value={draft}
          autoCapitalize="none"
          spellCheck="false"
          onKeyDown={this.handleKeyDown}
        />
        {!isEntryClosed && (
          <div
            className="close-entry"
            onClick={e => {
              e.stopPropagation();
              this.setState({ isEntryClosed: true });
            }}
          />
        )}
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
