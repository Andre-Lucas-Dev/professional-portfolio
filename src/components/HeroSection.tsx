import { Download, ArrowDown, Mail, Phone } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--hero-gradient)" }}
    >
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }} />

      <div className="container relative z-10 flex flex-col lg:flex-row items-center gap-12 py-20">
        <div className="flex-1 text-center lg:text-left">
          <p className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: "hsl(var(--accent))" }}>
            Desenvolvedor Front-End
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: "hsl(var(--primary-foreground))" }}>
            Olá, eu sou{" "}
            <span className="text-gradient">André Lucas</span>
          </h1>
          <p className="text-lg max-w-lg mx-auto lg:mx-0 mb-8" style={{ color: "hsl(220 15% 70%)" }}>
            Transformo ideias em experiências digitais modernas, rápidas e responsivas. Fundador da Flex Web Solutions.
          </p>

          {/* Contact info pills */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
            <a
              href="mailto:andrebabybatera@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all duration-300 hover:scale-105 group"
              style={{
                background: "hsl(220 20% 15%)",
                border: "1px solid hsl(220 15% 25%)",
                color: "hsl(220 15% 75%)",
              }}
            >
              <Mail className="w-4 h-4 transition-colors duration-300" style={{ color: "hsl(var(--primary))" }} />
              andrebabybatera@gmail.com
            </a>
            <a
              href="tel:+5563992174742"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all duration-300 hover:scale-105"
              style={{
                background: "hsl(220 20% 15%)",
                border: "1px solid hsl(220 15% 25%)",
                color: "hsl(220 15% 75%)",
              }}
            >
              <Phone className="w-4 h-4" style={{ color: "hsl(var(--accent))" }} />
              (63) 99217-4742
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="/Andre-Lucas-Curriculo.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))", boxShadow: "0 4px 20px hsl(var(--primary) / 0.3)" }}
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold border transition-all duration-300 hover:scale-105"
              style={{ borderColor: "hsl(220 15% 30%)", color: "hsl(220 15% 80%)" }}
            >
              Entre em contato
            </a>
          </div>
        </div>

        <div className="flex-shrink-0">
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 group">
            <div
              className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700"
              style={{ background: "linear-gradient(135deg, hsl(var(--primary) / 0.4), hsl(var(--accent) / 0.4))" }}
            />
            <div className="absolute inset-0 rounded-full transition-transform duration-500 group-hover:scale-105" style={{
              background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))",
              padding: "3px",
            }}>
              <img
                src={profileImg}
                alt="André Lucas Silva Rocha - Desenvolvedor Front-End"
                className="w-full h-full rounded-full object-cover"
                style={{ background: "hsl(220 25% 12%)" }}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      <a href="#sobre" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" style={{ color: "hsl(220 15% 50%)" }}>
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
};

export default HeroSection;
