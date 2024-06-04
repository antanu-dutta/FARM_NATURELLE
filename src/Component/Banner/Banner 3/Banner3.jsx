import React from "react";
import slider3 from "../../../assets/Banner/slider3.jpg";
import star from "../../../assets/Banner/stars.png";
function Banner3() {
  return (
    <div className="w-full h-screen relative">
      <img
        src={slider3}
        alt=""
        className="absolute -z-50 object-cover top-0 left-0 w-full h-full"
      />
      <div className="mx-auto py-10">
        <span className="text-sm text-white uppercase mb-4 font-bold block text-center">
          healthy living starts with healthy eating
        </span>
        <h2 className="text-7xl text-center mb-6 text-white leading-snug capitalize font-semibold ">
          go organic with{" "}
          <span className="text-[#c8d52d]">20+ acre of farm</span>
        </h2>
        <div className="flex gap-3 items-center  mb-5 justify-center">
          <img src={star} alt="" />
          <span className="text-white text-lg font-medium">visit our farm</span>
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

export default Banner3;
