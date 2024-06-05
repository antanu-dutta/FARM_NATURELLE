import React from "react";
import whyImage from "../../assets/whyfarmnatural.jpg";
function WhyFarmNaturelle() {
  return (
    <div id="why_farm_natural" className="py-20">
      <div className="container">
        <div className="text-center px-6">
          <span className="text-sm text-gray-500 uppercase font-semibold block mb-5">
            why farm naturelle
          </span>
          <h2 className="text-5xl text-black font-medium mb-8">
            We are Organic & Natural
          </h2>
          <div className="flex relative items-center justify-center h-[600px] px-10">
            <img
              src={whyImage}
              alt=""
              className="absolute top-0 left-0 w-full h-full z-[-50]"
            />
            <div className="flex gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-4">
                  Pesticides & chemicals free
                </h3>
                <p className="text-sm text-slate-200 font-medium">
                  At Farm Naturelle, we believe in purity from seed to harvest.
                  Pesticide-free, chemical-free. Experience nature's true taste,
                  no harmful residues. Your well-being, as pure as our products.
                </p>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-4">
                  Better for your Health & Planet
                </h3>
                <p className="text-sm text-slate-200 font-medium">
                  At Farm Naturelle, we prioritize well-being and the planet.
                  All-natural, chemical-free products for a healthier you and a
                  greener Earth.
                </p>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-4">
                  Eat Local, Eat Indian
                </h3>
                <p className="text-sm text-slate-200 font-medium">
                  Savor India's rich flavors at Farm Naturelle, celebrating "Eat
                  local, eat Indian." We source locally for sustainable,
                  traditional agriculture, promoting community support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyFarmNaturelle;
