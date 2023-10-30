import React from "react";

const ProjectTag = ({ name, onCLick, isSelected }) => {
  const buttonStyle = isSelected
    ? "text-white bg-blue-500"
    : "text-[#ADB7BE] border-slate-600";
  return (
    <button
      className={` ${buttonStyle} rounded-full border-2  px-6 py-3 text-xl cursor-pointer `}
      onCLick={() => onCLick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
