import { motion } from "framer-motion";
import { useLanguage } from "../hooks/useLanguage";

export default function About() {
  const { t } = useLanguage();

  const certs = [
    { name: "Azure Fundamentals (AZ-900)", url: "https://www.credly.com/badges/fa5e46a5-2c86-4274-a20d-f1237456c82a/linked_in?t=syobr6" },
    { name: "Azure AI Fundamentals (AI-900)", url: "https://www.credly.com/badges/554dcebf-ff31-47a7-a783-2d7d4f96e217/linked_in?t=sygytm" },
    { name: "AWS Cloud Operations", url: "https://www.credly.com/badges/6ad88184-7a5c-40ef-a441-0f0383e8111e/linked_in?t=t4hcq1" },
    { name: "Hedera Hashgraph Blockchain Developer", url: null },
  ];

  return (
    <section id="about" className="py-20 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="card p-8 space-y-4"
      >
        <h2 className="text-3xl font-bold text-brand-purpleLight">{t.about.heading}</h2>

        <p>{t.about.p1}</p>
        <p>{t.about.p2}</p>
        <p>{t.about.p3}</p>

        <div>
          <p className="font-semibold mb-2">{t.about.certsLabel}</p>
          <div className="flex flex-wrap gap-3">
            {certs.map((c) =>
              c.url ? (
                <a
                  key={c.name}
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                  className="chip hover:-translate-y-0.5 hover:shadow-md hover:shadow-brand-purple/25 transition"
                >
                  {c.name}
                </a>
              ) : (
                <span key={c.name} className="chip">
                  {c.name}
                </span>
              )
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
