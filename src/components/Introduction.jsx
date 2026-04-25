export default function Introduction({ contentRef }) {
  return (
    <div id="introduction" className="w-full flex flex-col justify-center mt-[-12%] sm:mt-[-10%]">

      <div ref={contentRef} className="mt-[-15%] flex flex-col z-10 sm:mt-[-8%]">
        <div 
          className="ripped pt-[10%] pb-[15%] flex flex-col items-center justify-center justify-items-center bg-cover bg-no-repeat z-[20] before:absolute before:inset-0 before:bg-black/60 before:z-[-1]" 
          style={{ backgroundImage: `url('${import.meta.env.BASE_URL}introduction.webp')`}}
        >
          <div className="pt-[10%] pb-[15%] flex items-center justify-center justify-items-center bg-cover bg-no-repeat">
            <img 
              className="w-[10%] pb-[8%] pt-[2%] mr-[-12%] mt-[7%] z-10 max-lg:mt-[10%] max-lg:mr-[-20%] max-sm:mt-[30%] max-sm:w-[25%] sm:p-0 weapon-glow" 
              src={`${import.meta.env.BASE_URL}/left.png`} 
              alt="Decorative Left" 
              loading='lazy' 
            />
            <div className="py-[5%]! mh-section w-[70%] flex flex-col items-center justify-center justify-items-center">
              <h1 className="title text-center font-semibold">
                HUNTER GUIDE
              </h1>
              <div className="w-[60%] flex flex-col items-center justify-center justify-items-center">
                <p className="text-[#FFB833] text-center text-wrap text-2xl font-medium tracking-wide max-sm:text-xs mb-8">
                  Welcome, Hunter! Access detailed information about large and small monsters, weapons and armors.
                </p>
              </div>
            </div>
            <img 
              className="w-[10%] pb-[8%] pt-[2%] ml-[-12%] mt-[7%] z-10 max-lg:mt-[10%] max-lg:ml-[-20%] max-sm:mt-[30%] max-sm:w-[25%] sm:p-0 weapon-glow" 
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