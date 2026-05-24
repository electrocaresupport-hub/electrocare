import { useMemo } from "react";

export function Particles({ count = 28 }: { count?: number }) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => {
        const size = Math.random() * 6 + 2;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const dx = (Math.random() - 0.5) * 200;
        const dy = (Math.random() - 0.5) * 200;
        const dur = 8 + Math.random() * 10;
        const delay = Math.random() * -10;
        return { i, size, left, top, dx, dy, dur, delay };
      }),
    [count],
  );

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      {dots.map((d) => (
        <span
          key={d.i}
          className="absolute rounded-full"
          style={{
            width: d.size,
            height: d.size,
            left: `${d.left}%`,
            top: `${d.top}%`,
            background:
              "radial-gradient(circle, oklch(0.7 0.2 255 / 0.6), oklch(0.7 0.2 255 / 0) 70%)",
            // @ts-expect-error css var
            "--dx": `${d.dx}px`,
            "--dy": `${d.dy}px`,
            animation: `particle-drift ${d.dur}s ease-in-out ${d.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
