import React, { useEffect, useState } from "react";
import VanData from "./VanData";
import { Link, useSearchParams } from "react-router-dom";

export default function Van() {
  const [vans, setVans] = useState([{}]);
  // const count = 1
  useEffect(() => {
    //  fetch('/api/vans')
    //  .then(res => res.json())
    //  .then(data => console.log(data))
    setVans(VanData);
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();
  const vanTypeFilter = searchParams.get("type");

  const typeFilter = searchParams.get("type"); //It'll tell us if the type is existing

  const displayedVan = vanTypeFilter
    ? vans.filter((vann) => vann.type === vanTypeFilter)
    : vans;

  const VanElement = displayedVan.map((van) => {
    let backgroundColor;
    if (van.type === "simple") {
      backgroundColor = "#FF00FF";
    } else if (van.type === "rugged") {
      backgroundColor = "#008000";
    } else if (van.type === "luxury") {
      backgroundColor = "#C20C27";
    }

    const myStyle = { backgroundColor };

    return (
      <Link
        to={van.name}
        key={van.id}
        state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
        className="grid grid-cols-2 gap-2 hover:scale-105 transition duration-200 ease-out text-neutral hover:opacity-90"
      >
        <img
          src={van.imageUrl}
          alt={van.name}
          className="h-fit max-h-48 w-full grid col-span-2 border-2 border-black shadow-lg rounded-2xl"
        />
        <h1 className="font-semibold text-sm">{van.name}</h1>
        <p className="text-sm grid place-items-end items-center">
          ${van.price}/day
        </p>
        <button
          className="py-1 rounded text-neutral text-sm capitalize"
          style={myStyle}
        >
          {van.type}
        </button>
      </Link>
    );
  });
  function genNewSearchParamString(key, value) {
    const sparam = new URLSearchParams(searchParams);
    if (value === null) {
      sparam.delete(key);
    } else {
      sparam.set(key, value);
    }
    return `?${sparam.toString()}`;
  }

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  return (
    <div className="w-full h-full p-8 bg-primary grid gap-8">
      <h1 className="font-bold text-xl md:text-3xl text-neutral">
        Explore our Van options
      </h1>
      <div className="flex flex-wrap gap-2 text-xs sm:text-xl md:text-lg">
        <Link
          to={genNewSearchParamString("type", "simple")}
          className={`link ${typeFilter === "simple" ? "bg-simple" : null}`}
        >
          Simple
        </Link>
        <Link
          to={genNewSearchParamString("type", "rugged")}
          className={`link ${typeFilter === "rugged" ? "bg-rugged" : null}`}
        >
          Rugged
        </Link>
        <Link
          to={genNewSearchParamString("type", "luxury")}
          className={`link ${
            typeFilter === "luxury" ? "bg-luxury text-neutral" : null
          }`}
        >
          Luxury
        </Link>
        {typeFilter ? (
          <Link to={genNewSearchParamString("type", null)} className="link">
            Clear
          </Link>
        ) : null}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-8">
        {VanElement}
      </div>
    </div>
  );
}

// <NavLink to='?type=simple'  className="p-1 text-neutral bg-red-500  rounded-md ">Simple</NavLink>
//       <NavLink to='?type=rugged' className="p-1 text-neutral bg-red-500 rounded-md ">Rugged</NavLink>
//       <NavLink to='?type=luxury' className="p-1 text-neutral bg-red-500 rounded-md ">Luxury</NavLink>
//       <NavLink to='.' className="p-1 text-neutral rounded-md bg-red-500 ">Clear</NavLink>

/* <div className="flex gap-6">
      <button onClick={()=> handleFilterChange('type', 'simple')}  className={`link ${typeFilter ==='simple' ? 'bg-orange-700': null}`}>Simple</button>
      <button onClick={()=> handleFilterChange('type', 'rugged')} className={`p-1 text-black border-2 px-4 rounded- ${typeFilter ==='rugged' ? 'bg-green-500' : null}`}>Rugged</button>
      <button onClick={()=> handleFilterChange('type', 'luxury')} className={`p-1 text-black border-2 px-4 rounded-md ${typeFilter ==='luxury' ? 'bg-black text-neutral' : null}`}>Luxury</button>
      {typeFilter? (<button onClick={()=> handleFilterChange('type', null)} className="p-1 text-black border-2 px-4 rounded-md" >Clear</button>) : null}    
    </div> */
