const MONSTER_CARDS = [
  {
    name: "Rathalos",
    image: "rathalos.webp",
    title: "King of the Skies"
  },
  {
    name: "Rathian",
    image: "rathian.webp",
    title: "Queen of the Land"
  }
];

export default function Monsters() {
  return (
    <div className="flex flex-col items-center justify-center relative">
      <div className="mt-[-20%] flex flex-col z-10 sm:mt-[-18%]">
        <div 
          className="ripped relative pt-[15%] w-full flex flex-col items-center justify-center bg-cover bg-no-repeat z-[20] before:absolute before:inset-0 before:bg-black/60 before:z-[-1]" 
          style={{ backgroundImage: `url('${import.meta.env.BASE_URL}home_monsters.jpg')` }}
        >
          <div className="w-full flex flex-col items-center justify-center px-4 sm:px-12 lg:px-32 xl:px-60">
            <div className="mh-section w-full">
              <h1 className="title text-center font-semibold mb-8">
                MONSTERS
              </h1>
              <p className="text-[#FFB833] text-center text-xl font-medium tracking-wide mb-14 px-10 max-sm:text-sm">
                Learn about your foes before the hunt! Click on any monster to explore all of them, their ecology, and more.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                {MONSTER_CARDS.map(monster => (
                  <a 
                    key={monster.name}
                    href="https://oryx-web.github.io/monster-hunter/#/monsters" 
                    className="mh-card group relative overflow-hidden rounded-lg transform transition hover:scale-105 monster-glow z-20"
                  >
                    <img 
                      src={`${import.meta.env.BASE_URL}/${monster.image}`} 
                      alt={monster.name} 
                      loading="lazy" 
                      className="w-full h-auto object-cover" 
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h2 className="text-[#FFB833] text-3xl font-bold mb-2">{monster.name}</h2>
                      <p className="text-white text-lg italic">{monster.title}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div id="weapons_armors" className="pt-[10%]"></div>
        </div>
      </div>
    </div>
  );
} 