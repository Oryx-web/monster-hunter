import React from 'react';

export default function ArmorPieceDetails({selectedPiece}) {
  if (!selectedPiece) return null;

  return (
    <>
      <div className="flex">
        <div>
          <h2 className="mt-8 text-4xl text-white text-center font-serif min-w-1/2 border-b-2 border-white pb-2">{selectedPiece.name}</h2>
          <div className="flex gap-x-5 content-around justify-around">
            <div className="mt-4 w-40 content-center justify-items-center border border-gray-700 rounded-md">
              <p className="text-2xl w-full text-white font-serif text-center text-outline bg-[#534a4a67]">Male</p>
              <div className="pt-2.5 items-center justify-center justify-items-center">
                  {selectedPiece.assets !== null ? (
                    selectedPiece.assets.imageMale !== null ? (
                    <ul key={selectedPiece.id} className="w-20 h-20">
                      <img src={selectedPiece.assets.imageMale} alt={`${selectedPiece.name}`} loading='lazy'/>
                    </ul>
                    )
                    : (<p className="w-40 h-20 text-white text-center">No Piece Available</p>) )
                    : (<p className="w-40 h-20 text-white text-center">No Piece Available</p>)
                  }
              </div>
            </div>

            <div className="mt-4 w-40 content-center justify-items-center border border-gray-700 rounded-md">
              <p className="text-2xl w-full text-white font-serif text-center text-outline bg-[#534a4a67]">Female</p>
              <div className="pt-2.5 items-center justify-center justify-items-center">
                  {selectedPiece.assets !== null ? (
                    selectedPiece.assets.imageFemale !== null ? (
                    <ul key={selectedPiece.id} className="w-20 h-20">
                      <img src={selectedPiece.assets.imageFemale} alt={`${selectedPiece.name}`} loading='lazy'/>
                    </ul>
                    )
                    : (<p className="w-40 h-20 text-white text-center">No Piece Available</p>) )
                    : (<p className="w-40 h-20 text-white text-center">No Piece Available</p>)
                  }
              </div>
            </div>
          </div>

          <div className="mt-4 ml-5 mr-5 flex flex-col rounded-md">
            <p className="text-lg text-blue-400 font-serif text-center text-outline-armor">Required Materials</p>
            <ul className="flex flex-col justify-between justify-items-center gap-1 text-white">
              {selectedPiece.crafting.materials.map((craft, index) => (
                <div key={index}>
                  <li className="py-2.5 pl-5 gap-3 bg-[#534d4d79] flex items-center rounded-md mask-image">
                    <p className="bg-black w-10 h-10"></p>
                    <div className="grid grid-rows-2 w-1/1">
                      <p className="flex items-center border-b-2 border-dashed border-[#d0d85f57] text-white text-outline-armor">{craft.item.name}</p>
                      <p className="flex items-center text-white text-outline-armor">X{craft.quantity}</p>
                    </div>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}