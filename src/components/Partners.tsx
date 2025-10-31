import React from "react";
import partner1 from "../assets/partner-1.avif";
import partner2 from "../assets/partner-2.avif";

const Partners = () => {
  return (
   <div className="text-center space-y-8 p-10">
  <h2 className="text-4xl md:text-5xl font-bold text-foreground">
    Our Partners
  </h2>

  <div className="flex justify-center items-center gap-8">
    <img src={partner1} alt="Partner 1" className="h-16 object-contain" />
    <img src={partner2} alt="Partner 2" className="h-16 object-contain" />
  </div>
</div>
  );
};

export default Partners;
