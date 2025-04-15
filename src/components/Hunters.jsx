const GEAR_SECTIONS = [
  {
    name: "Weapons",
    image: "weapons.png",
    link: "https://oryx-web.github.io/monster-hunter/#/weapons/",
    description: "Master the art of combat with various weapon types"
  },
  {
    name: "Armors",
    image: "armors.png",
    link: "https://oryx-web.github.io/monster-hunter/#/armors/",
    description: "Forge powerful armor sets from monster materials"
  }
];

export default function Hunters() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="mt-[-17%] flex flex-col z-10 sm:mt-[-15%] w-full">
        <div 
          className="ripped mt-[5%] pt-[15%] w-full flex flex-col items-center justify-center justify-items-center bg-cover bg-no-repeat z-[20] before:absolute before:inset-0 before:bg-black/60 before:z-[-1]" 
          style={{ backgroundImage: `url('${import.meta.env.BASE_URL}home_hunters.png')`}}
        >
          <div className="w-full pb-[10%] flex flex-col items-center justify-center bg-cover bg-no-repeat">
            <div className="mh-section w-[80%] max-w-4xl">
              <h1 className="title text-center font-semibold mb-8">
                HUNTERS
              </h1>
              <div className="flex flex-col items-center justify-center">
                <p className="text-[#FFB833] text-center text-wrap min-lg:text-xl max-md:text-md font-medium tracking-wide max-sm:text-xs mb-8">
                  Discover the core of every hunter... Their gear! Click to learn about the different types of weapons and armor sets that help the hunter in battle.
                </p>
                <div className="flex justify-between items-start w-full">
                  {GEAR_SECTIONS.map((section) => (
                    <div key={section.name} className="w-[45%] flex flex-col items-center justify-center justify-items-center">
                      <p className="mb-4 min-md:text-lg max-sm:text-xs font-bold text-[#FFB833]">{section.name}</p>
                      <a 
                        href={section.link}
                        className="group block w-full z-20"
                      >
                        <div className="relative">
                          <img 
                            className="w-full cursor-pointer weapon-glow transition-all duration-200 group-hover:scale-105" 
                            src={`${import.meta.env.BASE_URL}/${section.image}`} 
                            alt={section.name} 
                            loading='lazy' 
                          />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-[#FFB833] text-lg text-center font-bold bg-black/70 p-4 rounded-lg">
                              {section.description}
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 