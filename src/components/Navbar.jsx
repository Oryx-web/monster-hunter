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
    <div className={`w-full flex items-center justify-evenly z-[100] fixed ${
      isFixed 
        ? "fixed top-0 bg-black/50 transition-all duration-300 py-7" 
        : "absolute sm:py-[3%] 2xl:py-[2%] transition-all duration-300 hero-fade"
    }`}>
      <img
        className={`hidden drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] lg:block ${
          isFixed ? "w-[15%]": "w-[20%]"
        }`}
        decoding="async"
        src={`${import.meta.env.BASE_URL}/logo.png`}
        alt="MonHun_Logo"
        loading='lazy' 
      />
      <nav className="flex flex-col items-center md:p-0 gap-2 sm:flex-row md:gap-10 lg:gap-20">
        {NAV_ITEMS.map(({ label, section }) => (
          <a 
            key={section}
            className="text-lg md:text-xl xl:text-3xl tracking-wide cursor-pointer text-shadow hover:monster-glow z-[51]"
            onClick={() => handleClick(section)}
          >
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
} 