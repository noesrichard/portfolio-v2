import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { VscGithubInverted, VscTerminalBash } from "react-icons/vsc";
import {
  BsLinkedin,
  BsPersonVcardFill,
  BsFillEnvelopeAtFill,
} from "react-icons/bs";
import { MdWorkHistory } from "react-icons/md";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import * as Collapsible from "@radix-ui/react-collapsible";

const Navbar = () => {
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);
  const index = 0;

  const items: { icon: any; link: string; label: string }[] = [
    { icon: <BsPersonVcardFill />, link: "#about", label: "About" },
    { icon: <MdWorkHistory />, link: "#experience", label: "Experience" },
    { icon: <LiaProjectDiagramSolid />, link: "#projects", label: "Projects" },
    { icon: <BsFillEnvelopeAtFill />, link: "#contact", label: "Contact me" },
  ];

  const handleClick: (index: number) => void = (index) => {
    setSelected(index);
  };

  return (
    <div className="lg:flex justify-between bg-black text-white fixed bottom-0 w-full lg:sticky lg:top-0" >

      <div className="flex">
        {items.map((item, index) => (
          <NavbarItem
            key={index}
            icon={item.icon}
            label={item.label}
            active={selected == index}
            onClick={() => {
              window.location.href = item.link;
              handleClick(index);
            }}
          />
        ))}
      </div>

      <div className="hidden lg:flex">
        <ProfessionalLinks />
      </div>
    </div>
  );
};

const NavbarItem = ({
  icon,
  label,
  active,
  onClick,
}: {
  icon: any;
  label: string;
  active?: boolean;
  onClick?: () => void;
}) => {
  const activeClass = active ? "border-b-white border-b-2" : "";
  return (
    <div
      className={`hover:border-b-white hover:cursor-pointer hover:border-b-2 py-4 px-5 flex w-full justify-center lg:justify-start lg:w-fit items-center gap-x-2 text-sm ${activeClass}`}
      onClick={onClick}
    >
      <span className="lg:text-xl text-2xl">{icon}</span>{" "}
      <a className="lg:text-sm hidden lg:block">{label}</a>
    </div>
  );
};

const ProfessionalLinks = () => {
  return (
    <>
      <NavbarItem
        icon={<VscGithubInverted />}
        label="Github"
        onClick={() => {
          window.open("https://github.com/noesrichard", "_blank");
        }}
        active={false}
      />
      <NavbarItem
        icon={<BsLinkedin />}
        label="LinkedIn"
        onClick={() => {
          window.open(
            "https://www.linkedin.com/in/richard-carri%C3%B3n-a21a3b219/",
            "_blank"
          );
        }}
        active={false}
      />
    </>
  );
};

export default Navbar;
