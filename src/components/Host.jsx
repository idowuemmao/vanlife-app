import React from "react";
import { Outlet, NavLink } from "react-router-dom";


export default function Layout(){
    const myStyle = {
        fontWeight: "bold",
        textDecoration : 'underline',
        color: 'gold'
    }  
    return (
    <div className="w-full h-[80vh] overflow-auto">
        <nav className="flex justify-around bg-black text-white p-1">
            <NavLink style={({isActive})=> isActive ? myStyle : null} to="." end>Dashboard</NavLink>
            <NavLink style={({isActive}) => isActive ? myStyle : null} to="income">Income</NavLink>
            <NavLink style={(sty) => sty.isActive ? myStyle : null} to="vans">Vans</NavLink>
            <NavLink style={(sty) => sty.isActive ? myStyle : null} to="reviews">Review</NavLink>
        </nav>
        <Outlet/>
    </div>
    )
}