import React from "react";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 ">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let`s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-wmd ">
          I`m currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say Hi , I`ll try my nest
          to get back to you!!
        </p>
        <div className="social flex flex-row gap-2">
          <Link href="github.com">
            <Image
              width={40}
              height={40}
              src="/images/github-icon.svg"
              alt="Github Icon"
            />
          </Link>
          <Link href="linkedin.com">
            <Image
              width={40}
              height={40}
              src="/images/linkedin-icon.svg"
              alt="Linkedin Icon"
            />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col ">
          <label
            htmlFor="email"
            type="email"
            className="text-white block  text-sm font-medium"
          >
            Your Email
          </label>

          <input
            type="email"
            id="email"
            required
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="Example@gmail.com"
          />
          <label
            htmlFor="subject"
            className="text-white block  text-sm font-medium"
          >
            Subject
          </label>

          <input
            type="text"
            id="subject"
            required
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="Just saying hi "
          />
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
