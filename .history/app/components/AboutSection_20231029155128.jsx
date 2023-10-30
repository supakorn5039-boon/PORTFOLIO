"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul>
        <li>Node.js</li>
        <li>Express</li>
        <li>ReactJS</li>
        <li>NextJS</li>
        <li>ML</li>
        <li>JavaScript</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>Wichai Wittaya English-Program</li>
        <li>Chiang mai University, Faculty of Computer Engineering </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul>
        <li>Wichai Wittaya English-Program</li>
        <li>Chiang mai University, Faculty of Computer Engineering </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          alt="about"
          width={500}
          height={500}
        />
        <div>
          <h2 className="text-4xl font-bold text-white mb-4 ">About Me</h2>
          <p className="text-base lg:text-lg ">
            I am a Full-stack Developer with a passion for creating interactive
            and responsive web applications. I have experience working with
            JavaScript,React,React-Native,Python,Machine Learning,
            Node.js,Express,Postman,HTML,CSS,and Git. I am a quick learner and I
            am always looking into expand My Knowledge and Skill set. I am a
            Team player and I am Excited to work with others to create amazing
            applications.{" "}
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {Skills}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {Education}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {Certification}
            </TabButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
