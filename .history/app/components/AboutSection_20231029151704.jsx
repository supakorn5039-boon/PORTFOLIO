import React from "react";
import Image from "next/image";

const AboutSection = () => {
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
          <h2>About Me</h2>
          <p>
            I am a Full-stack Developer with a passion for creating interactive
            and responsive web applications.I have experience working with
            JavaScript , React ,React-Native , Python , Machine Learning ,
            Node.js , Express, Postman , HTML, CSS , and Git. I am a quick
            learner and I am always looking into expand My Knowledge and Skill
            set. I am a Team player and I am Excited to work with others to
            create amazing applications.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
