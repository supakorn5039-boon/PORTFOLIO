import React, { Children } from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white border-b border-blue-500"
    : "text-[#ADB7BE] border-b border-blue-500";
  return (
    <button onClick={selectTab}>
      <p className="mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-blue-500"></p>
      {children}
    </button>
  );
};

export default TabButton;
