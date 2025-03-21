import React, { useState, useEffect, useRef, useCallback } from 'react';
import { getLowArmors } from "../api/armorsLow";
import { getHighArmors } from "../api/armorsHigh";
import { getMasterArmors } from "../api/armorsMaster";
import NavigationBar from "../components/Armors/NavigationBar";
import ArmorList from "../components/Armors/ArmorList";
import ArmorDetails from "../components/Armors/ArmorDetails";
import ArmorPieceDetails from "../components/Armors/ArmorPieceDetails";
import ArmorSkills from "../components/Armors/ArmorSkills";

export default function Armors() {
  const [loading, setLoading] = useState(false);
  const [lowArmors, setLowArmors] = useState([]);
  const [highArmors, setHighArmors] = useState([]);
  const [masterArmors, setMasterArmors] = useState([]);
  const [selectedArmor, setSelectedArmor] = useState(null);
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [selectedRank, setSelectedRank] = useState('low');

  const armorIcons = (filename) => `${import.meta.env.BASE_URL}armors/${filename}`;
  const status = (filename) => `${import.meta.env.BASE_URL}status/${filename}`;

  const handleArmorClick = (armor) => {
    setSelectedPiece(null);
    setSelectedArmor(armor); // Updates state, but it won’t be available immediately!
  };

  const handlePieceClick = (piece) => {
    setSelectedArmor(null);
    setSelectedPiece(piece); // Updates state, but it won’t be available immediately!
  };

  const getArmorIcon = (armor) => {
    if (!armor) return "";

    const matchingIconPath = `${armor}_Icon_White.svg`;

    return matchingIconPath ? armorIcons(matchingIconPath) : "/icons/default.svg";
  };

  const getWeaknessIcon = (weakness) => {
    if (!weakness) return "";

    const matchingIconPath = `Status_Effect-${weakness}_MHW_Icon.svg`;

    return matchingIconPath ? status(matchingIconPath) : "/icons/default.svg";
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const armorsLowData = await getLowArmors();
      const armorsHighData = await getHighArmors();
      const armorsMasterData = await getMasterArmors();

      setLowArmors(armorsLowData);
      setHighArmors(armorsHighData);
      setMasterArmors(armorsMasterData);
      setSelectedArmor(armorsLowData[0]); // Set first armor as default
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className="p-6 w-screen bg-gray-950 flex text-white min-h-screen gap-8">
      {/* Armor Info */}
      <div className="flex flex-col">
        <NavigationBar selectedRank={selectedRank} setSelectedRank={setSelectedRank} />
        <ArmorList
          armors={selectedRank === 'low' ? lowArmors : selectedRank === 'high' ? highArmors : masterArmors}
          selectedArmor={selectedArmor}
          selectedPiece={selectedPiece}
          handleArmorClick={handleArmorClick}
          handlePieceClick={handlePieceClick}
          getArmorIcon={getArmorIcon}
        />
        {loading && <p className="mt-5">Loading...</p>}
      </div>

      {!loading &&       
        <div className='flex grow gap-8'>
          <div className="h-max bg-[#2c2b2b93] flex flex-col grow items-center justify-start bg-cover bg-no-repeat rounded-lg shadow-md border-[10px] border-gray-700 p-6 relative">
            <a href="/monster-hunter" className="absolute top-0 right-0 bg-[#bb3333] !text-white px-4 py-1 text-xl font-bold border-b-4 border-[#54361E] rounded-b-lg hover:scale-105">Return to Home</a>
            {selectedArmor ? (
              <ArmorDetails
                selectedArmor={selectedArmor}
                getArmorIcon={getArmorIcon}
              />
            ) : (
              <ArmorPieceDetails
                selectedPiece={selectedPiece}
                getArmorIcon={getArmorIcon}
                getWeaknessIcon={getWeaknessIcon}
              />
            )}
          </div>
          <div className='grow'>
            {selectedPiece ? (
              <ArmorSkills
                selectedPiece={selectedPiece}
                getArmorIcon={getArmorIcon}
                getWeaknessIcon={getWeaknessIcon}
                status={status}
              />
            ) : ('')}
          </div>
        </div>
      }
    </div>
  );
}