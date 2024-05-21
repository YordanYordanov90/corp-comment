import { useState } from "react";
const MAX_CHARS = 150;
const FeedbackForm = () => {
  const [text, setText] = useState("");
  const charsLeft = MAX_CHARS - text.length;
  return (
    <form className="form">
      <textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        id="feedback-textarea"
        placeholder=""
        spellCheck={false}
        maxLength={MAX_CHARS}
      />
      <label htmlFor="feedback-textarea">Enter your feedback here</label>
      <div>
        <p className="u-italic">{charsLeft}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
};

export default FeedbackForm;
