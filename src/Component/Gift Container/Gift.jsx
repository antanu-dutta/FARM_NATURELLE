import React from "react";
import { GiftItem } from "./GiftItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`  bg-red-900 w-10 h-10 absolute top-1/2 right-[-50px] flex justify-center items-center rounded-full cursor-pointer`}
      onClick={onClick}
    >
      <i className="fa-solid fa-arrow-right text-white"></i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`  bg-red-900 w-10 h-10 absolute top-1/2 left-[-50px] flex justify-center items-center rounded-full cursor-pointer`}
      onClick={onClick}
    >
      <i className="fa-solid fa-arrow-left text-white"></i>
    </div>
  );
}

function Gift() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div id="gift_section" className="py-20">
      <div className="container">
        <div>
          <h2 className="text-5xl text-black font-medium text-center mb-8">
            Gift Your Loved ones Healthy Living{" "}
            <span className="text-primary">starts @ Rs 499 only</span>
          </h2>
          <div className="w-full mb-10">
            <Slider {...settings}>
              {GiftItem.map((item, index) => (
                <div className="px-5" key={index}>
                  <div className="relative p-10 rounded-xl h-[500px] overflow-hidden">
                    <img
                      src={item.path}
                      alt=""
                      className="absolute top-0 z-[-50] left-0 w-full h-full"
                    />
                    <h2 className="text-5xl text-white font-semibold mb-2">
                      {item.title}
                    </h2>
                    <span className="text-xl text-white block mb-2">
                      {item.subTitle}
                    </span>
                    <span className="text-xl text-[#c79313] block mb-2">
                      {item.price}
                    </span>
                    <a
                      href=""
                      className="absolute bottom-7 uppercase text-primary bg-white rounded-xl font-semibold py-4 px-10 hover:text-white hover:bg-primary transition-all"
                    >
                      buy now
                    </a>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="text-center">
            <a
              href=""
              className="uppercase text-primary bg-transparent border border-primary rounded-xl font-semibold py-4 px-16 hover:text-white hover:bg-primary transition-all"
            >
              shop this
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gift;
