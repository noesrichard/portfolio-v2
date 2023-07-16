import React from "react";
import { VscTerminalBash } from "react-icons/vsc";

const Header = () => {
  return (
    <div className="flex items-center lg:hidden bg-black text-white py-2 px-2">
      <VscTerminalBash className="text-4xl mr-2" />
      <span className="text-xl">carri@rcpc</span>
    </div>
  );
};

export default Header;
