import React from "react";

const Process = () => {
  return (
    <section className="px-6 md:px-16 py-12">
      <h2 className="text-3xl font-bold mb-6">
        <span className="bg-primary px-2">Our Working Process</span>
      </h2>

      <div className="space-y-4">
        <div className="p-6 border rounded-xl">
          <h3 className="text-xl font-semibold">01 Consultation</h3>
          <p>We discuss your goals, audience, and strategy.</p>
        </div>
        <div className="p-6 border rounded-xl">
          <h3 className="text-xl font-semibold">02 Research and Strategy Development</h3>
          <p>We analyze and create tailored marketing strategies.</p>
        </div>
      </div>
    </section>
  );
};

export default Process;
