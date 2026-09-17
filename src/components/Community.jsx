import { motion } from "framer-motion";
import { FaUsers } from "react-icons/fa";
import { useLanguage } from "../hooks/useLanguage";

export default function Community() {
  const { t } = useLanguage();
  const c = t.community;

  return (
    <section id="community" className="py-20 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="card p-8 space-y-6"
      >
        <h2 className="text-3xl font-bold text-brand-purpleLight">{c.heading}</h2>

        <div className="flex items-start gap-3">
          <FaUsers className="text-brand-purple mt-1 shrink-0" size={20} />
          <div>
            <h3 className="font-semibold mb-1">{c.ieeeTitle}</h3>
            <p className="text-muted text-sm">{c.ieeeDesc}</p>
          </div>
        </div>

        <div>
          <p className="font-semibold mb-2">{c.interestsLabel}</p>
          <div className="flex flex-wrap gap-3">
            {c.interests.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
