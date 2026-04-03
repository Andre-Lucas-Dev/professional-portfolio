import { Briefcase, GraduationCap, Rocket } from "lucide-react";

const cards = [
  { icon: Briefcase, title: "Técnico de Implantação", desc: "Softnews · Desde 04/2025" },
  { icon: GraduationCap, title: "Eng. de Software", desc: "Em formação" },
  { icon: Rocket, title: "Flex Web Solutions", desc: "Fundador & Dev" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-background">
      <div className="container">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4 text-foreground">
          Sobre Mim
        </h2>
        <div className="w-16 h-1 rounded-full mx-auto mb-12" style={{ background: "hsl(var(--primary))" }} />

        <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground leading-relaxed text-center lg:text-left">
          <p>
            Sou estudante de <strong className="text-foreground">Engenharia de Software</strong> com forte interesse em desenvolvimento web.
            Comecei como <strong className="text-foreground">Analista de QA na Soft News</strong>, e após oito meses fui efetivado como
            <strong className="text-foreground"> Técnico de Implantação</strong>, posição que ocupo atualmente.
          </p>
          <p>
            Paralelamente, sou desenvolvedor front-end e fundador da <strong className="text-foreground">Flex Web Solutions</strong>,
            empresa na qual desenvolvo sites e sistemas para diversos clientes.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mt-14 max-w-3xl mx-auto">
          {cards.map(({ icon: Icon, title, desc }, index) => (
            <div
              key={title}
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

              <div className="p-6 flex flex-col items-center text-center">
                {/* Index decorativo */}
                <span
                  className="absolute top-4 right-4 text-5xl font-black leading-none select-none opacity-[0.04] group-hover:opacity-[0.07] transition-opacity duration-300"
                  style={{ color: "hsl(var(--primary))", fontFamily: "monospace" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                  style={{ background: "hsl(var(--primary) / 0.1)" }}
                >
                  <Icon className="w-6 h-6" style={{ color: "hsl(var(--primary))" }} />
                </div>

                <h3 className="font-display font-bold text-base text-foreground leading-snug">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;