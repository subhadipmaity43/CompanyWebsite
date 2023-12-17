import React, { useState, useEffect } from "react";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        // Adjust threshold as needed
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setAnimationClass(""); // Reset animation class
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    // <div id="back-to-top">
    isVisible && (
      <button
        className={`back-to-top  ${animationClass}`}
        onClick={handleClick}
      >
        <i className="fa fa-arrow-up"></i>
      </button>
    )
    // </div>
  );
}

export default ScrollToTop;
