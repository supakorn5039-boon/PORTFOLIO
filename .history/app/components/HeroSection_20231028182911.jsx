import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            Hello , I am Supakorn
          </h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl">
            Hello I interested on Software Developer
          </p>
        </div>
        <div className="col-span-5">
          <div className="rounded-full bg-[#181818] w-[300px] h-[300px]">
            <Image
              src="/images/Photo.png"
              alt="hero image"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
