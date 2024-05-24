import { useState } from "react";
import { TriangleUpIcon } from "@radix-ui/react-icons";
import { TFeedbackItem } from "../lib/type";

type FeedbackItemProps = { feedbackItem: TFeedbackItem };

const FeedbackItem = ({ feedbackItem }: FeedbackItemProps) => {
  const [open, setOpen] = useState(false);
  const [upVoteCount, setUpVoteCount] = useState(feedbackItem.upVoteCount);

  const handleUpVote = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setUpVoteCount((prev) => ++prev);
    e.currentTarget.disabled = true;
    e.stopPropagation();
  };

  return (
    <li
      onClick={() => setOpen((prev) => !prev)}
      className={`feedback ${open ? "feedback--expand" : ""}`}
    >
      <button onClick={handleUpVote}>
        <TriangleUpIcon />
        <span>{upVoteCount}</span> {/* Update to use upVoteCount state */}
      </button>
      <div>
        <p>{feedbackItem.badgeLetter}</p>
      </div>
      <div>
        <p>{feedbackItem.company}</p>
        <p>{feedbackItem.text}</p>
      </div>
      <p>{feedbackItem.daysAgo === 0 ? "NEW" : `${feedbackItem.daysAgo} d`} </p>
    </li>
  );
};

export default FeedbackItem;
