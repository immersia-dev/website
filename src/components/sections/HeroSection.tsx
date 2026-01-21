import { Button } from "@/components/ui/button";
import { ArrowRight, Box, Layers, BrainCircuit, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[125vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-950/80 to-slate-900 overflow-hidden pt-20 lg:pt-0">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[20%] right-[20%] w-[40%] h-[40%] bg-violet-500/10 rounded-full blur-[100px] animate-float" />

        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <div className="max-w-2xl space-y-8 text-center lg:text-left">
            <div className="space-y-4 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm self-start mx-auto lg:mx-0">
                <span className="text-xs font-medium text-slate-300 tracking-wide uppercase">Realidade Estendida</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">

              <span className="text-gradient-animated"> Salvando vidas</span>
              <br />com experiências imersivas.
            </h1>


            <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-lg mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Treinamentos de alto impacto para operações críticas. Capacite sua equipe com a eficiência da tecnologia e a segurança da simulação.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <a href="#projects">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white border-0 shadow-lg shadow-purple-500/25 transition-all duration-300 hover:scale-105 group h-12 px-8 text-sm font-semibold">
                  Nossas Soluções
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </div>

          <div className="relative animate-fade-in-up hidden lg:block" style={{ animationDelay: '0.4s' }}>
            <div className="relative z-10 grid gap-4 perspective-1000">
              <div className="absolute -inset-4 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 rounded-3xl blur-xl -z-10"></div>

              {[
                {
                  icon: Box,
                  title: 'Cenários de Risco',
                  desc: 'Simulação segura de ambientes perigosos',
                  color: 'text-cyan-400',
                  bg: 'bg-cyan-500/10',
                  border: 'border-cyan-500/20'
                },
                {
                  icon: Layers,
                  title: 'Procedimentos Padrão',
                  desc: 'Guias visuais sobrepostos à operação',
                  color: 'text-purple-400',
                  bg: 'bg-purple-500/10',
                  border: 'border-purple-500/20'
                },
                {
                  icon: BrainCircuit,
                  title: 'Retenção Técnica',
                  desc: 'Aprendizado acelerado por prática direta',
                  color: 'text-pink-400',
                  bg: 'bg-pink-500/10',
                  border: 'border-pink-500/20'
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`group relative flex items-center gap-4 p-4 rounded-xl border bg-slate-900/40 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-${item.color.split('-')[1]}-500/10 ${item.border}`}
                  style={{
                    transform: `translateX(${idx * 16}px)`,
                  }}
                >
                  <div className={`p-2.5 rounded-lg ${item.bg} ${item.color} group-hover:scale-110 transition-transform duration-500`}>
                    <item.icon size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base tracking-wide">{item.title}</h3>
                    <p className="text-slate-400 text-xs">{item.desc}</p>
                  </div>

                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.bg.replace('10', '0')} to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}></div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden md:flex flex-col gap-2 opacity-50">
        <span className="text-[10px] text-white tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default HeroSection;