"use client";

import { useEffect, useRef, useState } from "react";

export default function Clock({
  city,
  timeZone,
}: {
  city: string;
  timeZone: string;
}) {
  const hourRef = useRef<HTMLDivElement>(null);
  const minuteRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);

  const [date, setDate] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      const tz = new Date(
        now.toLocaleString("en-US", { timeZone })
      );

      const h = tz.getHours();
      const m = tz.getMinutes();
      const s = tz.getSeconds();

      const hourDeg = h * 30 + m * 0.5;
      const minuteDeg = m * 6;
      const secondDeg = s * 6;

      if (hourRef.current)
        hourRef.current.style.transform =
          `translate(-50%, -100%) rotate(${hourDeg}deg)`;

      if (minuteRef.current)
        minuteRef.current.style.transform =
          `translate(-50%, -100%) rotate(${minuteDeg}deg)`;

      if (secondRef.current)
        secondRef.current.style.transform =
          `translate(-50%, -100%) rotate(${secondDeg}deg)`;

      setDate(
        tz.toLocaleDateString("ru-RU", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      );
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, [timeZone]);

  return (
    <div className="flex items-center gap-4">

      <div className="relative w-[80px] h-[80px]">

        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 bg-white/60"
            style={{
              width: "1px",
              height: i % 3 === 0 ? "12px" : "7px",
              transform:
                `translate(-50%, -100%) rotate(${i * 30}deg) translateY(-30px)`,
            }}
          />
        ))}

        <div
          ref={hourRef}
          className="absolute left-1/2 top-1/2 bg-white rounded-full"
          style={{
            width: "2px",
            height: "20px",
            transformOrigin: "bottom center",
            transform: "translate(-50%, -100%) rotate(0deg)",
          }}
        />

        <div
          ref={minuteRef}
          className="absolute left-1/2 top-1/2 bg-white rounded-full"
          style={{
            width: "1.5px",
            height: "28px",
            transformOrigin: "bottom center",
            transform: "translate(-50%, -100%) rotate(0deg)",
          }}
        />

        <div
          ref={secondRef}
          className="absolute left-1/2 top-1/2 bg-white/80 rounded-full"
          style={{
            width: "1px",
            height: "32px",
            transformOrigin: "bottom center",
            transform: "translate(-50%, -100%) rotate(0deg)",
          }}
        />

        <div className="absolute left-1/2 top-1/2 w-[4px] h-[4px] bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />

      </div>

      <div>
        <div className="text-white font-medium">{city}</div>
        <div className="text-white/80 text-sm">{date}</div>
      </div>

    </div>
  );
}