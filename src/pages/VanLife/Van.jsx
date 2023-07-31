import React, { useEffect, useState } from "react";
import VanData from './VanData'
import { Link, NavLink, useSearchParams } from "react-router-dom";

export default function Van() {
  const [vans, setVans] = useState([{}])
  // const count = 1
  useEffect(() => {
  //  fetch('/api/vans')
  //  .then(res => res.json())
  //  .then(data => console.log(data))
    setVans(VanData)
  },[])

  const [searchParams, setSearchParams] = useSearchParams()
  const vanTypeFilter = searchParams.get('type')

  const displayedVan = vanTypeFilter ? vans.filter(vann => vann.type === vanTypeFilter) : vans

  const VanElement = displayedVan.map((van) => {
      let backgroundColor 
      if(van.type === "simple") {
        backgroundColor = 'darkorange'
      }
      else if(van.type === "rugged") {
        backgroundColor = 'green'
      }
      else if (van.type === "luxury") {
        backgroundColor = 'black'
      }
  const myStyle = {backgroundColor}
  
    return (
        <Link to={`/vans/${van.name}`} key={van.id} className="grid grid-cols-2 gap-2 ">
          <img src={van.imageUrl} alt={van.name} className="h-56 w-full grid col-span-2 border-2 border-black shadow-lg" />
          <h1 className="font-semibold text-sm">{van.name}</h1>
          <p className="text-sm grid place-items-end items-center">${van.price}/day</p>
          <button className="py-1 rounded text-white text-sm capitalize" style={myStyle}>{van.type}</button>
        </Link>
    )
  })
  
return (
  <div className="w-full grid gap-4 overflow-auto p-6">
    <h1 className="font-bold text-3xl ">Explore our Van options</h1>
    <div className="flex gap-6">
      <button onClick={()=> setSearchParams({type: 'simple'})}  className="p-1 text-white bg-red-500  rounded-md ">Simple</button>
      <button onClick={()=> setSearchParams({type: 'rugged'})} className="p-1 text-white bg-red-500 rounded-md ">Rugged</button>
      <button onClick={()=> setSearchParams({type: 'luxury'})} className="p-1 text-white bg-red-500 rounded-md ">Luxury</button>
      <button onClick={()=> setSearchParams({})} className="p-1 text-white rounded-md bg-red-500 ">Clear</button>
    </div>
    <div className="grid grid-cols-2 gap-4 pb-8">
      {VanElement}
    </div> 
  </div>
)
}

// <NavLink to='?type=simple'  className="p-1 text-white bg-red-500  rounded-md ">Simple</NavLink>
//       <NavLink to='?type=rugged' className="p-1 text-white bg-red-500 rounded-md ">Rugged</NavLink>
//       <NavLink to='?type=luxury' className="p-1 text-white bg-red-500 rounded-md ">Luxury</NavLink>
//       <NavLink to='.' className="p-1 text-white rounded-md bg-red-500 ">Clear</NavLink>