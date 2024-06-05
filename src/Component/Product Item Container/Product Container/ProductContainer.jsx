import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

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

function ProductContainer({ title, subtitle, product }) {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: product.length >= 3 ? 3 : product.length,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const [likedItems, setLikedItems] = useState(
    Array(product.length).fill(false)
  );

  const toggleLiked = (index) => {
    const newLikedItems = [...likedItems];
    newLikedItems[index] = !newLikedItems[index];
    setLikedItems(newLikedItems);
  };
  return (
    <div id="product-container" className="py-20 px-20 flex ">
      <div className="w-1/4 p-4">
        <h2 className="text-brown text-4xl font-semibold mb-5">{title}</h2>
        <span className="text-sm text-black block  mb-8">{subtitle}</span>
        <a
          href="#"
          className="bg-brown text-white rounded-lg py-2 px-20 uppercase"
        >
          view all
        </a>
      </div>
      <div className="w-3/4">
        <Slider {...settings}>
          {product.map((item, index) => (
            <div key={index} className="flex justify-end">
              <div id="card" className="me-8  group cursor-pointer ">
                <div className="relative h-[400px]  rounded-xl overflow-hidden p-4">
                  <img
                    src={item.path}
                    alt=""
                    className="absolute top-0 -z-10 left-0 w-full h-full object-cover"
                  />
                  <img
                    src={item.hoverPath}
                    alt=""
                    className="absolute top-0 -right-[100rem] -z-10 group-hover:right-[0] transition-all"
                  />
                  <span className="bg-orange text-white text-sm p-2 rounded-xl">
                    Bestseller
                  </span>
                  <span
                    className=" float-end text-2xl"
                    onClick={() => toggleLiked(index)}
                  >
                    {likedItems[index] ? <FaHeart /> : <CiHeart />}
                  </span>
                </div>
                <div className="p-4 h-1/4">
                  <h3 className="text-black text-lg font-bold mb-2">
                    {item.title}
                  </h3>
                  <hr className="mb-2" />
                  <div className="mb-4">
                    <span className=" text-gray-400 line-through text-lg me-2">
                      Rs {item.old_price}
                    </span>
                    <span className="me-2 text-black text-base font-semibold">
                      Rs. {item.new_price}
                    </span>
                    <span className=" bg-red-700 text-white px-2 py-1 rounded-md text-sm transition-all group-hover:bg-primary">
                      {item.offer}
                    </span>
                  </div>
                  <button className="block w-full border transition-all border-primary py-3 rounded-3xl group-hover:bg-primary group-hover:text-white  text-primary uppercase font-semibold">
                    add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ProductContainer;
