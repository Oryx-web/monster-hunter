const GEAR_SECTIONS = [
  {
    name: "Weapons",
    image: "weapons.png",
    link: "https://oryx-web.github.io/monster-hunter/#/weapons/",
    position: "mr-[-15%]"
  },
  {
    name: "Armors",
    image: "armors.png",
    link: "https://oryx-web.github.io/monster-hunter/#/armors/",
    position: "ml-[-15%]"
  }
];

export default function Hunters() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-[-17%] flex flex-col z-10 sm:mt-[-15%]">
        <div 
          className="ripped mt-[5%] pt-[15%] w-full flex flex-col items-center justify-center justify-items-center bg-cover bg-no-repeat z-[20] before:absolute before:inset-0 before:bg-black/60 before:z-[-1]" 
          style={{ backgroundImage: `url('${import.meta.env.BASE_URL}home_hunters.png')`}}
        >
          <div className="w-full pb-[10%] flex items-center justify-center justify-items-center bg-cover bg-no-repeat">
            {GEAR_SECTIONS.map((section, index) => (
              <>
                {index === 1 && (
                  <div className="">
                    <h1 className="title text-center font-semibold [text-shadow:_0px_8px_5px_rgb(0_0_0_/_100%)]">
                      HUNTERS
                    </h1>
                    <div className="intro w-[100%] p-[10%] rounded-lg flex flex-col items-center justify-center">
                      <p className="hunters text-white text-center text-wrap min-lg:text-xl max-md:text-md font-medium tracking-wide max-sm:text-xs">
                        Discover the core of every hunter... Their gear! Click to learn about the different types of weapons and armor sets that help the hunter in battle.
                      </p>
                      <div className="w-[100%] px-[5%] pt-[10%] flex justify-between items-center justify-items-center bg-cover bg-no-repeat">
                        <p className="min-md:text-lg max-sm:text-xs font-bold">← Weapons</p> 
                        <p className="min-md:text-lg max-sm:text-xs font-bold">Armors →</p>
                      </div>
                    </div>
                  </div>
                )}
                <a 
                  href={section.link}
                  className={`w-[30%] ${section.position} mt-[7%] z-10 min-xl:${section.position} max-lg:mt-[25%] max-lg:${section.position === "mr-[-15%]" ? "mr-[-20%]" : "ml-[-20%]"} max-sm:mt-[30%] max-sm:w-[70%] min-lg:mt-[20%]`}
                >
                  <img 
                    className="sm:p-0 cursor-pointer drop-shadow-[0px_0px_10px_rgba(0,0,0,1)] hover:scale-110 hover:drop-shadow-[0_0px_15px_rgba(0,100,0,1)] transition-all duration-200" 
                    src={`${import.meta.env.BASE_URL}/${section.image}`} 
                    alt={section.name} 
                    loading='lazy' 
                  />
                </a>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 