import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { useLanguage } from "../hooks/useLanguage";

const badges = ["Azure", "Terraform", "Kubernetes", "CI/CD", "DevSecOps"];

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-center md:text-left">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold">
            {t.hero.greeting} <span className="text-brand-purpleLight">Zaineb ElHeni</span>
          </h1>
          <p className="mt-3 text-xl font-medium text-brand-purple">
            {t.hero.role}
          </p>
          <p className="mt-4 text-muted max-w-lg">
            {t.hero.bio}
          </p>

          <div className="mt-5 flex flex-wrap gap-2 justify-center md:justify-start">
            {badges.map((b) => (
              <span key={b} className="chip">{b}</span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#contact" className="btn-primary">{t.hero.contact}</a>
            <a
              href="/cv/Zaineb-ElHeni-EN.pdf"
              download
              className="btn-outline flex items-center gap-2"
            >
              <FaDownload /> {t.hero.cvEn}
            </a>
            <a
              href="/cv/Zaineb-ElHeni-FR.pdf"
              download
              className="btn-outline flex items-center gap-2"
            >
              <FaDownload /> {t.hero.cvFr}
            </a>
          </div>
        </motion.div>

        {/* Right : image cercle */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-brand-purple/30 blur-3xl scale-110" />
            <img
              src="/images/zaineb pro.png"
              alt="Zaineb ElHeni"
              className="relative w-64 h-64 rounded-full object-cover border-4 border-brand-purpleLight shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
