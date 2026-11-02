import { useState, useEffect } from "react";
import { TemaContext, type Tema } from "./TemaContext";

export function TemaProvider({ children }: { children: React.ReactNode }) {
  const obtenerTemaInicial = (): Tema => {
    if (typeof window !== "undefined") {
      const temaGuardado = localStorage.getItem("tema") as Tema | null;
      if (temaGuardado) return temaGuardado;

      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "oscuro";
      }
    }
    return "claro";
  };

  const [tema, setTema] = useState<Tema>(obtenerTemaInicial);

  useEffect(() => {
    const raiz = document.documentElement;

    if (tema === "oscuro") {
      raiz.classList.add("dark");
    } else {
      raiz.classList.remove("dark");
    }

    localStorage.setItem("tema", tema);
  }, [tema]);

  const alternarTema = () => {
    setTema((temaActual) => (temaActual === "claro" ? "oscuro" : "claro"));
  };

  return (
    <TemaContext.Provider value={{ tema, alternarTema }}>
      {children}
    </TemaContext.Provider>
  );
}
