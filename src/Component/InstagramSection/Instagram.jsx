import React from "react";
import img5 from "../../assets/Instagram/5.jpg";

function Instagram({ firstSection, secondSection }) {
  return (
    <div id="instagram_section">
      <div className="flex gap-4 h-[600px]">
        <div className="flex-1 grid grid-cols-2 gap-4 border ">
          {firstSection.map((item, index) => (
            <div className="relative p-3 text-white cursor-pointer group">
              <img
                src={item.path}
                className="object-cover absolute top-0 left-0 w-full h-full z-[-50] group-hover:brightness-[0.3]"
                alt=""
              />
              <p className="text-sm">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="flex-1 border  relative">
          <img
            src={img5}
            className="object-cover absolute top-0 left-0 w-full h-full z-[-50]"
            alt=""
          />
        </div>
        <div className="flex-1 border grid grid-cols-2 gap-4 ">
          {secondSection.map((item, index) => (
            <div className="relative p-3 cursor-pointer group">
              <img
                src={item.path}
                className="object-cover absolute top-0 group-hover:brightness-[0.3] left-0 w-full h-full z-[-50]"
                alt=""
              />
              <p className="text-white text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Instagram;
