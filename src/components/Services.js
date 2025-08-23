import React from "react";

const Services = () => {
  return (
    <section className="px-6 md:px-16 py-12">
      <h2 className="text-3xl font-bold mb-6">
        <span className="bg-primary px-2">Services</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="border rounded-2xl p-6 hover:shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Search engine optimization</h3>
          <p>We help optimize your website to rank higher in search results.</p>
        </div>

        <div className="border rounded-2xl p-6 bg-primary hover:shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Pay-per-click advertising</h3>
          <p>Run targeted ad campaigns to grow your business efficiently.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
