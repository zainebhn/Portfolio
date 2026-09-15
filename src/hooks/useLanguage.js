import { createContext, useContext } from "react";

export const LanguageContext = createContext(null);

export function detectInitialLang() {
  if (typeof window === "undefined") return "en";
  const saved = localStorage.getItem("lang");
  if (saved === "en" || saved === "fr") return saved;
  const nav = navigator.language || navigator.userLanguage || "en";
  return nav.toLowerCase().startsWith("fr") ? "fr" : "en";
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
