import React from "react";

function Language() {
  return (
    <>
      <section
        class="main-bg "
        style={{
          background: "url(/Images/06.jpg) no-repeat 0 0",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-6 mb-lg-0 mb-5">
              <div class="iq-title-box iq-title-default iq-title-box-2">
                {" "}
                <span class="iq-subtitle">Language</span>
                <h2 class="iq-title text-white">
                  Work with the language you already love
                </h2>
                <p class="iq-title-desc text-white ">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution.
                </p>
              </div>
              <div class="iq-list  iq-two-column language">
                <ul class="iq-list-with-icon">
                  <li class="text-white">
                    <i class="fa-solid fa-check social"></i> Public Cloud{" "}
                  </li>

                  <li class="text-white">
                    <i class="fa-solid fa-check social"></i> Private Cloud{" "}
                  </li>

                  <li class="text-white">
                    <i class="fa-solid fa-check social"></i> Virtual Private
                    Cloud{" "}
                  </li>
                </ul>
                <ul>
                  <li class="text-white">
                    <i class="fa-solid fa-check social"></i> Tally-as-a-Service{" "}
                  </li>

                  <li class="text-white">
                    <i class="fa-solid fa-check social"></i> Banking Community
                    Cloud{" "}
                  </li>

                  <li class="text-white">
                    <i class="fa-solid fa-check social"></i> Load Balancing{" "}
                  </li>
                </ul>
              </div>
              <div class="iq-btn-container">
                <a
                  href="https://iqonic.design/wp-themes/qloud/about-us-2/"
                  class="iq-button iq-btn-link has-icon btn-icon-right"
                  //   style={{ color: "#007BFC" }}
                  tabindex="-1"
                >
                  Read More
                  <i aria-hidden="true" class="ion ion-ios-arrow-forward"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-6 align-self-stretch align-self-center">
              <div class="iq-popup-video">
                <div class="iq-video-img position-relative">
                  <div
                    class="iq-video-icon wow FadeIn animated"
                    style={{ visibility: "visible" }}
                  >
                    <a
                      href="https://www.youtube.com/watch?v=XHOmBV4js_E"
                      class="iq-video popup-youtube"
                    >
                      <i aria-hidden="true" class="ion ion-play"></i>{" "}
                    </a>
                    <div class="iq-waves">
                      <div class="waves wave-1"></div>
                      <div class="waves wave-2"></div>
                      <div class="waves wave-3"></div>
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

export default Language;
