import React, { useState } from "react";

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
              Data <span style={{ color: "#007bfc" }}>Luminous</span>
            </span>
          </div>
          <div className="right-section col-6">
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li className="our-service-dropdown">
                Our Services{" "}
                <span
                  style={{
                    position: "absolute",
                    paddingTop: "4px",
                  }}
                >
                  <i class="fa-solid fa-angle-down"></i>
                </span>
                <div className="drop-downcontainer">
                  <div className="drop-down-info">
                    <a href="/"> Devescops</a>
                    <a href="/">Data Engineering</a>
                    <a href="/">Kubernets</a>
                    <a href="/">Security</a>
                  </div>
                </div>
              </li>
              <li>Career </li>
              <li>Contact Us</li>
            </ul>
          </div>
          {/* <div className="login-button col-4">
            <button type="button" class="btn btn-outline-primary">
              Login
            </button>
            <button class="btn btn-primary submit-button" type="submit">
              Register
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Navbar;
