import React from "react";

function AboutUs() {
  return (
    <>
      <section>
        <img
          src="/Images/shape1.png"
          class="img-fluid shape-right"
          alt="QLOUD"
        ></img>
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-sm-12 mb-lg-0 mb-5">
              <img src="/Images/01.png" class="img-fluid" alt="qloud"></img>
            </div>
            <div class="col-lg-6 col-sm-12 ">
              <div class="iq-title-box iq-title-default iq-title-box-2">
                <div class="iq-title-icon"></div>
                <span class="iq-subtitle">About Us</span>
                <h2 class="iq-title">We lead and support our clients’s.</h2>
                <p class="iq-title-desc">
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
              <div class="iq-list  iq-two-column">
                <ul class="iq-list-with-icon">
                  <li>
                    <i class="fa-solid fa-check social"></i>Boost SEO ranking
                  </li>

                  <li>
                    <i class="fa-solid fa-check social"></i> Social Sharing
                  </li>

                  <li>
                    <i class="fa-solid fa-check social"></i>Marketing
                  </li>
                </ul>
                <ul>
                  <li>
                    <i class="fa-solid fa-check social"></i>Retention
                  </li>

                  <li>
                    <i class="fa-solid fa-check social"></i> Visual Reviews
                  </li>

                  <li>
                    <i class="fa-solid fa-check social"></i> Reviews Generation
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
