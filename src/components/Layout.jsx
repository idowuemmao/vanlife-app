 import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
export default function Layout(){
    return (
    <div className="w-full mx-4 flex items-center justify-center h-full bg-white ">
        <div className="flex flex-col items-center justify-center w-11/12 border-4 h-screen">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    </div>
    )
}