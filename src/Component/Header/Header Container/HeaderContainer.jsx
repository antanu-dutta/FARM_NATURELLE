import React, { useEffect, useState } from "react";
import "./HeaderContainer.css";
import Offer from "../Offer/Offer";
import Menubar from "../Menubar/Menubar";

function HeaderContainer() {
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`${
        isFixed
          ? "fixed shadow-2xl z-50  w-full top-0 left-0 bg-white transition-all"
          : ""
      }`}
    >
      <Offer />
      <Menubar />
    </header>
  );
}

export default HeaderContainer;
