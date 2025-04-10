import React, { useState, useEffect, useRef } from 'react';
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
  const [highArmors, setHighArmors] = useState(null); // Initially null to indicate not fetched
  const [masterArmors, setMasterArmors] = useState(null); // Initially null to indicate not fetched
  const [selectedArmor, setSelectedArmor] = useState(null);
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [selectedRank, setSelectedRank] = useState('low');

  const armorIcons = (filename) => `${import.meta.env.BASE_URL}armors/${filename}`;
  const status = (filename) => `${import.meta.env.BASE_URL}status/${filename}`;

  const ref = useRef(null);

  const handleArmorClick = (armor) => {
    setSelectedPiece(null);
    setSelectedArmor(armor);
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePieceClick = (piece) => {
    setSelectedArmor(null);
    setSelectedPiece(piece);
    ref.current?.scrollIntoView({ behavior: 'smooth' });
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

  // Fetch low armors initially
  useEffect(() => {
    const fetchLowArmors = async () => {
      setLoading(true);
      const armorsLowData = await getLowArmors();
      setLowArmors(armorsLowData);
      setSelectedArmor(armorsLowData[0]); // Set first armor as default
      setLoading(false);
    };
    fetchLowArmors();
  }, []);

  // Fetch high or master armors on demand
  const fetchArmorsByRank = async (rank) => {
    setLoading(true);
    if (rank === 'high' && !highArmors) {
      setLoading(true);
      const armorsHighData = await getHighArmors();
      setHighArmors(armorsHighData);
    } else if (rank === 'master' && !masterArmors) {
      setLoading(true);
      const armorsMasterData = await getMasterArmors();
      setMasterArmors(armorsMasterData);
    }
    setSelectedRank(rank);
    setLoading(false);
  };

  return (
    <div className="p-6 min-w-screen bg-gray-950 flex flex-col lg:flex-row text-white min-h-screen gap-8">
      {/* Armor Info */}
      <div className="flex flex-col">
        <NavigationBar
          selectedRank={selectedRank}
          setSelectedRank={fetchArmorsByRank} // Pass the fetch function to handle rank changes
        />
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

      {!loading ? (
        <div ref={ref} className="flex flex-col xl:flex-row grow gap-8">
          <div className="h-max bg-[#2c2b2b93] flex flex-col grow-0 xl:grow items-center justify-start bg-cover bg-no-repeat rounded-lg shadow-md border-[10px] border-gray-700 p-6 relative">
            <a
              href="/monster-hunter"
              className="absolute top-0 right-0 bg-[#bb3333] !text-white px-4 py-1 text-xl font-bold border-b-4 border-[#54361E] rounded-b-lg hover:scale-105"
            >
              Return to Home
            </a>
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
          <div className="grow">
            {selectedPiece ? (
              <ArmorSkills
                selectedPiece={selectedPiece}
                getArmorIcon={getArmorIcon}
                getWeaknessIcon={getWeaknessIcon}
                status={status}
              />
            ) : (
              ''
            )}
          </div>
        </div>
      ) : <p>Loading...</p>}
    </div>
  );
}