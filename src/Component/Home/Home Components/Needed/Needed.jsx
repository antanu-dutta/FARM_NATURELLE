import React from "react";
import img1 from "../../../../assets/Banner/Banner 4 Images/1.svg";
import img2 from "../../../../assets/Banner/Banner 4 Images/2.svg";
import img3 from "../../../../assets/Banner/Banner 4 Images/3.svg";
import img4 from "../../../../assets/Banner/Banner 4 Images/4.svg";
import neededImg from "../../../../assets/needed.webp";

function Needed() {
  const content = [
    {
      path: img1,
      text: "ayurvedic products",
    },
    {
      path: img2,
      text: "lifestyle recommendation",
    },
    {
      path: img3,
      text: "custom diet plan",
    },
    {
      path: img4,
      text: "expoert connect",
    },
  ];
  return (
    <div id="need" className="bg-primary py-5">
      <div className="container">
        <div className="flex gap-10">
          <div className="w-1/2">
            <h2 className=" capitalize text-white font-medium text-4xl mb-2">
              not sure what to buy ?
            </h2>
            <span className="text-base text-gray-400 font-medium block mb-2">
              Consult our Experts and make your Daily life Healthy
            </span>
            <div className="grid grid-cols-2 mb-4 flex-wrap gap-4">
              {content.map((item, index) => (
                <div
                  className="bg-white flex items-center p-4 gap-5 rounded-lg"
                  key={index}
                >
                  <img src={item.path} alt={item.text} />
                  <span className="capitalize font-semibold text-base">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
            <button className="block w-full uppercase py-4 bg-transparent border-2 text-white border-white rounded-xl hover:bg-white hover:text-primary transition-all hover:border-primary font-semibold">
              book consultaion @ rs 99
            </button>
          </div>
          <div className="w-1/2">
            <img src={neededImg} alt="" className="w-[30rem]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Needed;
