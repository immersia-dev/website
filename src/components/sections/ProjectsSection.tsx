import { Card } from "@/components/ui/card";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Showroom Virtual Automotivo",
      description: "Experiência imersiva de compra de veículos em realidade virtual, permitindo personalização completa e test drives virtuais.",
      category: "Automotivo",
      tech: ["VR", "3D", "AI"],
      color: "from-purple-600 to-blue-600"
    },
    {
      title: "Treinamento Corporativo AR",
      description: "Plataforma de treinamento em realidade aumentada para indústrias, reduzindo custos e aumentando a eficiência.",
      category: "Educação",
      tech: ["AR", "Mobile", "Cloud"],
      color: "from-blue-600 to-cyan-600"
    },
    {
      title: "Metaverso Comercial",
      description: "Ambiente virtual completo para eventos, reuniões e experiências de compra no metaverso empresarial.",
      category: "Varejo",
      tech: ["Metaverse", "Blockchain", "VR"],
      color: "from-cyan-600 to-purple-600"
    },
    {
      title: "Museu Interativo 360°",
      description: "Experiência cultural imersiva que transforma visitação em museus através de hologramas e storytelling interativo.",
      category: "Cultura",
      tech: ["Hologram", "360°", "Interactive"],
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Cirurgia Assistida por AR",
      description: "Sistema de realidade aumentada para auxiliar procedimentos médicos com precisão milimétrica e visualização 3D.",
      category: "Saúde",
      tech: ["AR", "Medical", "Precision"],
      color: "from-blue-600 to-green-600"
    },
    {
      title: "Arquitetura Virtual",
      description: "Plataforma para visualização e modificação de projetos arquitetônicos em tempo real antes da construção.",
      category: "Construção",
      tech: ["VR", "BIM", "Real-time"],
      color: "from-green-600 to-blue-600"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-20 bg-gradient-to-b from-purple-600 to-transparent"></div>
      <div className="absolute top-10 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="absolute top-1/4 left-10 w-20 h-px bg-gradient-to-r from-purple-400 to-transparent"></div>
      <div className="absolute top-1/3 right-10 w-20 h-px bg-gradient-to-l from-blue-400 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              Demonstrações
            </h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Explore nosso portfólio de projetos revolucionários que estão 
              redefinindo os limites entre realidade e imaginação
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="bg-white border border-slate-200 hover:shadow-lg group cursor-pointer transition-all duration-300"
              >
                <div className="p-6">
                  <div className={`h-48 bg-gradient-to-br ${project.color} rounded-2xl mb-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <div className="w-8 h-8 bg-white/40 rounded-xl"></div>
                        </div>
                        <p className="font-semibold">Projeto Imersivo</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      <div className="flex gap-1">
                        {project.tech.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded-lg"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-slate-600 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    <div className="flex items-center text-purple-600 group-hover:text-blue-600 transition-colors">
                      <span className="text-sm font-semibold">Explorar Projeto</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-slate-600 mb-6 text-lg">
              Estes são apenas alguns exemplos do que podemos criar para sua empresa
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
              Ver Todos os Projetos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;