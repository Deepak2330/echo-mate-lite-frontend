import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <Link to="/home" className="mr-4">Home</Link>
      <Link to="/profile" className="mr-4">Profile</Link>
      <Link to="/login" className="mr-4">Logout</Link>
    </nav>
  );
};

export default Navbar;
