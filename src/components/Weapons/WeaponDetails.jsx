export default function WeaponsDetails({ selectedWeapon, getWeaknessIcon }) {
    return(
    <>
    <div className="mt-4 flex justify-center items-center justify-items-center gap-3">
        <div className="w-10 h-10 armor-icon">
            <img className="armor" src={selectedWeapon.assets?.icon} alt="Icon" loading="lazy"/>
        </div>
        <h2 className="text-2xl text-white text-center font-serif min-w-1/2">{selectedWeapon.name}</h2>
    </div>
    <div className="mt-4 ml-5 mr-5 w-1/1 text-center">
        <ul>
            <li className="pl-5 gap-3 bg-[#00000079] flex items-center justify-items-center justify-center rounded-md mask-image">
                <div className="w-1/1 flex justify-end border-b-2 border-dashed border-[#d0d85f57]">
                    <p className="h-10 flex items-center text-white text-outline-armor pr-5">Rarity: {selectedWeapon.rarity}</p>
                </div>
            </li>
            <li className="pl-5 gap-3 bg-[#00000079] flex items-center justify-items-center justify-center rounded-md mask-image">
                <div className="w-1/1 flex border-b-2 border-dashed border-[#d0d85f57]">
                    <img className="w-7 h-9" src="/src/assets/status/attack.webp" alt="Attack" loading="lazy"/>
                    <p className="h-10 flex items-center justify-evenly content-evenly text-white text-outline-armor">Attack</p>    
                </div>
                <p className="h-10 flex items-center justify-evenly content-evenly text-white text-outline-armor pr-5">{selectedWeapon.attack.display}</p>                
            </li>
            <li className="pl-5 gap-3 bg-[#00000079] flex items-center justify-items-center justify-center rounded-md mask-image">
                {selectedWeapon.attributes?.affinity ? (<>
                    <div className="w-1/1 flex border-b-2 border-dashed border-[#d0d85f57]">
                        <img className="w-7 h-9" src="/src/assets/status/affinity.webp" alt="Affinity" loading="lazy" />
                        <p className="h-10 flex items-center justify-evenly content-evenly text-white text-outline-armor">Affinity</p>    
                    </div>
                    <p className="h-10 flex items-center justify-evenly content-evenly text-white text-outline-armor pr-5">{selectedWeapon.attributes.affinity}%</p>
                </>

                ) : (
                    <>
                    <div className="w-1/1 flex border-b-2 border-dashed border-[#d0d85f57]">
                        <img className="w-7 h-9" src="/src/assets/status/affinity.webp" alt="Affinity" loading="lazy"/>
                        <p className="h-10 flex items-center justify-evenly content-evenly text-white text-outline-armor">Affinity</p>    
                    </div>
                    <p className="h-10 flex items-center justify-evenly content-evenly text-white text-outline-armor pr-5">0%</p>
                    </>

                )}
            </li>
            {selectedWeapon.elements?.map((element, index) => (
                <li key={index} className="pl-5 gap-3 bg-[#00000079] flex items-center justify-items-center justify-center rounded-md mask-image">
                    <div className="w-1/1 flex items-center justify-between border-b-2 border-dashed border-[#d0d85f57]">
                        <p>Element</p>
                        <div className="flex pr-5">
                            <img className="w-10 h-10" src={getWeaknessIcon(element.type)} alt={element.type} loading="lazy" />
                            <p className="flex items-center justify-evenly content-evenly text-white text-outline-armor">
                                {element.type}
                            </p>
                        </div>
                        <p className="flex items-center justify-evenly content-evenly text-white text-outline-armor pr-5">
                            {element.damage}
                        </p>
                    </div>
                </li>
            ))}
        </ul>
    </div>
    </>
    )
}