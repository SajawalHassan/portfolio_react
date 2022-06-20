import React from "react";
import S from "../Images/S.png";

function About() {
  return (
    <div
      id="about"
      className="mt-[50%] pt-[30%] lg:pt-[10%] xl:pt-0 2xl:pt-[20%]"
    >
      <div className="section lg:flex lg:items-center max-w-[90%] sm:max-w-[70%]">
        <div>
          <h1 className="section-heading">Me, Myself and I</h1>
          <div className="section-description text-lg ml-2">
            <p>
              Hi there, my name is Sajawal Hassan and I am the son of Athar
              Kharal. I wanted to learn programming because I wanted to create
              games. I started with Godot and couldn't move onto unity because
              my computer wasn't good enough but on the positive side that was
              the reason I went into web-development.
            </p>

            <p>
              In web-development I learned alot of stuff like HTML5, CSS3,
              javascript, reactjs, express, mongodb, node and much more. It was
              a long journey, a journey that took 2 years as of writing this;
              but this journey isn't done.
            </p>

            <p>
              I still continue on this journey without seeing the end and I love
              it! I hope this journey never ends no matter what happens to me.
            </p>
          </div>
        </div>
        <img src={S} alt="" className="hidden xl:block w-[15rem]" />
      </div>
    </div>
  );
}

export default About;
