import React, { useState } from "react";

import { MenuIcon, XIcon } from "@heroicons/react/outline";
import S from "../../Images/S.png";

function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="px-4 py-2 flex items-center justify-between sticky top-0 z-50 bg-[#292828]">
      <div className="p-1">
        <a href="#main" className="text-pink-600 text-2xl font-extrabold">
          <span className="text-white font-light">I'm</span> Sajawal
        </a>
      </div>
      <div>
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
              <img src={S} alt="" className="" />
              <p className="text-zinc-500 text-center font-serif">
                Web developer
              </p>
            </div>

            <div className="h-[70vh] grid place-content-center text-center">
              <a
                className="menu-link"
                href="#about"
                onClick={() => setMenu(false)}
              >
                About Me
              </a>
              <a
                className="menu-link"
                href="#my-skills"
                onClick={() => setMenu(false)}
              >
                My Skills
              </a>
              <a
                className="menu-link"
                href="#projects"
                onClick={() => setMenu(false)}
              >
                My Projects
              </a>
              <a
                className="menu-link border-b"
                href="#contact"
                onClick={() => setMenu(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
