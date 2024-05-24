import { TFeedbackItem } from "../lib/type";
import FeedbackList from "./FeedbackList";
import Header from "./Header";

type ContainerProps = {
  feedbackItems: TFeedbackItem[];
  isLoading: boolean;
  errorMessage: string;
  handleItemList: (text: string) => void;
};

const Container = ({
  feedbackItems,
  isLoading,
  errorMessage,
  handleItemList,
}: ContainerProps) => {
  return (
    <main className="container">
      <Header handleItemList={handleItemList} />
      <FeedbackList
        feedbackItems={feedbackItems}
        isLoading={isLoading}
        errorMessage={errorMessage}
      />
    </main>
  );
};

export default Container;
