import React from "react";
import Title from "../components/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import User from "../components/User";
import clavierImage from "../assets/clavier.jpg";

import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <main>
      <div
        className="p-3 bg-image bg-contact container"
        style={{ backgroundImage: `url(${clavierImage})` }}
      >
        <div className="mx-3 mb-5 px-5 card">
          <Title
            title="Me contacter"
            text="Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact."
          />
          <div className="row text-start mb-5">
            <div className="col-md-6 px-4">
              <h2>Formulaire de contact</h2>
              <hr className="border border-primary border-1 opacity-100" />
              <form action="#">
                <div className="row">
                  <input
                    className="m-2 rounded"
                    name="name"
                    type="text"
                    placeholder="Votre nom"
                    required
                    autoComplete="name"
                  />
                  <input
                    className="m-2 rounded"
                    name="email"
                    type="email"
                    placeholder="Votre adresse email"
                    required
                    autoComplete="mail"
                  />
                  <input
                    className="m-2 rounded"
                    name="phone"
                    type="tel"
                    placeholder="Votre numéro de téléphone"
                    required
                    autoComplete="phone"
                  />
                  <input
                    className="m-2 rounded"
                    name="object"
                    type="text"
                    placeholder="Sujet"
                    required
                  />
                  <textarea
                    className="m-2 rounded"
                    name="message"
                    type="text"
                    rows="5"
                    placeholder="Votre message"
                    required
                  />
                  <div className="text-center ">
                    <button className="btn btn-primary m-2" type="submit">
                      Envoyer
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-6 px-4">
              <h2>Mes coordonnées</h2>
              <hr className="border border-primary border-1 opacity-100" />
              <div>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ color: "#444" }}
                />
                <address style={{ display: "inline" }}>
                  <Link
                    to="https://maps.app.goo.gl/L6rbq1wzeTKh7EzC9"
                    target="_blank"
                  > {User.adresse1}, {User.adresse2}
                  </Link>
                </address>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faMobileScreenButton}
                  style={{ color: "#444" }}
                />
                <Link to="tel: 06.20.30.40.50"> {User.tel}</Link>
              </div>
              <div className="mt-2">
                <iframe
                  title="Carte de l'adresse de John Doe"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6269657540984!2d4.796403976654687!3d45.778665712401626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1697399358793!5m2!1sfr!2sfr"
                  style={{ border: 0, width: "100%", height: "250px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
