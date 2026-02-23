import { Dumbbell, Shield, BarChart, Zap } from "lucide-react";

const ValuePropositionSection = () => {
  const industries = [
    {
      title: "Indústria",
      description: "Treinamentos de segurança e operação de máquinas complexas.",
      benefits: ["Redução de riscos", "Memória muscular", "Avaliação prática"]
    },
    {
      title: "Logística",
      description: "Simulação de ambientes de armazenagem e processos de alta vazão.",
      benefits: ["Otimização de fluxo", "Prevenção de acidentes", "Padronização"]
    },
    {
      title: "Construção Civil",
      description: "Capacitação para trabalho em altura e conformidade normativa (NRs).",
      benefits: ["Consciência situacional", "Percepção de risco", "Conformidade NR"]
    },
    {
      title: "Manutenção",
      description: "Suporte remoto e guias interativos (AR) para reparos complexos.",
      benefits: ["Acesso à informação", "Redução de erro humano", "Precisão"]
    },
    {
      title: "Educação Técnica",
      description: "Laboratórios virtuais para prática intensiva sem custos de insumos.",
      benefits: ["Baixo custo material", "Repetição ilimitada", "Engajamento"]
    },
    {
      title: "Energia e Utilities",
      description: "Simulação de procedimentos em redes de alta tensão e espaços confinados.",
      benefits: ["Segurança crítica", "Protocolos de emergência", "Ambiente seguro"]
    }
  ];

  const mainBenefits = [
    {
      title: "Memória Muscular",
      description: "Simulações que permitem 'aprender fazendo' (learning by doing), fixando procedimentos motores.",
      color: "bg-gradient-to-r from-purple-600 to-blue-600",
      Icon: Dumbbell
    },
    {
      title: "Ambiente Controlado",
      description: "Exposição a cenários de perigo real em ambiente controlado, sem ameaça à integridade física.",
      color: "bg-gradient-to-r from-blue-600 to-cyan-600",
      Icon: Shield
    },
    {
      title: "Analytics de Performance",
      description: "Dados precisos sobre tempo de reação, erros procedimentais e tomada de decisão.",
      color: "bg-gradient-to-r from-cyan-600 to-purple-600",
      Icon: BarChart
    },
    {
      title: "Eficiência Operacional",
      description: "Redução drástica de custos com paradas de equipamentos e logística de treinamento.",
      color: "bg-gradient-to-r from-purple-600 to-pink-600",
      Icon: Zap
    }
  ];

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden" id="tech">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-20 bg-gradient-to-b from-blue-600 to-transparent"></div>
      <div className="absolute top-10 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="absolute top-1/4 left-10 w-20 h-px bg-gradient-to-r from-purple-400 to-transparent"></div>
      <div className="absolute top-1/3 right-10 w-20 h-px bg-gradient-to-l from-blue-400 to-transparent"></div>

      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              Hipóteses de Valor
            </h2>
            <div className="w-16 h-1 bg-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Validamos como a imersão pode transformar a <strong>segurança</strong> e a <strong>eficiência</strong> em operações críticas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {mainBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg group transition-all duration-300"
              >
                <div className={`w-14 h-14 ${benefit.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.Icon && <benefit.Icon className="w-6 h-6 text-white" />}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-bold text-center mb-4 text-slate-900">
              Setores-Alvo
            </h3>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto text-sm md:text-base">
              Soluções verticals para indústrias que não podem errar.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg group cursor-pointer transition-all duration-300"
                >
                  <div className="mb-5">
                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-purple-600 transition-colors mb-2">
                      {industry.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {industry.description}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-purple-600 mb-2">Benefícios Esperados:</p>
                    {industry.benefits.map((benefit, benefitIndex) => (
                      <div
                        key={benefitIndex}
                        className="flex items-center gap-2 text-xs"
                      >
                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                        <span className="text-slate-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-10 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Tem um desafio operacional crítico?
              </h3>
              <p className="text-lg text-purple-100 mb-6 max-w-xl mx-auto">
                Nossa tecnologia pode ser adaptada para resolver as dores específicas da sua indústria.
              </p>
              <a href="#contact">
                <button className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-base">
                  Converse Conosco
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;