import { ExternalLink } from "lucide-react";
import flexwebImg from "@/assets/projects/flexweb.png";
import pedrasnobresImg from "@/assets/projects/pedrasnobres.png";
import smcontabilImg from "@/assets/projects/smcontabil.png";
import pedreirasImg from "@/assets/projects/pedreiras.png";
import autosocorroImg from "@/assets/projects/autosocorro.png";

const projects = [
  {
    title: "Flex Web Solutions",
    desc: "Startup de desenvolvimento web – minha empresa de criação de sites e sistemas profissionais.",
    img: flexwebImg,
    url: "https://www.flexwebsolutions.com.br/",
  },
  {
    title: "Pedras Nobres",
    desc: "Site institucional para empresa de pedras naturais de Pirenópolis, com catálogo de produtos.",
    img: pedrasnobresImg,
    url: "https://pedrasnobres.com.br/",
  },
  {
    title: "SM Contábil",
    desc: "Plataforma para escritório de contabilidade com serviços, blog e orçamento online.",
    img: smcontabilImg,
    url: "https://smcontabil.netlify.app/",
  },
  {
    title: "Pedreiras Pirenópolis",
    desc: "Site de venda de pedras naturais com catálogo e integração com WhatsApp.",
    img: pedreirasImg,
    url: "https://pedreiras-pirinopolis-demo.vercel.app/",
  },
  {
    title: "Auto Socorro Fernandes",
    desc: "Site para serviço de guincho 24h em Anápolis com atendimento via WhatsApp.",
    img: autosocorroImg,
    url: "https://autosocorrofernandes.com.br/",
  },
];

const doubled = [...projects, ...projects];

const ProjectsCarousel = () => {
  return (
    <section id="projetos" className="py-20 lg:py-28 bg-background overflow-hidden">
      <div className="container mb-12">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4 text-foreground">
          Projetos
        </h2>
        <div className="w-16 h-1 rounded-full mx-auto mb-4" style={{ background: "hsl(var(--primary))" }} />
        <p className="text-center text-muted-foreground max-w-lg mx-auto">
          Alguns dos projetos desenvolvidos pela Flex Web Solutions
        </p>
      </div>

      <div className="relative">
        <div className="animate-marquee flex gap-6 w-max">
          {doubled.map((project, i) => (
            <a
              key={`${project.title}-${i}`}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-shrink-0 w-[340px] sm:w-[400px] rounded-xl overflow-hidden bg-card transition-all duration-500 hover:-translate-y-3"
              style={{ boxShadow: "var(--card-shadow)" }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--card-shadow-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--card-shadow)")}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.img}
                  alt={`Prévia do projeto ${project.title}`}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 flex items-center justify-center transition-all duration-500"
                  style={{ background: "hsl(var(--primary) / 0)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "hsl(var(--primary) / 0.2)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "hsl(var(--primary) / 0)"; }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500" style={{ background: "hsl(var(--primary))" }}>
                    <ExternalLink className="w-5 h-5" style={{ color: "white" }} />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold text-foreground mb-1 transition-colors duration-300 group-hover:text-primary">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
