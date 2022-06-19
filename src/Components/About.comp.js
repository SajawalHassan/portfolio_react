import React from "react";

function About() {
  return (
    <div
      id="about"
      className="border-2 border-zinc-800 rounded-lg shadow-sm shadow-pink-600 mt-[26vh] text-white my-10 py-4 mx-8 px-3"
    >
      <h1 className="text-[2.9rem] font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text">
        Me, Myself and I
      </h1>
      <div className="ml-1 font-serif space-y-5">
        <p>
          Hi there, my name is Sajawal Hassan and I am the son of Athar Kharal.
          I wanted to learn programming because I wanted to create games. I
          learned alot in Godot and couldn't learn unity because my computer
          wasn't good enough but on the positive side that was the reason I went
          into web-development.
        </p>

        <p>
          In web-development I learned alot of stuff like html, css javascript,
          reactjs, express, mongodb, node and much more. It was a long journey,
          a journey that took 2 years as of writing this; but this journey isn't
          done.
        </p>

        <p>
          I still continue on this journey without seeing the end and I love it!
          I hope this journey never ends no matter what happens to me.
        </p>
      </div>
    </div>
  );
}

export default About;
