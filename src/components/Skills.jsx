const skills = [
  "Docker","Kubernetes","Azure","AWS","Ansible",
  "GitHub Actions","ArgoCD","SonarQube","Vault","Keycloak",
  "React","SpringBoot","Python","Java", "Angular","Jenkins"
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center text-brand-purpleLight">Skills</h2>
      <div className="flex flex-wrap gap-3 justify-center">
        {skills.map((s) => (
          <span
            key={s}
            className="px-4 py-2 bg-brand-purple/20 border border-brand-purple rounded-full"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}