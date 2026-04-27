import { useMemo, useState, useEffect, useRef } from "react";

const DEFAULT_ITEMS = [
  {
    name: "Essentials",
    role: "Prepare for the hunt",
    text: "Stock up on potions, traps, and more to ensure your success",
    image: "icons/MHW-Felyne_Icon.svg",
  },
  {
    name: "Weapons",
    role: "Forge offense",
    text: "Master the art of combat with various weapon types",
    image: "weapons/great-sword-Icon-White.svg",
  },
  {
    name: "Monsters",
    role: "Deadly foes",
    text: "Learn about your hunt targets, their ecology, and more",
    image: "icons/MHW-Rathalos_Icon.svg",
  },
  {
    name: "Armor Sets",
    role: "Forge defense",
    text: "Forge powerful armor sets from monster materials",
    image: "armors/Head_Icon_White.svg",
  },
];

const wrapIndex = (value, length) => (value + length) % length;

export default function CircularScroll({ items = DEFAULT_ITEMS }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const selectedItem = items[selectedIndex];

  const radialItems = useMemo(() => {
    const step = 360 / items.length;

    return items.map((item, index) => {
      const angle = index * step - 90;
      const isSelected = index === selectedIndex;

      return {
        ...item,
        index,
        angle,
        isSelected,
        scale: isSelected ? 1.18 : 0.82,
        opacity: isSelected ? 1 : 0.7,
      };
    });
  }, [items, selectedIndex]);

  const moveSelection = (direction) => {
    setSelectedIndex((current) => wrapIndex(current + direction, items.length));
  };

  const radialRef = useRef(null);

  const step = 360 / items.length;

  const TARGET_ANGLE = 180; // top position

  useEffect(() => {
    const el = radialRef.current;

    const wheelHandler = (e) => {
      e.preventDefault();

      // 🚫 BLOCK SPAM HERE
      if (isAnimating) return;

      setIsAnimating(true);

      if (e.deltaY > 0) {
        setSelectedIndex((prev) => (prev + 1 + items.length) % items.length);
        setRotation((prev) => prev - step);
      } else {
        setSelectedIndex((prev) => (prev - 1 + items.length) % items.length);
        setRotation((prev) => prev + step);
      }

      // ⏱ unlock after animation finishes
      setTimeout(() => setIsAnimating(false), 500);
    };

    el.addEventListener("wheel", wheelHandler, { passive: false });
    return () => el.removeEventListener("wheel", wheelHandler);
  }, [items.length, isAnimating]);

  return (
    <section
      id="loadout"
      className="relative flex items-center justify-center justify-items-center w-full overflow-hidden bg-[#15110d] px-4 py-[10%] text-white sm:px-8 lg:px-16 max-md:hidden ripped z-52"
      aria-label="Hunter radial menu"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage: `url('${import.meta.env.BASE_URL}background.webp')`,
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,184,51,0.18),rgba(10,8,6,0.96)_58%)]" />
      <div className="relative grid lg:max-w-7xl items-center lg:gap-30 lg:grid-cols-[minmax(320px,1fr)_minmax(320px,1fr)]">
        <div className="mh-section m-0">
          <p className="text-sm uppercase tracking-[0.22em] text-[#D8C29A]">
            Guild radial interface
          </p>
          <h2 className=" mt-3 text-3xl font-bold sm:text-5xl text-white">
            HUNTER LOADOUT
          </h2>
          <div className="mt-8 flex items-center gap-4">
            <img
              className="h-24 w-24 rounded-full border-2 border-[#FFB833] bg-black/50 object-cover p-2 monster-glow"
              src={`${import.meta.env.BASE_URL}${selectedItem.image}`}
              alt={selectedItem.name}
            />
            <div>
              <h3 className="text-3xl font-bold text-white text-outline">
                {selectedItem.name}
              </h3>
              <p className="mt-2 text-lg text-white">{selectedItem.role}</p>
            </div>
          </div>
          <p className="mt-8 max-w-xl text-xl leading-7 text-white">
            {selectedItem.text}
          </p>
        </div>
        <div
          ref={radialRef}
          id="noscroll"
          className="relative mx-auto aspect-square w-full max-w-[560px] outline-none z-52"
          role="listbox"
          tabIndex={0}
          aria-activedescendant={`radial-item-${selectedIndex}`}
        >
          <div className="absolute left-[-5%] top-1/2 -translate-y-1/2 w-2 h-16 bg-[#FFB833] rounded-r-full shadow-[0_0_10px_rgba(255,184,51,0.8)]" />
          <div className="absolute inset-[8%] rounded-full border border-[#FFB833]/40 bg-black/35 shadow-[0_0_55px_rgba(255,184,51,0.18)]" />
          <div className="absolute inset-[20%] rounded-full border-2 border-dashed border-[#8B7355]/70" />
          <div className="absolute left-1/2 top-1/2 h-[36%] w-[36%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#FFB833] bg-[#20150d]/90 p-8 shadow-[inset_0_0_30px_rgba(255,184,51,0.22),0_0_30px_rgba(0,0,0,0.6)]">
            <img
              className="h-full w-full object-contain weapon-glow"
              src={`${import.meta.env.BASE_URL}/mouse-scroll-wheel-icon.webp`}
              alt=""
              aria-hidden="true"
            />
          </div>

          <div
            className="absolute inset-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            {radialItems.map((item) => (
              <button
                id={`radial-item-${item.index}`}
                key={item.name}
                type="button"
                role="option"
                aria-selected={item.isSelected}
                className="absolute left-1/2 top-1/2 grid h-[20%] w-[20%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 transition-all duration-300 bg-[#1a1a1a]/90 p-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFB833] pointer-events-none"
                style={{
                  transform: `
                    rotate(${item.angle}deg)
                    translateY(-200%)
                    rotate(${-item.angle - rotation}deg)
                    scale(${item.scale})`,
                  borderColor: "rgba(255,184,51,0.45)",
                  boxShadow: item.isSelected
                    ? `0 0 28px, inset 0 0 18px rgba(255,255,255,0.16)`
                    : "0 8px 28px rgba(0,0,0,0.45)",
                  opacity: item.opacity,
                }}
              >
                <img
                  className="h-full w-full rounded-full object-cover p-1"
                  src={`${import.meta.env.BASE_URL}${item.image}`}
                  alt=""
                  aria-hidden="true"
                />
                <span className="pointer-events-none absolute -bottom-8 hidden whitespace-nowrap rounded bg-black/80 px-2 py-1 text-xs text-white sm:block">
                  {item.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
