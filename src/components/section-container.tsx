import React, { ReactNode } from "react"; 

const SectionContainer = ({children}: {children: ReactNode}) => {
  return (
    <div className="bg-black lg:h-[calc(100vh-54px)] h-[calc(100vh-52px)]">
      {children}
    </div>
  );
};

export default SectionContainer;
