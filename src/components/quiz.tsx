import { useState } from "react";
import { quiz } from "./lists/quizQuestions";
import { school } from "./lists/schools";

interface Formulario {
  nome: string;
  curso: string;
  telefone: string;
  email: string;
  resultado?: string;
}

interface FormPageProps {
  formulario: Formulario;
  onFormChange: (form: Formulario) => void;
}

type Pais =
  | "Alemanha"
  | "Espanha"
  | "Italia"
  | "Portugal"
  | "Romenia"
  | "China"
  | "Argentina"
  | "Chile"
  | "Colombia"
  | "Uruguai";

type Curso =
  | "direito"
  | "irel"
  | "administracao"
  | "economia"
  | "publicidade"
  | "arquitetura"
  | "cic"
  | "software"
  | "psicologia";

const QuizIntercambio: React.FC<FormPageProps> = ({
  formulario,
  onFormChange,
}) => {
  const [perguntaAtual, setPerguntaAtual] = useState(1);

  const [finalizado, setFinalizado] = useState(false);

  type PaisesPontuacao = {
    Alemanha: number;
    Argentina: number;
    Chile: number;
    China: number;
    Colombia: number;
    Espanha: number;
    Italia: number;
    Portugal: number;
    Romenia: number;
    Uruguai: number;
  };

  const [contagemPaises, setContagemPaises] = useState<PaisesPontuacao>({
    Alemanha: 0,
    Argentina: 2,
    Chile: 2,
    China: 2,
    Colombia: 2,
    Espanha: 0,
    Italia: 0,
    Portugal: 0,
    Romenia: 0,
    Uruguai: 2,
  });

  const handleResposta = (val: string[]) => {
    console.log(val);
    val.forEach((pais: string) => {
      const key = pais as keyof PaisesPontuacao;
      setContagemPaises((prev) => ({
        ...prev,
        [key]: (prev[key] || 0) + 1,
      }));
    });
    if (perguntaAtual == 10) {
      const curso = formulario.curso as Curso;

      const paisesOrdenados = Object.entries(contagemPaises)
        .sort(([, a], [, b]) => b - a)
        .map(([pais]) => pais as Pais);

      let paisEscolhido: Pais | null = null;

      for (const pais of paisesOrdenados) {
        if (school[curso]?.[pais]) {
          paisEscolhido = pais;
          break;
        }
      }

      const paisFinal = paisEscolhido ?? paisesOrdenados[0];

      onFormChange({
        ...formulario,
        resultado: paisFinal,
      });

      setFinalizado(true);
    } else setPerguntaAtual(perguntaAtual + 1);
  };

  const paisMaisPontuado = () => {
    const max = Math.max(...Object.values(contagemPaises));
    return Object.entries(contagemPaises)
      .filter(([_, pontos]) => pontos === max)
      .map(([pais]) => pais);
  };

  return (
    <div>
      {!finalizado ? (
        <div className="container-pergunta">
          <h2>{quiz[perguntaAtual].pergunta}</h2>
          <div className="opcoes">
            {Object.entries(quiz[perguntaAtual].opcoes).map(
              ([letra, texto]) => (
                <button key={letra} onClick={() => handleResposta(texto.value)}>
                  {texto.opcao}
                </button>
              )
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default QuizIntercambio;

/**
 * 
 * <div className="resultado">
          <h2>Seu destino ideal de intercâmbio é:</h2>
          <ul>
            {paisMaisPontuado().map((pais) => {
              const key = pais as keyof typeof contagemPaises;
              return (
                <li key={pais}>
                  <strong>{pais}</strong> — {contagemPaises[key]} ponto(s)
                </li>
              );
            })}
          </ul>

          <h3>Pontuação completa:</h3>
          <ul>
            {Object.entries(contagemPaises)
              .sort((a, b) => b[1] - a[1])
              .map(([pais, pontos]) => (
                <li key={pais}>
                  {pais}: {pontos} ponto(s)
                </li>
              ))}
          </ul>
        </div>
 * 
 * 
 */
