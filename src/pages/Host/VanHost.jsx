import React , { useEffect, useState } from "react";
import VanData from '../VanLife/VanData'
import { Link} from "react-router-dom";

export default function VanHost(){
    const [vans, setVans] = useState([])
    
    useEffect(()=>{
        setVans(VanData);
    }, [])
    const vanElement = vans.map(van =>{
        return(
            <Link to={van.name} key={van.id} className="flex items-center gap-2 bg-amber-100">
                <img src={van.imageUrl} alt={van.name} className="w-52 " />
                <div className="grid gap-2">
                    <h1 className="text-2xl font-bold">{van.name}</h1>
                    <p className="text-xl ">${van.price}/day</p>
                </div>
            </Link>
        )
    })
    return (
        <div className="p-8 grid gap-4 w-full h-full overflow-scroll">
            <h1 className="text-4xl font-bold">Your listed vans</h1>
            {vans.length > 0 ? vanElement : <h2>Loading van...</h2>}

        </div>
    )
}

