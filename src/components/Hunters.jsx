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
      <div className="mt-[-20%] flex flex-col z-10 sm:mt-[-18%] w-full">
        <div 
          className="ripped mt-[5%] pt-[15%] w-full flex flex-col items-center justify-center justify-items-center bg-cover bg-no-repeat z-[20] before:absolute before:inset-0 before:bg-black/60 before:z-[-1]" 
          style={{ backgroundImage: `url('${import.meta.env.BASE_URL}home_hunters.png')`}}
        >
          <div className="w-full flex flex-col items-center justify-center px-4 sm:px-12 lg:px-32 xl:px-60">
            <div className="mh-section w-full">
              <h1 className="title text-center font-semibold mb-8">
                HUNTERS
              </h1>
              <p className="text-[#FFB833] text-center text-xl font-medium tracking-wide mb-14 px-10 max-sm:text-sm">
                Discover the core of every hunter... Their gear! Click to learn about the different types of weapons and armor sets that help the hunter in battle.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                {GEAR_SECTIONS.map((section) => (
                  <a 
                    key={section.name}
                    href={section.link}
                    className="group relative overflow-hidden rounded-lg transform transition hover:scale-105 z-20 justify-items-center"
                  >
                    <img 
                      src={`${import.meta.env.BASE_URL}/${section.image}`} 
                      alt={section.name} 
                      loading="lazy"
                      className="w-[70%] h-auto object-cover" 
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-[#FFB833] text-lg text-center font-bold bg-black/70 p-4 rounded-lg">
                        {section.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 