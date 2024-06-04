import React from "react";

function IconStrip({ firstStrip }) {
  return (
    <div id="iconstrip" className="  bg-primary">
      <div className="container">
        <div
          id="iconstrip-container"
          className={`grid items-center ${
            firstStrip.length === 4 ? "grid-cols-4" : "grid-cols-7"
          }`}
        >
          {firstStrip.map((item, index) => (
            <div key={index} className="flex gap-4 items-center">
              <img src={item.path} alt={item.content} />
              <span className="text-sm font-semibold text-white ">
                {item.content}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default IconStrip;
