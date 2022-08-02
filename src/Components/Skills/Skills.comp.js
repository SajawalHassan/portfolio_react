import React, { useState } from "react";
import SkillsBar from "./SkillsBar.comp";
import SkillsCard from "./SkillsCard.comp";
import Aos from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

function Skills() {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div data-aos="zoom-in">
      <section className="section">
        <h1 className="section-heading">My Skills</h1>
        <div className="section-description">
          <p>
            I started my coding journey nearly 2 years ago and at the time of
            writing I have learned technologies such as ReactJS, NextJS, Redux,
            TailwindCSS, HTML5, CSS3, Godot, Python, Open-cv, Mediapipe, Django,
            Express, Mongodb, React Native and Javascript
          </p>
          <p>
            Right now I don't do any sort of work I just make projects for
            myself and have fun with them. But I would be happy to do small work
            as a freelancer.
          </p>
        </div>
        <div className="mt-10 space-y-5">
          <SkillsBar text="HTML5" percent="95" />
          <SkillsBar text="CSS3" percent="90" />
          <SkillsBar text="Redux / Redux Toolkit" percent="88" />
          <SkillsBar text="Express" percent="85" />
          <SkillsBar text="React Native" percent="85" />
          <SkillsBar text="ReactJS" percent="83" />
          <SkillsBar text="MongoDB" percent="80" />
          {!showMore ? (
            <h1
              className="section-btn py-1 px-5 mx-auto"
              onClick={() => setShowMore(true)}
            >
              Show more
            </h1>
          ) : (
            <div className="space-y-5 show-more-animation">
              <SkillsBar text="Javascript" percent="70" />
              <SkillsBar text="Python" percent="65" />
              <SkillsBar text="Mediapipe" percent="62" />
              <SkillsBar text="Django" percent="60" />
              <SkillsBar text="NextJs" percent="55" />
              <SkillsBar text="Godot" percent="50" />
              <SkillsBar text="Open-cv" percent="40" />
              <h1
                className="section-btn py-1 px-5 mx-auto"
                onClick={() => setShowMore(false)}
              >
                Show less
              </h1>
            </div>
          )}
        </div>
        <div className="mt-10 mx-auto space-y-5">
          <SkillsCard
            title="Fullstack Developer"
            description="Fullstack developer making projects like the Twitter clone, Reddit
        clone, Google clone etc..."
          />
          <SkillsCard
            title="App Developer"
            description="Cross Platform App developer with experience in React Native"
          />
          <SkillsCard
            title="Game Developer"
            description="Game developer with experience in Godot for 1+ year "
          />
        </div>
      </section>
    </div>
  );
}

export default Skills;
