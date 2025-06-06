import { useRef } from "react";

const WeaponList = ({ weapons, handleClickWeapon, selectedWeapon, getWeaknessIcon }) => {
    const baseWeapons = weapons.filter(weapon => !weapon.crafting?.previous);

    return (
        <div className="max-w-screen overflow-x-auto p-6 bg-gray-950 text-white h-screen flex flex-col gap-8">
            <div className="flex flex-col gap-20 bg-gray-950">
                {baseWeapons.map((weapon) => (
                    <div key={weapon.id} className="w-fit min-w-full bg-neutral-800 flex items-center justify-center justify-items-center p-5 mask-image-weapons rounded-lg shadow-lg">
                        <WeaponNode
                            weapon={weapon}
                            weapons={weapons}
                            handleClickWeapon={handleClickWeapon}
                            selectedWeapon={selectedWeapon}
                            getWeaknessIcon={getWeaknessIcon}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

const WeaponNode = ({ weapon, weapons, handleClickWeapon, selectedWeapon, getWeaknessIcon}) => {
    const nodeRef = useRef(null);
    const childRefs = useRef([]);

    const childWeapons = weapon.crafting?.branches
        ? weapons.filter(w => weapon.crafting.branches.includes(w.id))
        : [];

    return (
        <div className="flex items-center justify-center relative weapon-node" ref={nodeRef}>
            
            {/* Weapon Icon */}
            <div
                className={`weapon-card flex flex-col items-center cursor-pointer hover:scale-105 relative min-sm:min-w-10 min-sm:min-h-10 max-sm:min-w-10 max-sm:max-w-10 max-sm:min-h-10 max-sm:max-h-10 ${selectedWeapon?.id === weapon.id ? "glow" : ""}`}
                onClick={() => handleClickWeapon(weapon)}
            >
                <div className="flex flex-col items-center">
                    <img
                        className="max-sm:min-w-8 max-sm:max-w-8 sm:min-w-10 sm:max-w-10 lg:min-w-14 lg:max-w-14 xl:min-w-8 xl:max-w-8"
                        src={weapon.assets?.icon ?? `${import.meta.env.BASE_URL + "weapons/" + selectedWeapon.type}-Icon-White.svg`}
                        alt="Imagen no disponible"
                        loading="lazy"
                    />
                    {/* <p className="hidden sm:block sm:text-xs z-20">{weapon.name}</p> */}
                </div>
                {/* Weakness Icons */}
                <div className="absolute -bottom-1 -left-2 flex gap-2 p-2 z-20">
                    {weapon.elements?.map((element) => (
                        <img
                            key={element.type}
                            className="w-6 h-6 border-gray-700 shadow-md max-sm:min-w-3.5 max-sm:max-w-3.5 max-sm:min-h-3.5 max-sm:max-h-3.5"
                            src={getWeaknessIcon(element.type)}
                            alt={element.type}
                            loading="lazy"
                        />
                    ))}
                </div>
            </div>

            {/* Horizontal Line to Parent Weapon */}
            {childWeapons.length > 1 && (
                <div className="relative w-3 h-[2px] bg-white"></div>
            )}

            {/* Connector Lines */}
            {childWeapons.length > 0 && (
                <div className={`relative flex min-h-max`}>
                    {/* Child Weapon Nodes */}
                    <div
                        className={`grid grid-rows-${childWeapons.length} gap-4 relative grid-equal-rows items-center h-fit`}
                    >
                        { childWeapons.length === 2 && (
                            
                            <div
                                className="absolute top-0 h-[53.5%] w-[3px] translate-y-[43.5%] pointer-events-none"
                            >
                                <div className="h-full bg-white w-full"></div>
                            </div>
                        )}

                        {childWeapons.length === 3 && (
                            <div
                                className="absolute top-0 h-[67.9%] w-[3px] translate-y-[23.7%] pointer-events-none"
                            >
                                <div className="h-full bg-white w-full"></div>
                            </div>
                        )}

                        {childWeapons.map((childWeapon, index) => (
                            <div
                                key={childWeapon.id}
                                className="relative flex items-center"
                                ref={(el) => (childRefs.current[index] = el)}
                            >
                                {/* Horizontal Line Connecting to Child */}
                                {childWeapon.crafting?.previous > 0 ? (<div className="relative w-3 h-[2px] bg-white"></div>) : ('')}
                                
                                <WeaponNode
                                    weapon={childWeapon}
                                    weapons={weapons}
                                    handleClickWeapon={handleClickWeapon}
                                    selectedWeapon={selectedWeapon}
                                    getWeaknessIcon={getWeaknessIcon}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default WeaponList;
