import React from "react";
import { Link, NavLink, useParams, Outlet } from "react-router-dom";
import VanData from '../VanLife/VanData'

export default function VanHostDetails(){
    const {name} = useParams();
    const van = VanData.find(van => van.name === name);

    let backgroundColor 
    let borderColor
    if(van.type === "simple") {
      backgroundColor = 'red' 
      borderColor = 'red'
    }
    else if(van.type === "rugged") {
      borderColor = 'green'
      backgroundColor = 'green'
    }
    else if (van.type === "luxury") {
      borderColor = 'black'
      backgroundColor = 'black'
    }
    const myStyle = {backgroundColor}
    const myBorder={borderColor}
    const activeStyle = {
        textDecoration : 'underline',
        fontWeight : 'bold',
    }
    
    return (
        <div className="grid gap-8 m-2 p-6 overflow-auto">
            <Link to='..' relative="path" className="text-lg font-semibold ">&larr; Back to all Host vans</Link>
            <div className="grid items-center gap-3 sm:grid-cols-2 w-full">
                <img src={van.imageUrl} alt={van.name} className="w-full" />
                <div className="grid gap-8">
                    <button style={myStyle} className="p-2 px-6 text-center w-fit text-white capitalize text-xl rounded-lg">{van.type}</button>
                    <h1 className="text-4xl font-bold">{van.name}</h1>
                    <p className="text-xl"><b>${van.price}</b>/day</p>
                </div>
            </div>
            <hr className="border-black border-2" style={myBorder}/>
            <nav className="flex gap-6 ">
                <NavLink end to='.' style={({isActive})=>isActive ? activeStyle : null} className='md:text-xl' >Details</NavLink>
                <NavLink to= 'pricing' style={({isActive})=>isActive ? activeStyle : null} className='md:text-xl' >Pricing</NavLink>
                <NavLink to='photos' style={({isActive})=>isActive ? activeStyle : null} className='md:text-xl'>Photos</NavLink>
            </nav>
            <Outlet context={{van:van}}/>
        </div>
    )
}