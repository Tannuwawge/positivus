import React, { useState } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
    <nav className="w-full flex justify-between items-center px-6 md:px-16 py-4 border-b border-light">
      <h1 className="text-2xl font-bold">⭐ Positivus</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6">
        <li>About us</li>
        <li>Services</li>
        <li>Use Cases</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>

      <button className="hidden md:block border px-4 py-2 rounded-xl hover:bg-primary hover:text-black">
        Request a quote
      </button>

      {/* Mobile */}
      <button className="md:hidden" onClick={() => setOpen(!open)}>
        <Menu />
      </button>

      {open && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow-md p-6 flex flex-col space-y-4 md:hidden">
          <li>About us</li>
          <li>Services</li>
          <li>Use Cases</li>
          <li>Pricing</li>
          <li>Blog</li>
        </ul>
      )}
    </nav>
    </>
  );
};

export default Navbar;
