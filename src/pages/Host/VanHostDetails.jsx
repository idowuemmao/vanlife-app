import React from "react";
import { Link, NavLink, useParams, Outlet } from "react-router-dom";
import VanData from '../VanLife/VanData'

export default function VanHostDetails(){
    const {name} = useParams();
    const van = VanData.find(van => van.name === name);

    let backgroundColor 
    if(van.type === "simple") {
      backgroundColor = 'red'
    }
    else if(van.type === "rugged") {
      backgroundColor = 'green'
    }
    else if (van.type === "luxury") {
      backgroundColor = 'black'
    }
    const myStyle = {backgroundColor}
    const activeStyle = {
        textDecoration : 'underline',
        fontWeight : 'bold'
    }
    
    return (
        <div className="grid gap-8 m-2 p-6 h-full overflow-scroll">
            <Link to='..' relative="path" className="text-lg font-semibold ">&larr; Back to all vans</Link>
            <div className="flex items-center gap-3">
                <img src={van.imageUrl} alt={van.name} className="" />
                <div className="grid gap-2">
                    <button style={myStyle} className="p-2 px-6 text-center w-fit text-white capitalize text-xl rounded-lg">{van.type}</button>
                    <h1 className="text-4xl font-bold">{van.name}</h1>
                    <p className="text-xl"><b>${van.price}</b>/day</p>
                </div>
            </div>
            <nav className="flex gap-6 ">
                <NavLink end to='.' style={({isActive})=>isActive ? activeStyle : null} >Details</NavLink>
                <NavLink to= 'pricing' style={({isActive})=>isActive ? activeStyle : null} >Pricing</NavLink>
                <NavLink to='photos' style={({isActive})=>isActive ? activeStyle : null}>Photos</NavLink>
            </nav>
            <Outlet context={{van:van}}/>
        </div>
    )
}