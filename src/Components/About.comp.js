import React from "react";
import S from "../Images/S.png";
import Aos from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div data-aos="fade-down">
      <div className="section lg:flex lg:items-center max-w-[90%] sm:max-w-[70%]">
        <div>
          <h1 className="section-heading">Me, Myself and I</h1>
          <div className="section-description text-lg ml-2">
            <p>
              Hi there, my name is Sajawal Hassan. I wanted to learn programming because I
              wanted to create games. I started with Godot and couldn't move
              onto Unity because my computer wasn't good enough but on the
              positive side that was the reason I went into Web-Development.
            </p>

            <p>
              In Web-Development I learned alot of stuff like HTML5, CSS3,
              Javascript, Reactjs, Express, Mongodb, Node and much more. It was
              a long journey, a journey that took 2 years as of this writing;
              but this journey isn't done.
            </p>

            <p>
              I still continue on this journey without seeing the end and I love
              it!
            </p>
          </div>
          <div className="xl:hidden grid place-content-center pt-5">
            <img
              src="https://avatars.githubusercontent.com/u/78025409?v=4"
              alt=""
              className="w-[15rem] rounded-full opacity-70"
              draggable={false}
            />
          </div>
        </div>
        <img src={S} alt="" className="hidden xl:block w-[15rem]" />
      </div>
    </div>
  );
}

export default About;
