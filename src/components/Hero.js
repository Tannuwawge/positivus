import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12">
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Navigating the digital landscape for success
        </h1>
        <p className="mb-6 text-lg">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <button className="bg-dark text-white px-6 py-3 rounded-xl">
          Book a consultation
        </button>
      </div>

      <div className="mt-8 md:mt-0">
        <img
          src="/heroImage.png"
          alt="Marketing illustration"
          className="w-72 md:w-96"
        />
      </div>
    </section>
  );
};

export default Hero;
