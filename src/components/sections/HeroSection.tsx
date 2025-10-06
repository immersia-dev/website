import { Button } from "@/components/ui/button";
import immersiaLogo2 from "@/assets/icon_logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden pt-4">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] animate-pulse"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-lg animate-float" style={{ animationDelay: '3s' }}></div>
        
        <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-purple-400/60 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-cyan-400/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 left-1/5 w-4 h-4 bg-pink-400/60 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/4 right-1/5 w-2 h-2 bg-blue-400/60 rounded-full animate-pulse" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute top-1/2 left-1/6 w-3 h-3 bg-yellow-400/60 rounded-full animate-pulse" style={{ animationDelay: '3.5s' }}></div>
        <div className="absolute top-2/3 right-1/6 w-2 h-2 bg-green-400/60 rounded-full animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        <div className="absolute top-1/3 left-1/4 w-20 h-px bg-gradient-to-r from-purple-400/40 to-transparent animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-px bg-gradient-to-l from-cyan-400/40 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/6 w-24 h-px bg-gradient-to-r from-pink-400/40 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-18 h-px bg-gradient-to-l from-blue-400/40 to-transparent animate-pulse" style={{ animationDelay: '3s' }}></div>
        
        <div className="absolute top-1/4 left-1/5 w-px h-16 bg-gradient-to-b from-yellow-400/40 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 right-1/5 w-px h-20 bg-gradient-to-b from-green-400/40 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-px h-12 bg-gradient-to-b from-purple-400/40 to-transparent animate-pulse" style={{ animationDelay: '2.5s' }}></div>
        
        <div className="absolute top-1/5 right-1/6 w-6 h-6 border border-purple-400/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-2/3 left-1/8 w-4 h-4 border border-cyan-400/30 rotate-12 animate-spin-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/5 right-1/8 w-8 h-8 border border-pink-400/30 rotate-45 animate-spin-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/6 left-1/2 w-5 h-5 border border-yellow-400/30 rotate-12 animate-spin-slow" style={{ animationDelay: '3s' }}></div>
        
        <div className="absolute top-1/2 left-1/8 w-6 h-6 bg-gradient-to-br from-green-400/20 to-cyan-400/20 clip-path-hexagon animate-float"></div>
        <div className="absolute bottom-1/4 right-1/6 w-4 h-4 bg-gradient-to-br from-purple-400/20 to-pink-400/20 clip-path-hexagon animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent"></div>
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-slate-900/80 via-slate-900/40 to-transparent"></div>
        
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
          <div className="space-y-8">
              <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                  O futuro das experiências
                  <span className="text-gradient-animated"> imersivas</span>
                  <br />começa aqui.
                </h1>
              </div>
            
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-2xl">
                Criamos realidades digitais que transcendem os limites da imaginação. 
                VR e AR para empresas que querem revolucionar.
              </p>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <p className="text-slate-400 text-sm mb-4 font-semibold tracking-wider">TECNOLOGIAS SUPORTADAS</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: 'REALIDADE VIRTUAL', color: 'from-cyan-500/20 to-blue-500/20', border: 'border-cyan-400/30', text: 'text-cyan-300' },
                  { name: 'REALIDADE AUMENTADA', color: 'from-pink-500/20 to-purple-500/20', border: 'border-pink-400/30', text: 'text-pink-300' },
                  { name: 'INTELIGÊNCIA ARTIFICIAL', color: 'from-yellow-500/20 to-orange-500/20', border: 'border-yellow-400/30', text: 'text-yellow-300' }
                ].map((tech, index) => (
                  <div key={index} className={`flex items-center gap-3 px-5 py-3 bg-gradient-to-br ${tech.color} backdrop-blur-sm rounded-xl border ${tech.border} hover:scale-105 transition-all duration-300 cursor-pointer group shadow-lg`}>
                    <span className={`text-white text-xs font-semibold group-hover:${tech.text} transition-colors duration-300`}>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

         
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center justify-items-center">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
        <p className="text-white/60 text-sm mt-2 text-center">Descubra mais</p>
      </div>
    </section>
  );
};

export default HeroSection;