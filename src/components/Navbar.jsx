import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import useTheme from "../hooks/useTheme";
import { useLanguage } from "../hooks/useLanguage";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const linkIds = ["home", "about", "skills", "experience", "projects", "contact"];

export default function Navbar() {
  const [theme, setTheme] = useTheme();
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = linkIds
      .map((l) => document.getElementById(l))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const LangToggle = ({ className = "" }) => (
    <div className={`flex border border-brand-line rounded-full overflow-hidden text-xs font-mono ${className}`}>
      {["fr", "en"].map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-2 py-1 transition ${
            lang === l ? "bg-brand-purple text-white font-semibold" : "text-muted hover:text-brand-purple"
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass !rounded-none border-x-0 border-t-0">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#home"
          className="font-bold text-lg tracking-tight bg-gradient-to-r from-brand-purple to-brand-purpleLight bg-clip-text text-transparent"
        >
          Zaineb ElHeni
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {linkIds.map((l) => (
            <a
              key={l}
              href={`#${l}`}
              className={`capitalize text-sm font-medium transition ${
                active === l ? "text-brand-purpleLight" : "hover:text-brand-purple"
              }`}
            >
              {t.nav[l]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LangToggle className="hidden sm:flex" />
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="text-lg p-2 rounded-full hover:bg-brand-purple/10 transition"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden glass !rounded-none border-x-0 border-b-0 px-6 pb-4 flex flex-col gap-3"
          >
            {linkIds.map((l) => (
              <a
                key={l}
                href={`#${l}`}
                onClick={() => setOpen(false)}
                className={`capitalize text-sm font-medium transition ${
                  active === l ? "text-brand-purpleLight" : "hover:text-brand-purple"
                }`}
              >
                {t.nav[l]}
              </a>
            ))}
            <LangToggle className="sm:hidden w-fit" />
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
