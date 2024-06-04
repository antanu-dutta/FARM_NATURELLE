import React from "react";
import slider2 from "../../../assets/Banner/slider2.webp";
import star from "../../../assets/Banner/stars.png";

function Banner2() {
  return (
    <div className="w-full h-screen relative">
      <img
        src={slider2}
        alt=""
        className="absolute -z-50 object-cover top-0 left-0 w-full h-full"
      />
      <div className="w-1/2 mx-auto py-10">
        <span className="text-sm text-white uppercase mb-4 font-bold block text-center">
          healthy living starts with healthy eating
        </span>
        <h2 className="text-7xl text-center mb-4 text-white capitalize font-semibold ">
          from farm to <span className="text-[#c8d52d]">your table</span>
        </h2>
        <div className="flex gap-3 items-center  mb-5 justify-center">
          <img src={star} alt="" />
          <span className="text-white text-lg font-medium">
            over 50 lacs + products sold
          </span>
        </div>
        <div className="text-center">
          <button className="px-4 py-3 bg-transparent border font-semibold border-white rounded-xl text-white text-base uppercase hover:bg-white hover:text-primary transition-all">
            explore our products
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner2;
