import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const CompService = (props) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const iconColor = isHover ? "#cde1f8" : "#0d6efd";

  return (
    <div
      className="card shadow py-5 m-1 h-100"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <FontAwesomeIcon
        icon={props.icon}
        className="icon"
        size="2xl"
        style={{ color: iconColor }}
      />
      <div className="card-body">
        <h5 className="card-title text-uppercase">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <Link href={props.refLink} className={props.classButton}>
          {props.button}
        </Link>
      </div>
    </div>
  );
};

export default CompService;
