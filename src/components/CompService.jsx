import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CompService = (props) => {
  return (
    <div className="card shadow py-5 m-1 h-100 animate">
      <FontAwesomeIcon
        icon={props.icon}
        className="icon"
        size="2xl"
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
