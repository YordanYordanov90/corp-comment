import { useState } from "react";

import { MAX_CHARS } from "../lib/constants";

type FeedbackFormProps = {
  handleItemList: (text: string) => void;
};

const FeedbackForm = ({ handleItemList }: FeedbackFormProps) => {
  const [text, setText] = useState("");
  const charsLeft = MAX_CHARS - text.length;
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;

    if (newText.length > MAX_CHARS) {
      return;
    }
    setText(newText);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleItemList(text);
    setText("");
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <textarea
        value={text}
        onChange={handleChange}
        id="feedback-textarea"
        placeholder=""
        spellCheck={false}
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
