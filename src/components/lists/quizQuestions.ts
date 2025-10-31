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

type OpcaoID = "a" | "b" | "c" | "d";

interface Opcao {
  opcao: string;
  value: Pais[];
}

interface Pergunta {
  pergunta: string;
  opcoes: Record<OpcaoID, Opcao>;
}

type Quiz = Record<number, Pergunta>;

export const quiz: Quiz = {
  1: {
    pergunta: "O que mais te inspira na experiência de viver em outro país?",
    opcoes: {
      a: {
        opcao: "Fazer parte de uma comunidade acolhedora.",
        value: ["Portugal", "Colombia", "Romenia"],
      },
      b: {
        opcao: "Mergulhar em uma cultura vibrante e intensa.",
        value: ["Espanha", "Argentina"],
      },
      c: {
        opcao: "Viver rodeado de inovação e tecnologia.",
        value: ["Alemanha", "China"],
      },
      d: {
        opcao: "Aproveitar um ritmo de vida equilibrado e tranquilo.",
        value: ["Italia", "Chile", "Uruguai"],
      },
    },
  },
  2: {
    pergunta: "Em um novo ambiente, o que você costuma observar primeiro?",
    opcoes: {
      a: {
        opcao: "As pessoas e como se relacionam.",
        value: ["Argentina", "Portugal", "China"],
      },
      b: {
        opcao: "A arquitetura e o patrimônio cultural.",
        value: ["Italia", "Colombia", "Chile"],
      },
      c: {
        opcao: "A eficiência e a pontualidade.",
        value: ["Alemanha", "Uruguai"],
      },
      d: {
        opcao: "A natureza e o clima local.",
        value: ["Espanha", "Romenia"],
      },
    },
  },
  3: {
    pergunta: "Qual seria seu domingo ideal durante o intercâmbio?",
    opcoes: {
      a: {
        opcao: "Caminhar pelas ruas históricas com amigos.",
        value: ["Romenia", "Portugal", "China"],
      },
      b: {
        opcao: "Assistir a um concerto ou exposição de arte.",
        value: ["Espanha", "Colombia"],
      },
      c: {
        opcao: "Programar uma viagem curta e explorar algo novo.",
        value: ["Alemanha", "Chile"],
      },
      d: {
        opcao: "Ler em um café local observando o cotidiano.",
        value: ["Argentina", "Italia", "Uruguai"],
      },
    },
  },
  4: {
    pergunta: "Como você reage diante de situações imprevisíveis?",
    opcoes: {
      a: {
        opcao: "Mantém a calma e busca o consenso.",
        value: ["Portugal", "Uruguai"],
      },
      b: {
        opcao: "Planeja rapidamente uma solução racional.",
        value: ["Alemanha", "China"],
      },
      c: {
        opcao: "Improvisa com criatividade.",
        value: ["Argentina", "Colombia", "Italia"],
      },
      d: {
        opcao: "Analisa com calma antes de agir.",
        value: ["Espanha", "Chile", "Romenia"],
      },
    },
  },
  5: {
    pergunta: "Qual dessas palavras te representa melhor?",
    opcoes: {
      a: {
        opcao: "Determinação",
        value: ["Alemanha", "Romenia", "Chile"],
      },
      b: {
        opcao: "Curiosidade",
        value: ["Colombia", "Italia"],
      },
      c: {
        opcao: "Criatividade",
        value: ["Espanha", "Argentina", "Uruguai"],
      },
      d: {
        opcao: "Serenidade",
        value: ["Portugal", "China"],
      },
    },
  },
  6: {
    pergunta: "Quando pensa em sucesso pessoal, você imagina em?",
    opcoes: {
      a: {
        opcao: "Um ambiente estável, com boa qualidade de vida.",
        value: ["Portugal", "Uruguai", "Colombia"],
      },
      b: {
        opcao: "O reconhecimento por ideias inovadoras.",
        value: ["China", "Alemanha"],
      },
      c: {
        opcao: "Crescimento por meio de conexões humanas.",
        value: ["Argentina", "Italia"],
      },
      d: {
        opcao: "A conquista de metas com disciplina.",
        value: ["Espanha", "Romenia", "Chile"],
      },
    },
  },
  7: {
    pergunta: "O que mais te motiva a sair da sua zona de conforto?",
    opcoes: {
      a: {
        opcao: "Conhecer pessoas com perspectivas diferentes.",
        value: ["Portugal", "Romenia", "Argentina"],
      },
      b: {
        opcao: "Enfrentar desafios culturais e linguísticos.",
        value: ["Alemanha", "China"],
      },
      c: {
        opcao: "Descobrir um novo estilo de vida.",
        value: ["Italia", "Uruguai", "Chile"],
      },
      d: {
        opcao: "Aprender a pensar de forma global.",
        value: ["Espanha", "Colombia"],
      },
    },
  },
  8: {
    pergunta: "Como seria o intercâmbio dos seus sonhos?",
    opcoes: {
      a: {
        opcao: "Um tempo para refletir e amadurecer pessoalmente.",
        value: ["Romenia", "Portugal", "Uruguai"],
      },
      b: {
        opcao: "Uma vivência criativa, cultural e intensa.",
        value: ["Espanha", "Italia", "Argentina"],
      },
      c: {
        opcao: "Uma experiência prática em ambiente moderno e eficiente.",
        value: ["Alemanha", "Colombia"],
      },
      d: {
        opcao: "Uma imersão em tradições milenares e sabedoria oriental.",
        value: ["China", "Chile"],
      },
    },
  },
  9: {
    pergunta: "Como descreveria o lugar ideal para viver?",
    opcoes: {
      a: {
        opcao: "Um país moderno e tecnológico.",
        value: ["Alemanha", "China"],
      },
      b: {
        opcao: "Um destino com história e arte em cada esquina.",
        value: ["Italia", "Romenia", "Espanha"],
      },
      c: {
        opcao: "Uma sociedade acolhedora e com boa gastronomia.",
        value: ["Portugal", "Argentina", "Colombia"],
      },
      d: {
        opcao: "Uma cidade pacífica e com equilíbrio entre trabalho e lazer.",
        value: ["Uruguai", "Chile"],
      },
    },
  },
  10: {
    pergunta: "Ao final do intercâmbio, você quer poder dizer que...",
    opcoes: {
      a: {
        opcao: "Me tornei mais independente e resiliente.",
        value: ["Romenia", "Alemanha", "China"],
      },
      b: {
        opcao: "Aprendi a viver com propósito e equilíbrio.",
        value: ["Portugal", "Chile", "Uruguai"],
      },
      c: {
        opcao: "Ampliei minha visão de mundo e fiz grandes amigos.",
        value: ["Colombia", "Argentina", "Espanha"],
      },
      d: {
        opcao: "Fui inspirado por uma cultura rica e vibrante.",
        value: ["Italia"],
      },
    },
  },
};
