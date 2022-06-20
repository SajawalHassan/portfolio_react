import React from "react";

function Main() {
  return (
    <div
      id="main"
      className="flex flex-col justify-center h-[80vh] text-white pl-16"
    >
      <div className="text-5xl font-semibold">
        <h1>Hi,</h1>
        <h1>
          I'm <span className="text-pink-600">Sajawal</span>,
        </h1>
        <h1>web developer</h1>
      </div>
      <p className="mt-5 text-zinc-600 font-serif">
        Fullstack Developer / Game Developer
      </p>
      <button className="section-btn">Contact me!</button>
    </div>
  );
}

export default Main;
