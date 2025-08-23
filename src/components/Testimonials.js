import React from "react";

const Testimonials = () => {
  return (
    <section className="px-6 md:px-16 py-12 bg-white text-dark">
      <h2 className="text-3xl font-bold mb-6">
        <span className="bg-primary text-dark px-2">Testimonials</span>
      </h2>

      <div className="p-6 bg-white border border-light rounded-xl max-w-xl">
        <p className="italic mb-4">
          "We have been working with Positivus for the past year and have seen a
          significant increase in website traffic and leads as a result of their
          efforts."
        </p>
        <h4 className="font-semibold">John Smith</h4>
        <p className="text-sm">Marketing Director at XYZ Corp</p>
      </div>
    </section>
  );
};

export default Testimonials;
