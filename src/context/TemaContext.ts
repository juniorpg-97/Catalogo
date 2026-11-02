import { createContext } from "react";

export type Tema = "claro" | "oscuro";

export interface TemaContextoTipo {
  tema: Tema;
  alternarTema: () => void;
}

export const TemaContext = createContext<TemaContextoTipo>({
  tema: "claro",
  alternarTema: () => {},
});
