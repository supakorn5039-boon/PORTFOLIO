"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "100",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "100,000",
  },
  {
    metric: "Awards",
    value: "7",
  },
  {
    metric: "Years",
    value: "5",
  },
];

const AchievementSection = () => {
  return (
    <div>
      {achievementsList.map((achievement, index) => {
        return (
          <div key={index}>
            <h2>{achievement.value}</h2>
            <p>{achievement.metric}</p>
          </div>
        );
      })}
    </div>
  );
};
