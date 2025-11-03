import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="glass p-8"
      >
        <h2 className="text-3xl font-bold mb-4 text-brand-purpleLight">About me</h2>
        <p className="leading-relaxed">
          Final-year Cloud Engineering student at ESPRIT, Tunisia. I design multi-cloud
          infrastructure, automate CI/CD pipelines, and orchestrate containers with Kubernetes.
          Certified Azure AI & AWS Cloud Ops.
        </p>
      </motion.div>
    </section>
  );
}