import immersiaLogo from "@/assets/immersia-wordmark.png";

const quickLinks = [
  { label: "Sobre Nós", href: "#about" },
  { label: "Projetos", href: "#projects" },
  { label: "Tecnologias", href: "#tech" },
  { label: "Equipe", href: "#team" },
  { label: "Contato", href: "#contact" },
];

const FooterSection = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <img
                src={immersiaLogo}
                alt="IMMERSIA"
                className="mb-5 h-8 w-auto sm:h-10"
              />

              <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
                Desenvolvimento de soluções em realidade virtual e aumentada
                para capacitação profissional e segurança.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Links Rápidos</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Contato</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div>
                    <p className="text-slate-400 text-sm">Email</p>
                    <a
                      href="mailto:contact@immersia-xr.com"
                      className="text-purple-400 hover:text-white transition-colors text-sm"
                    >
                      contact@immersia-xr.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8">
            <div className="text-center text-sm text-slate-400">
              <p>© 2025 IMMERSIA. Todos os direitos reservados.</p>
              <p className="mt-1">Tecnologia para Capacitação Profissional.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
