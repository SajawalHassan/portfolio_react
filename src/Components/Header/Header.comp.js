import React, { useState } from "react";
import S from "../../Images/S.png";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-scroll";

function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="px-4 py-2 flex items-center justify-between sticky top-0 z-50 bg-[#292828] md:hidden">
      <div className="p-1">
        <Link
          to="main"
          smooth={true}
          className="text-pink-600 text-2xl font-extrabold cursor-pointer"
        >
          <span className="text-white font-light">I'm</span> Sajawal
        </Link>
      </div>
      <div className="space-x-4 hidden sm:flex">
        <Link
          className="header-link"
          to="about"
          smooth={true}
          onClick={() => setMenu(false)}
        >
          About Me
        </Link>
        <Link
          className="header-link"
          to="my-skills"
          smooth={true}
          onClick={() => setMenu(false)}
        >
          My Skills
        </Link>
        <Link
          className="header-link"
          to="projects"
          smooth={true}
          onClick={() => setMenu(false)}
        >
          My Projects
        </Link>
        <Link
          className="header-link"
          to="contact"
          smooth={true}
          onClick={() => setMenu(false)}
        >
          Contact
        </Link>
      </div>
      <div className="sm:hidden">
        <div className="p-1 cursor-pointer" onClick={() => setMenu(true)}>
          <MenuIcon className="h-10 text-white" />
        </div>
        {menu && (
          <div className="absolute w-screen h-screen inset-0 bg-gradient-to-br from-[#252525] to-[#141414] text-white menu-animation">
            <div className="flex items-center justify-between px-4 pt-3">
              <h1 className="text-pink-600 text-2xl font-extrabold">
                <span className="text-white font-light">I'm</span> Sajawal
              </h1>
              <XIcon
                className="h-8 cursor-pointer"
                onClick={() => setMenu(false)}
              />
            </div>
            <div className="h-[20%] relative grid place-content-center">
              <img src={S} alt="" className="w-[10rem]" />
              <p className="text-zinc-500 text-center font-serif -mt-10">
                Web developer
              </p>
            </div>

            <div className="h-[70vh] grid place-content-center text-center w-screen">
              <Link
                className="menu-link"
                to="about"
                smooth={true}
                onClick={() => setMenu(false)}
              >
                About Me
              </Link>
              <Link
                className="menu-link"
                to="my-skills"
                smooth={true}
                onClick={() => setMenu(false)}
              >
                My Skills
              </Link>
              <Link
                className="menu-link"
                to="projects"
                smooth={true}
                onClick={() => setMenu(false)}
              >
                My Projects
              </Link>
              <Link
                className="menu-link border-b"
                to="contact"
                smooth={true}
                onClick={() => setMenu(false)}
              >
                Contact
              </Link>
            </div>
            <div className="flex items-center space-x-2 justify-center">
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
        )}
      </div>
    </div>
  );
}

export default Header;
