import React from "react";

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 py-12 bg-grey text-white">
      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <h1 className="text-2xl font-bold">⭐ Positivus</h1>
          <p className="mt-4">Email: info@positivus.com</p>
          <p>Phone: 555-567-8901</p>
          <p>Address: 1234 Main St, Stardust State</p>
        </div>

        <div>
          <h3 className="font-bold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li>About us</li>
            <li>Services</li>
            <li>Use Cases</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">Subscribe</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Email"
              className="p-2 rounded-l-xl text-dark"
            />
            <button className="bg-primary text-dark px-4 rounded-r-xl">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="text-center mt-6 text-sm">
        © 2023 Positivus. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
