import experience from "../data/experience";
import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center text-brand-purpleLight mb-10"
      >
        Professional Experience
      </motion.h2>

      <div className="space-y-6">
        {experience.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-6 flex flex-col md:flex-row md:items-start gap-4"
          >
            {/* Date + icône */}
            <div className="flex items-center gap-2 text-purple-300 text-sm shrink-0">
              <FaCalendarAlt className="text-brand-purple" />
              <span>{exp.date}</span>
            </div>

            {/* Contenu */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-brand-purple">{exp.title}</h3>
              <p className="text-purple-200 mb-2">{exp.company}</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {exp.tasks.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}