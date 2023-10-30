import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
const ProjectCard = ({ imgUrl, title, description }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `Url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay absolute top-0 w-full h-full ng-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:opacity-80 transition-all duration-500">
          <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4 ">
            <h5 className="font-xl font-semibold mb-2">{title}</h5>
            <p className="text-[#ADB7BE]">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
