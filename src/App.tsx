import React from "react";
import Navbar from "./components/navbar";
import Header from "./components/header";
import SectionContainer from "./components/section-container";
import Home from "./sections/home";
import Computer from "./components/computer";

function App() {
  return (
    <div className="flex flex-col lg:flex-col-reverse">
      <div className="bg-black text-white h-fit w-full">
        <SectionContainer>
          { /*<Header />*/ }
          <div className="flex h-full justify-center items-center bg-black">
            <Home />
          </div>
        </SectionContainer>
        <SectionContainer>
          <div className="flex h-full justify-center items-center bg-black"> About</div>
        </SectionContainer>
        <SectionContainer>
          <div className="flex h-full justify-center items-center bg-black">Experience</div>
        </SectionContainer>
        <SectionContainer>
          <div className="flex h-full justify-center items-center bg-black"> Projects</div>
        </SectionContainer>
        <div className="bg-black lg:h-[calc(100vh-54px)] h-screen">
          <div className="flex h-full justify-center items-center bg-black"> Contact me</div>
        </div>
      </div>

      <Navbar />
    </div>
  );
}

export default App;
