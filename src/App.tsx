import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <div className="flex flex-col lg:flex-col-reverse">

      <div className="bg-red-500 text-white h-[calc(100vh-54px)] w-full">
        <Header />
        <div className="">About</div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
