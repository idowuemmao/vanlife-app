import React from "react";
import { Link } from "react-router-dom";
import about from "../../images/Group77.png"


export default function About(){
    return(
        <div className="overflow-auto h-full w-full">
            <img src={about} alt="about" className="w-full h-96 border-2 bg-black" />
            <div className="p-6">
            <h1 className="font-bold text-3xl ">Don't squeeze in a sedan when you could relax in a van.</h1>
            <p className="text-sm mt-4 font-serif">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas praesentium dolorem doloremque ratione accusantium animi perferendis vel consequatur voluptates officia ad dicta repellendus necessitatibus, perspiciatis earum amet nulla enim veniam <br/> <br/> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas praesentium dolorem doloremque ratione accusantium animi </p>
            <div className="bg-rose-400 p-4 ">
                <h1 className="text-xl font-bold mb-4 ">Your destination is waiting.<br/>Your van is ready.</h1>
                <Link to='/vans' className="bg-black text-white px-4 py-1 mt-8">Explore our vans</Link>
            </div>
            </div>
        </div>
    )
}