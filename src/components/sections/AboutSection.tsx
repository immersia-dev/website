import { useState } from "react";
import { HardHat, GraduationCap, Cpu } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { asset } from "@/lib/utils";

type CarouselImage = {
  src: string;
  alt: string;
};

const AboutSection = () => {
  const carouselImages: CarouselImage[] = [
    {
      src: asset("/carrossel/plataforma-estudos.jpg"),
      alt: "Plataforma IMMERSIA: biblioteca de trilhas e treinamentos encaminhados por turma",
    },
    {
      src: asset("/carrossel/demo-cenario.jpg"),
      alt: "Treinamento em VR: pátio de treinamento com estação de extintores",
    },
    {
      src: asset("/carrossel/plataforma-resultados.jpg"),
      alt: "Plataforma IMMERSIA: resultados de um treinamento com gráficos de evolução e faixas de score",
    },
    {
      src: asset("/carrossel/demo-estacao.jpg"),
      alt: "Treinamento em VR: estações por classe de fogo e agentes extintores",
    },
    {
      src: asset("/carrossel/plataforma-aluno.jpg"),
      alt: "Plataforma IMMERSIA: ficha do aluno com histórico de turmas e indicadores individuais",
    },
    {
      src: asset("/carrossel/demo-boas-vindas.jpg"),
      alt: "Treinamento em VR: abertura da experiência imersiva",
    },
  ];
  const [expandedImage, setExpandedImage] = useState<CarouselImage | null>(null);

  const tryExpandImage = (image: CarouselImage) => {
    if (typeof window === "undefined") {
      return;
    }

    if (!window.matchMedia("(min-width: 768px)").matches) {
      return;
    }

    setExpandedImage(image);
  };

  return (
    <section className="scroll-mt-16 md:scroll-mt-20 py-14 sm:py-20 bg-white relative overflow-hidden" id="about">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-20 bg-gradient-to-b from-purple-600 to-transparent"></div>
      <div className="absolute top-10 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
      <div
        className="absolute top-20 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              Sobre a IMMERSIA
            </h2>
            <div className="w-16 h-1 bg-purple-600 mx-auto mb-6"></div>
            <p className="text-base text-slate-600 sm:text-lg max-w-3xl mx-auto leading-relaxed">
              Startup em fase de estruturação focada em resolver desafios
              críticos de capacitação profissional através de tecnologia.
            </p>
          </div>

          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-12 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-slate-900">
                Nossa Missão
              </h3>
              <div className="space-y-4 text-base md:text-lg leading-relaxed text-slate-700">
                <p>
                  A{" "}
                  <span className="text-purple-600 font-semibold">
                    IMMERSIA
                  </span>{" "}
                  nasce da necessidade de tornar treinamentos mais seguros e
                  eficazes. Identificamos que métodos tradicionais muitas vezes
                  expõem colaboradores a riscos ou não simulam adequadamente a
                  complexidade operacional da indústria.
                </p>
                <p>
                  Atuamos no desenvolvimento de{" "}
                  <span className="text-purple-600 font-semibold">
                    Provas de Conceito (PoC)
                  </span>{" "}
                  que utilizam Realidade Virtual e Aumentada, integrando
                  abordagens de{" "}
                  <span className="text-purple-600 font-semibold">
                    adaptive learning
                  </span>{" "}
                  e{" "}
                  <span className="text-purple-600 font-semibold">
                    learning analytics
                  </span>{" "}
                  para personalizar trilhas, monitorar desempenho e validar
                  novos modelos de aprendizado com rigor técnico e imersão
                  digital.
                </p>
              </div>

              <div className="mt-12 grid sm:grid-cols-3 gap-6">
                <div className="text-center group">
                  <div className="w-14 h-14 bg-purple-100 rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300">
                    <HardHat className="w-6 h-6 text-purple-600 group-hover:text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-1 text-sm">
                    Segurança
                  </h4>
                  <p className="text-xs text-slate-600">
                    Foco em redução de riscos
                  </p>
                </div>
                <div className="text-center group">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <GraduationCap className="w-6 h-6 text-blue-600 group-hover:text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-1 text-sm">
                    Pedagogia
                  </h4>
                  <p className="text-xs text-slate-600">
                    Embasamento educacional
                  </p>
                </div>
                <div className="text-center group">
                  <div className="w-14 h-14 bg-purple-100 rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300">
                    <Cpu className="w-6 h-6 text-purple-600 group-hover:text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-1 text-sm">
                    Tecnologia
                  </h4>
                  <p className="text-xs text-slate-600">
                    Validação de novas ferramentas
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative max-w-5xl mx-auto w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100/60 to-blue-100/60 blur-3xl rounded-full"></div>

                <Carousel
                  opts={{ loop: true }}
                  className="relative z-10 w-full px-10 sm:px-12"
                >
                  <CarouselPrevious className="left-0 top-1/2 -translate-y-1/2 text-purple-600 border-purple-200 bg-white/95 hover:bg-white shadow-sm" />
                  <CarouselContent>
                    {carouselImages.map((image, idx) => (
                      <CarouselItem key={idx}>
                        <div className="w-full">
                          <div
                            className="aspect-[16/9] w-full overflow-hidden rounded-3xl bg-slate-950/95 ring-1 ring-purple-200/40 shadow-2xl cursor-default md:cursor-zoom-in"
                            onClick={() => tryExpandImage(image)}
                            onKeyDown={(event) => {
                              if (event.key === "Enter" || event.key === " ") {
                                event.preventDefault();
                                tryExpandImage(image);
                              }
                            }}
                            role="button"
                            tabIndex={0}
                            aria-label={`Expandir imagem: ${image.alt}`}
                          >
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="h-full w-full object-contain object-center"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselNext className="right-0 top-1/2 -translate-y-1/2 text-purple-600 border-purple-200 bg-white/95 hover:bg-white shadow-sm" />
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog
        open={Boolean(expandedImage)}
        onOpenChange={(open) => {
          if (!open) {
            setExpandedImage(null);
          }
        }}
      >
        <DialogContent className="max-w-[95vw] md:max-w-6xl border-purple-200 bg-slate-950/95 p-2 sm:p-3 [&>button]:text-white">
          <DialogTitle className="sr-only">Imagem ampliada do carrossel</DialogTitle>
          {expandedImage && (
            <img
              src={expandedImage.src}
              alt={expandedImage.alt}
              className="w-full max-h-[88vh] object-contain rounded-xl"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default AboutSection;
