import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { editThoughtRequest, delThoughtRequest } from "../../actions/thoughtActions";

import "./Thought.css";
function ThoughtComponent({ parentId, editThought, delThought, index, thought }) {
  const [draft, setDraft] = useState(thought);
  const [dirty, setDirty] = useState(false);

  const textArea = useRef(null);

  // refreshHeight() {
  //   this.textArea.current.style.height = "inherit";
  //   if (this.textArea.current.style.height === this.textArea.current.scrollHeight + "px") {
  //     return;
  //   }
  //   let newHeight = this.textArea.current.scrollHeight;
  //   if (newHeight > 499) {
  //     this.textArea.current.style.overflowY = "scroll";
  //   } else {
  //     this.textArea.current.style.overflowY = "hidden";
  //     newHeight = this.textArea.current.scrollHeight;
  //   }
  //   this.textArea.current.style.height = newHeight + "px";
  // }

  function saveEntry() {
    editThought(parentId, index, draft);
    setDirty(false);
  }

  function resetEntry() {
    setDirty(false);
    setDraft(thought);
  }

  function handleEntry(e) {
    const { value } = e.target;
    if (!dirty) setDirty(true);
    setDraft(value);
  }

  function deleteEntry() {
    delThought(parentId, index);
  }

  function focusTextArea() {
    textArea.current.blur();
    textArea.current.focus();
  }

  function handleKey(e) {
    const caretStart = textArea.current.selectionStart;
    const caretEnd = textArea.current.selectionEnd;
    // console.log(e.keyCode);
    if (e.ctrlKey) {
      switch (e.keyCode) {
        case 83:
          // s
          e.preventDefault();
          saveEntry();
          break;
        case 88:
          // cut
          e.preventDefault();
          break;
        case 90:
          // z
          focusTextArea();
          break;
        default:
      }
    } else {
      switch (e.keyCode) {
        case 9:
          // tab
          e.preventDefault();
          if (caretStart === caretEnd) {
            focusTextArea();
            insertTab(2);
          }
          break;
        case 27:
          // esc
          resetEntry();
          textArea.current.blur();
          break;
        default:
      }
    }
  }

  function insertTab(tabLength) {
    document.execCommand("insertText", false, "  ");
  }

  function handleTextAreaStyle() {
    let finalCSS = {};
    if (!draft) finalCSS.border = "1px dashed #ddd";
    return finalCSS;
  }

  return (
    <div className="entry-container">
      <textarea
        ref={textArea}
        rows="1"
        className={`entry ${dirty ? "entry-dirty" : ""}`}
        style={handleTextAreaStyle()}
        onChange={handleEntry}
        value={draft}
        autoCapitalize="none"
        spellCheck="false"
        onKeyUp={handleKey}
      />
      <div className="entry-actions">
        {dirty && (
          <>
            <button className="button-secondary" onClick={saveEntry}>
              Save
            </button>
            <button className="button-secondary" onClick={resetEntry}>
              Cancel
            </button>
            <button className="button-secondary" onClick={deleteEntry}>
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  editThought: (id, index, text) => dispatch(editThoughtRequest({ id, index, text })),
  delThought: (id, index) => dispatch(delThoughtRequest({ id, index })),
});

export default connect(null, mapDispatchToProps)(ThoughtComponent);
