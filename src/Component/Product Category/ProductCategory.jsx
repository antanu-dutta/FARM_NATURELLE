import React from "react";
function ProductCategory({ card, name, logo }) {
  return (
    <div id="product_cateogry" className="bg-secondary py-24">
      <div className="container">
        <div
          id="name_logo"
          className="flex gap-4 flex-col items-center justify-center mb-10"
        >
          <img src={logo} alt="" className=" h-44 object-cover" />
          <h3 className="text-4xl text-primary font-semibold">{name}</h3>
        </div>
        <div
          id="category_product"
          className="flex flex-wrap gap-4 justify-center "
        >
          {card.map((item, index) => (
            <div className=" w-[12.5%] text-center" key={index}>
              <img
                src={item.path}
                alt=""
                className={`border-2 border-primary mb-4 w-full hover:scale-110 transition-all cursor-pointer ${
                  name.includes("Concern") ? "rounded-full" : "rounded-lg"
                }`}
              />
              <span className="text-base text-primary font-semibold">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCategory;
