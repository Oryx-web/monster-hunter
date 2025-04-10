import { useEffect, useRef, useState } from "react";

export default function Home() {
  const navbarRef = useRef(null);
  const contentRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);

  const handleClick = (section) => {
    return () => {
      if (section === "introduction") {
        const element = document.getElementById(section);
        if (element) {
        element.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      }
      else if (section === "home") {
        const element = document.getElementById(section);
        if (element) {
        element.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      }
      else{
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ block: "start", behavior: "smooth" });
      }}
    };
  }

  useEffect(() => {
    const handleScroll = () => {
      const contentTop = contentRef.current?.getBoundingClientRect().top;

      if (contentTop <= 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return(
    <div className="min-h-screen min-w-screen text-xs"> 
      <div id="home"></div>
      <div ref={navbarRef} className={`w-full flex items-center justify-evenly z-[50] ${isFixed ? "fixed top-0 backdrop-blur-md bg-gray-800/70 transition-all duration-300" : "absolute mt-[10%] sm:m-0 sm:pt-[3%] 2xl:pt-[2%] transition-all duration-300"}`}>
        <img
          className={`hidden drop-shadow-[0_8px_5px_rgba(0,0,0,1)] sm:p-0 sm:block ${isFixed ? "w-[15%]": "w-[20%]"}`}
          src={`${import.meta.env.BASE_URL}/logo.png`}
          alt="MonHun_Logo"
          loading='lazy' />
        <nav className="flex flex-col items-center py-[5%] sm:p-0 gap-2 sm:gap-4 sm:flex-row md:gap-7">
          <a className="text-white text-base lg:text-xl font-bold tracking-wide drop-shadow-[0_6px_3px_rgba(0,0,0,1)] cursor-pointer hover:scale-105 hover:animate-glow-home" onClick={handleClick("home")}>Home</a>
          <a className="text-white text-base lg:text-xl font-bold tracking-wide drop-shadow-[0_6px_3px_rgba(0,0,0,1)] cursor-pointer hover:scale-105 hover:animate-glow-home" onClick={handleClick("introduction")}>Introduction</a>
          <a className="text-white text-base lg:text-xl font-bold tracking-wide drop-shadow-[0_6px_3px_rgba(0,0,0,1)] cursor-pointer hover:scale-105 hover:animate-glow-home" onClick={handleClick("monsters")}>Monsters</a>
          <a className="text-white text-base lg:text-xl font-bold tracking-wide drop-shadow-[0_6px_3px_rgba(0,0,0,1)] cursor-pointer hover:scale-105 hover:animate-glow-home" onClick={handleClick("weapons_armors")}>Hunters</a>
        </nav>
      </div>
      
      <div className="sticky top-0 bg-cover bg-no-repeat pb-[60%] sm:pb-[55%]" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}banner_home.webp')`}}>
      </div>

      {/* INTRODUCTION SECTION */}

      <div id="introduction" className="flex flex-col items-center justify-center mt-[-12%] sm:mt-[-10%]">
        <img className="sticky w-[25%] z-[30] sm:w-[15%]" src={`${import.meta.env.BASE_URL}/middle_logo.png`} alt="Weapons_image" loading="lazy" />

        <div ref={contentRef} className="mt-[-15%] flex flex-col z-10 sm:mt-[-8%]">
          <div className="ripped pt-[15%] w-full flex flex-col items-center justify-center justify-items-center bg-cover bg-no-repeat z-[20] before:absolute before:inset-0 before:bg-black/60 before:z-[-1]" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}introduction.webp')`}}>
            <div className="w-full pb-[20%] flex items-center justify-center justify-items-center bg-cover bg-no-repeat">
              <img className="w-[20%] pb-[8%] pt-[2%] mr-[-12%] mt-[7%] z-10 max-lg:mt-[10%] max-lg:mr-[-20%] max-sm:mt-[30%] max-sm:w-[25%] sm:p-0 drop-shadow-[0_8px_5px_rgba(0,0,0,1)]" src={`${import.meta.env.BASE_URL}/left.png`} alt="X" loading='lazy' />
              <div className="py-[5%]">
                <h1 className="title text-center font-semibold [text-shadow:_0px_8px_5px_rgb(0_0_0_/_100%)]">INTRODUCTION</h1>
                <div className="intro w-[100%] rounded-lg flex flex-col items-center justify-center">
                  <p className="text-white text-center text-wrap text-lg font-medium tracking-wide max-sm:text-xs">Welcome, Hunter! Access detailed information about large and small monsters, weapons and armors.</p>
                  <p className="pt-[5%] mb-[-10%] text-5xl">↓</p>
                </div>
              </div>
              <img className="w-[20%] pb-[8%] pt-[2%] ml-[-12%] mt-[7%] z-10 max-lg:mt-[10%] max-lg:ml-[-20%] max-sm:mt-[30%] max-sm:w-[25%] sm:p-0 drop-shadow-[0_8px_5px_rgba(0,0,0,1)]" src={`${import.meta.env.BASE_URL}/right.png`} alt="X" loading='lazy' />
            </div>
            <div id="monsters"></div>
          </div>
        </div>
      </div>

      {/* MONSTERS SECTION */}
      <div className="flex flex-col items-center justify-center relative">
        <div className="mt-[-20%] flex flex-col z-10 sm:mt-[-18%]">
          <div className="ripped relative pt-[15%] w-full flex flex-col items-center justify-center bg-cover bg-no-repeat z-[20] before:absolute before:inset-0 before:bg-black/60 before:z-[-1]" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}home_monsters.jpg')` }}>
            <div className="w-full flex flex-col items-center justify-center px-4 sm:px-12 lg:px-32 xl:px-60">
              <h1 className="title text-center font-semibold [text-shadow:_0px_8px_5px_rgb(0_0_0_/_100%)] mb-6 mt-[5%]">MONSTERS</h1>
              <p className="text-white text-center text-xl font-medium tracking-wide mb-10 px-10 max-sm:text-sm">
                Learn about your foes before the hunt! Click on any monster to explore all of them, their ecology, and more.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full z-10">
                <a href="https://oryx-web.github.io/monster-hunter/#/monsters" className="group relative overflow-hidden rounded-2xl shadow-lg transform transition hover:scale-105">
                  <img src={`${import.meta.env.BASE_URL}/rathalos.webp`} alt="Rathalos" loading="lazy" className="w-full h-auto object-cover drop-shadow-[0_8px_5px_rgba(0,0,0,1)]" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h2 className="text-white text-2xl font-bold drop-shadow-lg">Rathalos</h2>
                  </div>
                </a>

                <a href="https://oryx-web.github.io/monster-hunter/#/monsters" className="group relative overflow-hidden rounded-2xl shadow-lg transform transition hover:scale-105">
                  <img src={`${import.meta.env.BASE_URL}/rathian.webp`} alt="Rathian" loading="lazy" className="w-full h-auto object-cover drop-shadow-[0_8px_5px_rgba(0,0,0,1)]" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h2 className="text-white text-2xl font-bold drop-shadow-lg">Rathian</h2>
                  </div>
                </a>
              </div>
            </div>
            <div id="weapons_armors" className="pt-[10%]"></div>
          </div>
        </div>
      </div>

      {/* WEAPONS AND ARMORS SECTION */}

      <div className="flex flex-col items-center justify-center">
        <div className="mt-[-17%] flex flex-col z-10 sm:mt-[-15%]">
          <div className="ripped mt-[5%] pt-[15%] w-full flex flex-col items-center justify-center justify-items-center bg-cover bg-no-repeat z-[20] before:absolute before:inset-0 before:bg-black/60 before:z-[-1]" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}home_hunters.png')`}}>
            <div className="w-full pb-[10%] flex items-center justify-center justify-items-center bg-cover bg-no-repeat">
              <a href="https://oryx-web.github.io/monster-hunter/#/weapons/" className="w-[30%] mr-[-15%] mt-[7%] z-10 min-xl:mr-[-15%] max-lg:mt-[25%] max-lg:mr-[-20%] max-sm:mt-[30%] max-sm:w-[70%] min-lg:mt-[20%]">
                <img className="sm:p-0 cursor-pointer drop-shadow-[0px_0px_10px_rgba(0,0,0,1)] hover:scale-110 hover:drop-shadow-[0_0px_15px_rgba(0,100,0,1)] transition-all duration-200" src={`${import.meta.env.BASE_URL}/weapons.png`} alt="X" loading='lazy' />
              </a>
              <div className="">
                <h1 className="title text-center font-semibold [text-shadow:_0px_8px_5px_rgb(0_0_0_/_100%)]">HUNTERS</h1>
                <div className="intro w-[100%] p-[10%] rounded-lg flex flex-col items-center justify-center">
                  <p className="hunters text-white text-center text-wrap min-lg:text-xl max-md:text-md font-medium tracking-wide max-sm:text-xs">Discover the core of every hunter... Their gear! Click to learn about the different types of weapons and armor sets that help the hunter in battle.</p>
                  <div className="w-[100%] px-[5%] pt-[10%] flex justify-between items-center justify-items-center bg-cover bg-no-repeat">
                    <p className="min-md:text-lg max-sm:text-xs font-bold">← Weapons</p> 
                    <p className="min-md:text-lg max-sm:text-xs font-bold">Armors →</p>
                  </div>

                </div>
              </div>
              <a href="https://oryx-web.github.io/monster-hunter/#/armors/" className="w-[30%] ml-[-15%] mt-[7%] z-10 min-xl:ml-[-15%] max-lg:mt-[25%] max-lg:ml-[-20%] max-sm:mt-[30%] max-sm:w-[70%] min-lg:mt-[20%]">
                <img className="sm:p-0 cursor-pointer drop-shadow-[0px_0px_10px_rgba(0,0,0,1)] hover:scale-110 hover:drop-shadow-[0_0px_15px_rgba(0,100,0,1)] transition-all duration-200" src={`${import.meta.env.BASE_URL}/armors.png`} alt="X" loading='lazy' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}