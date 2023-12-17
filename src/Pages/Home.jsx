import React from "react";
import AboutUs from "../components/AboutUs";
import Process from "../components/Process";
import Security from "../components/Security";
import Features from "../components/Features";
import Language from "../components/Language";
import Clients from "../components/Clients";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
// import Blog from "./Blog";
import { Link } from "react-router-dom";
import Sidenav from "../components/Sidenav";

function Home() {
  return (
    <>
      <Navbar />
      <Sidenav />
      <Hero />
      <div className="main-content">
        <section className="icon-box-top pt-10 pb-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12 mb-lg-0 mb-5">
                <div className="iq-icon-box iq-icon-box-style-2  active wow fadeInUp">
                  <div className="icon-box-img">
                    <img
                      src="/Images/cloudstrat.gif"
                      className="img-fluid"
                      alt="qloud"
                    ></img>
                  </div>
                  <div className="icon-box-content">
                    <h5 className="icon-box-title">
                      {" "}
                      <Link to="/">Cloud Strategy</Link>
                    </h5>
                    <p className="icon-box-desc" style={{ marginTop: "17px" }}>
                      {" "}
                      Cloud Strategy defines motivations and business outcomes
                      for cloud adoption and seamless integration.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-lg-0 mb-5">
                <div
                  className="iq-icon-box iq-icon-box-style-2  active wow fadeInUp"
                  style={{ paddingBottom: "11px" }}
                >
                  <div className="icon-box-img">
                    <img
                      src="/Images/datacloud.gif"
                      className="img-fluid"
                      alt="qloud"
                    ></img>
                  </div>
                  <div className="icon-box-content">
                    <h5 className="icon-box-title">
                      {" "}
                      <Link to="/">Protect Data Cloud</Link>
                    </h5>
                    <p className="icon-box-desc">
                      {" "}
                      Cloud data security is the practice of protecting data and
                      other digital information.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="iq-icon-box iq-icon-box-style-2  active wow fadeInUp">
                  <div className="icon-box-img">
                    <img
                      src="/Images/output.gif"
                      className="img-fluid"
                      alt="qloud"
                    ></img>
                  </div>
                  <div className="icon-box-content">
                    <h5 className="icon-box-title">
                      {" "}
                      <Link to="/">Data & Analytics</Link>
                    </h5>
                    <p className="icon-box-desc">
                      {" "}
                      Proffesionals improve workflows through a well-defined
                      data & analytics strategy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <AboutUs />
      <Process />
      <Security />
      <Features />
      <Language />
      <Clients />

      {/* <Blog /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
