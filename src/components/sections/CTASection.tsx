import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-20 bg-gradient-to-b from-white/20 to-transparent"></div>
      <div className="absolute top-10 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-1/4 w-1 h-1 bg-purple-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="absolute top-1/4 left-10 w-20 h-px bg-gradient-to-r from-white/40 to-transparent"></div>
      <div className="absolute top-1/3 right-10 w-20 h-px bg-gradient-to-l from-purple-300 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
            Seja Parte do Futuro
          </h2>
          
          <p className="text-xl md:text-2xl text-purple-200 mb-6 leading-relaxed">
            Investidores visionários e parceiros estratégicos
          </p>
          
          <p className="text-lg text-slate-300 mb-16 max-w-3xl mx-auto leading-relaxed">
            A IMMERSIA está revolucionando o mercado de experiências imersivas. 
            Junte-se a nós nesta jornada e faça parte da próxima geração de 
            tecnologias que vão transformar indústrias inteiras.
          </p>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                500%
              </div>
              <p className="text-slate-300">Crescimento Projetado</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                R$50M
              </div>
              <p className="text-slate-300">Mercado Addressável</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                15+
              </div>
              <p className="text-slate-300">Projetos Ativos</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-white text-purple-900 hover:bg-purple-50 px-10 py-4 text-xl font-semibold rounded-lg transition-all duration-300 hover:scale-105 min-w-[250px]"
            >
              Oportunidade de Investimento
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white px-10 py-4 text-xl font-semibold rounded-lg transition-all duration-300 hover:scale-105 min-w-[250px] bg-transparent"
            >
              Parceria Estratégica
            </Button>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
            <h3 className="text-2xl font-bold text-white mb-8">
              Por que escolher a IMMERSIA?
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-purple-400 mb-2">Tecnologia Proprietária</h4>
                  <p className="text-slate-300">Engine própria de renderização imersiva</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-400 mb-2">Equipe Especializada</h4>
                  <p className="text-slate-300">Profissionais com experiência global</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-purple-400 mb-2">Tração Comprovada</h4>
                  <p className="text-slate-300">Clientes satisfeitos e projetos entregues</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-400 mb-2">Visão de Futuro</h4>
                  <p className="text-slate-300">Roadmap claro para os próximos 5 anos</p>
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