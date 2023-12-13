import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import homeImage from "../../images/busHire.jpg";
import homeImage2 from "../../images/bus2.jpg";

export default function Home() {
  return (
    <div className="bg-primary text-neutral w-full h-full p-10">
      <h1 className="text-4xl font-bold p-4 text-neutral text-center">
        <Typewriter
          words={[
            "You got the travel Plans",
            "We got the travel Vans",
            "Check us out today",
            "Repeat!",
          ]}
          loop={5}
          cursor
          cursorStyle="|"
          typeSpeed={270}
          deleteSpeed={50}
          delaySpeed={1000}
        />
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
      <div className="flex w-full items-center justify-center">
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
        className="button-bg flex justify-center m-8 text-neutral text-xl font-bold hover:bg-neutral hover:text-black transition-all ease-in-out duration-3000"
      >
        Find Your Van
      </Link>
    </div>
  );
}
