import React from "react";
import {NavLink} from "react-router-dom";
import vanlogo from '../images/vanlogo.png'

export default function Header(){
    const myStyle = {
        fontWeight: "bolder",
        textDecoration : 'underline',
        color: 'red'
    }
    return(
        <nav className="flex w-full p-4 justify-between bg-slate-200 text-black font-medium">
            <NavLink to='/' style={(sty)=> sty.isActive ? myStyle : null } className="font-bold text-xl flex items-center ">
                <img src={vanlogo} alt="van-logo" className="w-24 " />
                <h2 className="text-4xl -ml-4">VANHIRE</h2>
            </NavLink>
            <div className="flex gap-4 items-center">
            <NavLink to="/host" style={({isActive})=> isActive ? myStyle : null } >Host</NavLink>
            <NavLink to="/vans" style={({isActive})=> isActive ? myStyle : null } >Vans</NavLink>
            <NavLink to="/about" style={({isActive})=> isActive ? myStyle : null } >About</NavLink>
            </div>
        </nav>
    )
}