import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidenav from "./Sidenav";
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// // import "./styles.css";

// // import required modules
// import { Mousewheel, Pagination } from "swiper/modules";
function Kubernets() {
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
                    <h2 class=" head">Kubernetes </h2>
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
                    How Kubernetes helps your business
                  </h2>
                  <p className="iq-title-desc">
                    Kubernetes is an open-source container orchestration
                    solution that empowers fast and scalable deployment
                    practices across public and private clouds. Other benefits
                    for organizations include:
                  </p>
                </div>
                <div className="top-para  pt-0 iq-pb-70 ">
                  <div className="iq-list  ">
                    <ul className="iq-list-with-icon">
                      <li style={{ fontWeight: "600", marginLeft: "15px" }}>
                        <i class="fa-solid fa-hashtag devsecops"></i> Container
                        orchestration savings
                      </li>

                      <li style={{ fontWeight: "600", marginLeft: "15px" }}>
                        <i class="fa-solid fa-hashtag devsecops"></i>Increased
                        DevOps efficiency for microservices architecture
                      </li>

                      <li style={{ fontWeight: "600", marginLeft: "15px" }}>
                        <i class="fa-solid fa-hashtag devsecops"></i>
                        App stability and availability in a cloud environment
                      </li>
                      <li style={{ fontWeight: "600", marginLeft: "15px" }}>
                        <i class="fa-solid fa-hashtag devsecops"></i>
                        Deploying workloads in multicloud environments{" "}
                      </li>
                      <li style={{ fontWeight: "600", marginLeft: "15px" }}>
                        <i class="fa-solid fa-hashtag devsecops"></i>
                        Automation of deployment and scalability
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 mb-lg-0 mb-5">
                <img
                  src="/Images/kubarnetes1.webp"
                  className="img-fluid"
                  alt="qloud"
                ></img>
              </div>
            </div>
          </div>
          <div
            className="kub"
            style={{ background: "#EEF1FF", padding: "70px 0px" }}
          >
            <div className="container">
              <div class="et_pb_row et_pb_row_2 et_pb_equal_columns et_pb_gutters2 et_pb_row_5col">
                <div class="et_pb_column et_pb_column_1_5 et_pb_column_3  et_pb_css_mix_blend_mode_passthrough">
                  <div
                    class="et_pb_module et_pb_blurb et_pb_blurb_0 et_pb_text_align_left et_pb_blurb_position_top et_pb_bg_layout_light et_had_animation"
                    style={{}}
                  >
                    <div class="et_pb_blurb_content">
                      <div
                        class="et_pb_main_blurb_image"
                        style={{ marginTop: "18px" }}
                      >
                        <span class="et_pb_image_wrap et_pb_only_image_mode_wrap">
                          <img
                            decoding="async"
                            width="300"
                            height="300"
                            src="/Images/kubarnetes2.gif"
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
                              Kubernetes makes development, release, and
                              deployment processes less complicated. As a
                              result, teams are more focused and efficient,
                              accelerating release timeframes.
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
                            src="/Images/kubarnetes3.gif"
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
                              Kubernetes enablement can help your organization
                              save on your ecosystem management so that there’s
                              room for scalability across multiple environments
                              based on your needs.
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
                            src="/Images/kubarnetes41.gif"
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
                              Kubernetes enables you to add new features to,
                              let’s say, your game app without disrupting the
                              millions of users playing the game in those
                              moments.
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
                            src="/Images/kubarnetes6.gif"
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
                              Containerization and Kubernetes make it possible
                              to realize the promises of the new hybrid and
                              multi-cloud environments. This means the operation
                              of applications in any public and private
                              environment is guaranteed without functional
                              losses.
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
                            src="/Images/kubarnetes5.gif"
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
                              Kubernetes facilitates the migration of
                              applications from an on-premises environment to
                              public or private clouds.
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container ">
            <div className="iq-title-box iq-title-default iq-title-box-2 ">
              <h2
                className="iq-title "
                style={{ textAlign: "center", paddingTop: "40px" }}
              >
                Kubernetes Implementation
              </h2>
              <p className="kub-para">
                DataLuminous provides professional services around Kubernetes
                and associated eco-systems. The engineers at DataLuminous help
                to implement and deploy large-scale production system in a
                smooth and cost-efficient manner to achieve high availability
                for mission-critical enterprise apps.
              </p>
              <h2
                className="iq-title "
                style={{ textAlign: "center", paddingTop: "40px" }}
              >
                We offer fully managed Kubernetes solutions
              </h2>
            </div>
          </div>
          <div className="container">
            {/* <Swiper
              direction={"vertical"}
              slidesPerView={1}
              spaceBetween={30}
              mousewheel={true}
              pagination={{
                clickable: true,
              }}
              modules={[Mousewheel, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper> */}
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Kubernets;
