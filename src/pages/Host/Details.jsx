import React from "react";
import {useOutletContext} from "react-router-dom";

export default function Details(){
   const {van} = useOutletContext()

    return( 
        <div className="grid gap-3 h-full mb-5">
            <h2 className="md:text-2xl"><b>Name: </b>{van.name}</h2>
            <h2  className="md:text-2xl"><b>Category: </b>{van.type}</h2>
            <h2 className="text-justify md:text-2xl"><b>Description: </b>{van.description}</h2>
            <h2 className="md:text-2xl"><b>Visibility: </b>{van.type}</h2>
        </div>
    )
}