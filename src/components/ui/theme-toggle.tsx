
"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

type Theme = "dark" | "light";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  // Initialize theme based on user preference or system setting
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.classList.toggle("light-theme", initialTheme === "light");
  }, []);

  const toggleTheme = (newTheme: Theme) => {
    if (newTheme) {
      setTheme(newTheme);
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.toggle("light-theme", newTheme === "light");
    }
  };

  return (
    <ToggleGroup type="single" value={theme} onValueChange={(value) => value && toggleTheme(value as Theme)}>
      <ToggleGroupItem value="light" aria-label="Toggle light mode">
        <Sun className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="dark" aria-label="Toggle dark mode">
        <Moon className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
