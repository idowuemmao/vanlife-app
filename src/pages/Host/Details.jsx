import React from "react";
import {useOutletContext} from "react-router-dom";

export default function Details(){
   const {van} = useOutletContext()

    return( 
        <div className="grid gap-3 h-full ">
            <h2><b>Name: </b>{van.name}</h2>
            <h2><b>Category: </b>{van.type}</h2>
            <h2 className="text-justify"><b>Description: </b>{van.description}</h2>
            <h2><b>Visibility: </b>{van.type}</h2>
        </div>
    )
}