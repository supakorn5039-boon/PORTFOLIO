import React from "react";

const ProjectCard = ({ imgUrl, title, description }) => {
  return (
    <div>
      <div
        className=""
        style={{ background: `Url(${imgUrl})`, backgroundSize: "cover" }}
      ></div>
    </div>
  );
};

export default ProjectCard;
