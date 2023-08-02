import { Link } from "react-router-dom";


export default function PageNotFound(){
    return(
        <div className="w-full flex flex-col items-center justify-center px-8 h-full gap-10">
            <h1 className="text-5xl font-bold ">Sorry, the page you were looking for was not found</h1>
            <Link to="/" className="bg-black text-center text-white p-2 text-4xl w-full">Return to Home</Link>
        </div>
    )
}