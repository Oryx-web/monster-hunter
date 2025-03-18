import { useEffect, useState } from "react";
import { getLargeMonsters } from "../api/largeMonsters";
import { getSmallMonsters } from "../api/smallMonsters";
import NavigationBar from "../components/Monsters/NavigationBar";
import MonsterList from "../components/Monsters/MonsterList";
import MonsterDetails from "../components/Monsters/MonsterDetails";

export default function Monsters() {
  const [largeMonsters, setLargeMonsters] = useState([]);
  const [smallMonsters, setSmallMonsters] = useState([]);
  const [selectedMonster, setSelectedMonster] = useState(null);
  const [selectedType, setSelectedType] = useState(1);

  const handleMonsterClick = (monster) => {
    setSelectedMonster(monster); // Updates state, but it won’t be available immediately!
  };

  useEffect(() => {
    if (selectedMonster)
      setSelectedMonster(selectedMonster);
  }, [selectedMonster]);

  const icons = import.meta.glob(`${import.meta.env.BASE_URL}/icons/*.svg`, { eager: true });
  const status = import.meta.glob(`${import.meta.env.BASE_URL}/status/*.svg`, { eager: true });

  const getMonsterIcon = (monsterName) => {
    if (!monsterName) return "/icons/default.svg";

    let matchingIconPath = Object.keys(icons).find(path =>
      path.toLowerCase().includes(`-${monsterName.toLowerCase().replace(/'/g, "_").replace(/\s+/g, "_")}_icon`)
    );

    return matchingIconPath ? icons[matchingIconPath].default : "/icons/default.svg";
  };

  useEffect(() => {
    async function fetchData() {
      const largeData = await getLargeMonsters();
      const smallData = await getSmallMonsters();

      setLargeMonsters(largeData);
      setSmallMonsters(smallData);
      setSelectedMonster(largeData[0]); // Set first monster as default
    }
    fetchData();
  }, []);

  const getWeaknessIcon = (weakness) => {
    if (!weakness) return "";

    let matchingIconPath = Object.keys(status).find(path =>
      path.toLowerCase().includes(`-${weakness.toLowerCase()}_mhw_icon`)
    );

    return matchingIconPath ? status[matchingIconPath].default : "/icons/default.svg";
  };

  return (
    <div className="p-6 bg-[#504b4b28] text-white max-w-screen min-h-screen flex gap-8">
      {/* Left Column: Scrollable List */}
      <div className="w-xl flex flex-col">
        <NavigationBar selectedType={selectedType} setSelectedType={setSelectedType} />
        <MonsterList
          monsters={selectedType === 1 ? largeMonsters : smallMonsters}
          selectedMonster={selectedMonster}
          handleMonsterClick={handleMonsterClick}
          getMonsterIcon={getMonsterIcon}
        />
      </div>

      {/* Right Column: Static Monster Info */}
      <div className="w-6xl h-max flex flex-col items-center justify-start bg-cover bg-no-repeat grayscale-40 rounded-lg shadow-md border-[10px] border-[#7B4F2D] p-6 relative" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}background.webp')`}}>
        <div className="absolute top-0 left-0 bg-[#7B4F2D] text-white px-4 py-1 text-xl font-bold border-b-4 border-[#54361E] rounded-b-lg">
          Ecology
        </div>
        <a href="/monster-hunter" className="absolute top-0 right-0 bg-[#bb3333] !text-white px-4 py-1 text-xl font-bold border-b-4 border-[#54361E] rounded-b-lg hover:scale-105">Return to Home</a>
        <MonsterDetails
          selectedMonster={selectedMonster}
          getMonsterIcon={getMonsterIcon}
          getWeaknessIcon={getWeaknessIcon}
          status={status}
        />
      </div>
    </div>
  );
}