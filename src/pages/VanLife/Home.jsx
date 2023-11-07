import React from "react";
import { Link } from "react-router-dom";
import homeImage from "../../images/busHire.jpg";
import homeImage2 from "../../images/bus2.jpg";

export default function Home() {
  return (
    <div className="bg-primary text-neutralf w-full h-full p-10">
      <h1 className="text-4xl font-bold p-4 text-neutralf lg:text-left text-center">
        You got the travel plans, we got the travel vans.
      </h1>
      <div className="flex w-full items-center justify-center">
        <img src={homeImage} alt="intro" className="h-fit w-3/4 " />
      </div>
      <p className="text-sm p-4 ">
        Lorem ipsum dolor scing elit. Quo tenetur ut dignissimos magni
        reprehenderit, maxime nulla, sint minus nostrum enim pariatur atque
        deserunt consequuntur ratione. Lorem ipsum dolor scing elit. Quo tenetur
        ut dignissimos magni reprehenderit, maxime nulla, sint minus nostrum
        enim pariatur atque deserunt consequuntur ratione.Lorem ipsum dolor
        scing elit. Quo tenetur ut dignissimos magni reprehenderit, maxime
        nulla, sint minus nostrum enim pariatur atque deserunt consequuntur
        ratione.
      </p>
      <p className="text-sm p-4 ">
        Lorem ipsum dolor scing elit. Quo tenetur ut dignissimos magni
        reprehenderit, maxime nulla, sint minus nostrum enim pariatur atque
        deserunt consequuntur ratione.Lorem ipsum dolor scing elit. Quo tenetur
        ut dignissimos magni reprehenderit, maxime nulla, sint minus nostrum
        enim pariatur atque deserunt consequuntur ratione. Lorem ipsum dolor
        scing elit. Quo tenetur ut dignissimos magni reprehenderit, maxime
        nulla, sint minus nostrum enim pariatur atque deserunt consequuntur
        ratione.Lorem ipsum dolor scing elit. Quo tenetur ut dignissimos magni
        reprehenderit, maxime nulla, sint minus nostrum enim pariatur atque
        deserunt consequuntur ratione.
      </p>
      <p className="text-sm p-4 ">
        Lorem ipsum dolor scing elit. Quo tenetur ut dignissimos magni
        reprehenderit, maxime nulla, sint minus nostrum enim pariatur atque
        deserunt consequuntur ratione.Lorem ipsum dolor scing elit. Quo tenetur
        ut dignissimos magni reprehenderit, maxime nulla, sint minus nostrum
        enim pariatur atque deserunt consequuntur ratione. Lorem ipsum dolor
        scing elit. Quo tenetur ut dignissimos magni reprehenderit, maxime
        nulla, sint minus nostrum enim pariatur atque deserunt consequuntur
        ratione.Lorem ipsum dolor scing elit. Quo tenetur ut dignissimos magni
        reprehenderit, maxime nulla, sint minus nostrum enim pariatur atque
        deserunt consequuntur ratione.
      </p>
      <div
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-duration="100"
        className="flex w-full items-center justify-center"
      >
        <img src={homeImage2} alt="intro" className="h-fit w-3/4 " />
      </div>
      <p className="text-sm p-4 ">
        Lorem ipsum dolor scing elit. Quo tenetur ut dignissimos magni
        reprehenderit, maxime nulla, sint minus nostrum enim pariatur atque
        deserunt consequuntur ratione.Lorem ipsum dolor scing elit. Quo tenetur
        ut dignissimos magni reprehenderit, maxime nulla, sint minus nostrum
        enim pariatur atque deserunt consequuntur ratione. Lorem ipsum dolor
        scing elit. Quo tenetur ut dignissimos magni reprehenderit, maxime
        nulla, sint minus nostrum enim pariatur atque deserunt consequuntur
        ratione.Lorem ipsum dolor scing elit. Quo tenetur ut dignissimos magni
        reprehenderit, maxime nulla, sint minus nostrum enim pariatur atque
        deserunt consequuntur ratione.
      </p>
      <Link
        to="/vans"
        data-aos="fade-up"
        data-aos-duration="1000"
        className="bg-rose-400 p-2 flex justify-center m-8 text-neutralf text-xl font-bold hover:bg-neutralf hover:text-rose-400 transition-all ease-in-out duration-3000"
      >
        Find Your Van
      </Link>
    </div>
  );
}
