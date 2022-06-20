import React from "react";

function SkillsCard({ title, description }) {
  return (
    <div className="p-4 bg-zinc-800 w-full hover:shadow-md hover:shadow-[#13B5D2] transition-all duration-500 cursor-default">
      <h1 className="section-heading text-2xl mb-2">{title}</h1>
      <p className="section-description text-gray-300">{description}</p>
    </div>
  );
}

export default SkillsCard;
