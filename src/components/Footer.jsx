import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import github from "../assets/icones/github.png";
import twitter from "../assets/icones/twitter.png";
import linkedin from "../assets/icones/linkedin.png";
import User from "./User";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Arrow = () => {
  return <FontAwesomeIcon icon={faChevronRight} style={{ color: "#0d6efd" }} />;
};

const Footer = () => {
  const [link, setLink] = useState([]);
  const getLink = async () => {
    const reponse = await fetch("https://api.github.com/users/github-john-doe");
    const json = await reponse.json();
    setLink(json);
  };
  useEffect(() => {
    getLink();
  }, []);

  return (
    <footer>
      <div className="row bg-footer p-5 text-start">
        <section className="col-md-6 col-lg-3">
          <address>
            <h2 className="my-2">
              {User.firstName} {User.lastName}
            </h2>
            <a
              href="https://maps.app.goo.gl/L6rbq1wzeTKh7EzC9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>{User.adresse1}</p>
              <p>{User.adresse2}</p>
            </a>
            <a href={`tel: ${User.tel}`}>Téléphone : {User.tel}</a>
          </address>
          <div>
            <a href={link.html_url} target="_blank" rel="noopener noreferrer">
              <img src={github} alt="logo de Github" className="mx-2" width={24} height={24}/>
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="logo de Twitter" className="mx-2" width={24} height={24}/>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="logo de Linkedin" className="mx-2" width={24} height={24}/>
            </a>
          </div>
        </section>
        <section className="col-md-6 col-lg-3">
          <h2 className="my-2">Liens utiles</h2>
          <ul className="px-2">
            <li>
              <Link to="/">
                <Arrow /> Accueil
              </Link>
            </li>
            <li>
              <a href="/#about">
                <Arrow /> A propos
              </a>
            </li>
            <li>
              <Link to="/services">
                <Arrow /> Services
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <Arrow /> Me contacter
              </Link>
            </li>
            <li>
              <Link to="/legal" rel="noopener noreferrer">
                <Arrow /> Mentions Légales
              </Link>
            </li>
          </ul>
        </section>
        <section className="col-md-6 col-lg-3">
          <h2 className="my-2">Mes dernières réalisations</h2>
          <ul className="px-2">
            <li>
              <a href="/projects#fresh-food">
                <Arrow /> Fresh food
              </a>
            </li>
            <li>
              <a href="/projects#restaurant-akira">
                <Arrow /> Restaurant Akira
              </a>
            </li>
            <li>
              <a href="/projects#espace-bien-etre">
                <Arrow /> Espace bien-être
              </a>
            </li>
          </ul>
        </section>
        <section className="col-md-6 col-lg-3">
          <h2 className="my-2">Mes derniers articles</h2>
          <ul className="px-2">
            <li>
              <a href="/blog/#coder-html-css">
                <Arrow /> Coder son site en HTML/CSS
              </a>
            </li>
            <li>
              <a href="/blog/#vendre-sur-web">
                <Arrow /> Vendre ses produits sur le web
              </a>
            </li>
            <li>
              <a href="/blog/#se-positionner-sur-google">
                <Arrow /> Se positionner sur Google
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div className="bg-dark text-light p-3">
        <small>
          &copy; Designed by {User.firstName} {User.lastName}
        </small>
      </div>
    </footer>
  );
};

export default Footer;
