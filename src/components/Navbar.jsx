import { FiSun, FiMoon } from "react-icons/fi";
import useTheme from "../hooks/useTheme";

const links = ["home", "about", "skills", "projects", "contact"];

export default function Navbar() {
  const [theme, setTheme] = useTheme();

  return (
    <header className="fixed top-0 w-full z-50 glass">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-mono text-xl text-brand-purpleLight">{"<Zaineb />"}</span>
        <nav className="flex items-center gap-6">
          {links.map((l) => (
            <a key={l} href={`#${l}`} className="capitalize hover:text-brand-purple">
              {l}
            </a>
          ))}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-xl"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
        </nav>
      </div>
    </header>
  );
}