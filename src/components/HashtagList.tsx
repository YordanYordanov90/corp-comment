import HashTagItem from "./HashTagItem";

type HashtagListProps = {
  handleSelectedCompany: (text: string) => void;
  companyList: string[];
};
const HashtagList = ({
  companyList,
  handleSelectedCompany,
}: HashtagListProps) => {
  return (
    <ul className="hashtags">
      {companyList.map((company) => {
        return (
          <HashTagItem
            key={company}
            company={company}
            onClick={handleSelectedCompany}
          />
        );
      })}
    </ul>
  );
};

export default HashtagList;
