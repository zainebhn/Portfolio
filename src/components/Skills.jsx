import skills from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center text-brand-purpleLight">Skills</h2>

      {Object.entries(skills).map(([category, list]) => (
        <div key={category} className="mb-10">
          <h3 className="text-xl font-semibold mb-4 text-purple-300">{category}</h3>
          <div className="flex flex-wrap gap-4">
            {list.map((s) => (
              <div
                key={s.name}
                className="flex items-center gap-2 px-3 py-2 bg-purple-900/30 border border-purple-400/20 rounded-lg"
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