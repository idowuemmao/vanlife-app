import React from "react";
import {useOutletContext } from "react-router-dom";

export default function Photos(){
const {van} = useOutletContext()

    return( 
        <img src={van.imageUrl} alt={van.name} className="rounded-3xl "/>
    )
}