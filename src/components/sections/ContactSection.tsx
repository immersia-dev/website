import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "Parceria para Piloto (PoC)",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Novo Contato Site Immersia - ${formData.interest}`;
    const body = `Nome: ${formData.name}
Email: ${formData.email}
Interesse: ${formData.interest}

Mensagem:
${formData.message}`;

    const mailtoLink = `mailto:immersia.xr@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="contact">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-20 bg-gradient-to-b from-blue-600 to-transparent"></div>
      <div className="absolute top-10 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="absolute top-1/4 left-10 w-20 h-px bg-gradient-to-r from-blue-400 to-transparent"></div>
      <div className="absolute top-1/3 right-10 w-20 h-px bg-gradient-to-l from-purple-400 to-transparent"></div>

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              Vamos Conversar
            </h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 leading-relaxed">
              Entre em contato para discutir como nossas tecnologias podem apoiar sua operação
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">
                Entre em Contato
              </h3>

              <div className="mb-8 p-6 bg-white rounded-2xl border border-slate-200 hover:shadow-lg group transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-600 mb-1">Email</p>
                    <a
                      href="mailto:immersia.xr@gmail.com"
                      className="text-purple-600 font-semibold hover:text-blue-600 transition-colors text-lg"
                    >
                      immersia.xr@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  Mensagem Rápida
                </h3>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Nome / Empresa
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600/20 transition-colors"
                      placeholder="Seu nome ou empresa"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600/20 transition-colors"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Tipo de Interesse
                    </label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600/20 transition-colors"
                    >
                      <option>Parceria para Piloto (PoC)</option>
                      <option>Investimento / Seed</option>
                      <option>Parceria Acadêmica</option>
                      <option>Outros</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Mensagem
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600/20 transition-colors resize-none"
                      placeholder="Conte-nos mais sobre seus objetivos..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;