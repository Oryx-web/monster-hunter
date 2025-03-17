import React from 'react';

export default function NavigationBar({ selectedType, setSelectedType }) {
  return (
    <div className="bg-orange-900 brightness-75 w-full h-30 flex items-center justify-around bg-[length:100%_100%] bg-no-repeat border-2 border-black rounded-lg shadow-md" style={{ backgroundImage: "url('src/assets/banner.webp')" }}>
      <a
        className={`!text-white flex flex-col items-center text-center p-5 grayscale-100 hover:grayscale-0 hover:scale-105 hover:animate-glow transition-transform ${selectedType === 1 ? 'hover:selected-glow' : ''}`}
        onClick={() => setSelectedType(1)}
      >
        <p className="opacity-0">Large Monsters</p>
        <img className="w-12 h-12 mt-2" src="src/assets/icons/MHW-Rathalos_Icon.svg" alt="" loading='lazy'/>
      </a>

      <a
        className={`!text-white flex flex-col items-center text-center p-5 grayscale-100 hover:grayscale-0 hover:scale-105 hover:animate-glow transition-transform ${selectedType === 2 ? 'hover:selected-glow' : ''}`}
        onClick={() => setSelectedType(2)}
      >
        <p className="opacity-0">Small Monsters</p>
        <img className="w-12 h-12 mt-2" src="src/assets/icons/MHW-Apceros_Icon.svg" alt="" loading='lazy'/>
      </a>

      <a
        className={`!text-white flex flex-col items-center text-center p-5 grayscale-100 hover:grayscale-0 hover:scale-105 hover:animate-glow transition-transform ${selectedType === 3 ? 'hover:selected-glow' : ''}`}
        onClick={() => setSelectedType(3)}
      >
        <p className="opacity-0">Endemic Life</p>
        <img className="w-12 h-12 mt-2" src="src/assets/icons/MHW-Vespoid_Icon.svg" alt="" loading='lazy'/>
      </a>
    </div>
  );
}