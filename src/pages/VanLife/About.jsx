import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import aboutImg from "../../images/bus5.jpg";

export default function About() {
  return (
    <div className=" bg-primary h-full w-full px-10 py-5 relative">
      <div className="flex w-fit overflow-scroll scrollbar-hide mx-auto relative">
        <img src={aboutImg} alt="about-img" className="shadow-lg" />
        <h1 className="font-extrabold text-xl sm:text-3xl md:text-5xl lg:text-7xl text-transparent absolute bottom-4 left-2 bg-gradient-to-r to-white from-yellow-200 bg-clip-text">
          Don't squeeze in a sedan when you could relax in a van.
        </h1>
      </div>

      <div>
        <p className="text-sm md:text-2xl my-20 font-serif text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          praesentium dolorem doloremque ratione accusantium animi perferendis
          vel consequatur voluptates officia ad dicta repellendus
          necessitatibus, perspiciatis earum amet nulla enim veniam <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          praesentium dolorem doloremque ratione accusantium animi
        </p>
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-900 p-4 ">
          <h1 className="text-xl font-bold mb-4 md:text-3xl">
            Your destination is waiting.
            <br />
            Your van is ready.
          </h1>
          <Link
            to="/vans"
            data-aos="fade-up"
            data-aos-duration="500"
            className="bg-slate-900 text-white text-sm md:text-2xl px-6 py-1 mt-1 rounded-xl hover:bg-slate-950 hover:scale-110"
          >
            Explore our vans
          </Link>
        </div>
      </div>
    </div>
  );
}
