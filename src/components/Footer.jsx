import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
function Footer() {
  return (
    <>
      <footer id="contact" className=" iq-over-dark-90">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6 ">
                <div className="widget">
                  <div className="textwidget ">
                    <p>
                      <img
                        className="mb-4 img-fluid"
                        src="/Images/rrr.png"
                        alt="qloud"
                      ></img>
                      <span className="logo1">
                        Data <span style={{ color: "#007bfc" }}>Luminous</span>
                      </span>
                      <br /> It is a long established fact that a reader will be
                      distracted by the readable content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 mt-4 mt-lg-0 mt-md-0 ">
                <div className="widget">
                  <h4 className="footer-title">Menu</h4>
                  <div>
                    <ul className="menu">
                      <li>
                        <Link to="/" aria-current="page">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link to="/">About Us</Link>
                      </li>
                      <li>
                        <Link to="/">Service</Link>
                      </li>
                      <li>
                        <Link to="/">Blog</Link>
                      </li>
                      <li>
                        <Link to="/">Careers</Link>
                      </li>
                      <li>
                        <Link to="/">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 mt-lg-0 mt-4 for-mobile-display-none">
                <div className="widget">
                  <h4 className="footer-title ">About Us</h4>
                  <div className="menu-about">
                    <ul id="menu-about-menu" className="menu">
                      <li>
                        <Link to="/">About Us</Link>
                      </li>
                      <li>
                        <Link to="/">Service</Link>
                      </li>
                      <li>
                        <Link to="/">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="/">Pricing Plan</Link>
                      </li>
                      <li>
                        <Link to="/">Clients</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 mt-lg-0 mt-4 for-mobile-display-none">
                <div className="widget">
                  <h4 className="footer-title ">Useful links</h4>
                  <div className="menu-link">
                    <ul
                      id="menu-link-menu"
                      className="menu"
                      style={{ overflow: "hidden" }}
                    >
                      <li>
                        {" "}
                        <Link to="/">Our Team</Link>
                      </li>
                      <li>
                        <Link to="/">Pricing Plan</Link>
                      </li>
                      <li>
                        <Link to="/">FAQ</Link>
                      </li>
                      <li>
                        <Link to="/">Clients</Link>
                      </li>
                      <li>
                        <Link to="/">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 mt-lg-0 mt-4">
                <div className="widget contact">
                  <h4 className="footer-title ">Contact Us</h4>
                  <div className="row">
                    <div className="col-sm-12">
                      <ul className="iq-contact">
                        <li>
                          <Link to="/" style={{ listStyle: "none" }}>
                            <i className="fa fa-home"></i>
                            <span>
                              Level 2, Ashadeep Building. 25 Rifle Range Road,
                              Ballygunge, Kolkata – 700019 West Bengal, India
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="mailto:support@iqnonicthemes.com">
                            <i className="fa fa-envelope"></i>
                            <span>info@dataluminous.com</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="tel:+0123456789">
                            <i className="fa fa-phone"></i>
                            <span>+91 76030-75789</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-footer">
          <div className="container">
            <div className="pt-3 pb-3">
              <div className="row justify-content-between">
                <div className="col-lg-6 col-md-12 text-lg-left text-md-center text-center">
                  <div className="social-icone">
                    <ul>
                      <li className="d-inline">
                        <Link to="/">
                          <i className="fa-brands fa-facebook-f icons"></i>
                        </Link>
                      </li>
                      <li className="d-inline">
                        <Link to="/">
                          <i className="fa-brands fa-twitter icons"></i>
                        </Link>
                      </li>
                      <li className="d-inline">
                        <Link to="/">
                          <i className="fa-brands fa-instagram icons"></i>
                        </Link>
                      </li>
                      <li className="d-inline">
                        <Link to="/">
                          <i className="fa-brands fa-linkedin-in icons"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 text-lg-right text-md-center text-center">
                  <div className="social-icones">
                    <span className="copyright">
                      © Copyright YEM Software Innovations 2022. All Rights
                      Reserved
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </>
  );
}

export default Footer;
