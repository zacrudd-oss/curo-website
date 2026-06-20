import { useEffect, useRef, useState } from "react";

const housePaths = [
  // Detached
  "M2 20 L15 6 L28 20 L28 35 L2 35 Z M10 25 L10 35 L20 35 L20 25 Z M5 20 L15 8 L25 20",
  // Terraced
  "M2 10 L2 35 L28 35 L28 10 Z M0 10 L15 0 L30 10 M6 14 L6 20 L12 20 L12 14 Z M18 14 L18 20 L24 20 L24 14 Z M11 25 L11 35 L19 35 L19 25 Z",
  // Semi-detached
  "M2 12 L2 35 L18 35 L18 12 Z M18 15 L18 35 L30 35 L30 15 Z M0 12 L10 3 L18 12 M18 15 L24 8 L32 15 M7 26 L7 35 L13 35 L13 26 Z M22 26 L22 35 L27 35 L27 26 Z",
  // Modern block
  "M2 5 L2 35 L30 35 L30 5 Z M5 9 L5 14 L10 14 L10 9 Z M13 9 L13 14 L18 14 L18 9 Z M22 9 L22 14 L27 14 L27 9 Z M5 18 L5 23 L10 23 L10 18 Z M13 18 L13 23 L18 23 L18 18 Z M22 18 L22 23 L27 23 L27 18 Z M12 28 L12 35 L20 35 L20 28 Z",
  // Cottage
  "M2 18 L15 5 L28 18 L28 32 L2 32 Z M6 20 L6 25 L11 25 L11 20 Z M19 20 L19 25 L24 25 L24 20 Z M11 24 L11 32 L18 32 L18 24 Z M12 8 L12 12 L18 12 L18 8 Z",
];

interface HouseItem {
  id: number;
  x: number;
  y: number;
  pathIdx: number;
  scale: number;
  delay: number;
  flip: boolean;
}

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return s / 2147483647;
  };
}

function generateHouses(): HouseItem[] {
  const rand = seededRandom(42);
  const items: HouseItem[] = [];

  for (let row = 0; row < 16; row++) {
    const yBase = row * 350;
    const perRow = 3 + Math.floor(rand() * 2);
    for (let c = 0; c < perRow; c++) {
      const side = rand() > 0.5;
      items.push({
        id: items.length,
        x: side ? 75 + rand() * 20 : rand() * 20,
        y: yBase + rand() * 250,
        pathIdx: Math.floor(rand() * housePaths.length),
        scale: 1 + rand() * 0.8,
        delay: c * 150 + rand() * 200,
        flip: rand() > 0.5,
      });
    }
  }
  return items;
}

const houseItems = generateHouses();

function FloatingHouse({ item }: { item: HouseItem }) {
  const ref = useRef<SVGSVGElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0, rootMargin: "0px 0px -80px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      width={32 * item.scale}
      height={36 * item.scale}
      viewBox="0 0 32 36"
      className="absolute"
      style={{
        left: `${item.x}%`,
        top: item.y,
        opacity: visible ? 0.05 : 0,
        transform: visible
          ? `translateY(0) scaleX(${item.flip ? -1 : 1})`
          : `translateY(50px) scaleX(${item.flip ? -1 : 1})`,
        transition: `opacity 1s ease-out ${item.delay}ms, transform 1s ease-out ${item.delay}ms`,
        pointerEvents: "none",
        color: "var(--color-gold)",
      }}
    >
      <path
        d={housePaths[item.pathIdx]}
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
      />
    </svg>
  );
}

export default function HouseBackdrop() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
    >
      {houseItems.map((item) => (
        <FloatingHouse key={item.id} item={item} />
      ))}
    </div>
  );
}
