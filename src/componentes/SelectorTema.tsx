import { useTema } from "../hooks/useTema";

export function SelectorTema() {
  const { tema, alternarTema } = useTema();

  return (
    <button
      type="button"
      onClick={alternarTema}
      className="button secondary"
      aria-label={`Cambiar a tema ${tema === "claro" ? "oscuro" : "claro"}`}
      title={`Cambiar a tema ${tema === "claro" ? "oscuro" : "claro"}`}
    >
      {tema === "claro" ? "🌙 Oscuro" : "☀️ Claro"}
    </button>
  );
}
