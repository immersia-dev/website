import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
            Política de Privacidade
          </h1>

          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p className="text-sm text-slate-400">
              Última atualização: 20 de Janeiro de 2026
            </p>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">
                1. Introdução
              </h2>
              <p>
                A IMMERSIA ("nós", "nosso") respeita sua privacidade e está
                comprometida em proteger seus dados pessoais. Esta política
                explica como coletamos, usamos e protegemos suas informações
                quando você visita nosso website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">
                2. Coleta de Dados
              </h2>
              <p>
                Coletamos informações que você nos fornece diretamente, como
                quando preenche nosso formulário de contato (nome, e-mail,
                empresa, mensagem). Também podemos coletar dados técnicos
                automaticamente através de cookies para melhorar a performance
                do site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">
                3. Uso das Informações
              </h2>
              <p>Utilizamos seus dados exclusivamente para:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Responder a suas solicitações de contato;</li>
                <li>
                  Comunicar sobre nossos projetos e novidades (caso opte por
                  receber);
                </li>
                <li>Melhorar a experiência de navegação no site.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">
                4. Proteção de Dados
              </h2>
              <p>
                Adotamos medidas de segurança técnicas e organizacionais
                adequadas para proteger seus dados contra acesso não autorizado,
                alteração, divulgação ou destruição.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-800 mb-3">
                5. Contato
              </h2>
              <p>
                Se tiver dúvidas sobre esta política, entre em contato conosco
                através do email:
                <a
                  href="mailto:immersia.br@gmail.com"
                  className="text-purple-600 font-semibold ml-1"
                >
                  immersia.br@gmail.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
