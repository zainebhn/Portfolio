import { FiSun, FiMoon } from "react-icons/fi";
import useTheme from "../hooks/useTheme";

const links = ["home", "about",  "skills", "projects","experience", "contact"];

export default function Navbar() {
  const [theme, setTheme] = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-5xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-center gap-6">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l}`}
              className="capitalize text-sm font-medium hover:text-brand-purple transition"
            >
              {l}
            </a>
          ))}
          
        </nav>
      </div>
    </header>
  );
}