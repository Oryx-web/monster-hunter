import React from 'react';

export default function WeaponImage({ selectedWeapon }) {
  if (!selectedWeapon) {
    return <h2 className="text-gray-700">Select a weapon</h2>;
  }

  return (
    <>
        <h2 className="mt-8 text-xl text-white text-center font-serif min-w-1/2 border-b-2 border-[#43403e] pb-2">{selectedWeapon.name}</h2>
        <img className="w-60 mt-4" src={selectedWeapon.assets?.image} alt={selectedWeapon.name} loading="lazy" />
    </>
  );
}