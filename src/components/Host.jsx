import React from "react";
import { Outlet, NavLink } from "react-router-dom";


export default function Layout(){
    const myStyle = {
        fontWeight: "bold",
        textDecoration : 'underline',
        color: 'gold',
    }  
    return (
    <div className="w-full ">
        <nav className="flex justify-around bg-gray-900 text-white p-2 fixed top-auto w-full ">
            <NavLink className='hover:underline' style={({isActive})=> isActive ? myStyle : null} to="." end>Dashboard</NavLink>
            <NavLink className='hover:underline' style={({isActive}) => isActive ? myStyle : null} to="income">Income</NavLink>
            <NavLink className='hover:underline' style={(sty) => sty.isActive ? myStyle : null} to="vans">Vans</NavLink>
            <NavLink className='hover:underline' style={(sty) => sty.isActive ? myStyle : null} to="reviews">Review</NavLink>
        </nav>
        <Outlet/>
    </div>
    )
}