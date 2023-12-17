import React from "react";
import { Link } from "react-router-dom";

function Language() {
  return (
    <>
      <section
        className="main-bg "
        style={{
          background: "url(/Images/06.jpg) no-repeat 0 0",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-lg-0 mb-5">
              <div className="iq-title-box iq-title-default iq-title-box-2">
                {" "}
                <span className="iq-subtitle language-get-in-touch">
                  Technology
                </span>
                <h2 className="iq-title text-white">
                  Work with the technology you already love
                </h2>
                <p className="iq-title-desc text-white ">
                  Technology is the application of scientific knowledge to the
                  practical aims of human life or, as it is sometimes phrased,
                  to the change and manipulation of the human environment.
                </p>
              </div>
              <div className="iq-list  iq-two-column language">
                <ul className="iq-list-with-icon">
                  <li className="text-white">
                    <i className="fa-solid fa-check social"></i> Python{" "}
                  </li>

                  <li className="text-white">
                    <i className="fa-solid fa-check social"></i> TensorFlow{" "}
                  </li>

                  <li className="text-white">
                    <i className="fa-solid fa-check social"></i> Anaconda{" "}
                  </li>
                </ul>
                <ul>
                  <li className="text-white">
                    <i className="fa-solid fa-check social"></i> Docker{" "}
                  </li>

                  <li className="text-white">
                    <i className="fa-solid fa-check social"></i> Kubernetes{" "}
                  </li>

                  <li className="text-white">
                    <i className="fa-solid fa-check social"></i> Cloud Computing{" "}
                  </li>
                </ul>
              </div>
              {/* <div className="iq-btn-container">
                <Link
                  to="/"
                  className="iq-button iq-btn-link has-icon btn-icon-right"
                  //   style={{ color: "#007BFC" }}
                  tabindex="-1"
                >
                  Read More
                  <i
                    aria-hidden="true"
                    className="ion ion-ios-arrow-forward"
                  ></i>
                </Link>
              </div> */}
            </div>
            {/* <div className="col-lg-6 align-self-stretch align-self-center">
              <div className="iq-popup-video">
                <div className="iq-video-img position-relative">
                  <div
                    className="iq-video-icon wow FadeIn animated"
                    style={{ visibility: "visible" }}
                  >
                    <Link
                      to="https://www.youtube.com/watch?v=XHOmBV4js_E"
                      className="iq-video popup-youtube"
                    >
                      <i aria-hidden="true" className="ion ion-play"></i>{" "}
                    </Link>
                    <div className="iq-waves">
                      <div className="waves wave-1"></div>
                      <div className="waves wave-2"></div>
                      <div className="waves wave-3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Language;
