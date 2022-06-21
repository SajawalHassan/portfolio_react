import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

import { Link } from "react-scroll";

function Sidebar() {
  return (
    <div className="hidden md:block sticky top-0 left-0 h-screen bg-[#1D1D1D] w-[30%] 2xl:w-[20%] text-white">
      <Link
        to="main"
        smooth={true}
        className="h-[20%] relative grid place-content-center cursor-pointer mt-5 space-y-4 w-max mx-auto p-2"
      >
        <img
          src="https://avatars.githubusercontent.com/u/78025409?v=4"
          alt=""
          className="w-[10rem] rounded-full mx-auto"
        />
        <p className="text-zinc-500 text-center font-serif">
          Web developer / Game Developer
        </p>
      </Link>
      <div className="h-[70vh] flex flex-col items-center justify-center text-center">
        <Link className="menu-link" to="about" smooth={true}>
          About Me
        </Link>
        <Link className="menu-link" to="my-skills" smooth={true}>
          My Skills
        </Link>
        <Link className="menu-link" to="projects" smooth={true}>
          My Projects
        </Link>
        <Link className="menu-link border-b" to="contact" smooth={true}>
          Contact
        </Link>
      </div>
      <div className="flex items-center space-x-3 justify-center">
        <a href="https://github.com/SajawalHassan" target="_black">
          <GitHubIcon />
        </a>
        <a
          href="https://www.youtube.com/channel/UCkjFnHCmmZtYVFvosxef3yg"
          target="_black"
        >
          <YouTubeIcon />
        </a>
        <a href="https://twitter.com/scientificninj2" target="_black">
          <TwitterIcon />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
