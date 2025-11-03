import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold">
          Hi, I'm <span className="text-brand-purpleLight">Zaineb ElHeni</span>
        </h1>
        <p className="mt-4 text-xl">Cloud Engineering Student · DevOps · Kubernetes</p>
        <div className="mt-8 flex gap-4 justify-center">
          <a href="#projects" className="btn-primary animation-glow">Projects</a>
          <a href="#contact" className="btn-primary">Contact</a>
        </div>
      </motion.div>
    </section>
  );
}