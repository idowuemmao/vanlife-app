import React from "react";
import { Link } from "react-router-dom";
import VanData from './VanData'

export default function About(){
    const vanElement = VanData.map(van => {
        return(
        <img key={van.id} src={van.imageUrl} alt="van" className=" w-72 h-40 md:w-96 md:h-64 rounded-3xl hover:shadow-xl hover:scale-110 m-4 p-1 transition duration-200 ease-out "/>
        )
    })
    return(
        <div className="overflow-auto h-full w-full">
            <div className="flex w-4/5 gap-8 my-10 mx-auto py-2 overflow-scroll scrollbar-hide "> 
                {vanElement}
            </div>
            <div className="p-6">
            <h1 className="font-bold text-3xl ">Don't squeeze in a sedan when you could relax in a van.</h1>
            <p className="text-sm mt-4 font-serif">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas praesentium dolorem doloremque ratione accusantium animi perferendis vel consequatur voluptates officia ad dicta repellendus necessitatibus, perspiciatis earum amet nulla enim veniam <br/> <br/> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas praesentium dolorem doloremque ratione accusantium animi </p>
            <div className="bg-rose-400 p-4 ">
                <h1 className="text-xl font-bold mb-4 ">Your destination is waiting.<br/>Your van is ready.</h1>
                <Link to='/vans' className="bg-black text-white px-4 py-1 mt-8 rounded-xl ">Explore our vans</Link>
            </div>
            </div>
        </div>
    )
}