 import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
export default function Layout(){
    return (
        <div className="max-h-full grid ">
            <div className="sticky top-0"><Header/></div>
            <div><Outlet/></div>
            <div className="sticky bottom-0"><Footer/></div>
        </div>
    
    )
}

{/* <div className="w-screen flex items-center justify-center h-full bg-white ">
<div className="flex flex-col items-center justify-center border-4 ">
    <div ><Header/></div>
    <div className="h-3/5 w-screen">
        <Outlet/>
    </div>
   <div className="w-full sticky bottom-0"> <Footer/></div>
</div>
</div> */}