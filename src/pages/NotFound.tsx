import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-950/80 to-slate-900 px-6">
      <div className="max-w-md text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
          Erro 404
        </p>
        <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
          Página não encontrada
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
          O endereço <span className="text-slate-200">{location.pathname}</span>{" "}
          não existe ou foi movido.
        </p>

        <Link to="/" className="mt-8 inline-block">
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para a Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
