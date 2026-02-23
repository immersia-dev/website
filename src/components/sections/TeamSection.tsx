import { Linkedin, Mail } from "lucide-react";

const TeamSection = () => {
    const team = [
        {
            name: "Lilian Giselly",
            role: "CEO",
            bio: "Responsável pela visão estratégica da IMMERSIA, lidera o desenvolvimento da plataforma e a integração entre tecnologia, produto e impacto social.",
            image: "/team/lilian.jpeg",
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
            image: "/team/geovane.jpeg",
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
            image: "/team/icaro.jpeg",
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
            image: "/team/winnie.jpeg",
            imagePosition: "center 16%",
            socials: {
                linkedin: "https://www.linkedin.com/in/winnie-torres-6a066b47/",
                email: "mailto:wielima@gmail.com"
            }
        }
    ];

    return (
        <section className="py-24 bg-slate-50 border-t border-slate-200" id="team">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Conheça a Equipe</h2>
                    <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Expertise multidisciplinar unida pelo propósito de elevar a segurança e eficiência operacional.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {team.map((member, index) => (
                        <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-2">
                            <div className="h-56 md:h-60 bg-slate-200 relative overflow-hidden group-hover:bg-purple-100 transition-colors">
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

                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-purple-600 transition-colors">
                                    {member.name}
                                </h3>
                                <p className="text-sm font-medium text-purple-600 mb-4 uppercase tracking-wider">
                                    {member.role}
                                </p>
                                <p className="text-slate-600 text-sm leading-relaxed">
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
