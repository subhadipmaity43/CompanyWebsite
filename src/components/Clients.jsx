import React from "react";

function Clients() {
  return (
    <>
      <section class="iq-client-section pt-10 iq-pb-70">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-12 col-sm-12 align-self-center">
              <div class="iq-client iq-client-style-1  iq-has-shadow iq-has-grascale">
                <ul class="iq-client-col-3 iq-client-grid">
                  <li>
                    <img
                      src="/Images/01 (3).png"
                      class="img-fluid"
                      alt="client-img"
                    ></img>
                  </li>

                  <li>
                    <img
                      src="/Images/02 (2).png"
                      class="img-fluid"
                      alt="client-img"
                    ></img>
                  </li>

                  <li>
                    <img
                      src="/Images/03 (2).png"
                      class="img-fluid"
                      alt="client-img"
                    ></img>
                  </li>

                  <li>
                    <img
                      src="/Images/04 (2).png"
                      class="img-fluid"
                      alt="client-img"
                    ></img>
                  </li>

                  <li>
                    <img
                      src="/Images/05 (1).png"
                      class="img-fluid"
                      alt="client-img"
                    ></img>
                  </li>

                  <li>
                    <img
                      src="/Images/06 (1).png"
                      class="img-fluid"
                      alt="client-img"
                    ></img>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-12 col-sm-12 align-self-center mt-5 mt-lg-0">
              <div class="client-box">
                <div class=" text-left iq-title-box iq-title-white iq-title-box-1">
                  <div class="iq-title-icon"></div>
                  <span class="iq-subtitle" style={{ paddingBottom: "10px" }}>
                    Our Clients
                  </span>
                  <h4 class="iq-title title" style={{ letterSpacing: "1.5px" }}>
                    We have the
                    <br /> Privilege of working
                    <br /> with exceptional
                    <br /> customers.{" "}
                  </h4>
                </div>
                <div class="iq-btn-container">
                  <a
                    href="/"
                    class="iq-button iq-btn-link has-icon btn-icon-right"
                    tabindex="-1"
                  >
                    Read More
                    <i aria-hidden="true" class="ion ion-ios-arrow-forward"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Clients;
