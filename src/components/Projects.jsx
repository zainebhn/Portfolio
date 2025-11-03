import projects from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center text-brand-purpleLight">Projects</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((p, i) => (
          <div key={i} className="glass p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-sm mb-3">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.stack.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 bg-purple-900/40 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <a href={p.github} target="_blank" rel="noreferrer" className="btn-primary text-xs">
                Code
              </a>
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer" className="btn-primary text-xs">
                  Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}