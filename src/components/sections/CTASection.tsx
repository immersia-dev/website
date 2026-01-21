import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-20 bg-gradient-to-b from-white/20 to-transparent"></div>
      <div className="absolute top-10 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-1/4 w-1 h-1 bg-purple-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="absolute top-1/4 left-10 w-20 h-px bg-gradient-to-r from-white/40 to-transparent"></div>
      <div className="absolute top-1/3 right-10 w-20 h-px bg-gradient-to-l from-purple-300 to-transparent"></div>

      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Transforme a capacitação da sua equipe
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="#contact">
              <Button
                size="lg"
                className="bg-white text-purple-900 hover:bg-purple-50 px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 min-w-[200px]"
              >
                Falar com Especialistas
              </Button>
            </a>
            <a href="#team">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 min-w-[200px] bg-transparent"
              >
                Conhecer a Equipe
              </Button>
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8">
            <h3 className="text-xl font-bold text-white mb-6">
              Nossos Pilares
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-purple-400 mb-1 text-sm">Aprendizagem Ativa</h4>
                  <p className="text-slate-300 text-sm">Aprender fazendo (learning by doing) aumenta a retenção do conteúdo.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-400 mb-1 text-sm">Ambiente Seguro</h4>
                  <p className="text-slate-300 text-sm">Prática ilimitada de cenários perigosos em ambiente digital controlado.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-purple-400 mb-1 text-sm">Customização</h4>
                  <p className="text-slate-300 text-sm">Cenários desenvolvidos sob medida para a realidade da sua operação.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-400 mb-1 text-sm">Inovação e Técnica</h4>
                  <p className="text-slate-300 text-sm">Integramos o melhor da tecnologia XR com rigoroso embasamento técnico.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;