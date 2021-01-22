const TimeLine = (props) => {
  let inverse;
  if (props.data.id % 2) {
    inverse = "timeline-inverted";
  } else inverse = "";

  return (
    <li className={inverse}>
      <div className="timeline-image">
        <img
          className="rounded-circle img-fluid"
          src={props.data.image}
          alt={props.data.image}
        />
      </div>

      <div className="timeline-panel">
        <div className="timeline-heading">
          <h4>{props.data.date}</h4>
          <h4 className="subheading">{props.data.title}</h4>
        </div>

        <div className="timeline-body">
          <p className="text-muted">{props.data.description}</p>
        </div>
      </div>
    </li>
  );
};

export default TimeLine;
