"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  const isDark = mounted ? (resolvedTheme ?? theme) === "dark" : false;

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
        relative grid h-10 w-10 place-items-center rounded-2xl
        bg-transparent
        
        transition-all duration-500 ease-in-out
        
        hover:bg-white/10
        dark:hover:bg-white/10
        
        hover:backdrop-blur
        
        active:scale-[0.96]
        
        focus:outline-none
        focus:ring-2 focus:ring-red-500/50
      "
    >
      {/* SUN */}
      <Sun
        className={`
          absolute h-5 w-5 text-black dark:text-white
          transition-all duration-700 ease-in-out
          ${isDark
            ? "opacity-0 rotate-90 scale-75"
            : "opacity-100 rotate-0 scale-100"}
        `}
      />

      {/* MOON */}
      <Moon
        className={`
          absolute h-5 w-5 text-black dark:text-white
          transition-all duration-700 ease-in-out
          ${isDark
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 -rotate-90 scale-75"}
        `}
      />
    </button>
  );
}
