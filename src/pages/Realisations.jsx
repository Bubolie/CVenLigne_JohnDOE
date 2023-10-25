import React from "react";
import Title from "../components/Title";
import Cards from "../components/Cards";

import vegetables from "../assets/portfolio/vegetable.png";
import sushi from "../assets/portfolio/sushi.png";
import spa from "../assets/portfolio/spa.png";
import banner from "../assets/banner.jpg";

const Realisations = () => {
  return (
    <main>
      <img
        src={banner}
        alt="Fond bleu avec des lignes de lumiere blanches"
        className="img-fluid"
      />

      <Title title="Portfolio" text="Voici quelques-unes de mes réalisations." />
      <div className="row px-md-5 px-2 mb-5 ">
        <div className="my-2 col-md-6 col-lg-4" id="fresh-food">
          <Cards
            align="text-center"
            image={vegetables}
            imageDescription="Plateau contenant un ensemble de légumes"
            title="Fresh food"
            text="Réalisation d'un site avec commande en ligne."
            refLink="#"
            classButton="btn btn-outline-primary"
            button="Voir"
            footer="Site réalisé avec PHP et MySQL"
          />
        </div>
        <div className="my-2 col-md-6 col-lg-4" id="restaurant-akira">
          <Cards
            align="text-center"
            image={sushi}
            imageDescription="Plateau de différente variété de sushi ball"
            title="Restaurant Akira"
            text="Réalisation d'un site vitrine."
            refLink="#"
            classButton="btn btn-outline-primary"
            button="Voir"
            footer="Site réalisé avec WordPress"
          />
        </div>
        <div className="my-2 col-md-6 col-lg-4" id="espace-bien-etre">
          <Cards
            align="text-center"
            image={spa}
            imageDescription="Serviette de toilette et une rangé de petites bougies allumées"
            title="Espace bien-être"
            text="Réalisation d'un site vitrine pour un patricien de bien-être"
            refLink="#"
            classButton="btn btn-outline-primary"
            button="Voir"
            footer="Site réalisé en HTML/CSS"
          />
        </div>
      </div>
    </main>
  );
};

export default Realisations;
