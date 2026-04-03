import { Code2, Server, Wrench, BarChart3 } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: Code2,
    summary: "Interfaces modernas, responsivas e performáticas.",
    items: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 75 },
      { name: "TypeScript", level: 80 },
      { name: "Vite", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    summary: "APIs robustas e bancos de dados relacionais e não-relacionais.",
    items: [
      { name: "Node.js", level: 75 },
      { name: "NestJS", level: 65 },
      { name: "APIs RESTful", level: 80 },
      { name: "PostgreSQL", level: 70 },
      { name: "MongoDB", level: 65 },
    ],
  },
  {
    category: "Ferramentas",
    icon: Wrench,
    summary: "Fluxo de trabalho profissional com versionamento e containers.",
    items: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 60 },
      { name: "CI/CD", level: 55 },
      { name: "Storybook", level: 65 },
    ],
  },
  {
    category: "Metodologias",
    icon: BarChart3,
    summary: "Desenvolvimento ágil com foco em qualidade e entregas contínuas.",
    items: [
      { name: "Scrum", level: 85 },
      { name: "Kanban", level: 85 },
      { name: "S.O.L.I.D", level: 75 },
      { name: "Testes Automatizados", level: 65 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="habilidades" className="py-20 lg:py-28" style={{ background: "hsl(220 20% 95%)" }}>
      <div className="container">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4 text-foreground">
          Habilidades
        </h2>
        <div className="w-16 h-1 rounded-full mx-auto mb-4" style={{ background: "hsl(var(--primary))" }} />

        <p className="text-center text-muted-foreground text-sm max-w-xl mx-auto mb-12">
          Stack técnica construída ao longo de projetos reais — do planejamento ao deploy.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skills.map(({ category, icon: Icon, summary, items }, index) => (
            <div
              key={category}
              className="group relative rounded-2xl bg-card overflow-hidden transition-all duration-500 hover:-translate-y-2 cursor-default"
              style={{
                boxShadow: "var(--card-shadow)",
                border: "1px solid hsl(220 20% 88%)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "var(--card-shadow-hover)";
                e.currentTarget.style.borderColor = "hsl(var(--primary) / 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "var(--card-shadow)";
                e.currentTarget.style.borderColor = "hsl(220 20% 88%)";
              }}
            >
              {/* Top accent bar */}
              <div
                className="h-1 w-0 group-hover:w-full transition-all duration-500 ease-out"
                style={{ background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))" }}
              />

              <div className="p-6">
                {/* Index decorativo */}
                <span
                  className="absolute top-4 right-4 text-5xl font-black leading-none select-none transition-opacity duration-300 opacity-[0.04] group-hover:opacity-[0.07]"
                  style={{ color: "hsl(var(--primary))", fontFamily: "monospace" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                    style={{ background: "hsl(var(--primary) / 0.1)" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "hsl(var(--primary))" }} />
                  </div>
                  <h3 className="font-display font-bold text-base tracking-wide" style={{ color: "hsl(var(--primary))" }}>
                    {category}
                  </h3>
                </div>

                {/* Summary */}
                <p className="text-xs text-muted-foreground mb-5 leading-relaxed">
                  {summary}
                </p>

                {/* Skills com barra de nível */}
                <ul className="space-y-3">
                  {items.map((item, i) => (
                    <li
                      key={item.name}
                      className="transition-all duration-300 group-hover:translate-x-1"
                      style={{ transitionDelay: `${i * 25}ms` }}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-medium" style={{ color: "hsl(var(--foreground) / 0.75)" }}>
                          {item.name}
                        </span>
                        <span className="text-xs font-semibold" style={{ color: "hsl(var(--primary) / 0.6)" }}>
                          {item.level}%
                        </span>
                      </div>
                      <div
                        className="w-full h-1.5 rounded-full overflow-hidden"
                        style={{ background: "hsl(var(--primary) / 0.1)" }}
                      >
                        <div
                          className="h-full rounded-full transition-all duration-700 ease-out"
                          style={{
                            width: `${item.level}%`,
                            background: "linear-gradient(90deg, hsl(var(--primary) / 0.6), hsl(var(--primary)))",
                            transitionDelay: `${i * 40}ms`,
                          }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;