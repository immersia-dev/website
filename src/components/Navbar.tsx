import { useState } from "react";
import { Button } from "@/components/ui/button";
import immersiaLogo from "@/assets/immersia-wordmark.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Sobre", href: "#about" },
    { name: "Projetos", href: "#projects" },
    { name: "Tecnologias", href: "#tech" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/20 backdrop-blur-xl border-b border-white/20">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10"></div>
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-2xl animate-pulse"></div>
      <div
        className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container mx-auto relative z-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#top" className="flex items-center gap-3" aria-label="IMMERSIA - inicio">
            <img
              src={immersiaLogo}
              alt="IMMERSIA"
              className="h-7 w-auto sm:h-8 md:h-9"
            />
          </a>

          <div className="hidden md:flex items-center gap-3">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-slate-300 hover:text-white transition-colors duration-300 text-sm font-medium px-2.5 py-2"
              >
                {item.name}
              </a>
            ))}
            <a
              href="/platform/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir a plataforma em uma nova aba"
            >
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg shadow-purple-500/20 px-4 py-2 h-10 text-sm">
                Acessar Plataforma
              </Button>
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden -mx-5 bg-slate-900/95 backdrop-blur-md border-t border-white/10 sm:-mx-8">
            <div className="px-5 py-4 space-y-3 sm:px-8">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block text-slate-300 hover:text-white transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                <a
                  href="/platform/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                    Acessar Plataforma
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
