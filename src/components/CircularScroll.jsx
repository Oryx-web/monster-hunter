/* eslint-disable react/prop-types */
import { useMemo, useState, useEffect, useRef } from "react";

const DEFAULT_ITEMS = [
  {
    name: "Great Sword",
    role: "Heavy blade",
    image: "weapons.webp",
    accent: "#FFB833",
  },
  {
    name: "Rathalos",
    role: "King of the Skies",
    image: "rathalos.webp",
    accent: "#FF4545",
  },
  {
    name: "Armor Sets",
    role: "Forge defense",
    image: "armors.png",
    accent: "#7FE0A4",
  },
  {
    name: "Hunter Tools",
    role: "Prepare the hunt",
    image: "middle_logo.png",
    accent: "#D8C29A",
  },
  {
    name: "Weapon Tree",
    role: "Upgrade path",
    image: "weapons.png",
    accent: "#84C7FF",
  },
];

const wrapIndex = (value, length) => (value + length) % length;

export default function CircularScroll({ items = DEFAULT_ITEMS }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedItem = items[selectedIndex];

  const radialItems = useMemo(() => {
    const step = 360 / items.length;

    return items.map((item, index) => {
      const offset = wrapIndex(index - selectedIndex, items.length);
      const normalizedOffset =
        offset > items.length / 2 ? offset - items.length : offset;
      const angle = normalizedOffset * step - 90;
      const isSelected = index === selectedIndex;

      return {
        ...item,
        index,
        angle,
        isSelected,
        scale: isSelected ? 1.18 : 0.82,
        opacity: Math.abs(normalizedOffset) > 2 ? 0.42 : 0.9,
      };
    });
  }, [items, selectedIndex]);

  const moveSelection = (direction) => {
    setSelectedIndex((current) => wrapIndex(current + direction, items.length));
  };

const radialRef = useRef(null);

useEffect(() => {
  const el = radialRef.current;

  const wheelHandler = (e) => {
    e.preventDefault();

    if (e.deltaY > 0) {
      setSelectedIndex((prev) => (prev + 1) % radialItems.length);
    } else {
      setSelectedIndex((prev) =>
        (prev - 1 + radialItems.length) % radialItems.length
      );
    }
  };

  el.addEventListener("wheel", wheelHandler, { passive: false });

  return () => el.removeEventListener("wheel", wheelHandler);
}, [radialItems.length]);

const handleWheel = (e) => {
  e.stopPropagation();    // stops bubbling to window

  if (e.deltaY > 0) {
    setSelectedIndex((prev) => (prev + 1) % radialItems.length);
  } else {
    setSelectedIndex((prev) =>
      (prev - 1 + radialItems.length) % radialItems.length
    );
  }
};

  return (
    <section
      id="loadout"
      className="relative w-full overflow-hidden bg-[#15110d] px-4 py-20 text-white sm:px-8 lg:px-16"
      aria-label="Hunter radial menu"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url('${import.meta.env.BASE_URL}background.webp')` }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,184,51,0.18),rgba(10,8,6,0.96)_58%)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(320px,0.95fr)_minmax(320px,1fr)]">
        <div className="mh-section m-0">
          <p className="text-sm uppercase tracking-[0.22em] text-[#D8C29A]">
            Guild radial interface
          </p>
          <h2 className=" mt-3 text-3xl font-bold sm:text-5xl text-[#FFB833]">
            HUNTER LOADOUT
          </h2>
          <div className="mt-8 flex items-center gap-4">
            <img
              className="h-24 w-24 rounded-full border-2 border-[#FFB833] bg-black/50 object-cover p-2 monster-glow"
              src={`${import.meta.env.BASE_URL}${selectedItem.image}`}
              alt={selectedItem.name}
            />
            <div>
              <h3 className="text-3xl font-bold text-[#FFB833] text-outline">
                {selectedItem.name}
              </h3>
              <p className="mt-2 text-lg text-[#F2E4C7]">{selectedItem.role}</p>
            </div>
          </div>
          <p className="mt-8 max-w-xl text-base leading-7 text-[#F2E4C7]">
            Spin through hunt targets, equipment, and prep tools with a radial
            menu styled around carved metal, warm guild light, and parchment
            paneling.
          </p>
        </div>

        <div
          ref={radialRef}
          id="noscroll"
          className="relative mx-auto aspect-square w-full max-w-[560px] outline-none"
          role="listbox"
          tabIndex={0}
          aria-activedescendant={`radial-item-${selectedIndex}`}
          onWheel={handleWheel}
        >
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

          {radialItems.map((item) => (
            <button
              id={`radial-item-${item.index}`}
              key={item.name}
              type="button"
              role="option"
              aria-selected={item.isSelected}
              className="absolute left-4/7 top-4/7 grid h-[20%] w-[20%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 bg-[#1a1a1a]/90 p-2 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFB833]"
              style={{
                transform: `translate(-50%, -50%) rotate(${item.angle}deg) translateY(-185%) rotate(${-item.angle}deg) scale(${item.scale})`,
                borderColor: item.isSelected ? item.accent : "rgba(255,184,51,0.45)",
                boxShadow: item.isSelected
                  ? `0 0 28px ${item.accent}, inset 0 0 18px rgba(255,255,255,0.16)`
                  : "0 8px 28px rgba(0,0,0,0.45)",
                opacity: item.opacity,
              }}
              onClick={() => setSelectedIndex(item.index)}
            >
              <img
                className="h-full w-full rounded-full object-cover p-1"
                src={`${import.meta.env.BASE_URL}${item.image}`}
                alt=""
                aria-hidden="true"
              />
              <span className="pointer-events-none absolute -bottom-8 hidden whitespace-nowrap rounded bg-black/80 px-2 py-1 text-xs text-[#FFB833] sm:block">
                {item.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
