import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Up = () => {
  const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className="d-flex">
      <button id="swipe-up" onClick={scrollToTop}>
        <FontAwesomeIcon icon={faArrowUp} size="2xl" />
      </button>
    </div>
  );
};

export default Up;
