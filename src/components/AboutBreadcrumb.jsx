import React from "react";
import { Link } from "react-router-dom";

function AboutBreadcrumb() {
  return (
    <>
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
                    <h2 class=" head">About Us </h2>
                    <ol class="breadcrumb main-bg">
                      <li class="breadcrumb-item">
                        <Link to="/">
                          <i
                            class="fa fa-home mr-2 "
                            style={{ paddingRight: "5px", overflow: "hidden" }}
                          ></i>
                          <span style={{ fontSize: "17px" }}>Home</span>
                        </Link>
                      </li>

                      <li class="breadcrumb-item active">About Us</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutBreadcrumb;
