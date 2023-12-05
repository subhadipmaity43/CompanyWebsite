import React from "react";

function Hero() {
  return (
    <>
      <div className="hero-sec-main">
        <svg
          className="wave-class"
          id="wave"
          viewBox="0 0 1440 490"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stop-color="rgba(13, 30, 103, 1)" offset="0%"></stop>
              <stop stop-color="rgba(13, 30, 103, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            //   style="transform:translate(0, 0px); opacity:1"
            fill="url(#sw-gradient-0)"
            d="M0,441L80,392C160,343,320,245,480,171.5C640,98,800,49,960,65.3C1120,82,1280,163,1440,220.5C1600,278,1760,310,1920,269.5C2080,229,2240,114,2400,114.3C2560,114,2720,229,2880,261.3C3040,294,3200,245,3360,204.2C3520,163,3680,131,3840,122.5C4000,114,4160,131,4320,187.8C4480,245,4640,343,4800,343C4960,343,5120,245,5280,228.7C5440,212,5600,278,5760,294C5920,310,6080,278,6240,253.2C6400,229,6560,212,6720,220.5C6880,229,7040,261,7200,253.2C7360,245,7520,196,7680,196C7840,196,8000,245,8160,294C8320,343,8480,392,8640,343C8800,294,8960,147,9120,106.2C9280,65,9440,131,9600,196C9760,261,9920,327,10080,343C10240,359,10400,327,10560,269.5C10720,212,10880,131,11040,122.5C11200,114,11360,180,11440,212.3L11520,245L11520,490L11440,490C11360,490,11200,490,11040,490C10880,490,10720,490,10560,490C10400,490,10240,490,10080,490C9920,490,9760,490,9600,490C9440,490,9280,490,9120,490C8960,490,8800,490,8640,490C8480,490,8320,490,8160,490C8000,490,7840,490,7680,490C7520,490,7360,490,7200,490C7040,490,6880,490,6720,490C6560,490,6400,490,6240,490C6080,490,5920,490,5760,490C5600,490,5440,490,5280,490C5120,490,4960,490,4800,490C4640,490,4480,490,4320,490C4160,490,4000,490,3840,490C3680,490,3520,490,3360,490C3200,490,3040,490,2880,490C2720,490,2560,490,2400,490C2240,490,2080,490,1920,490C1760,490,1600,490,1440,490C1280,490,1120,490,960,490C800,490,640,490,480,490C320,490,160,490,80,490L0,490Z"
          ></path>
        </svg>

        <div className="left-section-information">
          <h1 className="dezian-head">
            Data <span style={{ color: "#007bfc" }}>Luminus</span>{" "}
          </h1>
          <h3 className="dezian-subhead">
            Empowering the organizations with the power
            <br /> of data
          </h3>
          <button className="btnhero">Get In Touch</button>
        </div>
        <div className="flot-img-1">
          <img src="/Images/flotr.png" alt="" />
        </div>
        <div className="flot-img-2">
          <img src="/Images/flotr.png" alt="" />
        </div>
        <div className="flot-img-3">
          <img src="/Images/flotr.png" alt="" />
        </div>
        <div className="flot-img-4">
          <img src="/Images/flotr.png" alt="" />
        </div>

        <div className="right-animation-img">
          <img src="/Images/b1.png" alt="" />
        </div>
        <div className="circit-img">
          <img src="/Images/b2.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Hero;
