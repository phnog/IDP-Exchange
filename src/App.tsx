import { useState, useEffect } from "react";
import "./App.css";
import FormPage from "./components/formUser";
import Quiz from "./components/quiz";
import Result from "./components/result";
import { salvarUser } from "./services/userService";

interface Formulario {
  nome: string;
  curso: string;
  telefone: string;
  email: string;
  resultado?: string;
}

function App() {
  const [step, setStep] = useState<number>(1);
  const [formulario, setFormulario] = useState<Formulario>({
    nome: "",
    curso: "",
    telefone: "",
    email: "",
    resultado: "",
  });
  useEffect(() => {
    if (step === 3 && formulario.resultado) {
      console.log("Salvando usuário no Supabase...");

      salvarUser(formulario)
        .then(() => {
          console.log("✅ Usuário salvo com sucesso!");
        })
        .catch((error) => {
          console.error("❌ Erro ao salvar usuário:", error);
        });
    }
  }, [step, formulario.resultado]);
  return (
    <>
      {formulario.resultado == "" ? (
        <img className="corner-image globe" src="worldwide.png" alt="" />
      ) : (
        <div></div>
      )}
      <div>
        <img src="logo.png" className="logo" alt="Vite logo" />
      </div>

      {step === 1 && <h1>Descubra qual país combina mais com o seu jeito!</h1>}

      {step === 2 && (
        <FormPage formulario={formulario} onFormChange={setFormulario} />
      )}

      {step == 3 && (
        <Quiz formulario={formulario} onFormChange={setFormulario} />
      )}

      {step === 3 && formulario.resultado != "" && (
        <Result curso={formulario.curso} pais={formulario.resultado} />
      )}

      {!formulario.resultado && step < 3 ? (
        <div className="card">
          <button
            onClick={() => setStep((step) => step + 1)}
            disabled={
              step === 2 &&
              (formulario.nome == "" ||
                formulario.curso == "" ||
                formulario.telefone == "" ||
                formulario.email == "")
            }
          >
            COMEÇAR A AVENTURA
          </button>
        </div>
      ) : (
        <div></div>
      )}

      {formulario.resultado == "" ? (
        <img className="corner-image plane" src="airplane.png" alt="" />
      ) : (
        <div></div>
      )}
    </>
  );
}

export default App;
