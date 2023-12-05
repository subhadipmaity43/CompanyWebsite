import React from "react";
import AboutUs from "./AboutUs";
import Process from "./Process";
import Security from "./Security";
import Features from "./Features";

import Language from "./Language";
import Clients from "./Clients";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Blog from "./Blog";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div class="main-content">
        <section class="icon-box-top pt-10 pb-0">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-6 col-sm-12 mb-lg-0 mb-5">
                <div class="iq-icon-box iq-icon-box-style-2  active wow fadeInUp">
                  <div class="icon-box-img">
                    <img
                      src="/Images/07.png"
                      class="img-fluid"
                      alt="qloud"
                    ></img>
                  </div>
                  <div class="icon-box-content">
                    <h5 class="icon-box-title">
                      {" "}
                      <a href="/">Highest Gartner MQ</a>
                    </h5>
                    <p class="icon-box-desc">
                      {" "}
                      It is a long established fact that a reader will be
                      distracted.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-12 mb-lg-0 mb-5">
                <div class="iq-icon-box iq-icon-box-style-2  active wow fadeInUp">
                  <div class="icon-box-img">
                    <img
                      src="/Images/08.png"
                      class="img-fluid"
                      alt="qloud"
                    ></img>
                  </div>
                  <div class="icon-box-content">
                    <h5 class="icon-box-title">
                      {" "}
                      <a href="/">Protect Data Cloud</a>
                    </h5>
                    <p class="icon-box-desc">
                      {" "}
                      It is a long established fact that a reader will be
                      distracted.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="iq-icon-box iq-icon-box-style-2  active wow fadeInUp">
                  <div class="icon-box-img">
                    <img
                      src="/Images/09.png"
                      class="img-fluid"
                      alt="qloud"
                    ></img>
                  </div>
                  <div class="icon-box-content">
                    <h5 class="icon-box-title">
                      {" "}
                      <a href="/">Over 3 Million Users</a>
                    </h5>
                    <p class="icon-box-desc">
                      {" "}
                      It is a long established fact that a reader will be
                      distracted.
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
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
