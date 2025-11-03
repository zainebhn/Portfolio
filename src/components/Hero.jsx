import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold">
            Hi, I'm <span className="text-brand-purpleLight">Zaineb ElHeni</span>
          </h1>
          <p className="mt-3 text-xl text-purple-200">Cloud Engineering Student</p>
          <p className="mt-4 text-purple-300 max-w-lg">
            Final-year student specializing in Cloud & DevOps. I build scalable
            infrastructure, automate CI/CD pipelines, and orchestrate containers
            with Kubernetes.
          </p>

          <div className="mt-6 flex gap-4">
            <a href="#projects" className="btn-primary">Projects</a>
            <a
              href="/cv/Zaineb-ElHeni.pdf"
              download
              className="btn-primary flex items-center gap-2"
            >
              <FaDownload /> Download CV
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
          <img
            src="\images\zaineb pro.png"
            alt="Zaineb ElHeni"
            className="w-64 h-64 rounded-full object-cover border-4 border-brand-purpleLight shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}