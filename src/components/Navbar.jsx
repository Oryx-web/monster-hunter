import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Home", section: "home" },
  { label: "Introduction", section: "introduction" },
  { label: "Monsters", section: "monsters" },
  { label: "Hunters", section: "weapons_armors" }
];

export default function Navbar({ isFixed }) {
  const handleClick = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  return (
    <div className={`w-full flex items-center justify-evenly z-[50] ${
      isFixed 
        ? "fixed top-0 backdrop-blur-md bg-gray-800/70 transition-all duration-300" 
        : "absolute mt-[10%] sm:m-0 sm:pt-[3%] 2xl:pt-[2%] transition-all duration-300"
    }`}>
      <img
        className={`hidden drop-shadow-[0_8px_5px_rgba(0,0,0,1)] sm:p-0 sm:block ${
          isFixed ? "w-[15%]": "w-[20%]"
        }`}
        src={`${import.meta.env.BASE_URL}/logo.png`}
        alt="MonHun_Logo"
        loading='lazy' 
      />
      <nav className="flex flex-col items-center py-[5%] sm:p-0 gap-2 sm:gap-4 sm:flex-row md:gap-7">
        {NAV_ITEMS.map(({ label, section }) => (
          <a 
            key={section}
            className="text-white text-base lg:text-xl font-bold tracking-wide drop-shadow-[0_6px_3px_rgba(0,0,0,1)] cursor-pointer hover:scale-105 hover:animate-glow-home"
            onClick={() => handleClick(section)}
          >
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
} 