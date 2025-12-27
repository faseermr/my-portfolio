"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition">
      {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
