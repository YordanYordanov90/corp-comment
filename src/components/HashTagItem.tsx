type HashTagItemProps = {
  onClick: (text: string) => void;
  company: string;
};
const HashTagItem = ({ onClick, company }: HashTagItemProps) => {
  return (
    <li key={company}>
      <button onClick={() => onClick(company)}>{company}</button>
    </li>
  );
};

export default HashTagItem;
