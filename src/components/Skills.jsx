import skills from "../data/skills";
import { useLanguage } from "../hooks/useLanguage";

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center text-brand-purpleLight">{t.skills.heading}</h2>

      {skills.map((category) => (
        <div key={category.key} className="mb-10">
          <h3 className="text-xl font-semibold mb-4 text-brand-purple">
            {t.skills.categories[category.key]}
          </h3>
          <div className="flex flex-wrap gap-4">
            {category.items.map((s) => (
              <div
                key={s.name}
                className="card flex items-center gap-2 px-3 py-2 hover:-translate-y-0.5 transition"
              >
                <span className="text-xl">{s.icon}</span>
                <span className="text-sm">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
