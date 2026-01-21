
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
            <div className="absolute top-8 left-8">
                <Link to="/">
                    <Button variant="ghost" className="text-white hover:text-purple-400">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Voltar
                    </Button>
                </Link>
            </div>

            <div className="w-full max-w-md bg-slate-800/50 backdrop-blur-lg border border-slate-700 p-8 rounded-2xl shadow-xl">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-white mb-2">Área do Cliente</h1>
                    <p className="text-slate-400">Entre para acessar seus treinamentos</p>
                </div>

                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full p-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                            placeholder="seu@email.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            Senha
                        </label>
                        <input
                            type="password"
                            className="w-full p-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                            placeholder="••••••••"
                        />
                    </div>

                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white h-12 text-lg">
                        Entrar
                    </Button>
                </form>

                <div className="mt-6 text-center text-slate-500 text-sm">
                    Ainda não tem acesso? <Link to="/#contact" className="text-purple-400 hover:underline">Fale conosco</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
