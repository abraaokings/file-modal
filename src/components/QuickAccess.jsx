import IconFiles from "../assets/images/IconFiles";
import IconPeople from "../assets/images/IconPeople";
import IconSetting from "../assets/images/IconSetting";

const QuickAccess = () => {
  const data = [
    { id: 1, title: "All", numberFile: "8" },
    { id: 2, image: <IconFiles />, title: "Files", numberFile: "6" },
    { id: 3, image: <IconPeople />, title: "People", numberFile: "3" },
  ];
  return (
    <div className="qa-content">
      <div className="qa-container">
        {data.map((item) => (
          <div key={item.id} className="qa-wrapper">
            {item.image && item.image}
            <span>{item.title}</span>
            <span className="qa-number-file">{item.numberFile}</span>
          </div>
        ))}
      </div>
      <IconSetting />
    </div>
  );
};

export default QuickAccess;
