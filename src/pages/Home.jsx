import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Introduction from "../components/Introduction";
import Monsters from "../components/Monsters";
import Hunters from "../components/Hunters";

export default function Home() {
  const contentRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contentTop = contentRef.current?.getBoundingClientRect().top;
      setIsFixed(contentTop <= 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home min-h-dvh max-w-screen text-xs">
      <div id="home"></div>
      
      <Navbar isFixed={isFixed} />
      
      <div 
        className="sticky top-0 h-dvh bg-cover bg-center bg-no-repeat pb-[60%] sm:pb-[55%]" 
        style={{ backgroundImage: `url('${import.meta.env.BASE_URL}banner_home.webp')`}}
      />

      <Introduction contentRef={contentRef} />
      <Monsters />
      <Hunters />
    </div>
  );
}