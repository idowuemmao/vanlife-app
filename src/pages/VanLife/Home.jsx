import React from "react";
import { Link } from "react-router-dom";


export default function Home(){
    return(
        <div className="bg-[url(../src/images/there-is-no-escape-wallpaper.jpg)] text-white w-full h-full overflow-auto">
            <h1 className="text-4xl font-bold p-4">You got the travel plans, we got the travel vans.</h1>
            <p className="text-sm p-4 ">Lorem ipsum dolor scing elit. Quo tenetur ut dignissimos magni reprehenderit, maxime nulla, sint minus nostrum enim pariatur atque deserunt consequuntur ratione.</p>
            <p className="text-sm p-4 ">Lorem ipsum dolor scing elit. Quo tenetur ut dignissimos magni reprehenderit, maxime nulla, sint minus nostrum enim pariatur atque deserunt consequuntur ratione.</p>
            <p className="text-sm p-4 ">Lorem ipsum dolor scing elit. Quo tenetur ut dignissimos magni reprehenderit, maxime nulla, sint minus nostrum enim pariatur atque deserunt consequuntur ratione.</p>
            <p className="text-sm p-4 ">Lorem ipsum dolor scing elit. Quo tenetur ut dignissimos magni reprehenderit, maxime nulla, sint minus nostrum enim pariatur atque deserunt consequuntur ratione.</p>
            <p className="text-sm p-4 ">Lorem ipsum dolor scing elit. Quo tenetur ut dignissimos magni reprehenderit, maxime nulla, sint minus nostrum enim pariatur atque deserunt consequuntur ratione.</p>
            <p className="text-sm p-4 ">Lorem ipsum dolor scing elit. Quo tenetur ut dignissimos magni reprehenderit, maxime nulla, sint minus nostrum enim pariatur atque deserunt consequuntur ratione.</p>
            <Link to="/vans" className="bg-rose-400 p-2 flex justify-center">Find Your Van</Link>
        </div>
    )
}
