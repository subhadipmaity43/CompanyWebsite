import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidenav from "./Sidenav";

function Data() {
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
                    <h2 class=" head">Data Engineering</h2>
                    <ol class="breadcrumb main-bg">
                      <li class="breadcrumb-item">
                        <Link to="/">
                          <i
                            class="fa fa-home mr-2"
                            style={{ paddingRight: "5px", fontSize: "13px" }}
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
        <section>
          <img
            src="/Images/shape1.png"
            className="img-fluid shape-right"
            alt="QLOUD"
          ></img>
          <div className="container">
            <div className="row pt-0 iq-pb-70">
              <div className="col-lg-6 col-sm-12 ">
                <div className="iq-title-box iq-title-default iq-title-box-2 size">
                  <h2 className="iq-title size1">
                    Data engineering and smart analytics
                  </h2>
                  <p className="iq-title-desc">
                    Data engineering is the practice of designing and building
                    systems for collecting, storing, and analyzing data at
                    scale. It is a broad field with applications in just about
                    every industry. Organizations have the ability to collect
                    massive amounts of data, and they need the right people and
                    technology to ensure it is in a highly usable state by the
                    time it reaches data scientists and analysts. A Data Analyst
                    gathers and analyzes data to identify trends and develops
                    valuable insights to help solve problems.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 mb-lg-0 mb-5">
                <img
                  src="/Images/dataengineering.png"
                  className="img-fluid"
                  alt="qloud"
                ></img>
              </div>
            </div>
            <div className="iq-title-box iq-title-default iq-title-box-2  ">
              <h2 className="iq-title " style={{ textAlign: "center" }}>
                What are the Benefits of DevSecOps Model
              </h2>
            </div>
            <div class="et_pb_row et_pb_row_2 et_pb_equal_columns et_pb_gutters2 et_pb_row_5col">
              <div class="et_pb_column et_pb_column_1_5 et_pb_column_3  et_pb_css_mix_blend_mode_passthrough">
                <div
                  class="et_pb_module et_pb_blurb et_pb_blurb_0 et_pb_text_align_left et_pb_blurb_position_top et_pb_bg_layout_light et_had_animation"
                  style={{}}
                >
                  <div class="et_pb_blurb_content">
                    <div class="et_pb_main_blurb_image">
                      <span class="et_pb_image_wrap et_pb_only_image_mode_wrap">
                        <img
                          decoding="async"
                          width="300"
                          height="300"
                          src="/Images/data1.png"
                          alt=""
                          sizes="(max-width: 300px) 100vw, 300px"
                          class="et-waypoint et_pb_animation_top et_pb_animation_top_tablet et_pb_animation_top_phone wp-image-85 et-animated"
                        />
                      </span>
                    </div>
                    <div class="et_pb_blurb_container">
                      <div class="et_pb_blurb_description">
                        <p>
                          <span>
                            Reviewing your current data architecture to analyze
                            data sources and define data lakes or DWHs
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="et_pb_column et_pb_column_1_5 et_pb_column_4  et_pb_css_mix_blend_mode_passthrough">
                <div
                  class="et_pb_module et_pb_blurb et_pb_blurb_1 et_pb_text_align_left et_pb_blurb_position_top et_pb_bg_layout_light et_had_animation"
                  style={{}}
                >
                  <div class="et_pb_blurb_content">
                    <div class="et_pb_main_blurb_image">
                      <span class="et_pb_image_wrap et_pb_only_image_mode_wrap">
                        <img
                          decoding="async"
                          width="300"
                          height="300"
                          src="/Images/data2.png"
                          alt=""
                          sizes="(max-width: 300px) 100vw, 300px"
                          class="et-waypoint et_pb_animation_top et_pb_animation_top_tablet et_pb_animation_top_phone wp-image-87 et-animated"
                        />
                      </span>
                    </div>
                    <div class="et_pb_blurb_container">
                      <div class="et_pb_blurb_description">
                        <p>
                          <span>
                            Cleaning, processing, and transforming data into
                            usable formats for model development
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="et_pb_column et_pb_column_1_5 et_pb_column_5  et_pb_css_mix_blend_mode_passthrough">
                <div
                  class="et_pb_module et_pb_blurb et_pb_blurb_2 et_pb_text_align_left et_pb_blurb_position_top et_pb_bg_layout_light et_had_animation"
                  style={{}}
                >
                  <div class="et_pb_blurb_content">
                    <div class="et_pb_main_blurb_image">
                      <span class="et_pb_image_wrap et_pb_only_image_mode_wrap">
                        <img
                          decoding="async"
                          width="300"
                          height="300"
                          src="/Images/data3.png"
                          alt=""
                          sizes="(max-width: 300px) 100vw, 300px"
                          class="et-waypoint et_pb_animation_top et_pb_animation_top_tablet et_pb_animation_top_phone wp-image-88 et-animated"
                        />
                      </span>
                    </div>
                    <div class="et_pb_blurb_container">
                      <div class="et_pb_blurb_description">
                        <p>
                          <span>
                            Building data pipelines that gather, process, store,
                            and help access data
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="et_pb_column et_pb_column_1_5 et_pb_column_6  et_pb_css_mix_blend_mode_passthrough">
                <div
                  class="et_pb_module et_pb_blurb et_pb_blurb_3 et_pb_text_align_left et_pb_blurb_position_top et_pb_bg_layout_light et_had_animation"
                  style={{}}
                >
                  <div class="et_pb_blurb_content">
                    <div class="et_pb_main_blurb_image">
                      <span class="et_pb_image_wrap et_pb_only_image_mode_wrap">
                        <img
                          decoding="async"
                          width="300"
                          height="300"
                          src="/Images/data4.png"
                          alt=""
                          sizes="(max-width: 300px) 100vw, 300px"
                          class="et-waypoint et_pb_animation_top et_pb_animation_top_tablet et_pb_animation_top_phone wp-image-90 et-animated"
                        />
                      </span>
                    </div>
                    <div class="et_pb_blurb_container">
                      <div class="et_pb_blurb_description">
                        <p>
                          <span>
                            Consult on selecting the best fitting open source or
                            proprietary big data analytics tools and products
                            for your project
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="et_pb_column et_pb_column_1_5 et_pb_column_7  et_pb_css_mix_blend_mode_passthrough et-last-child">
                <div
                  class="et_pb_module et_pb_blurb et_pb_blurb_4 et_pb_text_align_left et_pb_blurb_position_top et_pb_bg_layout_light et_had_animation"
                  style={{}}
                >
                  <div class="et_pb_blurb_content">
                    <div class="et_pb_main_blurb_image">
                      <span class="et_pb_image_wrap et_pb_only_image_mode_wrap">
                        <img
                          decoding="async"
                          width="300"
                          height="300"
                          src="/Images/data5.png"
                          alt=""
                          sizes="(max-width: 300px) 100vw, 300px"
                          class="et-waypoint et_pb_animation_top et_pb_animation_top_tablet et_pb_animation_top_phone wp-image-91 et-animated"
                        />
                      </span>
                    </div>
                    <div class="et_pb_blurb_container">
                      <div class="et_pb_blurb_description">
                        <p>
                          <span>
                            Helping choose among big data platforms for managing
                            your data infrastructures, such as Databricks,
                            DataStax, Snowflake, ScyllaDB, AWS, Microsoft Azure,
                            Google BigQuery
                          </span>
                        </p>
                      </div>
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

export default Data;
