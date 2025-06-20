import { useEffect, useState, useRef } from "react";
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

  const ref = useRef(null);
  const handleMonsterClick = (monster) => {
    setSelectedMonster(monster);
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  useEffect(() => {
    if (selectedMonster)
      setSelectedMonster(selectedMonster);
  }, [selectedMonster]);

  // const icons = import.meta.glob("/icons/*.svg", { eager: true });
  // const status = import.meta.glob("/status/*.svg", { eager: true });

  const icons = (filename) => `${import.meta.env.BASE_URL}icons/${filename}`;
  const status = (filename) => `${import.meta.env.BASE_URL}status/${filename}`;

  const getMonsterIcon = (monsterName) => {
    if (!monsterName) return "/icons/default.svg";
    let isDLC = false;
    const matchingIconPath1 = `MHW-${monsterName.replace(/'/g, "_").replace(/\s+/g, "_")}_Icon.svg`;
    const matchingIconPath2 = `MHWI-${monsterName.replace(/'/g, "_").replace(/\s+/g, "_")}_Icon.svg`;

    icons(matchingIconPath1) ?  isDLC = false : isDLC = true;
    return isDLC ? icons(matchingIconPath2) : icons(matchingIconPath1);
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

    const matchingIconPath = `Status_Effect-${weakness}_MHW_Icon.svg`;

    return matchingIconPath ? status(matchingIconPath) : "/icons/default.svg";
  };

  return (
    <div className="p-6 bg-[#504b4b28] text-white max-w-screen min-h-dvh flex flex-col sm:flex-row gap-8">
      {/* Left Column: Scrollable List */}
      <div className="sm:w-xl flex flex-col">
        <NavigationBar selectedType={selectedType} setSelectedType={setSelectedType} />
        <MonsterList
          monsters={selectedType === 1 ? largeMonsters : smallMonsters}
          selectedMonster={selectedMonster}
          handleMonsterClick={handleMonsterClick}
          getMonsterIcon={getMonsterIcon}
        />
      </div>

      {/* Right Column: Static Monster Info */}
      <div ref={ref} className="sm:w-6xl h-max flex flex-col items-center justify-start bg-cover bg-no-repeat rounded-lg shadow-md border-[10px] border-[#7B4F2D] p-6 relative" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}background.webp')`}}>
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