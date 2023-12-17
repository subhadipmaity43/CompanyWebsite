import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 150) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <div
        className={
          navbar
            ? "navbar-container active  container-fluid"
            : "navbar-container   container-fluid"
        }
      >
        <div className="main-navbar-section row">
          <div className="left-img col">
            <img src="/Images/rrr.png" alt="" />
            <span className="logo">
              Data<span style={{ color: "#007bfc" }}>Luminous</span>
            </span>
          </div>
          <div className="right-section col-6">
            <ul>
              <li>
                <Link to="/" className="nav-menu">
                  {" "}
                  Home{" "}
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-menu">
                  About us{" "}
                </Link>
              </li>
              <li className="our-service-dropdown">
                Our Services{" "}
                <span
                  style={{
                    position: "absolute",
                    paddingTop: "4px",
                  }}
                >
                  <i className="fa-solid fa-angle-down"></i>
                </span>
                <div className="drop-downcontainer">
                  <div className="drop-down-info">
                    <Link to="/devsecops"> Devescops</Link>
                    <Link to="/dataEngineering">Data Engineering</Link>
                    <Link to="/Kubernetes">Kubernets</Link>
                    <Link to="/security">Security</Link>
                  </div>
                </div>
              </li>
              <li>
                <Link to="/career" className="nav-menu">
                  {" "}
                  Career
                </Link>{" "}
              </li>
              <li>
                <Link to="/blog" className="nav-menu">
                  {" "}
                  Blog
                </Link>{" "}
              </li>
              <li>
                <Link to="/contact" className="nav-menu">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
