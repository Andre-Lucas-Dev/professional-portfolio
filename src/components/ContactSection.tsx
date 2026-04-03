import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [method, setMethod] = useState<"whatsapp" | "email">("whatsapp");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedMsg = message.trim();
    if (!trimmedName || !trimmedMsg) return;

    if (method === "whatsapp") {
      const text = encodeURIComponent(`Olá, meu nome é ${trimmedName}.\n\n${trimmedMsg}`);
      window.open(`https://wa.me/5563992174742?text=${text}`, "_blank");
    } else {
      const subject = encodeURIComponent(`Contato de ${trimmedName}`);
      const body = encodeURIComponent(trimmedMsg);
      window.open(`mailto:andrebabybatera@gmail.com?subject=${subject}&body=${body}`, "_blank");
    }
  };

  return (
    <section id="contato" className="py-20 lg:py-28" style={{ background: "hsl(220 20% 95%)" }}>
      <div className="container">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4 text-foreground">
          Contato
        </h2>
        <div className="w-16 h-1 rounded-full mx-auto mb-12" style={{ background: "hsl(var(--primary))" }} />

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          {/* Left - Info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">Vamos Conversar</h3>
              <p className="text-muted-foreground leading-relaxed">
                Estou pronto para transformar suas ideias em realidade digital. Entre em contato e vamos discutir seu projeto.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Mail, label: "E-mail", value: "andrebabybatera@gmail.com", href: "mailto:andrebabybatera@gmail.com" },
                { icon: Phone, label: "Telefone", value: "(63) 9 9217-4742", href: "tel:+5563992174742" },
                { icon: MapPin, label: "Localização", value: "Goiás, Brasil", href: undefined },
              ].map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-card transition-all duration-500 hover:-translate-y-1 cursor-default"
                  style={{ boxShadow: "var(--card-shadow)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "var(--card-shadow-hover)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "var(--card-shadow)"; }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                    style={{ background: "hsl(var(--primary) / 0.1)" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "hsl(var(--primary))" }} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{label}</p>
                    {href ? (
                      <a href={href} className="font-medium text-foreground hover:text-primary text-sm transition-colors duration-300 break-all">{value}</a>
                    ) : (
                      <p className="font-medium text-foreground text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            
          </div>

          {/* Right - Form */}
          <div
            className="bg-card rounded-2xl p-8 transition-all duration-500"
            style={{ boxShadow: "0 8px 40px -8px hsl(220 25% 10% / 0.1)" }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Nome</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome completo"
                  required
                  maxLength={100}
                  className="w-full px-4 py-3 rounded-lg border text-sm bg-background text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:outline-none focus:ring-2"
                  style={{ borderColor: "hsl(var(--border))" }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "hsl(var(--primary))"; e.currentTarget.style.boxShadow = "0 0 0 3px hsl(var(--primary) / 0.1)"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "hsl(var(--border))"; e.currentTarget.style.boxShadow = "none"; }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Mensagem</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Digite sua mensagem aqui..."
                  required
                  maxLength={1000}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border text-sm bg-background text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:outline-none resize-none"
                  style={{ borderColor: "hsl(var(--border))" }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "hsl(var(--primary))"; e.currentTarget.style.boxShadow = "0 0 0 3px hsl(var(--primary) / 0.1)"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "hsl(var(--border))"; e.currentTarget.style.boxShadow = "none"; }}
                />
              </div>

              {/* Method selector */}
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setMethod("whatsapp")}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 border"
                  style={{
                    background: method === "whatsapp" ? "hsl(142 70% 45%)" : "transparent",
                    color: method === "whatsapp" ? "white" : "hsl(var(--muted-foreground))",
                    borderColor: method === "whatsapp" ? "hsl(142 70% 45%)" : "hsl(var(--border))",
                  }}
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </button>
                <button
                  type="button"
                  onClick={() => setMethod("email")}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 border"
                  style={{
                    background: method === "email" ? "hsl(var(--primary))" : "transparent",
                    color: method === "email" ? "white" : "hsl(var(--muted-foreground))",
                    borderColor: method === "email" ? "hsl(var(--primary))" : "hsl(var(--border))",
                  }}
                >
                  <Mail className="w-4 h-4" />
                  E-mail
                </button>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
                style={{
                  background: method === "whatsapp"
                    ? "hsl(142 70% 45%)"
                    : "hsl(var(--primary))",
                  color: "white",
                  boxShadow: method === "whatsapp"
                    ? "0 4px 20px hsl(142 70% 45% / 0.3)"
                    : "0 4px 20px hsl(var(--primary) / 0.3)",
                }}
              >
                <Send className="w-4 h-4" />
                Enviar via {method === "whatsapp" ? "WhatsApp" : "E-mail"}
              </button>

              <p className="text-xs text-center text-muted-foreground">
                {method === "whatsapp"
                  ? "Ao enviar, você será redirecionado para o WhatsApp"
                  : "Ao enviar, seu app de e-mail será aberto"}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
