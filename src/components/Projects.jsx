import projects from "../data/projects";
import { motion } from "framer-motion";
import { FaLock } from "react-icons/fa";
import { useLanguage } from "../hooks/useLanguage";

export default function Projects() {
  const { lang, t } = useLanguage();

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center text-brand-purpleLight">{t.projects.heading}</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((p, i) => {
          const content = p[lang];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card p-6 flex flex-col justify-between w-full sm:w-[320px] hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-purple/20 transition"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-xl font-semibold">{content.title}</h3>
                  {p.private && (
                    <span
                      title={t.projects.privateTitle}
                      className="chip flex items-center gap-1 shrink-0 text-[10px]"
                    >
                      <FaLock /> {t.projects.privateBadge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted mb-3">{content.desc}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.stack.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 mt-4">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary text-xs"
                  title={p.private ? t.projects.privateTitle : t.projects.codeTitle}
                >
                  {p.private ? t.projects.repoPrivateLabel : t.projects.codeLabel}
                </a>
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" className="btn-primary text-xs">
                    {t.projects.liveLabel}
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
