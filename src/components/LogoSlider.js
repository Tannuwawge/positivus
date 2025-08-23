import React from "react";
import Marquee from "react-fast-marquee";

const LogoSlider = () => {
  return (
    <div className="py-6 bg-white">
      <Marquee gradient={false} speed={40}>
        <img src="https://logo.clearbit.com/amazon.com" alt="Amazon" className="h-12 mx-8" />
        <img src="https://logo.clearbit.com/dribbble.com" alt="Dribbble" className="h-12 mx-8" />
        <img src="https://logo.clearbit.com/hubspot.com" alt="Hubspot" className="h-12 mx-8" />
        <img src="https://logo.clearbit.com/notion.so" alt="Notion" className="h-12 mx-8" />
        <img src="https://logo.clearbit.com/netflix.com" alt="Netflix" className="h-12 mx-8" />
        <img src="https://logo.clearbit.com/zoom.us" alt="Zoom" className="h-12 mx-8" />
      </Marquee>
    </div>
  );
};

export default LogoSlider;
