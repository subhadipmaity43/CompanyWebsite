import React from "react";
import { Link } from "react-router-dom";

function Features() {
  return (
    <>
      <section className="pt-0 iq-pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center iq-title-box iq-title-default iq-title-box-2">
                <div className="iq-title-icon"></div>
                <span className="iq-subtitle">Features</span>
                <h2 className="iq-title">Our Feature Services </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-md-12 mb-lg-0 mb-5">
              <div
                className="iq-icon-box iq-icon-box-style-8  text-center wow fadeInUp Cloud"
                data-wow-duration="0.6s"
                style={{
                  visibility: "visible",
                  animationDuration: " 0.6s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="icon-box-img">
                  <img
                    src="/Artboard-3-1-4.png.webp"
                    className="img-fluid"
                    alt="qloud"
                  ></img>{" "}
                </div>
                <div className="icon-box-content">
                  <h5 className="icon-box-title">
                    {" "}
                    <Link to="/" style={{ textDecoration: "none" }}>
                      DevSecOps
                    </Link>
                  </h5>

                  <p className="icon-box-desc">
                    {" "}
                    DevSecOps (in a short development, security, and operations)
                    is a development practice that connects three different
                    disciplines: development, security, and operations.{" "}
                  </p>
                  <p>
                    <Link
                      to="/devsecops"
                      style={{
                        color: "#F18235",
                        textDecoration: "none",
                        fontSize: "15px",
                        fontWeight: "500",
                      }}
                    >
                      --- Read More ---
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-md-12 mb-lg-0 mb-5">
              <div
                className="iq-icon-box iq-icon-box-style-8  text-center wow fadeInUp Cloud"
                data-wow-duration="0.9s"
                style={{
                  visibility: "visible",
                  animationDuration: " 0.6s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="icon-box-img">
                  <img
                    src="/Images/bigData.jpg"
                    className="img-fluid"
                    alt="qloud"
                  ></img>{" "}
                </div>
                <div className="icon-box-content">
                  <h5 className="icon-box-title">
                    {" "}
                    <Link to="/" style={{ textDecoration: "none" }}>
                      Data Engineering
                    </Link>
                  </h5>

                  <p className="icon-box-desc">
                    {" "}
                    Data engineering is the practice of designing and building
                    systems for collecting, storing, and analyzing data at
                    scale. It is a broad field with applications in just about
                    every industry.{" "}
                  </p>
                  <p>
                    <Link
                      to="/dataEngineering"
                      style={{
                        color: "#F18235",
                        textDecoration: "none",
                        fontSize: "15px",
                        fontWeight: "500",
                      }}
                    >
                      --- Read More ---
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-md-12">
              <div
                className="iq-icon-box iq-icon-box-style-8  text-center wow fadeInUp Cloud"
                data-wow-duration="1.2s"
                style={{
                  visibility: "visible",
                  animationDuration: " 0.6s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="icon-box-img">
                  <img
                    src="/Images/kubarnetes.png"
                    className="img-fluid"
                    alt="qloud"
                  ></img>{" "}
                </div>
                <div className="icon-box-content">
                  <h5 className="icon-box-title" style={{ marginTop: "16px" }}>
                    {" "}
                    <Link to="/" style={{ textDecoration: "none" }}>
                      Kubernetes
                    </Link>
                  </h5>

                  <p className="icon-box-desc">
                    {" "}
                    Kubernetes is an open-source container orchestration
                    solution that empowers fast and scalable deployment
                    practices across public and private clouds.Kubernetes
                    enables you to add new features.{" "}
                  </p>
                  <p>
                    <Link
                      to="/"
                      style={{
                        color: "#F18235",
                        textDecoration: "none",
                        fontSize: "15px",
                        fontWeight: "500",
                      }}
                    >
                      --- Read More ---
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-md-12">
              <div
                className="iq-icon-box iq-icon-box-style-8  text-center wow fadeInUp Cloud"
                data-wow-duration="1.5s"
                style={{
                  visibility: "visible",
                  animationDuration: " 0.6s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="icon-box-img">
                  <img
                    src="/Images/cloudSecurity.png"
                    className="img-fluid"
                    alt="qloud"
                  ></img>{" "}
                </div>
                <div className="icon-box-content">
                  <h5 className="icon-box-title" style={{ marginTop: "10px" }}>
                    {" "}
                    <Link to="/" style={{ textDecoration: "none" }}>
                      Cloud Security
                    </Link>
                  </h5>

                  <p className="icon-box-desc">
                    {" "}
                    Since data in the public cloud is being stored by a third
                    party and accessed over the internet, several challenges
                    arise in the ability to maintain a secure cloud.{" "}
                  </p>
                  <p>
                    <Link
                      to="/"
                      style={{
                        color: "#F18235",
                        textDecoration: "none",
                        fontSize: "15px",
                        fontWeight: "500",
                      }}
                    >
                      --- Read More ---
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-md-12 mb-lg-0 mb-5">
              <div
                className="iq-icon-box iq-icon-box-style-8  text-center wow fadeInUp Cloud"
                data-wow-duration="1.8s"
                style={{
                  visibility: "visible",
                  animationDuration: " 0.6s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="icon-box-img">
                  <img
                    src="/Images/Ai.jpg"
                    className="img-fluid"
                    alt="qloud"
                  ></img>{" "}
                </div>
                <div className="icon-box-content">
                  <h5 className="icon-box-title">
                    {" "}
                    <Link to="/" style={{ textDecoration: "none" }}>
                      AI/ML
                    </Link>
                  </h5>

                  <p className="icon-box-desc">
                    {" "}
                    AI and ML interchangeably, especially when discussing big
                    data, predictive analytics, and other digital transformation
                    topics. The confusion is understandable as AI and ML.{" "}
                  </p>
                  <p>
                    <Link
                      to="/"
                      style={{
                        color: "#F18235",
                        textDecoration: "none",
                        fontSize: "15px",
                        fontWeight: "500",
                      }}
                    >
                      --- Read More ---
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-md-12 mb-lg-0 mb-5">
              <div
                className="iq-icon-box iq-icon-box-style-8  text-center wow fadeInUp Cloud"
                data-wow-duration="2.1s"
                style={{
                  visibility: "visible",
                  animationDuration: " 0.6s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="icon-box-img">
                  <img
                    src="/Images/blockchain.avif"
                    className="img-fluid"
                    alt="qloud"
                  ></img>{" "}
                </div>
                <div className="icon-box-content">
                  <h5 className="icon-box-title" style={{ marginTop: "31px" }}>
                    {" "}
                    <Link to="/" style={{ textDecoration: "none" }}>
                      Blockchain
                    </Link>
                  </h5>

                  <p className="icon-box-desc">
                    {" "}
                    Blockchain is a type of shared database that differs from a
                    typical database in the way it stores information;
                    blockchains store data in blocks linked together via
                    cryptography.{" "}
                  </p>
                  <p>
                    <Link
                      to="/"
                      style={{
                        color: "#F18235",
                        textDecoration: "none",
                        fontSize: "15px",
                        fontWeight: "500",
                      }}
                    >
                      --- Read More ---
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section class="pt-0 iq-pb-70">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="text-center iq-title-box iq-title-default iq-title-box-2">
                <div class="iq-title-icon"></div>
                <span class="iq-subtitle">Features</span>
                <h2 class="iq-title">Our Feature Services </h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6 col-md-12 mb-lg-0 mb-5">
              <div
                class="iq-icon-box iq-icon-box-style-8  text-center wow fadeInUp Cloud"
                data-wow-duration="0.6s"
                style={{
                  visibility: "visible",
                  animationDuration: " 0.6s",
                  animationName: "fadeInUp",
                }}
              >
                <div class="icon-box-img">
                  <img
                    src="/Images/10.png"
                    class="img-fluid feature-service-img"
                    alt="qloud"
                  ></img>{" "}
                </div>
                <div class="icon-box-content">
                  <h5 class="icon-box-title">
                    {" "}
                    <a href="/" style={{ textDecoration: "none" }}>
                      Public Cloud
                    </a>
                  </h5>

                  <p class="icon-box-desc">
                    {" "}
                    It is a long established fact that a reader will be
                    distracted by the of readable content of a page.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-md-12 mb-lg-0 mb-5">
              <div
                class="iq-icon-box iq-icon-box-style-8  text-center wow fadeInUp Cloud"
                data-wow-duration="0.9s"
                style={{
                  visibility: "visible",
                  animationDuration: " 0.6s",
                  animationName: "fadeInUp",
                }}
              >
                <div class="icon-box-img">
                  <img
                    src="/Images/11.png"
                    class="img-fluid feature-service-img"
                    alt="qloud"
                  ></img>{" "}
                </div>
                <div class="icon-box-content">
                  <h5 class="icon-box-title">
                    {" "}
                    <a href="/" style={{ textDecoration: "none" }}>
                      Virtual Private Cloud
                    </a>
                  </h5>

                  <p class="icon-box-desc">
                    {" "}
                    It is a long established fact that a reader will be
                    distracted by the of readable content of a page.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-md-12">
              <div
                class="iq-icon-box iq-icon-box-style-8  text-center wow fadeInUp Cloud"
                data-wow-duration="1.2s"
                style={{
                  visibility: "visible",
                  animationDuration: " 0.6s",
                  animationName: "fadeInUp",
                }}
              >
                <div class="icon-box-img">
                  <img
                    src="/Images/12.png"
                    class="img-fluid feature-service-img"
                    alt="qloud"
                  ></img>{" "}
                </div>
                <div class="icon-box-content">
                  <h5 class="icon-box-title">
                    {" "}
                    <a href="/" style={{ textDecoration: "none" }}>
                      Private Cloud
                    </a>
                  </h5>

                  <p class="icon-box-desc">
                    {" "}
                    It is a long established fact that a reader will be
                    distracted by the of readable content of a page.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-md-12">
              <div
                class="iq-icon-box iq-icon-box-style-8  text-center wow fadeInUp Cloud"
                data-wow-duration="1.5s"
                style={{
                  visibility: "visible",
                  animationDuration: " 0.6s",
                  animationName: "fadeInUp",
                }}
              >
                <div class="icon-box-img">
                  <img
                    src="/Images/13.png"
                    class="img-fluid feature-service-img"
                    alt="qloud"
                  ></img>{" "}
                </div>
                <div class="icon-box-content">
                  <h5 class="icon-box-title">
                    {" "}
                    <a href="/" style={{ textDecoration: "none" }}>
                      Tally-as-a-Service
                    </a>
                  </h5>

                  <p class="icon-box-desc">
                    {" "}
                    It is a long established fact that a reader will be
                    distracted by the of readable content of a page.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-md-12 mb-lg-0 mb-5">
              <div
                class="iq-icon-box iq-icon-box-style-8  text-center wow fadeInUp Cloud"
                data-wow-duration="1.8s"
                style={{
                  visibility: "visible",
                  animationDuration: " 0.6s",
                  animationName: "fadeInUp",
                }}
              >
                <div class="icon-box-img">
                  <img
                    src="/Images/14.png"
                    class="img-fluid feature-service-img"
                    alt="qloud"
                  ></img>{" "}
                </div>
                <div class="icon-box-content">
                  <h5 class="icon-box-title">
                    {" "}
                    <a href="/" style={{ textDecoration: "none" }}>
                      Banking Community Cloud
                    </a>
                  </h5>

                  <p class="icon-box-desc">
                    {" "}
                    It is a long established fact that a reader will be
                    distracted by the of readable content of a page.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-md-12 mb-lg-0 mb-5">
              <div
                class="iq-icon-box iq-icon-box-style-8  text-center wow fadeInUp Cloud"
                data-wow-duration="2.1s"
                style={{
                  visibility: "visible",
                  animationDuration: " 0.6s",
                  animationName: "fadeInUp",
                }}
              >
                <div class="icon-box-img">
                  <img
                    src="/Images/15.png"
                    class="img-fluid feature-service-img"
                    alt="qloud"
                  ></img>{" "}
                </div>
                <div class="icon-box-content">
                  <h5 class="icon-box-title">
                    {" "}
                    <a href="/" style={{ textDecoration: "none" }}>
                      Load Balancing
                    </a>
                  </h5>

                  <p class="icon-box-desc">
                    {" "}
                    It is a long established fact that a reader will be
                    distracted by the of readable content of a page.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default Features;
