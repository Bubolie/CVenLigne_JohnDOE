import React from "react";
import Title from "../components/Title";
import Cards from "../components/Cards";

import code from "../assets/blog/code.png";
import seo from "../assets/blog/SEO.png";
import education from "../assets/blog/education.png";
import laptop from "../assets/blog/laptop.png";
import mac from "../assets/blog/macbook.png";
import money from "../assets/blog/money.png";
import banner from "../assets/banner.jpg";

const Blog = () => {
  return (
    <main>
      <img
        src={banner}
        alt="Fond bleu avec des lignes de lumiere blanches"
        className="img-fluid"
      />

      <Title
        title="Blog"
        text="Retrouvez ici quelques articles sur le développement web."
      />
      <div className="row mb-5 px-md-5 px-2" id="coder-html-css">
        <div className="my-2 col-md-6 col-lg-4">
          <Cards
            align="text-start"
            image={code}
            imageDescription="ligne de code de développement"
            title="Coder son site en HTML/CSS"
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
            refLink="#"
            classButton="btn btn-primary"
            button="Lire la suite"
            footer="Publié le 22 août 2022"
          />
        </div>
        <div className="my-2 col-md-6 col-lg-4 " id="vendre-sur-web">
          <Cards
            align="text-start"
            image={money}
            imageDescription="Piles croissantes de pièce de monnaie surmonté d'une branche de plante "
            title="Vendre ses produits sur le web"
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
            refLink="#"
            classButton="btn btn-primary"
            button="Lire la suite"
            footer="Publié le 20 août 2022"
          />
        </div>
        <div className="my-2 col-md-6 col-lg-4" id="se-positionner-sur-google">
          <Cards
            align="text-start"
            image={mac}
            imageDescription="Macbook poser sur une table d'extérieur en bois"
            title="Se positionner sur google"
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
            refLink="#"
            classButton="btn btn-primary"
            button="Lire la suite"
            footer="Publié le 1 août 2022"
          />
        </div>
        <div className="my-2 col-md-6 col-lg-4">
          <Cards
            align="text-start"
            image={laptop}
            imageDescription="Oridnateur et tablette allumés posés sur une table bmanche avec un casque audio"
            title="Coder en responsive design"
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
            refLink="#"
            classButton="btn btn-primary"
            button="Lire la suite"
            footer="Publié le 31 juillet 2022"
          />
        </div>
        <div className="my-2 col-md-6 col-lg-4">
          <Cards
            align="text-start"
            image={seo}
            imageDescription="Ecran d'ordinateur portable avec le mot SEO écrit et des post-it definissant le mot central"
            title="Techniques de référencement"
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
            refLink="#"
            classButton="btn btn-primary"
            button="Lire la suite"
            footer="Publié le 30 juillet 2022"
          />
        </div>
        <div className="my-2 col-md-6 col-lg-4">
          <Cards
            align="text-start"
            image={education}
            imageDescription="Rangée de livre contenant une lettre par livre et formant la phrase : Never stop learning"
            title="Apprendre à coder"
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
            refLink="#"
            classButton="btn btn-primary"
            button="Lire la suite"
            footer="Publié le 12 juillet 2022"
          />
        </div>
      </div>
    </main>
  );
};

export default Blog;
