import { Linkedin, Mail } from "lucide-react";
import { asset } from "@/lib/utils";

const TeamSection = () => {
    const team = [
        {
            name: "Lilian Giselly",
            role: "CEO",
            bio: "Responsável pela visão estratégica da IMMERSIA, lidera o desenvolvimento da plataforma e a integração entre tecnologia, produto e impacto social.",
            image: asset("/team/lilian.jpeg"),
            imagePosition: "center 18%",
            socials: {
                linkedin: "https://www.linkedin.com/in/liliangisellyps",
                email: "mailto:liliangisellyps@gmail.com"
            }
        },
        {
            name: "Geovane Filho",
            role: "CTO",
            bio: "Responsável pela arquitetura técnica da plataforma e liderança do desenvolvimento, garantindo escalabilidade e integração das tecnologias XR.",
            image: asset("/team/geovane.jpeg"),
            imagePosition: "center 30%",
            socials: {
                linkedin: "https://www.linkedin.com/in/geovanelcfilho",
                email: "mailto:geovanelcfilho@gmail.com"
            }
        },
        {
            name: "Ícaro Araújo",
            role: "Consultor e Pesquisador",
            bio: "Atua na estruturação do modelo de negócios, parcerias estratégicas e posicionamento de mercado, conectando tecnologia às demandas reais.",
            image: asset("/team/icaro.jpeg"),
            imagePosition: "center 22%",
            socials: {
                linkedin: "https://www.linkedin.com/in/%C3%ADcaro-ara%C3%BAjo-bb47112b6/",
                email: "mailto:Icarobqa@gmail.com"
            }
        },
        {
            name: "Winnie Torres",
            role: "Especialista de Produto",
            bio: "Engenheira de Segurança do Trabalho, atua como consultora técnica na definição dos conteúdos, validação normativa e aderência legal.",
            image: asset("/team/winnie.jpeg"),
            imagePosition: "center 16%",
            socials: {
                linkedin: "https://www.linkedin.com/in/winnie-torres-6a066b47/",
                email: "mailto:wielima@gmail.com"
            }
        },
        {
            name: "Andressa Martins",
            role: "Consultora e Pesquisadora",
            bio: "Cientista de dados especializada em learning analytics, transforma dados de imersão e desempenho em insights que orientam decisões estratégicas da plataforma.",
            image: asset("/team/andressa.jpg"),
            imagePosition: "center 20%",
            socials: {
                linkedin: "https://www.linkedin.com/in/andressa-martins-1a199b1b4",
                email: "mailto:andressa.mo0@gmail.com"
            }
        }
    ];

    return (
        <section className="scroll-mt-16 md:scroll-mt-20 py-24 bg-slate-50 border-t border-slate-200" id="team">
            <div className="mx-auto px-6 max-w-[1440px]">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Conheça a Equipe</h2>
                    <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
                    <p className="text-base text-slate-600 sm:text-lg max-w-2xl mx-auto">
                        Expertise multidisciplinar unida pelo propósito de elevar a segurança e eficiência operacional.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
                    {team.map((member, index) => (
                        <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-2">
                            <div className="h-56 md:h-64 bg-slate-200 relative overflow-hidden group-hover:bg-purple-100 transition-colors">
                                {member.image ? (
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                        style={{ objectPosition: member.imagePosition }}
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-slate-400">
                                        <span className="text-6xl font-light opacity-30 select-none">
                                            {member.name.charAt(0)}
                                        </span>
                                    </div>
                                )}

                                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-slate-900/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center gap-4">
                                    {member.socials?.linkedin && (
                                        <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors">
                                            <Linkedin size={20} />
                                        </a>
                                    )}
                                    {member.socials?.email && (
                                        <a href={member.socials.email} className="text-white hover:text-purple-400 transition-colors">
                                            <Mail size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="p-4 md:p-5 text-center">
                                <h3 className="text-base md:text-lg font-bold text-slate-900 mb-1 group-hover:text-purple-600 transition-colors">
                                    {member.name}
                                </h3>
                                <p className="text-xs font-medium text-purple-600 mb-3 uppercase tracking-wider">
                                    {member.role}
                                </p>
                                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                                    {member.bio}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
