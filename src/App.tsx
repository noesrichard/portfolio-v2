import React from "react";
import Navbar from "./components/navbar";
import Header from "./components/header";
import SectionContainer from "./components/section-container";

function App() {
  return (
    <div className="flex flex-col lg:flex-col-reverse">
      <div className="bg-black text-white h-fit w-full">
        <SectionContainer>
          <Header />
          <div className="flex h-full justify-center items-center bg-pink-400">Home</div>
        </SectionContainer>
        <SectionContainer>
          <div className="flex h-full justify-center items-center bg-blue-400"> About</div>
        </SectionContainer>
        <SectionContainer>
          <div className="flex h-full justify-center items-center bg-red-400">Experience</div>
        </SectionContainer>
        <SectionContainer>
          <div className="flex h-full justify-center items-center bg-blue-400"> Projects</div>
        </SectionContainer>
        <SectionContainer>
          <div className="flex h-full justify-center items-center bg-blue-400"> Contact me</div>
        </SectionContainer>
      </div>

      <Navbar />
    </div>
  );
}

export default App;
