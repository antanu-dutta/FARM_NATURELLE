import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import customer from "../../assets/customer.webp";

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

function HappyCustomer({ CardDetails }) {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div id="happy_customer_section" className="py-20 bg-[#f6f5f0]">
      <div className="container">
        <div className="text-center">
          <h1 className="text-black font-normal mb-8 text-5xl">
            Happy Customers
          </h1>
          <p className="text-xl font-normal mb-5">
            With million of products delivered, discover why <br />
            customers trust us with there daily health
          </p>
          <div className="">
            <Slider {...settings}>
              {CardDetails.map((item, index) => (
                <div key={index} className="px-10 ">
                  <div className=" shadow-customShadow min-h-[400px] bg-white p-5">
                    <div className="flex gap-4 items-center mb-4">
                      <img src={item.path} alt="" />
                      <span className="text-lg text-black font-medium">
                        {item.customerName}
                      </span>
                    </div>
                    <hr className="bg-gray-700 h-[2px] mb-4" />
                    <div className="text-left mb-4 flex gap-1">
                      <i class="fa-solid fa-star text-[#FFD43B]"></i>
                      <i class="fa-solid fa-star text-[#FFD43B]"></i>
                      <i class="fa-solid fa-star text-[#FFD43B]"></i>
                      <i class="fa-solid fa-star text-[#FFD43B]"></i>
                      <i class="fa-solid fa-star text-[#FFD43B]"></i>
                    </div>
                    <p className="text-xl font-medium text-left">
                      {item.reviewText}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HappyCustomer;
