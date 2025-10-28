import React, { useEffect, useState } from "react";
import { school, paises, faculdades } from "./lists/schools";

type ResultProps = {
  curso: string;
  pais?: string;
};
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

const Result: React.FC<ResultProps> = ({ curso, pais }) => {
  const [load, setLoad] = useState(true);
  const [faculdade, setFaculdade] = useState<string[]>([]);

  setTimeout(() => {
    setLoad(false);
  }, 3000);

  useEffect(() => {
    console.log(curso, pais, school);

    const uniList =
      school[curso as keyof typeof school]?.[pais as keyof typeof paises]
        ?.faculdades || [];
    setFaculdade(uniList);
  }, []);

  return (
    <React.Fragment>
      {load ? (
        <div className="loading-container">
          <img src="/load.gif" alt="Carregando..." className="loading-image" />
        </div>
      ) : (
        <div>
          <div className="exchange-container">
            <div className="exchange-content">
              <div className="exchange-text-section">
                <div
                  dangerouslySetInnerHTML={{ __html: paises[pais as Pais] }}
                />

                <p>Para o seu curso, as universidades recomendadas são:</p>
                {faculdade.map((uni, index) => (
                  <p key={index}>
                    {" "}
                    <b>{uni} </b>
                  </p>
                ))}
              </div>

              <div className="exchange-image-section">
                <img
                  src={
                    faculdades[
                      faculdade[Math.floor(Math.random() * faculdade.length)]
                    ]
                  }
                />
              </div>
            </div>
          </div>
          <br />
          <button onClick={() => window.location.reload()}>
            FAZER UM NOVO QUIZ
          </button>
        </div>
      )}
    </React.Fragment>
  );
};

export default Result;
