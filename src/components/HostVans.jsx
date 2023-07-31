import React , { useEffect, useState } from "react";
import VanData from '../pages/VanLife/VanData'
import { Link, NavLink, useParams, Outlet } from "react-router-dom";

export default function Layout(){
    const myStyle = {
        fontWeight: "bold",
        textDecoration : 'underline',
        color: 'gold'
    }
    const [vans, setVans] = useState([{}])
    useEffect(() => {
      setVans(VanData)
    },[])
  const vanElem = vans.map(van => {
    return (
        <Link to={`/host/vans/${van.name}`} key={van.id} className="flex gap-4 bg-slate-200 p-3">
            <img src={van.imageUrl} alt={van.name} className="w-16"/>
            <div className="grid gap-1">
                <h1 className="font-semibold ">{van.name}</h1>
                <p>${van.price}/day</p>
            </div>
        </Link>
    )
  })
    const {name} = useParams();
    const van = VanData.find(van => van.name === name);


    return (
    <div>
        <nav className="flex gap-4">
            <NavLink to="vans/:name" >Details</NavLink>
            <NavLink to="" >Pricing</NavLink>
            <NavLink to="vans/:name/photos" >Photos</NavLink>
            <NavLink to="/host" end>Dashboard</NavLink>

        </nav>
        {vans.length > 0 ? (<div className="grid gap-4 ">{vanElem}</div>) : <p>Loading...</p>}
        <Outlet/>
    </div>
    )
}