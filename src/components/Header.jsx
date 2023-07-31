import React from "react";
import {NavLink} from "react-router-dom";

export default function Header(){
    const myStyle = {
        fontWeight: "bolder",
        textDecoration : 'underline',
        color: 'red'
    }
    return(
        <nav className="flex w-full p-4 justify-between bg-slate-200 text-black font-medium">
            <NavLink to='/' style={(sty)=> sty.isActive ? myStyle : null } className="font-bold text-xl">#VANLIFE</NavLink>
            <div className="flex gap-4 items-center">
            <NavLink to="/host" style={({isActive})=> isActive ? myStyle : null } >Host</NavLink>
            <NavLink to="/vans" style={({isActive})=> isActive ? myStyle : null } >Vans</NavLink>
            <NavLink to="/about" style={({isActive})=> isActive ? myStyle : null } >About</NavLink>
            </div>
        </nav>
    )
}