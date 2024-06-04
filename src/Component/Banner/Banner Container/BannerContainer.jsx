import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BannerContainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Banner1 from "../Banner 1/Banner1";
import Banner2 from "../Banner 2/Banner2";
import Banner3 from "../Banner 3/Banner3";
import Banner4 from "../Banner 4/Banner4";

const CustomArrow = (props) => {
  const { className, style, onClick, icon } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    ></div>
  );
};

function BannerContainer() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomArrow icon={"fa-solid fa-arrow-left"} />,
    prevArrow: <CustomArrow icon={faChevronRight} />,
  };
  return (
    <div className="custom-slider-container mt-5">
      <Slider {...settings}>
        <Banner1 />
        <Banner2 />
        <Banner3 />
        <Banner4 />
      </Slider>
    </div>
  );
}

export default BannerContainer;
