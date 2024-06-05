import React from "react";

function IconStrip({ Strip }) {
  return (
    <div id="iconstrip" className=" py-3  bg-primary">
      <div className="container">
        <div
          id="iconstrip-container"
          className={`grid items-center ${
            Strip.length === 4 ? "grid-cols-4" : "grid-cols-7"
          }`}
        >
          {Strip.map((item, index) => (
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
