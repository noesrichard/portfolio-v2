import React, { useEffect, useState } from "react";
import { VscTerminalBash } from "react-icons/vsc";

const Home = () => {
  const [instruction, setInstruction] = useState("cd ..");

  window.addEventListener("keypress", (e) => {
    let write = "";
    switch (e.key) {
      case "a":
        setInstruction("cd 'about me'");
        break;
      case "e":
        setInstruction("cd 'experience'");
        break;
      case "p":
        setInstruction("cd 'projects'");
        break;
      case "c":
        setInstruction("cd 'contact'");
        break;
    }
  });
  return (
    <section
      id="home"
      className="text-xl lg:text-center px-8 w-full h-3/6 lg:h-full lg:pt-16 lg:flex lg:flex-col lg:items-center"
    >
      <VscTerminalBash className="text-[200px] lg:text-[200px]" />
      <p className="text-3xl lg:text-6xl mt-4">Richard Carrión</p>
      <p className="hidden">-</p>
      <p className="opacity-80 lg:text-3xl mt-2 font-semibold">
        Full Stack Developer
      </p>
      <p className="text-sm lg:text-2xl opacity-70 mt-2 lg:mt-10 lg:opacity-90 max-w-[800px]">
        Experienced software engineer skilled in designing and implementing
        robust systems.
      </p>
      <div className="pt-10">
        <a className="border-2 border-white py-2 px-4 lg:hidden">Contact me</a>
      </div>

      <div className="text-left hidden lg:block px-10 max-w-[600px] w-[600px] text-2xl">
        <div>
          <span className="opacity-70">type </span>
          <span className="font-bold">a</span>
          <span className="opacity-70"> to see more </span>
          <span className="font-semibold">about me</span>
        </div>
        <div>
          <span className="opacity-70">type </span>
          <span className="font-bold">e</span>
          <span className="opacity-70"> to look at my </span>
          <span className="font-semibold">experience</span>
        </div>
        <div>
          <span className="opacity-70">type </span>
          <span className="font-bold">p</span>
          <span className="opacity-70"> to see my </span>
          <span className="font-semibold">projects</span>
        </div>
        <div>
          <span className="opacity-70">type </span>
          <span className="font-bold">c</span>
          <span className="opacity-70"> to </span>
          <span className="font-semibold">contact me</span>
        </div>
        <div className="flex mt-4">
          <div className="mr-2">[carri@rcpc ~]$</div>
          <div className="typewriter" id="prompt">
            <h1>{instruction}</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
