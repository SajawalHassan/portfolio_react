import React from "react";

function ProjectsCard({ projectName, description, path }) {
  return (
    <div
      className="p-4 h-[12rem] w-full bg-zinc-800 hover:shadow-md hover:shadow-[#13B5D2] transition-all duration-300 border-t-4 border-[#13B5D2] rounded-md"
      title="View on Github"
    >
      <a href={`${path}`} target="_blank" rel="noreferrer">
        <h1 className="section-heading text-2xl">{projectName}</h1>
        <p className="section-description text-gray-300 mt-2">{description}</p>
      </a>
    </div>
  );
}

export default ProjectsCard;
