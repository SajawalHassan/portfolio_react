import React from "react";

function SkillsBar({ percent, text }) {
  return (
    <div className="text-white">
      <h1 className="font-bold text-lg">{text}</h1>
      <div className="bg-zinc-700">
        <div
          style={{ width: `${percent}%` }}
          className="bg-[#13B5D2] h-[2px]"
        ></div>
      </div>
    </div>
  );
}

export default SkillsBar;
