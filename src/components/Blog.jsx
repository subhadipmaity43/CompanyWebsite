import React from "react";

function Blog() {
  return (
    <>
      <section class="iq-blog-section pt-0 iq-pb-55">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="text-center iq-title-box iq-title-default iq-title-box-2">
                <div class="iq-title-icon"></div>
                <span class="iq-subtitle">Blog</span>
                <h2 class="iq-title"> Recent Blog </h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12 col-md-12">
              <div
                class="owl-carousel owl-loaded owl-drag"
                data-autoplay="true"
                data-loop="true"
                data-nav="false"
                data-dots="true"
                data-items="3"
                data-items-laptop="3"
                data-items-tab="2"
                data-items-mobile="1"
                data-items-mobile-sm="1"
                data-margin="30"
              >
                <div class="owl-stage-outer">
                  <div
                    class="owl-stage"
                    style={{
                      transform: "translate3d(-2000px, 0px, 0px)",
                      transition: "all 0.25s ease 0s",
                      width: "3600px",
                    }}
                  >
                    <div
                      class="owl-item cloned"
                      style={{ width: "370px", marginRight: "30px" }}
                    >
                      <div class="item">
                        <div class="iq-blog-box">
                          <div class="iq-blog-image clearfix">
                            <img
                              src="images/blog/01.png"
                              class="img-fluid"
                              alt="unisaas-blog"
                            ></img>
                            <ul class="iq-blogtag">
                              <li>
                                <a href="/">Marketing</a>
                              </li>
                            </ul>
                          </div>
                          <div class="iq-blog-detail">
                            <div class="iq-blog-meta">
                              <ul class="iq-postdate">
                                <li class="list-inline-item">
                                  <i class="fa fa-calendar-alt mr-2"></i>
                                  <span class="screen-reader-text">
                                    Posted on
                                  </span>
                                  <a href="/" rel="bookmark">
                                    <time
                                      class="entry-date published updated"
                                      datetime="2020-02-17T06:40:07+00:00"
                                    >
                                      February 17, 2020
                                    </time>
                                  </a>
                                </li>
                              </ul>
                            </div>

                            <div class="blog-title">
                              <a href="blog-details.html">
                                <h5 class="mb-3">Build Construction</h5>
                              </a>
                            </div>
                            <p class="">
                              It is a long established fact that a reader will
                              be distracted by the readable.
                            </p>
                            <div class="blog-button">
                              <a class="iq-btn-link" href="blog-details.html">
                                Read More
                                <i class="ml-2 ion-ios-arrow-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="owl-item cloned"
                      style={{ width: "370px", marginRight: "30px" }}
                    >
                      <div class="item">
                        <div class="iq-blog-box">
                          <div class="iq-blog-image clearfix">
                            <img
                              src="/Images/02 (3).png"
                              class="img-fluid"
                              alt="unisaas-blog"
                            ></img>
                            <ul class="iq-blogtag">
                              <li>
                                <a href="/">Marketing</a>
                              </li>
                            </ul>
                          </div>
                          <div class="iq-blog-detail">
                            <div class="iq-blog-meta">
                              <ul class="iq-postdate">
                                <li class="list-inline-item">
                                  <i class="fa fa-calendar-alt mr-2"></i>
                                  <span class="screen-reader-text">
                                    Posted on
                                  </span>
                                  <a href="/" rel="bookmark">
                                    <time
                                      class="entry-date published updated"
                                      datetime="2020-02-17T06:44:40+00:00"
                                    >
                                      February 17, 2020
                                    </time>
                                  </a>
                                </li>
                              </ul>
                            </div>

                            <div class="blog-title">
                              <a href="blog-details.html">
                                <h5 class="mb-3">
                                  Official Terraform Provider
                                </h5>
                              </a>
                            </div>
                            <p class="">
                              It is a long established fact that a reader will
                              be distracted by the readable.
                            </p>
                            <div class="blog-button">
                              <a class="iq-btn-link" href="blog-details.html">
                                Read More
                                <i class="ml-2 ion-ios-arrow-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="owl-item cloned"
                      style={{ width: "370px", marginRight: "30px" }}
                    >
                      <div class="item">
                        <div class="iq-blog-box">
                          <div class="iq-blog-image clearfix">
                            <img
                              src="/Images/02 (3).png"
                              class="img-fluid"
                              alt="unisaas-blog"
                            ></img>
                            <ul class="iq-blogtag">
                              <li>
                                <a href="/">Marketing</a>
                              </li>
                            </ul>
                          </div>
                          <div class="iq-blog-detail">
                            <div class="iq-blog-meta">
                              <ul class="iq-postdate">
                                <li class="list-inline-item">
                                  <i class="fa fa-calendar-alt mr-2"></i>
                                  <span class="screen-reader-text">
                                    Posted on
                                  </span>
                                  <a href="/" rel="bookmark">
                                    <time
                                      class="entry-date published updated"
                                      datetime="2020-02-17T06:43:49+00:00"
                                    >
                                      February 17, 2020
                                    </time>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div class="blog-title">
                              <a href="blog-details.html">
                                <h5 class="mb-3">CCPA Compliance Update</h5>
                              </a>
                            </div>
                            <p class="">
                              It is a long established fact that a reader will
                              be distracted by the readable.
                            </p>
                            <div class="blog-button">
                              <a class="iq-btn-link" href="blog-details.html">
                                Read More
                                <i class="ml-2 ion-ios-arrow-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="owl-item"
                      style={{ width: "370px", marginRight: "30px" }}
                    >
                      <div class="item">
                        <div class="iq-blog-box">
                          <div class="iq-blog-image clearfix">
                            <img
                              src="/Images/02 (3).png"
                              class="img-fluid"
                              alt="unisaas-blog"
                            ></img>
                            <ul class="iq-blogtag">
                              <li>
                                <a href="/">Marketing</a>
                              </li>
                            </ul>
                          </div>
                          <div class="iq-blog-detail">
                            <div class="iq-blog-meta">
                              <ul class="iq-postdate">
                                <li class="list-inline-item">
                                  <i class="fa fa-calendar-alt mr-2"></i>
                                  <span class="screen-reader-text">
                                    Posted on
                                  </span>
                                  <a href="/" rel="bookmark">
                                    <time
                                      class="entry-date published updated"
                                      datetime="2020-02-17T06:40:07+00:00"
                                    >
                                      February 17, 2020
                                    </time>
                                  </a>
                                </li>
                              </ul>
                            </div>

                            <div class="blog-title">
                              <a href="blog-details.html">
                                <h5 class="mb-3">Build Construction</h5>
                              </a>
                            </div>
                            <p class="">
                              It is a long established fact that a reader will
                              be distracted by the readable.
                            </p>
                            <div class="blog-button">
                              <a class="iq-btn-link" href="blog-details.html">
                                Read More
                                <i class="ml-2 ion-ios-arrow-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="owl-item"
                      style={{ width: "370px", marginRight: "30px" }}
                    >
                      <div class="item">
                        <div class="iq-blog-box">
                          <div class="iq-blog-image clearfix">
                            <img
                              src="/Images/02 (3).png"
                              class="img-fluid"
                              alt="unisaas-blog"
                            ></img>
                            <ul class="iq-blogtag">
                              <li>
                                <a href="/">Marketing</a>
                              </li>
                            </ul>
                          </div>
                          <div class="iq-blog-detail">
                            <div class="iq-blog-meta">
                              <ul class="iq-postdate">
                                <li class="list-inline-item">
                                  <i class="fa fa-calendar-alt mr-2"></i>
                                  <span class="screen-reader-text">
                                    Posted on
                                  </span>
                                  <a href="/" rel="bookmark">
                                    <time
                                      class="entry-date published updated"
                                      datetime="2020-02-17T06:44:40+00:00"
                                    >
                                      February 17, 2020
                                    </time>
                                  </a>
                                </li>
                              </ul>
                            </div>

                            <div class="blog-title">
                              <a href="blog-details.html">
                                <h5 class="mb-3">
                                  Official Terraform Provider
                                </h5>
                              </a>
                            </div>
                            <p class="">
                              It is a long established fact that a reader will
                              be distracted by the readable.
                            </p>
                            <div class="blog-button">
                              <a class="iq-btn-link" href="blog-details.html">
                                Read More
                                <i class="ml-2 ion-ios-arrow-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="owl-item active"
                      style={{ width: "370px", marginRight: "30px" }}
                    >
                      <div class="item">
                        <div class="iq-blog-box">
                          <div class="iq-blog-image clearfix">
                            <img
                              src="/Images/02 (3).png"
                              class="img-fluid"
                              alt="unisaas-blog"
                            ></img>
                            <ul class="iq-blogtag">
                              <li>
                                <a href="/">Marketing</a>
                              </li>
                            </ul>
                          </div>
                          <div class="iq-blog-detail">
                            <div class="iq-blog-meta">
                              <ul class="iq-postdate">
                                <li class="list-inline-item">
                                  <i class="fa fa-calendar-alt mr-2"></i>
                                  <span class="screen-reader-text">
                                    Posted on
                                  </span>
                                  <a href="/" rel="bookmark">
                                    <time
                                      class="entry-date published updated"
                                      datetime="2020-02-17T06:43:49+00:00"
                                    >
                                      February 17, 2020
                                    </time>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div class="blog-title">
                              <a href="blog-details.html">
                                <h5 class="mb-3">CCPA Compliance Update</h5>
                              </a>
                            </div>
                            <p class="">
                              It is a long established fact that a reader will
                              be distracted by the readable.
                            </p>
                            <div class="blog-button">
                              <a class="iq-btn-link" href="blog-details.html">
                                Read More
                                <i class="ml-2 ion-ios-arrow-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="owl-item cloned active"
                      style={{ width: "370px", marginRight: "30px" }}
                    >
                      <div class="item">
                        <div class="iq-blog-box">
                          <div class="iq-blog-image clearfix">
                            <img
                              src="/Images/02 (3).png"
                              class="img-fluid"
                              alt="unisaas-blog"
                            ></img>
                            <ul class="iq-blogtag">
                              <li>
                                <a href="/">Marketing</a>
                              </li>
                            </ul>
                          </div>
                          <div class="iq-blog-detail">
                            <div class="iq-blog-meta">
                              <ul class="iq-postdate">
                                <li class="list-inline-item">
                                  <i class="fa fa-calendar-alt mr-2"></i>
                                  <span class="screen-reader-text">
                                    Posted on
                                  </span>
                                  <a href="/" rel="bookmark">
                                    <time
                                      class="entry-date published updated"
                                      datetime="2020-02-17T06:40:07+00:00"
                                    >
                                      February 17, 2020
                                    </time>
                                  </a>
                                </li>
                              </ul>
                            </div>

                            <div class="blog-title">
                              <a href="blog-details.html">
                                <h5 class="mb-3">Build Construction</h5>
                              </a>
                            </div>
                            <p class="">
                              It is a long established fact that a reader will
                              be distracted by the readable.
                            </p>
                            <div class="blog-button">
                              <a class="iq-btn-link" href="blog-details.html">
                                Read More
                                <i class="ml-2 ion-ios-arrow-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="owl-item cloned active"
                      style={{ width: "370px", marginRight: "30px" }}
                    >
                      <div class="item">
                        <div class="iq-blog-box">
                          <div class="iq-blog-image clearfix">
                            <img
                              src="/Images/02 (3).png"
                              class="img-fluid"
                              alt="unisaas-blog"
                            ></img>
                            <ul class="iq-blogtag">
                              <li>
                                <a href="/">Marketing</a>
                              </li>
                            </ul>
                          </div>
                          <div class="iq-blog-detail">
                            <div class="iq-blog-meta">
                              <ul class="iq-postdate">
                                <li class="list-inline-item">
                                  <i class="fa fa-calendar-alt mr-2"></i>
                                  <span class="screen-reader-text">
                                    Posted on
                                  </span>
                                  <a href="/" rel="bookmark">
                                    <time
                                      class="entry-date published updated"
                                      datetime="2020-02-17T06:44:40+00:00"
                                    >
                                      February 17, 2020
                                    </time>
                                  </a>
                                </li>
                              </ul>
                            </div>

                            <div class="blog-title">
                              <a href="blog-details.html">
                                <h5 class="mb-3">
                                  Official Terraform Provider
                                </h5>
                              </a>
                            </div>
                            <p class="">
                              It is a long established fact that a reader will
                              be distracted by the readable.
                            </p>
                            <div class="blog-button">
                              <a class="iq-btn-link" href="blog-details.html">
                                Read More
                                <i class="ml-2 ion-ios-arrow-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="owl-item cloned"
                      style={{ width: "370px", marginRight: "30px" }}
                    >
                      <div class="item">
                        <div class="iq-blog-box">
                          <div class="iq-blog-image clearfix">
                            <img
                              src="/Images/02 (3).png"
                              class="img-fluid"
                              alt="unisaas-blog"
                            ></img>
                            <ul class="iq-blogtag">
                              <li>
                                <a href="/">Marketing</a>
                              </li>
                            </ul>
                          </div>
                          <div class="iq-blog-detail">
                            <div class="iq-blog-meta">
                              <ul class="iq-postdate">
                                <li class="list-inline-item">
                                  <i class="fa fa-calendar-alt mr-2"></i>
                                  <span class="screen-reader-text">
                                    Posted on
                                  </span>
                                  <a href="/" rel="bookmark">
                                    <time
                                      class="entry-date published updated"
                                      datetime="2020-02-17T06:43:49+00:00"
                                    >
                                      February 17, 2020
                                    </time>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div class="blog-title">
                              <a href="blog-details.html">
                                <h5 class="mb-3">CCPA Compliance Update</h5>
                              </a>
                            </div>
                            <p class="">
                              It is a long established fact that a reader will
                              be distracted by the readable.
                            </p>
                            <div class="blog-button">
                              <a class="iq-btn-link" href="blog-details.html">
                                Read More
                                <i class="ml-2 ion-ios-arrow-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div class="owl-nav disabled">
                  <button type="button" role="presentation" class="owl-prev">
                    <i class="fa fa-angle-left fa-2x"></i>
                  </button>
                  <button type="button" role="presentation" class="owl-next">
                    <i class="fa fa-angle-right fa-2x"></i>
                  </button>
                </div>
                <div class="owl-dots disabled">
                  <button role="button" class="owl-dot active">
                    <span></span>
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
