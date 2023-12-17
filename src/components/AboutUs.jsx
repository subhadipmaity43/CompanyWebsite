import React from "react";

function AboutUs() {
  return (
    <>
      <section>
        <img
          src="/Images/shape1.png"
          className="img-fluid shape-right"
          alt="QLOUD"
        ></img>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 mb-lg-0 mb-5">
              <img src="/Images/01.png" className="img-fluid" alt="qloud"></img>
            </div>
            <div className="col-lg-6 col-sm-12 ">
              <div className="iq-title-box iq-title-default iq-title-box-2">
                <div className="iq-title-icon"></div>
                <span className="iq-subtitle about-get-in-touch">About Us</span>
                <h2 className="iq-title">We lead and support our clients’s.</h2>
                <p className="iq-title-desc">
                  <span style={{ color: "#007bfc", fontWeight: "500" }}>
                    DataLuminous{" "}
                  </span>
                  is a Kolkata(Calcutta)-India based professional service
                  provider catering the requirements of customers who want to
                  leverage cutting edge technologies to build their products. We
                  help customers to accelerate their product development
                  lifecycle, application & data modernization and building state
                  of the art smart data analytics platform using open-source
                  tools. Our approaches towards cloud native and open -source
                  solutions help customer to build a highly available, agile,
                  scalable and cost effective system.
                </p>
              </div>
              <div className="iq-list  iq-two-column">
                <ul className="iq-list-with-icon">
                  <li>
                    <i className="fa-solid fa-check social"></i>Application
                  </li>

                  <li>
                    <i className="fa-solid fa-check social"></i> Data Engineer
                  </li>

                  <li>
                    <i className="fa-solid fa-check social"></i>Data Analytics
                  </li>
                </ul>
                <ul>
                  <li>
                    <i className="fa-solid fa-check social"></i>DevSecOps
                  </li>

                  <li>
                    <i className="fa-solid fa-check social"></i> Cloud Security
                  </li>
                  <li>
                    <i className="fa-solid fa-check social"></i> Data
                    Modernization
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
