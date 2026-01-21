import { Card } from "@/components/ui/card";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Treinamento de Combate a Incêndio",
      description: "Simulação imersiva para treinamento de brigadistas, permitindo prática segura de protocolos de emergência e manuseio de extintores.",
      category: "Segurança",
      tech: ["VR", "Física", "Multiplayer"],
      color: "from-orange-600 to-red-600",
      status: "Em Desenv."
    },
    {
      title: "Ensino de Anatomia Animal",
      description: "Atlas interativo em Realidade Aumentada para estudantes de medicina veterinária, visualizando sistemas internos em 3D.",
      category: "Educação",
      tech: ["AR", "Anatomia", "Interativo"],
      color: "from-green-600 to-emerald-600",
      status: "Em Desenv."
    },
    {
      title: "Jogo da Memória",
      description: "Experiência interativa 3D para treinamento cognitivo e retenção de procedimentos através da gamificação imersiva.",
      category: "Gamificação",
      tech: ["WebXR", "3D", "Interativo"],
      color: "from-cyan-600 to-purple-600",
      status: "Protótipo"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="projects">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-20 bg-gradient-to-b from-purple-600 to-transparent"></div>
      <div className="absolute top-10 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="absolute top-1/4 left-10 w-20 h-px bg-gradient-to-r from-purple-400 to-transparent"></div>
      <div className="absolute top-1/3 right-10 w-20 h-px bg-gradient-to-l from-blue-400 to-transparent"></div>

      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              Provas de Conceito
            </h2>
            <div className="w-16 h-1 bg-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Atualmente estamos desenvolvendo e validando protótipos focados em
              casos de uso reais para a indústria e setor educacional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 justify-center">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-white border border-slate-200 hover:shadow-lg group cursor-pointer transition-all duration-300"
              >
                <div className="p-5">
                  <div className={`h-40 bg-gradient-to-br ${project.color} rounded-xl mb-5 relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                          <div className="w-7 h-7 bg-white/40 rounded-lg"></div>
                        </div>
                        <p className="font-semibold text-sm">{project.category}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded-full whitespace-nowrap ${project.status === 'Protótipo' ? 'text-blue-600 bg-blue-100' : 'text-purple-600 bg-purple-100'}`}>
                        {project.status}
                      </span>
                      <div className="flex gap-1">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-[10px] text-slate-600 bg-slate-100 px-2 py-1 rounded-md whitespace-nowrap"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-slate-600 leading-relaxed text-xs">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-slate-600 mb-5 text-base">
              Estes projetos fazem parte de nossa rodada de validação técnica e pedagógica
            </p>
            <a href="#contact">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-sm">
                Conheça nossa Pesquisa
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;