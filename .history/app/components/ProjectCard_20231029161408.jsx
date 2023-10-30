import React from "react";

const ProjectCard = ({ imgUrl, title, description }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72"
        style={{ background: `Url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="text-white">
          <h5>{title}</h5>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
