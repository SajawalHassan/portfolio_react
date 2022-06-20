import React from "react";

import { Link } from "react-scroll";

function Main() {
  return (
    <div
      id="main"
      className="flex flex-col justify-center h-[80vh] text-white pl-16"
    >
      <div className="text-5xl sm:text-6xl 2xl:text-7xl font-semibold">
        <h1>Hi,</h1>
        <h1>
          I'm <span className="text-pink-600">Sajawal</span>,
        </h1>
        <h1>web developer</h1>
      </div>
      <p className="mt-5 text-zinc-600 font-serif sm:text-lg">
        Fullstack Developer / Game Developer
      </p>
      <Link smooth={true} to="contact" className="section-btn cursor-pointer">
        Contact me!
      </Link>
    </div>
  );
}

export default Main;
