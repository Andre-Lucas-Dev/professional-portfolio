import { Github, Facebook, Instagram } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/Andre-Lucas-Dev", label: "GitHub" },
  { icon: Facebook, href: "https://www.facebook.com/share/17EuTGNwze/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/andre_rls_ofc", label: "Instagram" },
];

const Footer = () => (
  <footer style={{ background: "hsl(220 25% 8%)" }}>
    <div className="container py-12">
      <div className="grid sm:grid-cols-3 gap-8 items-start">
        {/* Brand */}
        <div>
          <a href="#inicio" className="font-display font-bold text-xl inline-block mb-3" style={{ color: "white" }}>
            André<span style={{ color: "hsl(var(--primary))" }}>Lucas</span>
          </a>
          <p className="text-sm leading-relaxed" style={{ color: "hsl(220 15% 55%)" }}>
            Desenvolvedor Front-End apaixonado por criar experiências digitais modernas e de alta performance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4" style={{ color: "hsl(220 15% 70%)" }}>
            Links Rápidos
          </h4>
          <ul className="space-y-2">
            {["Início", "Sobre", "Habilidades", "Projetos", "Contato"].map((label) => (
              <li key={label}>
                <a
                  href={`#${label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                  className="text-sm transition-colors duration-300 hover:translate-x-1 inline-block"
                  style={{ color: "hsl(220 15% 50%)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "hsl(var(--primary))"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "hsl(220, 15%, 50%)"; }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4" style={{ color: "hsl(220 15% 70%)" }}>
            Redes Sociais
          </h4>
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                style={{ background: "hsl(220 20% 15%)", color: "hsl(220 15% 55%)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "hsl(var(--primary))";
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.boxShadow = "0 4px 15px hsl(var(--primary) / 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "hsl(220, 20%, 15%)";
                  e.currentTarget.style.color = "hsl(220, 15%, 55%)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6" style={{ borderTop: "1px solid hsl(220 15% 15%)" }}>
        <p className="text-center text-xs" style={{ color: "hsl(220 15% 40%)" }}>
          © {new Date().getFullYear()} André Lucas Silva Rocha · Desenvolvedor Front-End
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
