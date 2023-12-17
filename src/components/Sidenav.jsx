import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidenav() {
  const [btnState, SetBtnState] = useState(false);
  const [btnState2, SetBtnState2] = useState(false);

  function handleClick() {
    SetBtnState((btnState3) => !btnState3);
    console.log("hello");
  }

  const handleClick2 = () => {
    SetBtnState2(!btnState2);
    console.log("hello");
  };
  return (
    <>
      <div className="side-nav-main-container">
        <button
          onClick={handleClick}
          class="menu"
          onclick="this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))"
          aria-label="Main Menu"
        >
          <svg
            className="burger-icon-svg"
            width="35"
            height="35"
            viewBox="0 0 100 100"
          >
            <path
              class="line line1"
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path class="line line2" d="M 20,50 H 80" />
            <path
              class="line line3"
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </button>
        <div className={`side-navbar-contents${btnState ? " active" : ""}`}>
          <ul
            style={{
              margin: "0 16px",
              borderBottom: "2px solid #fff",
              paddingLeft: "1rem",
            }}
          >
            <li>
              {" "}
              <div className="top-section">
                <div className="top-section-img">
                  <img style={{ width: "50px" }} src="/Images/rrr.png" alt="" />{" "}
                </div>
                <div className="side-nav-close" onClick={handleClick}>
                  <div class="outer">
                    <div class="inner">
                      <label>Back</label>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </li>
          </ul>
          <ul>
            <li>
              <i class="fa-solid fa-house-chimney"></i>
              <Link to="/" className="nav-menu">
                {" "}
                Home
              </Link>{" "}
            </li>
            <li>
              <i class="fa-solid fa-address-card"></i>
              <Link to="/about" className="nav-menu">
                {" "}
                About Us
              </Link>{" "}
            </li>
            <li onClick={handleClick2}>
              <i class="fa-brands fa-servicestack"></i> Our Service
              <div className="for-selection">
                <div
                  className={`class-for-radio ${
                    btnState2 ? "displayprop" : ""
                  }`}
                >
                  {" "}
                  <Link to="/devsecops">
                    {" "}
                    <span>Devescops</span>
                  </Link>
                </div>
                <div
                  className={`class-for-radio ${
                    btnState2 ? "displayprop" : ""
                  }`}
                >
                  <Link to="/dataEngineering">
                    <span>Data Engineering</span>
                  </Link>
                </div>
                <div
                  className={`class-for-radio ${
                    btnState2 ? "displayprop" : ""
                  }`}
                >
                  <Link to="/Kubernetes">
                    <span>Kubernets</span>
                  </Link>
                </div>
                <div
                  className={`class-for-radio ${
                    btnState2 ? "displayprop" : ""
                  }`}
                >
                  <Link to="/security">
                    <span>Sequrity</span>
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <i class="fa-solid fa-blog"></i>{" "}
              <Link to="/blog" className="nav-menu">
                {" "}
                Blog
              </Link>{" "}
            </li>
            <li>
              <i class="fa-solid fa-people-group"></i>
              <Link to="/career" className="nav-menu">
                {" "}
                Career
              </Link>{" "}
            </li>
            <li>
              <i class="fa-solid fa-phone-volume"></i>{" "}
              <Link to="/contact" className="nav-menu">
                {" "}
                Contact Us
              </Link>{" "}
            </li>
          </ul>
        </div>

        <div
          className={`tranparent-close-div${btnState ? " active" : ""}`}
          onClick={handleClick}
        ></div>
      </div>
    </>
  );
}

export default Sidenav;
