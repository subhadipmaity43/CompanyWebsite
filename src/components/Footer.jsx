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
                    <ul id="menu-link-menu" className="menu">
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
      {/* <footer id="contact" className=" iq-over-dark-90">
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6 col-sm-6 ">
                <div class="widget">
                  <div class="textwidget ">
                    <p>
                      <img
                        class="mb-4 img-fluid footer-icon-mb"
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
              <div class="col-lg-2 col-md-6 col-sm-6 mt-4 mt-lg-0 mt-md-0 ">
                <div class="widget">
                  <h4 class="footer-title">Menu</h4>
                  <div>
                    <ul class="menu">
                      <li>
                        <a href="index.html" aria-current="page">
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="about-us-1.html">About Us</a>
                      </li>
                      <li>
                        <a href="service-1.html">Service</a>
                      </li>
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="contact-us-1.html">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 col-sm-6 mt-lg-0 mt-4 for-mobile-display-none">
                <div class="widget">
                  <h4 class="footer-title ">About Us</h4>
                  <div class="menu-about">
                    <ul id="menu-about-menu" class="menu">
                      <li>
                        <a href="about-us-2.html">About Us</a>
                      </li>
                      <li>
                        <a href="service-2.html">Service</a>
                      </li>
                      <li>
                        <a href="contact-us-2.html">Contact Us</a>
                      </li>
                      <li>
                        <a href="pricing-plan.html">Pricing Plan</a>
                      </li>
                      <li>
                        <a href="clients.html">Clients</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 col-sm-6 mt-lg-0 mt-4 for-mobile-display-none">
                <div class="widget">
                  <h4 class="footer-title ">Useful links</h4>
                  <div class="menu-link">
                    <ul id="menu-link-menu" class="menu">
                      <li>
                        {" "}
                        <a href="our-team.html">Our Team</a>
                      </li>
                      <li>
                        <a href="pricing-plan.html">Pricing Plan</a>
                      </li>
                      <li>
                        <a href="faq.html">FAQ</a>
                      </li>
                      <li>
                        <a href="clients.html">Clients</a>
                      </li>
                      <li>
                        <a href="contact-us-1.html">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6 mt-lg-0 mt-4 ">
                <div class="widget contact">
                  <h4 class="footer-title ">Contact Us</h4>
                  <div class="row">
                    <div class="col-sm-12">
                      <ul class="iq-contact">
                        <li>
                          <a href="/" style={{ listStyle: "none" }}>
                            <i class="fa fa-home"></i>
                            <span>
                              Level 2, Ashadeep Building. 25 Rifle Range Road,
                              Ballygunge, Kolkata – 700019 West Bengal, India
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="mailto:support@iqnonicthemes.com">
                            <i class="fa fa-envelope"></i>
                            <span>info@dataluminous.com</span>
                          </a>
                        </li>
                        <li>
                          <a href="tel:+0123456789">
                            <i class="fa fa-phone"></i>
                            <span>+91 76030-75789</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright-footer">
          <div class="container">
            <div class="pt-3 pb-3">
              <div class="row justify-content-between">
                <div class="col-lg-6 col-md-12 text-lg-left text-md-center text-center">
                  <div class="social-icone">
                    <ul>
                      <li class="d-inline">
                        <a href="/">
                          <i class="fa-brands fa-facebook-f icons"></i>
                        </a>
                      </li>
                      <li class="d-inline">
                        <a href="/">
                          <i class="fa-brands fa-twitter icons"></i>
                        </a>
                      </li>
                      <li class="d-inline">
                        <a href="/">
                          <i class="fa-brands fa-instagram icons"></i>
                        </a>
                      </li>
                      <li class="d-inline">
                        <a href="/">
                          <i class="fa-brands fa-linkedin-in icons"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-6 col-md-12 text-lg-right text-md-center text-center">
                  <div class="social-icones">
                    <span class="copyright">
                      © Copyright YEM Software Innovations 2022. All Rights
                      Reserved
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer> */}

      <ScrollToTop />
    </>
  );
}

export default Footer;
