import React from "react";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import User from "../components/User";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Legal = () => {
  return (
    <main className="container">
      <Title title="Mentions Légales" />
      <div className="accordion shadow m-4" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Editeur du site
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body text-start">
              <address>
                <h3 className="mb-2">
                  {User.firstName} {User.lastName}
                </h3>
                <p className="m-2">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{ color: "#444" }}
                    className="m-1"
                  />
                  {User.adresse1}
                </p>
                <p className="m-2">{User.adresse2}</p>
                <p className="m-2">
                  <FontAwesomeIcon
                    icon={faMobileScreenButton}
                    style={{ color: "#444" }}
                  />{" "}
                  <strong>
                    <Link to={`tel: ${User.tel}`} className="text-primary">
                      {User.tel}
                    </Link>
                  </strong>
                </p>
                <p className="m-2">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ color: "#000444" }}
                  />{" "}
                  <strong>
                    <Link to={`mailto: ${User.mail}`} className="text-primary">
                      {User.mail}
                    </Link>
                  </strong>
                </p>
              </address>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Hébergeur
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body text-start">
              <address>
                <h3 className="mb-2">Always Data</h3>
                <p>91 rue du Faubourg Saint Honoré</p>
                <p>75008 Paris</p>
                <p className="mt-3">
                  <FontAwesomeIcon icon={faGlobe} style={{ color: "#444" }} />{" "}
                  <strong>
                    <Link
                      to="https://www.alwaysdata.com"
                      target="_blank"
                      className="text-primary"
                    >
                      www.alwaysdata.com
                    </Link>
                  </strong>
                </p>
              </address>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Crédits
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body text-start">
              <h3 className="mb-2">Crédits</h3>
              <p className="my-2">
                Site développé par {User.firstName} {User.lastName}, étudiant
                CEF.
              </p>
              <p className="my-2">
                Les images libres de droits sont issues du site{" "}
                <Link
                  className="text-primary"
                  target="_blank"
                  to="https://pixabay.com/"
                >
                  Pixabay
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Legal;
