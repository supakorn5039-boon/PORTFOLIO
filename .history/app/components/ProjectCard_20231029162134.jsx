import React from "react";

const ProjectCard = ({ imgUrl, title, description }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl"
        style={{ background: `Url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4 ">
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
