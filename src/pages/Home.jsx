export default function Home() {
  return(
    <div className="min-h-screen min-w-screen text-[#54361E] grayscale-50 bg-cover bg-no-repeat flex flex-col justify-center items-center" style={{ backgroundImage: "url('/background.webp')"}}>
      <h1 className="text-5xl font-serif mb-6 border-b-4 border-[#7B4F2D] pb-2">Hunter's Notes</h1>
      <p className="text-lg text-center max-w-xl mb-8">
        Welcome, Hunter! Access detailed information about large and small monsters, weapons and armors.
      </p>
      <div className="flex flex-row items-center justify-items-center">
        <div className="items-center justify-items-center m-5">
          <div className="grid grid-cols-2 m-5">
            <img className="w-50" src={"/icons/MHW-Rathalos_Icon.svg"} alt="Monsters_image" loading="lazy" />
            <img className="w-50" src={"/icons/MHW-Rathian_Icon.svg"} alt="Monsters_image" loading="lazy" />
          </div>
          <a href="/monster-hunter/#/monsters" className="px-6 py-3 bg-[#7B4F2D] !text-white text-xl rounded-lg shadow-md hover:bg-[#54361E] transition-transform hover:scale-105">
            View Monsters
          </a>
        </div>
        <div className="items-center justify-items-center border-r-2 border-l-2">
          <div className="grid grid-cols-4 m-5">
            <img className="w-20 m-1" src={"/home/Bow_Icon_White.svg"} alt="Weapons_image" loading="lazy" />
            <img className="w-20 m-1" src={"/home/Charge_Blade_Icon_White.svg"} alt="Weapons_image" loading="lazy" />
            <img className="w-20 m-1" src={"/home/Dual_Blades_Icon_White.svg"} alt="Weapons_image" loading="lazy" />
            <img className="w-20 m-1" src={"/home/Great_Sword_Icon_White.svg"} alt="Weapons_image" loading="lazy" />
            <img className="w-20 m-1" src={"/home/Gunlance_Icon_White.svg"} alt="Weapons_image" loading="lazy" />
            <img className="w-20 m-1" src={"/home/Hammer_Icon_White.svg"} alt="Weapons_image" loading="lazy" />
            <img className="w-20 m-1" src={"/home/Heavy_Bowgun_Icon_White.svg"} alt="Weapons_image" loading="lazy" />
            <img className="w-20 m-1" src={"/home/Hunting_Horn_Icon_White.svg"} alt="Weapons_image" loading="lazy" />
            <img className="w-20 m-1" src={"/home/Insect_Glaive_Icon_White.svg"} alt="Weapons_image" loading="lazy" />
            <img className="w-20 m-1" src={"/home/Long_Sword_Icon_White.svg"} alt="Weapons_image" loading="lazy" />
            <img className="w-20 m-1" src={"/home/Switch_Axe_Icon_White.svg"} alt="Weapons_image" loading="lazy" />
            <img className="w-20 m-1" src={"/home/Sword_and_Shield_Icon_White.svg"} alt="Weapons_image" loading="lazy" />
          </div>
          <a href="/monster-hunter/#/weapons" className="px-6 py-3 bg-[#7B4F2D] !text-white text-xl rounded-lg shadow-md hover:bg-[#54361E] transition-transform hover:scale-105">
            View Weapons
          </a>
        </div>

        <div className="items-center justify-items-center m-5">
          <div className="grid grid-cols-3 m-5">
            <img className="w-20 m-1" src={"/home/Helmet_Icon_White.svg"} alt="Weapons_image" loading="lazy" />
            <img className="w-20 m-1 translate-y-8" src={"/home/Chest_Icon_White.svg"} alt="Weapons_image" loading="lazy" />
            <img className="w-20 m-1" src={"/home/Arm_Icon_White.svg"} alt="Weapons_image" loading="lazy" />
            <img className="w-20 m-1" src={"/home/Waist_Icon_White.svg"} alt="Weapons_image" loading="lazy" />
            <img className="w-20 m-1 col-start-3" src={"/home/Leg_Icon_White.svg"} alt="Weapons_image" loading="lazy" />
          </div>
          <a href="/monster-hunter/#/armors" className="px-6 py-3 bg-[#7B4F2D] !text-white text-xl rounded-lg shadow-md hover:bg-[#54361E] transition-transform hover:scale-105">
            View Armors
          </a>
        </div>
      </div>
    </div>
  )
}