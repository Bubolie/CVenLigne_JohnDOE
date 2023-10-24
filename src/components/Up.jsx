import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Up = () => {
  const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
  };

  useEffect(()=> {
    const scrollToTopButton = document.getElementById("swipeUpButton");
    
    window.addEventListener("scroll", () => {
      if(window.scrollY > 200) {
        scrollToTopButton.classList.remove("hidden");
      } else {
        scrollToTopButton.classList.add("hidden")
      }
    } );
 }, [])


  return (
    <div className="d-flex">
      <button id="swipeUpButton" onClick={scrollToTop} className="hidden">
        <FontAwesomeIcon icon={faArrowUp} size="2xl" />
      </button>
    </div>
  );
};

export default Up;
