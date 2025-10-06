const ValuePropositionSection = () => {
  const industries = [
    {
      title: "Educação",
      description: "Treinamentos imersivos que revolucionam o aprendizado corporativo",
      benefits: ["↑ 85% retenção", "↓ 60% custos", "↑ 300% engajamento"]
    },
    {
      title: "Varejo",
      description: "Experiências de compra que conectam física e digital",
      benefits: ["↑ 150% conversão", "↓ 40% devolução", "↑ 200% satisfação"]
    },
    {
      title: "Entretenimento",
      description: "Narrativas imersivas que cativam audiências globais",
      benefits: ["↑ 400% engajamento", "↑ 250% tempo sessão", "↑ 180% receita"]
    },
    {
      title: "Indústria",
      description: "Otimização de processos através de simulações precisas",
      benefits: ["↑ 70% eficiência", "↓ 90% acidentes", "↓ 50% tempo treino"]
    },
    {
      title: "Saúde",
      description: "Procedimentos assistidos por AR/VR de alta precisão",
      benefits: ["↑ 95% precisão", "↓ 80% tempo cirurgia", "↑ 300% qualidade"]
    },
    {
      title: "Construção",
      description: "Visualização arquitetônica antes da execução",
      benefits: ["↓ 70% retrabalho", "↑ 60% aprovação", "↓ 45% custos"]
    }
  ];

  const mainBenefits = [
    {
      title: "Engajamento Excepcional",
      description: "Experiências imersivas aumentam o envolvimento do usuário em até 400%",
      color: "bg-gradient-to-r from-purple-600 to-blue-600"
    },
    {
      title: "Inovação Diferenciadora", 
      description: "Posicione sua marca na vanguarda tecnológica do seu setor",
      color: "bg-gradient-to-r from-blue-600 to-cyan-600"
    },
    {
      title: "Impacto Mensurável",
      description: "ROI comprovado com métricas claras de performance e conversão",
      color: "bg-gradient-to-r from-cyan-600 to-purple-600"
    },
    {
      title: "Escalabilidade Global",
      description: "Soluções que crescem com seu negócio em qualquer escala",
      color: "bg-gradient-to-r from-purple-600 to-pink-600"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-20 bg-gradient-to-b from-blue-600 to-transparent"></div>
      <div className="absolute top-10 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="absolute top-1/4 left-10 w-20 h-px bg-gradient-to-r from-purple-400 to-transparent"></div>
      <div className="absolute top-1/3 right-10 w-20 h-px bg-gradient-to-l from-blue-400 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              Proposta de Valor
            </h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Transformamos empresas de pequeno, médio e grande porte através de 
              experiências imersivas que geram resultados mensuráveis
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {mainBenefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg group transition-all duration-300"
              >
                <div className={`w-16 h-16 ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-3xl font-bold text-center mb-4 text-slate-900">
              Setores que Transformamos
            </h3>
            <p className="text-center text-slate-600 mb-16 max-w-3xl mx-auto">
              Nossas soluções são adaptadas para atender as necessidades específicas 
              de cada indústria com resultados comprovados
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div 
                  key={index}
                  className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg group cursor-pointer transition-all duration-300"
                >
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors mb-3">
                      {industry.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      {industry.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-purple-600 mb-3">Resultados:</p>
                    {industry.benefits.map((benefit, benefitIndex) => (
                      <div 
                        key={benefitIndex}
                        className="flex items-center gap-3 text-sm"
                      >
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        <span className="text-slate-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-20">
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-12 text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Pronto para Revolucionar seu Negócio?
              </h3>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Junte-se às empresas que já estão colhendo os frutos da transformação digital imersiva
              </p>
              <button className="bg-white text-purple-600 hover:bg-purple-50 px-10 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 text-lg">
                Agende uma Demonstração Gratuita
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;