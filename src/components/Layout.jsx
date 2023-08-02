 import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
export default function Layout(){
    return (
    <div className="w-screen flex items-center justify-center h-fit bg-white ">
        <div className="flex flex-col items-center justify-center border-4 ">
            <Header/>
            <div className="h-full w-screen">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    </div>
    )
}