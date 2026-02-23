import immersiaLogo from "@/assets/immersia-logo.png";

const FooterSection = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={immersiaLogo}
                  alt="IMMERSIA"
                  className="h-12 w-auto"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">IMMERSIA</h3>
                  <p className="text-slate-400 text-sm">
                    Experiências Imersivas
                  </p>
                </div>
              </div>

              <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
                Desenvolvimento de soluções em realidade virtual e aumentada
                para capacitação profissional e segurança.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Links Rápidos</h4>
              <ul className="space-y-3">
                {[
                  "Sobre Nós",
                  "Projetos",
                  "Serviços",
                  "Tecnologias",
                  "Parcerias",
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
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
                      href="mailto:immersia.br@gmail.com"
                      className="text-purple-400 hover:text-white transition-colors text-sm"
                    >
                      immersia.br@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div>
                    <p className="text-slate-400 text-sm">Status</p>
                    <p className="text-purple-400 text-sm">
                      <span className="animate-pulse">●</span> Disponível para
                      novos projetos
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-slate-400 text-sm text-center md:text-left">
                <p>© 2025 IMMERSIA. Todos os direitos reservados.</p>
                <p className="mt-1">
                  Tecnologia para Capacitação Profissional.
                </p>
              </div>

              <div className="flex gap-6 text-sm">
                <a
                  href="/privacy"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Política de Privacidade
                </a>
                <a
                  href="/terms"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Termos de Uso
                </a>
                <a
                  href="/privacy"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
