import { useEffect, useState } from "react";
import { getWeapons } from "../api/weapons";
import NavigationBar from '../components/Weapons/NavigationBar';
import WeaponList from "../components/Weapons/WeaponList";
import WeaponImage from "../components/Weapons/WeaponImage";
import WeaponDetails from "../components/Weapons/WeaponDetails";

export default function Weapons() {
    const [selectedType, setSelectedType] = useState('great-sword');
    const [weapons, setWeapons] = useState([]);
    const [selectedWeapon, setSelectedWeapon] = useState(null);
    const status = import.meta.glob("../assets/status/*.svg", { eager: true });

    const handleClick = (weapon) => {
        setSelectedWeapon(weapon);
    }

    const getWeaknessIcon = (weakness) => {
        if (!weakness) return "";
    
        let matchingIconPath = Object.keys(status).find(path =>
          path.toLowerCase().includes(`-${weakness.toLowerCase()}_mhw_icon`)
        );
    
        return matchingIconPath ? status[matchingIconPath].default : "/icons/default.svg";
      };

    useEffect(() => {
        if (selectedWeapon)
            setSelectedWeapon(selectedWeapon);
      }, [selectedWeapon]);

    useEffect(() => {
        async function fetchData() {
            try {
                const weaponData = await getWeapons(selectedType);
                if (weaponData && weaponData.length > 0) {
                    const processedData = preprocessWeaponData(weaponData);
                    setWeapons(processedData);
                    setSelectedWeapon(processedData[0]); // Set first weapon as default for initial render
                } else {
                    setWeapons([]);
                    setSelectedWeapon(null);
                }
            } catch (error) {
                console.error("Error fetching weapon data:", error);
                setWeapons([]);
                setSelectedWeapon(null);
            }
        }
        fetchData();
    }, [selectedType]);

    const preprocessWeaponData = (weaponData) => {
        const weaponMap = new Map();
        weaponData.forEach(weapon => weaponMap.set(weapon.id, weapon));

        const visited = new Set();

        const removeCircularReferences = (weapon) => {
            if (visited.has(weapon.id)) {
                weapon.crafting.branches = [];
                return;
            }
            visited.add(weapon.id);
            if (weapon.crafting?.branches) {
                weapon.crafting.branches = weapon.crafting.branches.filter(branchId => weaponMap.has(branchId));
                weapon.crafting.branches.forEach(branchId => {
                    const childWeapon = weaponMap.get(branchId);
                    removeCircularReferences(childWeapon);
                });
            }
            visited.delete(weapon.id);
        };

        weaponData.forEach(weapon => removeCircularReferences(weapon));

        return weaponData;
    };

    return (
        <div className="p-6 w-screen bg-gray-950 flex text-white min-h-screen gap-8">
            <div className="">
                <NavigationBar 
                    selectedType={selectedType} 
                    setSelectedType={setSelectedType} 
                />
                <WeaponList 
                    weapons={weapons} 
                    handleClick={handleClick}
                    selectedWeapon={selectedWeapon}
                />
            </div>
            {selectedWeapon ? (
                <div className="flex gap-8">
                    <div className="relative left-0 top-0 h-fit bg-[#2c2b2b93] flex flex-col items-center justify-start bg-cover bg-no-repeat rounded-lg shadow-md border-[10px] border-gray-700 pt-6">
                        <a href="/monster-hunter" className="absolute top-0 right-0 bg-[#bb3333] !text-white p-1 text-2xs font-bold border-b-4 border-[#54361E] rounded-b-lg hover:scale-105">Return to Home</a>
                        <WeaponImage
                            selectedWeapon = {selectedWeapon}
                            getWeaknessIcon={getWeaknessIcon}
                        />
                    </div>
                    <div className="relative right-0 top-0 w-96 h-fit bg-[#2c2b2b93] flex flex-col items-center justify-start bg-cover bg-no-repeat rounded-lg shadow-md border-[10px] border-gray-700">
                        <WeaponDetails
                            selectedWeapon = {selectedWeapon}
                            getWeaknessIcon={getWeaknessIcon}
                        />
                    </div>
                </div>
            ) : ("")}
        </div>
    )    
}