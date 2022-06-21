import React, { useState } from "react";
import ProjectsCard from "./ProjectsCard.comp";
import Aos from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

function Projects() {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="w-full flex flex-col items-center"
      data-aos="fade-right"
      // id="projects"
    >
      <div className="section max-w-[80%]">
        <h1 className="section-heading">My Projects</h1>
        <p className="section-description">
          Not all of the projects I built are listed here but there is one from
          every category.
        </p>
        <div className="mt-10 space-y-5">
          <div className="mt-5 mx-auto">
            <div className="w-[90%] space-y-8 xl:grid xl:grid-cols-2 xl:space-y-0 xl:gap-8">
              <ProjectsCard
                projectName="Twitter Clone (In progress)"
                description="This twitter clone is a MERN project with the backend fully complete but the frontend is in progress."
                path="https://github.com/SajawalHassan/twitter_clone_mern"
              />
              <ProjectsCard
                projectName="Reddit Clone (In progress)"
                description="This reddit clone is a MERN project with the backend fully complete but the frontend is in progress."
                path="https://github.com/SajawalHassan/twitter_clone_mern"
              />
              <ProjectsCard
                projectName="Google Clone"
                description="This Google clone is a ReactJs project where the search engine functions with the Google API"
                path="https://github.com/SajawalHassan/google-clone-react"
              />
              <ProjectsCard
                projectName="Instagram Clone"
                description="This instagram clone is Django project where you can create and view posts"
                path="https://github.com/SajawalHassan/instagram_clone_django"
              />
            </div>
            <div className="xl:grid xl:grid-cols-2 xl:space-y-0 xl:gap-8 hidden xl:w-[90%] mt-10">
              <ProjectsCard
                projectName="Blog website"
                built
                with
                description="This blog website was built with NextJs in 2 days for school."
                path="https://github.com/SajawalHassan/blog_website_next"
              />
              <ProjectsCard
                projectName="Twitch clone"
                description="This Twitch clone was built with ReactJs."
                path="https://github.com/SajawalHassan/twitch-clone-react"
              />
              <ProjectsCard
                projectName="Gesture Volume Control"
                description="This is a python project that controls your volume based on your gestures."
                path="https://github.com/SajawalHassan/gesture_volume_control_python"
              />
              <ProjectsCard
                projectName="Platformer"
                description="This is a Godot project where you can play a platformer."
                path="https://github.com/SajawalHassan/Platformer2.0"
              />
            </div>
          </div>
          {!showMore ? (
            <h1
              className="section-btn py-1 px-5 mx-auto lg:hidden"
              onClick={() => setShowMore(true)}
            >
              Show more
            </h1>
          ) : (
            <div className="space-y-5 show-more-animation">
              <div className="mt-5 w-[90%] space-y-8">
                <ProjectsCard
                  projectName="Blog website"
                  built
                  with
                  description="This blog website was built with NextJs in 2 days for school."
                  path="https://github.com/SajawalHassan/blog_website_next"
                />
                <ProjectsCard
                  projectName="Twitch clone"
                  description="This Twitch clone was built with ReactJs."
                  path="https://github.com/SajawalHassan/twitch-clone-react"
                />
                <ProjectsCard
                  projectName="Gesture Volume Control"
                  description="This is a python project that controls your volume based on your gestures."
                  path="https://github.com/SajawalHassan/gesture_volume_control_python"
                />
                <ProjectsCard
                  projectName="Platformer"
                  description="This is a Godot project where you can play a platformer."
                  path="https://github.com/SajawalHassan/Platformer2.0"
                />
              </div>
              <h1
                className="section-btn py-1 px-5 mx-auto"
                onClick={() => setShowMore(false)}
              >
                Show less
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;
