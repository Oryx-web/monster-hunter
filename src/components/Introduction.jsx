export default function Introduction({ contentRef }) {
  return (
    <div id="introduction" className="flex flex-col items-center justify-center mt-[-12%] sm:mt-[-10%]">
      <img 
        className="sticky w-[25%] z-[30] sm:w-[15%] weapon-glow" 
        src={`${import.meta.env.BASE_URL}/middle_logo.png`} 
        alt="Weapons_image" 
        loading="lazy" 
      />

      <div ref={contentRef} className="mt-[-15%] flex flex-col z-10 sm:mt-[-8%]">
        <div 
          className="ripped pt-[15%] w-full flex flex-col items-center justify-center justify-items-center bg-cover bg-no-repeat z-[20] before:absolute before:inset-0 before:bg-black/60 before:z-[-1]" 
          style={{ backgroundImage: `url('${import.meta.env.BASE_URL}introduction.webp')`}}
        >
          <div className="w-full pb-[20%] flex items-center justify-center justify-items-center bg-cover bg-no-repeat">
            <img 
              className="w-[20%] pb-[8%] pt-[2%] mr-[-12%] mt-[7%] z-10 max-lg:mt-[10%] max-lg:mr-[-20%] max-sm:mt-[30%] max-sm:w-[25%] sm:p-0 weapon-glow" 
              src={`${import.meta.env.BASE_URL}/left.png`} 
              alt="Decorative Left" 
              loading='lazy' 
            />
            <div className="py-[5%] mh-section flex flex-col items-center justify-center justify-items-center">
              <h1 className="title text-center font-semibold mb-8">
                INTRODUCTION
              </h1>
              <div className="w-[70%] flex flex-col items-center justify-center justify-items-center">
                <p className="text-[#FFB833] text-center text-wrap text-lg font-medium tracking-wide max-sm:text-xs">
                  Welcome, Hunter! Access detailed information about large and small monsters, weapons and armors.
                </p>
                <p className="pt-[5%] mb-[-5%] text-5xl text-[#FFB833] animate-bounce">↓</p>
              </div>
            </div>
            <img 
              className="w-[20%] pb-[8%] pt-[2%] ml-[-12%] mt-[7%] z-10 max-lg:mt-[10%] max-lg:ml-[-20%] max-sm:mt-[30%] max-sm:w-[25%] sm:p-0 weapon-glow" 
              src={`${import.meta.env.BASE_URL}/right.png`} 
              alt="Decorative Right" 
              loading='lazy' 
            />
          </div>
          <div id="monsters"></div>
        </div>
      </div>
    </div>
  );
} 