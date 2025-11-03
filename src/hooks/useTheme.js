import { useEffect, useState } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState(() =>
    typeof window !== "undefined" ? localStorage.theme || "dark" : "dark"
  );

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.theme = theme;
  }, [theme]);

  return [theme, setTheme];
}