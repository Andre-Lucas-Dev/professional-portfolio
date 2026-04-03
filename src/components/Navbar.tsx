import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#inicio");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = links.map(l => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(`#${id}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "hsl(var(--background) / 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
        borderBottom: scrolled ? "1px solid hsl(var(--border))" : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 30px hsl(220 25% 10% / 0.06)" : "none",
      }}
    >
      <div className="container flex items-center justify-between h-16">
        <a href="#inicio" className="font-display font-bold text-xl group">
          <span className="transition-colors duration-300" style={{ color: scrolled ? "hsl(var(--foreground))" : "white" }}>André</span>
          <span className="transition-colors duration-300" style={{ color: "hsl(var(--primary))" }}>Lucas</span>
          <span
            className="block h-0.5 w-0 group-hover:w-full transition-all duration-300 rounded-full"
            style={{ background: "hsl(var(--primary))" }}
          />
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map(({ label, href }) => {
            const isActive = activeSection === href;
            return (
              <a
                key={href}
                href={href}
                className="relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300"
                style={{
                  color: isActive
                    ? "hsl(var(--primary))"
                    : scrolled
                    ? "hsl(var(--muted-foreground))"
                    : "hsl(220 15% 75%)",
                  background: isActive ? "hsl(var(--primary) / 0.08)" : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = scrolled ? "hsl(var(--foreground))" : "white";
                    e.currentTarget.style.background = "hsl(var(--primary) / 0.05)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = scrolled ? "hsl(var(--muted-foreground))" : "hsl(220, 15%, 75%)";
                    e.currentTarget.style.background = "transparent";
                  }
                }}
              >
                {label}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full"
                    style={{ background: "hsl(var(--primary))" }}
                  />
                )}
              </a>
            );
          })}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg transition-all duration-300 hover:scale-110"
          style={{ color: scrolled ? "hsl(var(--foreground))" : "white" }}
          aria-label="Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? "320px" : "0",
          background: "hsl(var(--background) / 0.98)",
          backdropFilter: "blur(16px)",
          borderTop: open ? "1px solid hsl(var(--border))" : "none",
        }}
      >
        {links.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            onClick={() => setOpen(false)}
            className="block px-6 py-3.5 text-sm font-medium transition-all duration-300"
            style={{
              color: activeSection === href ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))",
              borderLeft: activeSection === href ? "3px solid hsl(var(--primary))" : "3px solid transparent",
              background: activeSection === href ? "hsl(var(--primary) / 0.05)" : "transparent",
            }}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
