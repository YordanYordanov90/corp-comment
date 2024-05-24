import { useEffect, useMemo, useState } from "react";
import Container from "./Container";
import Footer from "./Footer";
import HashtagList from "./HashtagList";
import { TFeedbackItem } from "../lib/type";

function App() {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");

  const filteredFeedbackItems =useMemo(() => selectedCompany
    ? feedbackItems.filter((item) => item.company === selectedCompany)
    : feedbackItems, [feedbackItems, selectedCompany])

  const companyList =useMemo(() => feedbackItems
    .map((item) => item.company)
    .filter((company, index, array) => {
      return array.indexOf(company) === index;
    }),[feedbackItems]);

  const handleSelectedCompany = (text: string) => {
    setSelectedCompany(text);
  };

  const handleItemList = async (text: string) => {
    const companyName = text
      .split(" ")
      .find((word) => word.includes("#"))!
      .substring(1);

    const newItem: TFeedbackItem = {
      id: new Date().getTime(),
      text: text,
      upVoteCount: 0,
      daysAgo: 0,
      company: companyName,
      badgeLetter: companyName.substring(0, 1).toUpperCase(),
    };
    setFeedbackItems([...feedbackItems, newItem]);
    await fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
      {
        method: "POST",
        body: JSON.stringify(newItem),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
  };

  const fetchFeedbacks = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
      );
      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      setFeedbackItems(data.feedbacks);
    } catch (error) {
      setErrorMessage("Failed to fetch feedbacks");
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchFeedbacks();
    //
  }, []);

  return (
    <div className="app">
      <Footer />
      <Container
        feedbackItems={filteredFeedbackItems}
        isLoading={isLoading}
        errorMessage={errorMessage}
        handleItemList={handleItemList}
      />
      <HashtagList
        handleSelectedCompany={handleSelectedCompany}
        companyList={companyList}
      />
    </div>
  );
}

export default App;
