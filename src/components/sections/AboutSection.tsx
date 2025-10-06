const AboutSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-20 bg-gradient-to-b from-purple-600 to-transparent"></div>
      <div className="absolute top-10 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              Sobre Nós
            </h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Pioneiros em tecnologias imersivas, unimos criatividade e inovação 
              para criar o impossível
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">
                Nossa Visão
              </h3>
              <div className="space-y-6 text-lg leading-relaxed text-slate-700">
                <p>
                  Na <span className="text-purple-600 font-semibold">IMMERSIA</span>, acreditamos que o futuro dos negócios 
                  está na convergência entre realidade física e digital. Somos uma startup 
                  revolucionária dedicada a criar experiências imersivas que transcendem 
                  os limites da imaginação.
                </p>
                <p>
                  Nossa equipe de visionários combina expertise técnica com criatividade 
                  artística para desenvolver soluções em <span className="text-purple-600 font-semibold">realidade virtual</span>, 
                  <span className="text-blue-600 font-semibold"> realidade aumentada</span> que 
                  redefinem a forma como empresas se conectam com seus públicos.
                </p>
              </div>

              <div className="mt-16 grid sm:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300">
                    <span className="text-2xl font-bold text-purple-600 group-hover:text-white">I</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Inovação</h4>
                  <p className="text-sm text-slate-600">Tecnologia de ponta</p>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <span className="text-2xl font-bold text-blue-600 group-hover:text-white">C</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Criatividade</h4>
                  <p className="text-sm text-slate-600">Design revolucionário</p>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300">
                    <span className="text-2xl font-bold text-purple-600 group-hover:text-white">E</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Excelência</h4>
                  <p className="text-sm text-slate-600">Qualidade superior</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl shadow-2xl"></div>
                <div className="absolute inset-4 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">I</span>
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-2">IMMERSIA</h4>
                    <p className="text-slate-600">Experiências do Futuro</p>
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