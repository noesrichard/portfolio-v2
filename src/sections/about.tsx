import React from "react";
import { GiBoxingGloveSurprise, GiSkateboard } from "react-icons/gi";

const About = () => {
  return (
    <div className="h-full flex flex-col justify-center  items-center pt-40 px-8">

        <img src="computer.png" className=""/>
        <div className="w-full h-full mt-10">
          [rcpc@carri ~]$ more about-me.txt
          <p className="opacity-80 mt-2">
            Hey there! I'm Richard, A software
            engineer with a deep-rooted love for coding. My journey into the world
            of programming started during my high school days when I made the bold
            decision to switch schools and choose a technical major. Little did I
            know that this decision would shape my entire career.
          </p>
        </div>
      </div>
  );
};

export default About;
