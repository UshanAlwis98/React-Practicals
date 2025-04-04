import React from "react";
import heroImg from "../assets/Images/hero-img.jpg";

const HeroSection = () => {
  return (
    <>
      <div className="flex items-center gap-32">
        <div>My Text</div>

        <div className="w-64 h-auto object-contain ml-20">
          <img src={heroImg} alt="Logo" className="" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
