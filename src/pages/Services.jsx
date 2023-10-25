import React from "react";
import CompService from "../components/CompService";
import Title from "../components/Title";

import { faDisplay } from "@fortawesome/free-solid-svg-icons";
import { faFileCode } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlassDollar } from "@fortawesome/free-solid-svg-icons";
import banner from "../assets/banner.jpg";

const Services = () => {
  return (
    <main>
      <img
        src={banner}
        alt="Fond bleu avec des lignes de lumiere blanches"
        className="img-fluid"
      />
      <Title
        title="Mon offre de services"
        text="Voici les prestations sur lesquelles je peux intervenir."
      />
      <div className="mb-5 p-md-5 p-2 row">
        <article className="col-md-4 my-1">
          <CompService
            icon={faDisplay}
            title="UX Design"
            text={
              <span>
                L'<strong>UX Design</strong> est une méthode de conception
                centrée sur l'utilisateur. Son but est d'offrir une expérience
                de navigation optimale à l'internaute.
              </span>
            }
          />
        </article>
        <article className="col-md-4 my-1">
          <CompService
            icon={faFileCode}
            title="Développement web"
            text={
              <span>
                Le <strong>développment de sites web</strong> repose sur
                l'utilisation des langages <span className="dotted">HTML</span>,
                <span className="dotted"> CSS</span>, JavaScipt 
                et <span className="dotted">PHP</span>.
              </span>
            }
          />
        </article>
        <article className="col-md-4 my-1">
          <CompService
            icon={faMagnifyingGlassDollar}
            title="Référencement"
            text={
              <span>
                Le <strong>référencement naturel d'un site</strong>, aussi
                appelé <span className="dotted">SEO</span>, consiste à mettre
                des techniques en oeuvre pour améliorer sa position dans les
                résultats des moteurs de recherche.
              </span>
            }
          />
        </article>
      </div>
    </main>
  );
};

export default Services;
