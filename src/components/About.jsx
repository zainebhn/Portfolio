import { motion } from "framer-motion";

export default function About() {
  const certs = [
    { name: "Azure AI Fundamentals", url: "https://www.credly.com/badges/554dcebf-ff31-47a7-a783-2d7d4f96e217/linked_in?t=sygytm" },
    { name: "Azure Fundamentals", url: "https://www.credly.com/badges/fa5e46a5-2c86-4274-a20d-f1237456c82a/linked_in?t=syobr6" },
    { name: "AWS Cloud Operations", url: "https://www.credly.com/badges/6ad88184-7a5c-40ef-a441-0f0383e8111e/linked_in?t=t4hcq1" },
  ];

  return (
    <section id="about" className="py-20 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass p-8 space-y-4"
      >
        <h2 className="text-3xl font-bold text-brand-purpleLight">About Me</h2>

        <p>
          Two years of preparatory school at <span className="text-brand-purple">IPEIT</span>,
          then three years of engineering at <span className="text-brand-purple">ESPRIT</span>,
          specializing in <strong>DevOps & Cloud Computing</strong>.
        </p>

        <p>
          I build cloud-native apps, automate pipelines, and ship infrastructure that scales.
          I also enjoy writing clean code — from React front-ends to Spring Boot APIs.
        </p>
        <p>
          Looking for a <strong>6-month internship starting January 2026</strong> to build
          secure, observable and scalable systems.
        </p>

        <div>
          <p className="font-semibold mb-2">Certifications</p>
          <div className="flex flex-wrap gap-3">
            {certs.map((c) => (
              <a
                className="px-3 py-1 text-sm rounded-full bg-purple-800/40 border border-purple-400/30
           hover:scale-105 hover:shadow-[0_0_10px_theme(colors.brand.purple)] transition"              >
                {c.name}
              </a>
            ))}
          </div>
        </div>

        
      </motion.div>
    </section>
  );
}