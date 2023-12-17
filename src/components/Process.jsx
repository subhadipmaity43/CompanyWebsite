import React from "react";
import { Link } from "react-router-dom";

function Process() {
  return (
    <>
      <section
        className="pt-0 iq-pb-70"
        // style={{ background: "#EDF1FF" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 mb-lg-0 mb-5 align-self-center">
              <div className="iq-title-box iq-title-default iq-title-box-2">
                <div className="iq-title-icon"></div>
                <span className="iq-subtitle process-get-in-touch">
                  What We Do?
                </span>
                <h2 className="iq-title">
                  We deliver consistently high quality professional services{" "}
                  <br />
                  to our customers.
                </h2>
                <p className="iq-title-desc">
                  We are offering end-to-end practice management, security,
                  cloud consulting and support. Our certified, expert and
                  experienced engineers help you to build a scalable, fault
                  tolerant, highly available & cost effective solutions for your
                  sepecific business needs which will help to serve your
                  customers better.
                  <br />
                  Working with DataLuminous ensures that your business remains
                  functional, secure and adoptable with the changes of
                  organization’s needs.
                </p>
              </div>
              <div className="iq-btn-container mt-4">
                <Link className="iq-button " to="/">
                  Read More
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="iq-process iq-process-step-style-1 ">
                    <div className="iq-process-step">
                      <div className="iq-step-content">
                        <img
                          className="hover-img img-fluid"
                          src="/Images/cloud.webp"
                          alt="fancybox"
                        ></img>{" "}
                      </div>
                      <div className="iq-step-text-area">
                        <h4 className="iq-step-title">Multi Cloud Expertise</h4>
                        <span className="iq-step-desc">
                          There are many variations Multi Cloud Expertise Like -
                          AWS, GCP
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="iq-process iq-process-step-style-1 ">
                    <div className="iq-process-step">
                      <div className="iq-step-content">
                        <img
                          className="hover-img img-fluid"
                          src="/Images/SAAS.webp"
                          alt="fancybox"
                        ></img>{" "}
                      </div>
                      <div className="iq-step-text-area">
                        <h4 className="iq-step-title">SaaS platforms</h4>
                        <span className="iq-step-desc">
                          Expertise on SaaS platforms like Databricks, MongoDB
                          etc.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="iq-process iq-process-step-style-1 ">
                    <div className="iq-process-step">
                      <div className="iq-step-content">
                        <img
                          className="hover-img img-fluid"
                          src="/Images/openSource.webp"
                          alt="fancybox"
                        ></img>{" "}
                      </div>
                      <div className="iq-step-text-area">
                        <h4 className="iq-step-title">Open Source Software</h4>

                        <span className="iq-step-desc">
                          Expertise in Open Source Software, tools etc.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="iq-process iq-process-step-style-1 ">
                    <div className="iq-process-step">
                      <div className="iq-step-content">
                        <img
                          className="hover-img img-fluid"
                          src="/Images/certified.png"
                          alt="fancybox"
                        ></img>{" "}
                      </div>
                      <div className="iq-step-text-area">
                        <h4 className="iq-step-title">Certified Experts</h4>
                        <span className="iq-step-desc">
                          Professional Certified Experts and experienced
                          engineers.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Process;
