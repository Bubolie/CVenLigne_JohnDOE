import { Link } from "react-router-dom";

const Cards = (props) => {
  return (
    <div className={`card shadow mx-auto  ${props.align}`}>
      <img
        src={props.image}
        alt={props.imageDescription}
        className="img-fluid"
      />
      <div className="card-body">
        <h5 className="card-title fs-3">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <Link to={props.refLink} className={`mt-3 ${props.classButton}`}>
          {props.button}
        </Link>
      </div>
      <div className="card-footer">{props.footer}</div>
    </div>
  );
};

export default Cards;
