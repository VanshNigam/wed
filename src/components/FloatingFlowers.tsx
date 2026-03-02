import { useEffect, useMemo, useState } from "react";

const PETALS = ["🌸", "🌹", "✿", "❀", "🌺"];

interface Petal {
  id: number;
  left: string;
  animationDuration: string;
  animationDelay: string;
  fontSize: string;
  emoji: string;
}

const FloatingFlowers = () => {
const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const generated: Petal[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 95}%`,
      animationDuration: `${8 + Math.random() * 10}s`,
      animationDelay: `${Math.random() * 1}s`,
      fontSize: `${10 + Math.random() * 20}px`,
      emoji: PETALS[Math.floor(Math.random() * PETALS.length)],
    }));
    setPetals(generated);
  }, []);

  return (
    <div className="fixed inset-1 pointer-events-none overflow-hidden z-50" aria-hidden="true">
      {petals.map((p) => (
        <span
          key={p.id}
          className="petal "
          style={{
            left: p.left,
            animationDuration: p.animationDuration,
            animationDelay: p.animationDelay,
            fontSize: p.fontSize,
            filter:'contrast(250%)',
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
};

export default FloatingFlowers;
