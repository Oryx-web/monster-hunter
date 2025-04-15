const MONSTER_CARDS = [
  {
    name: "Rathalos",
    image: "rathalos.webp"
  },
  {
    name: "Rathian",
    image: "rathian.webp"
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
            <h1 className="title text-center font-semibold [text-shadow:_0px_8px_5px_rgb(0_0_0_/_100%)] mb-3 mt-[5%]">
              MONSTERS
            </h1>
            <p className="text-white text-center text-xl font-medium tracking-wide mb-14 px-10 max-sm:text-sm">
              Learn about your foes before the hunt! Click on any monster to explore all of them, their ecology, and more.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full z-10">
              {MONSTER_CARDS.map(monster => (
                <a 
                  key={monster.name}
                  href="https://oryx-web.github.io/monster-hunter/#/monsters" 
                  className="group relative overflow-hidden rounded-2xl transform transition hover:scale-105"
                >
                  <img 
                    src={`${import.meta.env.BASE_URL}/${monster.image}`} 
                    alt={monster.name} 
                    loading="lazy" 
                    className="w-full h-auto object-cover drop-shadow-[0_8px_5px_rgba(0,0,0,1)]" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h2 className="text-white text-2xl font-bold drop-shadow-lg">{monster.name}</h2>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div id="weapons_armors" className="pt-[10%]"></div>
        </div>
      </div>
    </div>
  );
} 