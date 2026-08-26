
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const TermsOfUse = () => {
    return (
        <div className="min-h-screen bg-slate-50 py-12 px-6">
            <div className="max-w-4xl mx-auto">
                <Link to="/">
                    <Button variant="ghost" className="mb-8 hover:bg-slate-200">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Voltar para Home
                    </Button>
                </Link>

                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-8">Termos de Uso</h1>

                    <div className="space-y-6 text-slate-600 leading-relaxed">
                        <p className="text-sm text-slate-400">Última atualização: 20 de Janeiro de 2026</p>

                        <section>
                            <h2 className="text-xl font-bold text-slate-800 mb-3">1. Aceitação dos Termos</h2>
                            <p>
                                Ao acessar e utilizar o website da IMMERSIA, você concorda em cumprir e estar vinculado aos seguintes
                                termos e condições de uso. Se você não concordar com qualquer parte destes termos, não deverá utilizar nosso website.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-800 mb-3">2. Propriedade Intelectual</h2>
                            <p>
                                Todo o conteúdo deste site, incluindo textos, gráficos, logotipos, ícones, imagens e software, é propriedade
                                da IMMERSIA ou de seus fornecedores de conteúdo e está protegido pelas leis de direitos autorais.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-800 mb-3">3. Uso Permitido</h2>
                            <p>
                                Você tem permissão para visualizar, baixar e imprimir páginas do site para seu uso pessoal e não comercial,
                                sujeito às restrições definidas nestes termos.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-800 mb-3">4. Limitação de Responsabilidade</h2>
                            <p>
                                A IMMERSIA não será responsável por quaisquer danos diretos, indiretos, incidentais ou consequentes resultantes
                                do uso ou da incapacidade de usar este site ou de qualquer informação nele contida.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-800 mb-3">5. Alterações nos Termos</h2>
                            <p>
                                Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor
                                imediatamente após a publicação no site.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsOfUse;
