import { TriangleUpIcon } from "@radix-ui/react-icons";

const FeedbackList = () => {
  return (
    <ol className="feedback-list">
      <li className="feedback">
        <button>
          <TriangleUpIcon />
          <span>593</span>
        </button>
        <div>
          <p>B</p>
        </div>
        <div>
          <p>D.Yordanov</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            alias incidunt dolores, excepturi reprehenderit fugiat?
          </p>
        </div>
        <p>4</p>
      </li>
    </ol>
  );
};

export default FeedbackList;
