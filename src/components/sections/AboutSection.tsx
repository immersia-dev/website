const AboutSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden" id="about">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-20 bg-gradient-to-b from-purple-600 to-transparent"></div>
      <div className="absolute top-10 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              Sobre a IMMERSIA
            </h2>
            <div className="w-16 h-1 bg-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Startup em fase de estruturação focada em resolver desafios críticos de capacitação profissional
              através de tecnologia.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">
                Nossa Missão
              </h3>
              <div className="space-y-4 text-base md:text-lg leading-relaxed text-slate-700">
                <p>
                  A <span className="text-purple-600 font-semibold">IMMERSIA</span> nasce da necessidade de tornar treinamentos
                  mais seguros e eficazes. Identificamos que métodos tradicionais muitas vezes expõem colaboradores a riscos
                  ou não simulam adequadamente a complexidade operacional da indústria.
                </p>
                <p>
                  Atuamos no desenvolvimento de <span className="text-purple-600 font-semibold">Provas de Conceito (PoC)</span> que
                  utilizam Realidade Virtual e Aumentada para validar novos modelos de aprendizado, combinando
                  rigor técnico com imersão digital.
                </p>
              </div>

              <div className="mt-12 grid sm:grid-cols-3 gap-6">
                <div className="text-center group">
                  <div className="w-14 h-14 bg-purple-100 rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300">
                    <span className="text-xl font-bold text-purple-600 group-hover:text-white">S</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-1 text-sm">Segurança</h4>
                  <p className="text-xs text-slate-600">Foco em redução de riscos</p>
                </div>
                <div className="text-center group">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <span className="text-xl font-bold text-blue-600 group-hover:text-white">P</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-1 text-sm">Pedagogia</h4>
                  <p className="text-xs text-slate-600">Embasamento educacional</p>
                </div>
                <div className="text-center group">
                  <div className="w-14 h-14 bg-purple-100 rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300">
                    <span className="text-xl font-bold text-purple-600 group-hover:text-white">T</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-1 text-sm">Tecnologia</h4>
                  <p className="text-xs text-slate-600">Validação de novas ferramentas</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl shadow-2xl"></div>
                <div className="absolute inset-4 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl mx-auto mb-5 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">I</span>
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">IMMERSIA</h4>
                    <p className="text-slate-600 text-sm">Experiências do Futuro</p>
                  </div>
                </div>

                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-400 rounded-full opacity-60"></div>
                <div className="absolute top-1/2 -right-2 w-3 h-3 bg-blue-400 rounded-full opacity-60"></div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-purple-400 rounded-full opacity-60"></div>
                <div className="absolute top-1/2 -left-2 w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;