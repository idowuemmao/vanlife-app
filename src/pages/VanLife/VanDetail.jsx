import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import VanData from './VanData'


export default function VanDetails(){
    // const [van, setVan] = useState([{}])
    const {name} = useParams()
    const van = VanData.find(van=>van.name === name)
    const location = useLocation()

    // useEffect(function(){
    //     fetch(`https://api.imgflip.com/get_memes`)
    //   .then((response) => response.json())
    //   .then((data) => setVan(data.data.memes));
    //     // setVan(VanData)
    // },[]);
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
return(
    (van ? (
    <div className="w-full overflow-auto">
      <div className="p-8 grid gap-6">
          <Link to={location.state.search ? `..${location.state.search}` : ""} relative="path" className="text-2xl font-bold" >&larr; Back to van page</Link>
          <img src={van.imageUrl} alt={van.name} className="w-full border-2 border-black shadow-lg h-fit mt-4"/>
          <button className="py-1 rounded text-white text-sm capitalize w-2/5" style={myStyle}>{van.type}</button>
          <h1 className="font-bold text-3xl">{van.name}</h1>
          <p className="text-sm "><b>${van.price}</b>/day</p>
          <p className="text-justify">{van.description}</p>
          <button className="py-1 rounded text-white bg-blue-950 text-base capitalize w-2/5">Rate this van</button>
      </div>
    </div>
    ) : <h1 className="text-2xl m-12">Loading....</h1>)
)
}