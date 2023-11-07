import React from "react";
import { NavLink } from "react-router-dom";
import vanlogo from "../images/vanlogo.png";

export default function Header() {
  const myStyle = {
    fontWeight: "bolder",
    textDecoration: "underline",
    color: "rose-400",
  };
  return (
    <nav className="flex w-full p-4 justify-between bg-gradient-to-r from-yellow-500 to-yellow-900 text-black font-medium">
      <NavLink
        to="/"
        style={(sty) => (sty.isActive ? myStyle : null)}
        className="font-bold text-xl flex items-center "
      >
        <img src={vanlogo} alt="van-logo" className="w-24 " />
        <h2 className="text-4xl -ml-4 hidden sm:block">VANHIRE</h2>
      </NavLink>
      <div className="flex gap-4 items-center text-white">
        <NavLink
          to="/host"
          style={({ isActive }) => (isActive ? myStyle : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="/vans"
          style={({ isActive }) => (isActive ? myStyle : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? myStyle : null)}
        >
          About
        </NavLink>
      </div>
    </nav>
  );
}

//bg-gradient-to-r from-blue-950 to-cyan-800
