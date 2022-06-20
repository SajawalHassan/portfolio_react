import React, { useState } from "react";
import SkillsBar from "./SkillsBar.comp";
import SkillsCard from "./SkillsCard.comp";

function Skills() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div id="my-skills" className="mt-[50%] pt-[5%]">
      <section className="section">
        <h1 className="section-heading">My Skills</h1>
        <div className="section-description">
          <p>
            I started my coding journey nearly 2 years ago and at the time of
            writing I have learned technologies such as ReactJS, NextJS,
            TailwindCss, Html, Css, Godot, Python, Open-cv, Mediapipe, Django,
            Express, Mongodb and Javascript
          </p>
          <p>
            Right now I don't do any sort of work I just make projects for
            myself and have fun with them.
          </p>
        </div>
        <div className="mt-10 space-y-5">
          <SkillsBar text="Html5" percent="95" />
          <SkillsBar text="Css3" percent="90" />
          <SkillsBar text="Express" percent="85" />
          <SkillsBar text="ReactJs" percent="83" />
          <SkillsBar text="Mongodb" percent="80" />
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
        <div className="mt-10  mx-auto w-[90%] space-y-5">
          <SkillsCard
            title="Fullstack developer"
            description="Fullstack developer making projects like the Twitter clone, Reddit
        clone, Google clone etc..."
          />
          <SkillsCard
            title="Game developer"
            description="Game developer with experience in Godot for 1+ year "
          />
        </div>
      </section>
    </div>
  );
}

export default Skills;
