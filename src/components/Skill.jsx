const Skill = (props) => {
  return (
    <div>
      <div>
        {props.skill} {props.progress}%
      </div>
      <div className="progress mb-3">
        <div
          className={`progress-bar bg-${props.color}`}
          role="progressbar"
          aria-label={props.skill}
          style={{ width: props.progress + "%" }}
          aria-valuenow={props.progress}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
};

export default Skill;
