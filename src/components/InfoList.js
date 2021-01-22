import mydata from "../data";
import TimeLine from "./TimeLine";

const InfoList = () => {
  const infolist = mydata.map((data) => {
    return <TimeLine key={data.id} data={data} />;
  });
  return (
    <ul className="timeline">
      {infolist}
      <li className="timeline-inverted">
        <div className="timeline-image"></div>
      </li>
    </ul>
  );
};

export default InfoList;
