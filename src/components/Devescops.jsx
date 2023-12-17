import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";

function Devescops() {
  return (
    <>
      <Navbar />
      <Sidenav />
      <div class=" main-bg">
        <div class="container-fluid p-0">
          <div
            class="text-left iq-breadcrumb-one
                  iq-bg-over black     "
          >
            <div class="container">
              <div class="row align-items-center">
                <div class="col-sm-12">
                  <nav
                    aria-label="breadcrumb"
                    class="text-center iq-breadcrumb-two"
                  >
                    <h2 class=" head">Devescops </h2>
                    <ol class="breadcrumb main-bg">
                      <li class="breadcrumb-item">
                        <Link to="/">
                          <i
                            class="fa fa-home mr-2"
                            style={{
                              paddingRight: "5px",
                              fontSize: "13px",
                              overflow: "hidden",
                            }}
                          ></i>
                          <span style={{ fontSize: "17px" }}>Home</span>
                        </Link>
                      </li>

                      <li class="breadcrumb-item active">Our Service</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-page">
        {/* <div className="container "> */}
        <section>
          <img
            src="/Images/shape1.png"
            className="img-fluid shape-right"
            alt="QLOUD"
          ></img>
          <div className="container">
            <div className="top-para  pt-0 iq-pb-70 ">
              <div className="iq-list  ">
                <ul className="iq-list-with-icon">
                  <li>
                    <span className="fff">
                      {" "}
                      <i class="fa-solid fa-hashtag devsecops"></i>
                    </span>
                    DevSecOps (in a short development, security, and operations)
                    is a development practice that connects three different
                    disciplines: development, security, and operations.{" "}
                  </li>

                  <li>
                    <span className="fff">
                      {" "}
                      <i class="fa-solid fa-hashtag devsecops"></i>
                    </span>{" "}
                    DevSecOps evolved to address the need to build in security
                    continuously across the SDLC so that DevOps teams could
                    deliver secure applications with speed and quality.
                  </li>

                  <li>
                    <span className="fff">
                      {" "}
                      <i class="fa-solid fa-hashtag devsecops"></i>
                    </span>
                    Incorporating testing, triage, and risk mitigation earlier
                    in the CI/CD workflow prevents the time-intensive, and often
                    costly, repercussions of making a fix postproduction.
                  </li>
                </ul>
              </div>
            </div>
            <div className="row pt-0 iq-pb-70">
              <div className="col-lg-6 col-sm-12 mb-lg-0 mb-5">
                <img
                  src="/Images/Security.png"
                  className="img-fluid"
                  alt="qloud"
                ></img>
              </div>
              <div className="col-lg-6 col-sm-12 ">
                <div className="iq-title-box iq-title-default iq-title-box-2 size">
                  <h2 className="iq-title size1">Security is Shifting</h2>
                  <p className="iq-title-desc">
                    This concept is part of “shifting left,” which moves
                    security testing toward developers, enabling them to fix
                    security issues in their code in near real time rather than
                    “bolting on security” at the end of the SDLC. DevSecOps
                    spans the entire SDLC, from planning and design to coding,
                    building, testing, and release, with real-time continuous
                    feedback loops and insights. However, effective DevOps
                    security requires more than new tools—it builds on the
                    cultural changes of DevOps to integrate the work of security
                    teams sooner rather than later.
                  </p>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="container">
            <div className="iq-title-box iq-title-default iq-title-box-2  ">
              <h2 className="iq-title " style={{ textAlign: "center" }}>
                What are the Benefits of DevSecOps Model
              </h2>
              <div className="icon-box-img pt-0 iq-pb-70">
                <img
                  src="/Images/devsecops-benefits-1.webp"
                  className="img-fluid"
                  alt="qloud"
                />
              </div>
            </div>
          </div>{" "}
          <div
            className="kub"
            style={{ background: "#EEF1FF", padding: "70px 0px" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-md-12 mb-lg-0 mb-5">
                  <div className="iq-icon-box iq-icon-box-style-8  text-center wow fadeInUp Cloud1">
                    <div className="icon-box-content">
                      <h5 className="icon-box-title ">
                        {" "}
                        <p style={{ color: "#F18235" }}>Faster delivery</p>
                      </h5>

                      <p className="icon-box-desc">
                        The speed of software delivery is improved when security
                        is integrated in the pipeline. Bugs are identified and
                        fixed before deployment, allowing developers to focus on
                        shipping features.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-md-12 mb-lg-0 mb-5">
                  <div className="iq-icon-box iq-icon-box-style-8  text-center wow fadeInUp Cloud1">
                    <div className="icon-box-content">
                      <h5 className="icon-box-title ">
                        {" "}
                        <p style={{ color: "#F18235" }}>Reduced costs</p>
                      </h5>

                      <p className="icon-box-desc">
                        Identifying vulnerabilities and bugs before deploying
                        results in an exponential reduction in risk and
                        operational cost.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-md-12">
                  <div className="iq-icon-box iq-icon-box-style-8  text-center wow fadeInUp Cloud1">
                    <div className="icon-box-content">
                      <h5 className="icon-box-title ">
                        {" "}
                        <p style={{ color: "#F18235" }}>
                          {" "}
                          Improved security posture
                        </p>
                      </h5>

                      <p className="icon-box-desc">
                        Security is a feature from the design phase onwards. A
                        shared responsibility model ensures security is tightly
                        integrated—from building, deploying, to securing
                        production workloads.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-md-12">
                  <div className="iq-icon-box iq-icon-box-style-8  text-center wow fadeInUp Cloud1">
                    <div className="icon-box-content">
                      <h5
                        className="icon-box-title "
                        style={{ marginTop: "10px" }}
                      >
                        {" "}
                        <p
                          style={{
                            color: "#F18235",
                          }}
                        >
                          Enhancing the value of DevOps
                        </p>
                      </h5>

                      <p className="icon-box-desc">
                        Improving overall security posture as a culture of
                        shared responsibility is created by the integration of
                        security practices into DevOps.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-md-12 mb-lg-0 mb-5">
                  <div className="iq-icon-box iq-icon-box-style-8  text-center wow fadeInUp Cloud1">
                    <div className="icon-box-content">
                      <h5 className="icon-box-title ">
                        {" "}
                        <p style={{ color: "#F18235" }}>
                          Improving security integration and pace
                        </p>
                      </h5>

                      <p className="icon-box-desc">
                        Cost and time of secure software delivery is reduced
                        through eliminating the need to retrofit security
                        controls post development.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-md-12 mb-lg-0 mb-5">
                  <div className="iq-icon-box iq-icon-box-style-8  text-center wow fadeInUp Cloud1">
                    <div className="icon-box-content">
                      <h5 className="icon-box-title ">
                        {" "}
                        <p style={{ color: "#F18235" }}>
                          Enabling greater overall business success
                        </p>
                      </h5>

                      <p className="icon-box-desc">
                        Greater trust in the security of developed software and
                        embracing new technologies enables enhanced revenue
                        growth and expanded business offerings.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Devescops;
