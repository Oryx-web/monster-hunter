import { useRef } from "react";

const WeaponList = ({ weapons, handleClickWeapon, selectedWeapon }) => {
    const baseWeapons = weapons.filter(weapon => !weapon.crafting?.previous);

    return (
        <div className="overflow-auto p-6 bg-gray-950 text-white h-screen flex flex-col gap-8">
            <div className="flex flex-col gap-20 bg-gray-950">
                {baseWeapons.map((weapon) => (
                    <div key={weapon.id} className="bg-neutral-800 flex items-start w-full p-5 mask-image-weapons">
                        <WeaponNode
                            weapon={weapon}
                            weapons={weapons}
                            handleClickWeapon={handleClickWeapon}
                            selectedWeapon={selectedWeapon}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

const WeaponNode = ({ weapon, weapons, handleClickWeapon, selectedWeapon}) => {
    const nodeRef = useRef(null);
    const childWeapons = weapon.crafting?.branches
        ? weapons.filter(w => weapon.crafting.branches.includes(w.id))
        : [];

    return (
        <div
            className="flex items-center justify-center relative weapon-node"
            ref={nodeRef}
        >
            {/* Nodo principal */}
            <div
                className={`weapon-card flex flex-col items-center cursor-pointer hover:scale-105 ${selectedWeapon?.id === weapon.id ? "glow" : ""}`}
                onClick={() => handleClickWeapon(weapon)}
            >
                <img
                    className="w-8 sm:w-8 lg:w-10"
                    src={weapon.assets?.icon ?? `${import.meta.env.BASE_URL + "weapons/" + selectedWeapon.type}-Icon-White.svg`}
                    alt="Imagen no disponible"
                    loading="lazy"
                />
                <p className="hidden sm:block sm:text-xs">{weapon.name}</p>
            </div>

            {/* Contenedor de hijos */}
            {childWeapons.length > 0 && (
                <div className={`grid grid-rows-${childWeapons.length} gap-8`}>
                    {childWeapons.map((childWeapon, index) => (
                        <div key={childWeapon.id} className="relative flex items-center">
                            {/* Línea horizontal a los hijos, pero no al último */}
                            {index < childWeapons.length && (
                                <div className="relative w-4 h-[2px] bg-white child-node"></div>
                            )}

                            <WeaponNode
                                weapon={childWeapon}
                                weapons={weapons}
                                handleClickWeapon={handleClickWeapon}
                                selectedWeapon={selectedWeapon}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default WeaponList;