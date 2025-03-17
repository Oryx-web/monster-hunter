const WeaponList = ({ weapons, handleClick, selectedWeapon }) => {
    // Filter only base weapons (without predecessor)
    const baseWeapons = weapons.filter(weapon => !weapon.crafting?.previous);

    return (
        <div className="overflow-auto p-6 bg-gray-950 text-white h-screen flex flex-col gap-8">
            <div className="flex flex-col gap-20 bg-gray-950">
                {baseWeapons.map((weapon) => (
                    <div className=" bg-neutral-800 flex items-start w-full p-5 mask-image-weapons">
                        <WeaponNode key={weapon.id} weapon={weapon} weapons={weapons} handleClick = {handleClick} selectedWeapon={selectedWeapon} />
                    </div>
                ))}
            </div>
        </div>
    );
};

// Componente recursivo para mostrar cada arma y sus mejoras
const WeaponNode = ({ weapon, weapons, handleClick, selectedWeapon }) => {
    const childWeapons = weapon.crafting?.branches
        ? weapons.filter(w => weapon.crafting.branches.includes(w.id))
        : [];

    return (
        <div className="flex items-center justify-center justify-items-center relative">
            {/* Nodo principal */}
            <div 
                className={`weapon-card flex flex-col items-center cursor-pointer hover:scale-105 ${selectedWeapon?.id == weapon.id ? "glow" : ""}`} 
                onClick={() => handleClick(weapon)}
            >
                <img className="w-10 h-10" src={weapon.assets?.icon || "x"} alt="Imagen no disponible" loading="lazy"/>
                <p className="text-xs">{weapon.name}</p>
            </div>

            {/* Línea vertical si hay más de un hijo */}  
            { childWeapons.length === 2 && (
            <div
                className="relative w-[2px] bg-gray-500 self-stretch"
                style={{
                marginTop: "15%", // Empieza en el 25% del contenedor
                marginBottom: "15%", // Deja un espacio equivalente al 25% al final
                }}
            ></div>
            )}

            {/* Línea vertical si hay más de dos hijos */}  
            {childWeapons.length > 2 && (
            <div
                className="relative w-[2px] bg-gray-500 self-stretch"
                style={{
                marginTop: "27.5%", // Empieza en el 25% del contenedor
                marginBottom: "13%", // Deja un espacio equivalente al 25% al final
                }}
            ></div>
            )}

            {/* Contenedor de hijos */}
            {childWeapons.length > 0 && (
                <div className={`grid grid-rows-${childWeapons.length} gap-8`}>
                    {childWeapons.map((childWeapon, index) => (
                        <div key={childWeapon.id} className="relative flex items-center">
                            {/* Línea horizontal a los hijos, pero no al último */}
                            {index < childWeapons.length && (
                                <div className="relative w-4 h-[2px] bg-gray-500"></div>
                            )}
                            
                            <WeaponNode 
                                weapon={childWeapon} 
                                weapons={weapons} 
                                handleClick={handleClick} 
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
