export default function Home() {
  return(
    <div className="min-h-screen min-w-screen text-xs"> 
      <div className="h-fit fixed top-0 pt-[8%] w-full flex items-center justify-evenly z-[50] backdrop-blur-[3px] mt-[5%] sm:m-0 sm:p-0">
        <img
          className="hidden w-[25%] drop-shadow-[0_8px_5px_rgba(0,0,0,1)] sm:p-0 sm:block"
          src={`${import.meta.env.BASE_URL}/logo.png`}
          alt="X"
        />
        <nav className="flex flex-col items-center gap-2 sm:flex-row md:gap-7">
          <a className="text-white text-lg font-medium tracking-wide drop-shadow-[0_6px_3px_rgba(0,0,0,1)]" href="1">Home</a>
          <a className="text-white text-lg font-medium tracking-wide drop-shadow-[0_6px_3px_rgba(0,0,0,1)]" href="2">Monsters</a>
          <a className="text-white text-lg font-medium tracking-wide drop-shadow-[0_6px_3px_rgba(0,0,0,1)]" href="3">Weapons</a>
          <a className="text-white text-lg font-medium tracking-wide drop-shadow-[0_6px_3px_rgba(0,0,0,1)]" href="4">Armors</a>
        </nav>
      </div>
      
      <div className="sticky top-0 pb-[80%] bg-cover bg-no-repeat sm:pb-[55%]" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}banner_home.webp')`}}>
      </div>

      <div className="flex flex-col items-center justify-center mt-[-12%] sm:mt-[-10%]">
        <img className="sticky w-[25%] z-[30] sm:w-[15%]" src={`${import.meta.env.BASE_URL}/middle_logo.png`} alt="Weapons_image" loading="lazy" />

        <div className="mt-[-15%] flex flex-col z-10 sm:mt-[-8%]">
          <div className="ripped pt-[15%] w-full flex flex-col items-center justify-center justify-items-center bg-cover bg-no-repeat z-[20]" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}home_monsters.webp')`}}>
            <div className="w-full flex items-center justify-center justify-items-center bg-cover bg-no-repeat">
              <img className="w-[20%] pb-[8%] pt-[2%] sm:p-0 z-10" src={`${import.meta.env.BASE_URL}/logo.png`} alt="X" />
              <div>
                <h1 className="title text-center font-semibold [text-shadow:_0px_8px_5px_rgb(0_0_0_/_100%)]">INTRODUCTION</h1>
                <div className="w-[100%] p-[10%] rounded-lg flex flex-col items-center justify-center">
                  <p className="intro text-white text-lg font-medium tracking-wide">Welcome, Hunter! Access detailed information about large and small monsters, weapons and armors.</p>
                </div>
              </div>
              <img className="w-[20%] pb-[8%] pt-[2%] sm:p-0 z-10" src={`${import.meta.env.BASE_URL}/logo.png`} alt="X" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}