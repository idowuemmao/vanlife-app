import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import VanData from "./VanData";

export default function VanDetails() {
  const { name } = useParams();
  const van = VanData.find((van) => van.name === name);
  const location = useLocation();

  let backgroundColor;
  const luxury = "#C20C27";
  const simple = "#FF00FF";
  const rugged = "#008000";
  if (van.type === "simple") {
    backgroundColor = simple;
  } else if (van.type === "rugged") {
    backgroundColor = rugged;
  } else if (van.type === "luxury") {
    backgroundColor = luxury;
  }
  const myStyle = { backgroundColor };

  //Optional Chaining
  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  return van ? (
    <div className="w-full overflow-auto ">
      <div className="p-8 grid gap-6 border">
        <Link
          to={`..${search}`}
          relative="path"
          className=" text-sm sm:text-2xl lg:text-4xl font-bold "
        >
          &larr; Back to {type} vans{" "}
        </Link>
        <img
          src={van.imageUrl}
          alt={van.name}
          className="w-full border-2 rounded-xl border-black shadow-lg h-fit mt-4"
        />
        <button
          className="py-1 rounded text-neutral text-sm md:text-2xl capitalize w-2/5 text-center"
          style={myStyle}
        >
          {van.type}
        </button>
        <h1 className="font-bold text-3xl md:text-5xl">{van.name}</h1>
        <p className="text-sm md:text-2xl ">
          <b>${van.price}</b>/day
        </p>
        <p className="text-justify">{van.description}</p>
        <button
          style={myStyle}
          data-aos="fade-up"
          data-aos-duration="1000"
          className="py-1 rounded text-neutral md:text-2xl  text-base capitalize "
        >
          Rate this van
        </button>
      </div>
    </div>
  ) : (
    <h1 className="text-2xl m-12">Loading....</h1>
  );
}
