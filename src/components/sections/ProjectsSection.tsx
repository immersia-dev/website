import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";

import { Card } from "@/components/ui/card";
import { asset } from "@/lib/utils";

type PlatformShot = {
  file: string;
  label: string;
  description: string;
};

const platformShots: PlatformShot[] = [
  {
    file: "dashboard.jpg",
    label: "Dashboard",
    description:
      "Participação, média, aprovação e sinais de reforço consolidados por turma.",
  },
  {
    file: "turma.jpg",
    label: "Turmas",
    description:
      "Conclusão das trilhas, curva de evolução e risco de cada turma acompanhada.",
  },
  {
    file: "alunos.jpg",
    label: "Alunos",
    description:
      "Cadastro, status de acesso e histórico de tentativas de cada aluno.",
  },
  {
    file: "trilhas-aluno.jpg",
    label: "Trilhas do aluno",
    description:
      "O aluno vê apenas as trilhas encaminhadas para a turma dele, com progresso individual.",
  },
  {
    file: "trilha-detalhe.jpg",
    label: "Sequência da trilha",
    description:
      "Materiais de apoio e práticas em VR/AR encadeados na ordem pedagógica.",
  },
  {
    file: "organizacoes.jpg",
    label: "Organizações",
    description:
      "Gestão multiempresa: contratos, administradores e módulos liberados por cliente.",
  },
];

const prototypes = [
  {
    title: "Treinamento de Combate a Incêndio",
    description:
      "Simulação imersiva para treinamento de brigadistas, permitindo prática segura de protocolos de emergência e manuseio de extintores.",
    tech: ["VR", "Física", "Multiplayer"],
    status: "Em Desenv.",
    image: asset("/projects/firefighting.jpg"),
  },
  {
    title: "Ensino de Anatomia Animal",
    description:
      "Atlas interativo em Realidade Aumentada para estudantes de medicina veterinária, visualizando sistemas internos em 3D.",
    tech: ["AR", "Anatomia", "Interativo"],
    status: "Em Desenv.",
    image: asset("/projects/anatomy.png"),
  },
  {
    title: "Jogo da Memória",
    description:
      "Experiência interativa 3D para treinamento cognitivo e retenção de procedimentos através da gamificação imersiva.",
    tech: ["WebXR", "3D", "Interativo"],
    status: "Protótipo",
    image: asset("/projects/memory.png"),
  },
];

const ProjectsSection = () => {
  const [activeShot, setActiveShot] = useState(0);
  const [showPrototypes, setShowPrototypes] = useState(false);
  const shot = platformShots[activeShot];

  return (
    <section
      className="scroll-mt-16 md:scroll-mt-20 py-14 sm:py-20 bg-white relative overflow-hidden"
      id="projects"
    >
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-20 bg-gradient-to-b from-purple-600 to-transparent"></div>
      <div className="absolute top-10 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
      <div
        className="absolute top-20 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              A plataforma por dentro
            </h2>
            <div className="w-16 h-1 bg-purple-600 mx-auto mb-6"></div>
            <p className="text-base text-slate-600 sm:text-lg max-w-3xl mx-auto leading-relaxed">
              Gestão de turmas, trilhas de estudo e resultados dos treinamentos
              imersivos em um só lugar — do aluno em campo ao gestor do
              contrato.
            </p>
          </div>

          <Card className="overflow-hidden border border-slate-200 bg-slate-900 shadow-xl">
            <div className="relative aspect-[16/10] w-full bg-slate-950 sm:aspect-[16/9]">
              <img
                src={asset(`/platform-preview/${shot.file}`)}
                alt={`Plataforma IMMERSIA — ${shot.label}`}
                className="h-full w-full object-cover object-top"
                loading="lazy"
              />
            </div>

            <div className="border-t border-white/10 p-4 sm:p-5">
              <div className="mb-4 flex flex-wrap gap-2">
                {platformShots.map((item, index) => (
                  <button
                    key={item.file}
                    type="button"
                    onClick={() => setActiveShot(index)}
                    aria-pressed={index === activeShot}
                    className={`rounded-full px-3 py-1.5 text-[11px] font-semibold transition-colors sm:text-xs ${
                      index === activeShot
                        ? "bg-purple-600 text-white"
                        : "bg-white/10 text-slate-300 hover:bg-white/20"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <p className="text-xs leading-relaxed text-slate-400 sm:text-sm">
                {shot.description}
              </p>
            </div>
          </Card>

          <div className="mt-8 text-center">
            <a
              href="/platform/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-purple-700"
            >
              Explorar a plataforma
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <p className="mt-3 text-xs text-slate-500">
              Ambiente de demonstração, com dados fictícios.
            </p>
          </div>

          {/* Provas de conceito: material de bastidor, fora do fluxo principal. */}
          <div className="mt-14 border-t border-slate-200 pt-8 sm:mt-20">
            <button
              type="button"
              onClick={() => setShowPrototypes((current) => !current)}
              aria-expanded={showPrototypes}
              className="mx-auto flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-400 transition-colors hover:text-purple-600"
            >
              Provas de conceito
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  showPrototypes ? "rotate-180" : ""
                }`}
              />
            </button>

            {showPrototypes && (
              <div className="mt-8">
                <p className="mx-auto mb-8 max-w-2xl text-center text-xs leading-relaxed text-slate-500 sm:text-sm">
                  Protótipos que validamos antes de virarem módulos da
                  plataforma, focados em casos de uso reais da indústria e do
                  setor educacional.
                </p>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {prototypes.map((project) => (
                    <Card
                      key={project.title}
                      className="border border-slate-200 bg-white transition-shadow duration-300 hover:shadow-md"
                    >
                      <div className="p-4">
                        <div className="mb-4 h-32 overflow-hidden rounded-lg">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        </div>

                        <div className="mb-2 flex flex-wrap items-center gap-1.5">
                          <span
                            className={`rounded-full px-2 py-1 text-[10px] font-bold uppercase tracking-wider ${
                              project.status === "Protótipo"
                                ? "bg-blue-100 text-blue-600"
                                : "bg-purple-100 text-purple-600"
                            }`}
                          >
                            {project.status}
                          </span>
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-md bg-slate-100 px-2 py-1 text-[10px] text-slate-600"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <h3 className="text-sm font-bold text-slate-900">
                          {project.title}
                        </h3>
                        <p className="mt-2 text-xs leading-relaxed text-slate-600">
                          {project.description}
                        </p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
