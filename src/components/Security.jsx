import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import google from "../assets/google.png";
import aws from "../assets/aws.png";
import doker from "../assets/doker.png";
import kubar from "../assets/kubar.png";
import azure from "../assets/azure.png";
import open from "../assets/open.png";
import mix from "../assets/mix.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
const images = [google, aws, doker, kubar, azure, open, mix];
function Security() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    autoplay: true,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <>
      <section className="pt-0 pt-0 iq-pb-70">
        <img
          src="/Images/shape1.png"
          className="img-fluid shape-left"
          alt="QLOUD"
        ></img>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center iq-title-box iq-title-default iq-title-box-2 mb-0">
                <div className="iq-title-icon"></div>
                <span className="iq-subtitle">Security</span>
                <h2 className="iq-title">
                  Security for any App, any Platform, any Cloud{" "}
                </h2>
              </div>
            </div>
          </div>

          <Slider {...settings}>
            {images.map((img, idx) => (
              <div
                className={idx === imageIndex ? "slide activeSlide" : "slide"}
              >
                <img src={img} alt={img} />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}

export default Security;
