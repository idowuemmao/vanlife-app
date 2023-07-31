import React from "react";
import {useOutletContext } from "react-router-dom";

export default function Pricing(){
    const {van} = useOutletContext()
    return( 
        <div className="text-2xl ">
            <b>${van.price}</b>/day
        </div>
    )
}