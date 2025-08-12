import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-11 w-20 items-center rounded-full bg-gradient-to-r from-orange-400 via-yellow-400 to-yellow-500 dark:from-indigo-600 dark:via-purple-600 dark:to-pink-600 transition-all duration-500 ease-in-out shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:focus:ring-purple-400"
      aria-label="Toggle theme"
    >
      {/* Background track with gradient */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-100 to-yellow-100 dark:from-indigo-900 dark:to-purple-900 opacity-30"></div>
      
      {/* Sliding circle */}
      <div
        className={`absolute top-1 left-1 h-9 w-9 rounded-full bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out flex items-center justify-center ${
          theme === "dark" ? "translate-x-9" : "translate-x-0"
        }`}
      >
        {/* Icon inside the sliding circle */}
        <div className="relative">
          <Sun
            className={`h-5 w-5 text-orange-500 transition-all duration-300 ${
              theme === "dark" 
                ? "opacity-0 rotate-180 scale-0" 
                : "opacity-100 rotate-0 scale-100"
            }`}
          />
          <Moon
            className={`absolute inset-0 h-5 w-5 text-purple-600 transition-all duration-300 ${
              theme === "dark" 
                ? "opacity-100 rotate-0 scale-100" 
                : "opacity-0 -rotate-180 scale-0"
            }`}
          />
        </div>
      </div>
      
      {/* Background icons for context */}
      <div className="flex w-full items-center justify-between px-2">
        <Sun className={`h-4 w-4 transition-all duration-300 ${
          theme === "light" 
            ? "text-white drop-shadow-sm" 
            : "text-orange-200/60"
        }`} />
        <Moon className={`h-4 w-4 transition-all duration-300 ${
          theme === "dark" 
            ? "text-white drop-shadow-sm" 
            : "text-purple-200/60"
        }`} />
      </div>
      
      {/* Glowing effect */}
      <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
        theme === "light" 
          ? "shadow-[0_0_15px_rgba(251,191,36,0.5)]" 
          : "shadow-[0_0_15px_rgba(147,51,234,0.5)]"
      }`}></div>
    </button>
  );
}