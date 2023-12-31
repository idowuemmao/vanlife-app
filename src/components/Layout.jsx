import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-full grid">
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <div className="min-h-screen h-full">
        <Outlet />
      </div>
      <div className="sticky bottom-0 z-50">
        <Footer />
      </div>
    </div>
  );
}
