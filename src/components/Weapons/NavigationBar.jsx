import React from 'react';

export default function NavigationBar({ selectedType, setSelectedType }) {
    return (
      <div className="w-full grid grid-cols-5 items-center rounded-lg border-b-2 border-b-blue-300 shadow-md sm:grid-cols-7 xl:flex">
        <a
        className={`items-center justify-center justify-items-center text-center sm:h-10 md:h-fit md:p-2 xl:p-4 bg-black rounded-lg hover:scale-105 transition-transform ${selectedType === 'great-sword' ? 'border-2 border-blue-300' : ''}`}
        onClick={() => setSelectedType('great-sword')}
        >
        <img className="w-6 sm:w-8 lg:w-10 xl:w-20" src={`${import.meta.env.BASE_URL}home/Great_Sword_Icon_White.svg`} alt="" />
        </a>
    
        <a
        className={`items-center justify-center justify-items-center text-center sm:h-10 md:h-fit md:p-2 xl:p-4 bg-black rounded-lg hover:scale-105 transition-transform ${selectedType === 'long-sword' ? 'border-2 border-blue-300' : ''}`}
        onClick={() => setSelectedType('long-sword')}
        >
        <img className="w-6 sm:w-8 lg:w-10 xl:w-20" src={`${import.meta.env.BASE_URL}home/Long_Sword_Icon_White.svg`} alt="" />
        </a>
    
        <a
        className={`items-center justify-center justify-items-center text-center sm:h-10 md:h-fit md:p-2 xl:p-4 bg-black rounded-lg hover:scale-105 transition-transform ${selectedType === 'sword-and-shield' ? 'border-2 border-blue-300' : ''}`}
        onClick={() => setSelectedType('sword-and-shield')}
        >
        <img className="w-6 sm:w-8 lg:w-10 xl:w-20" src={`${import.meta.env.BASE_URL}home/Sword_and_Shield_Icon_White.svg`} alt="" />
        </a>

        <a
        className={`items-center justify-center justify-items-center text-center sm:h-10 md:h-fit md:p-2 xl:p-4 bg-black rounded-lg hover:scale-105 transition-transform ${selectedType === 'dual-blades' ? 'border-2 border-blue-300' : ''}`}
        onClick={() => setSelectedType('dual-blades')}
        >
        <img className="w-6 sm:w-8 lg:w-10 xl:w-20" src={`${import.meta.env.BASE_URL}home/Dual_Blades_Icon_White.svg`} alt="" />
        </a>

        <a
        className={`items-center justify-center justify-items-center text-center sm:h-10 md:h-fit md:p-2 xl:p-4 bg-black rounded-lg hover:scale-105 transition-transform ${selectedType === 'hammer' ? 'border-2 border-blue-300' : ''}`}
        onClick={() => setSelectedType('hammer')}
        >
        <img className="w-6 sm:w-8 lg:w-10 xl:w-20" src={`${import.meta.env.BASE_URL}home/Hammer_Icon_White.svg`} alt="" />
        </a>

        <a
        className={`items-center justify-center justify-items-center text-center sm:h-10 md:h-fit md:p-2 xl:p-4 bg-black rounded-lg hover:scale-105 transition-transform ${selectedType === 'hunting-horn' ? 'border-2 border-blue-300' : ''}`}
        onClick={() => setSelectedType('hunting-horn')}
        >
        <img className="w-6 sm:w-8 lg:w-10 xl:w-20" src={`${import.meta.env.BASE_URL}home/Hunting_Horn_Icon_White.svg`} alt="" />
        </a>

        <a
        className={`items-center justify-center justify-items-center text-center sm:h-10 md:h-fit md:p-2 xl:p-4 bg-black rounded-lg hover:scale-105 transition-transform ${selectedType === 'lance' ? 'border-2 border-blue-300' : ''}`}
        onClick={() => setSelectedType('lance')}
        >
        <img className="w-6 sm:w-8 lg:w-10 xl:w-20" src={`${import.meta.env.BASE_URL}home/Lance_Icon_White.svg`} alt="" />
        </a>

        <a
        className={`items-center justify-center justify-items-center text-center sm:h-10 md:h-fit md:p-2 xl:p-4 bg-black rounded-lg hover:scale-105 transition-transform ${selectedType === 'gunlance' ? 'border-2 border-blue-300' : ''}`}
        onClick={() => setSelectedType('gunlance')}
        >
        <img className="w-6 sm:w-8 lg:w-10 xl:w-20" src={`${import.meta.env.BASE_URL}home/Gunlance_Icon_White.svg`} alt="" />
        </a>

        <a
        className={`items-center justify-center justify-items-center text-center sm:h-10 md:h-fit md:p-2 xl:p-4 bg-black rounded-lg hover:scale-105 transition-transform ${selectedType === 'switch-axe' ? 'border-2 border-blue-300' : ''}`}
        onClick={() => setSelectedType('switch-axe')}
        >
        <img className="w-6 sm:w-8 lg:w-10 xl:w-20" src={`${import.meta.env.BASE_URL}home/Switch_Axe_Icon_White.svg`} alt="" />
        </a>

        <a
        className={`items-center justify-center justify-items-center text-center sm:h-10 md:h-fit md:p-2 xl:p-4 bg-black rounded-lg hover:scale-105 transition-transform ${selectedType === 'charge-blade' ? 'border-2 border-blue-300' : ''}`}
        onClick={() => setSelectedType('charge-blade')}
        >
        <img className="w-6 sm:w-8 lg:w-10 xl:w-20" src={`${import.meta.env.BASE_URL}home/Charge_Blade_Icon_White.svg`} alt="" />
        </a>

        <a
        className={`items-center justify-center justify-items-center text-center sm:h-10 md:h-fit md:p-2 xl:p-4 bg-black rounded-lg hover:scale-105 transition-transform ${selectedType === 'insect-glaive' ? 'border-2 border-blue-300' : ''}`}
        onClick={() => setSelectedType('insect-glaive')}
        >
        <img className="w-6 sm:w-8 lg:w-10 xl:w-20" src={`${import.meta.env.BASE_URL}home/Insect_Glaive_Icon_White.svg`} alt="" />
        </a>

        <a
        className={`items-center justify-center justify-items-center text-center sm:h-10 md:h-fit md:p-2 xl:p-4 bg-black rounded-lg hover:scale-105 transition-transform ${selectedType === 'light-bowgun' ? 'border-2 border-blue-300' : ''}`}
        onClick={() => setSelectedType('light-bowgun')}
        >
        <img className="w-6 sm:w-8 lg:w-10 xl:w-20" src={`${import.meta.env.BASE_URL}home/Light_Bowgun_Icon_White.svg`} alt="" />
        </a>

        <a
        className={`items-center justify-center justify-items-center text-center sm:h-10 md:h-fit md:p-2 xl:p-4 bg-black rounded-lg hover:scale-105 transition-transform ${selectedType === 'heavy-bowgun' ? 'border-2 border-blue-300' : ''}`}
        onClick={() => setSelectedType('heavy-bowgun')}
        >
        <img className="w-6 sm:w-8 lg:w-10 xl:w-20" src={`${import.meta.env.BASE_URL}home/Heavy_Bowgun_Icon_White.svg`} alt="" />
        </a>

        <a
        className={`items-center justify-center justify-items-center text-center sm:h-10 md:h-fit md:p-2 xl:p-4 bg-black rounded-lg hover:scale-105 transition-transform ${selectedType === 'bow' ? 'border-2 border-blue-300' : ''}`}
        onClick={() => setSelectedType('bow')}
        >
        <img className="w-6 sm:w-8 lg:w-10 xl:w-20" src={`${import.meta.env.BASE_URL}home/Bow_Icon_White.svg`} alt="" />
        </a>
      </div>
      );
}