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

type School = {
  [C in Curso]?: {
    [P in Pais]?: {
      faculdades: string[];
    };
  };
};

export const school: School = {
  direito: {
    Alemanha: {
      faculdades: ["Goethe University"],
    },
    Espanha: {
      faculdades: [
        "Comillas Universidad Pontificia",
        "Universidad Jaume I",
        "Universidad de Nebrija",
      ],
    },
    Italia: {
      faculdades: [
        "Universidade de Nápoles Federico II",
        "Università degli Studi Roma Tre",
      ],
    },
    Portugal: {
      faculdades: [
        "Universidade Nova de Lisboa – Nova Law School",
        "Universidade de Coimbra",
      ],
    },
    Romenia: {
      faculdades: [
        "National University of Political Studies and Public Administration",
      ],
    },
    China: {
      faculdades: ["University of Macau", "Chinese University of Hong Kong"],
    },
    Argentina: {
      faculdades: [
        "Universidad de Buenos Aires",
        "Universidad de Mendoza",
        "Universidad Nacional de La Plata",
      ],
    },
    Chile: {
      faculdades: ["Universidad Mayor"],
    },
    Colombia: {
      faculdades: ["Universidad Tecnológica de Bolívar"],
    },
    Uruguai: {
      faculdades: ["Universidad de Montevideo"],
    },
  },
  irel: {
    Espanha: {
      faculdades: ["Universidad Jaume I", "Universidad de Nebrija"],
    },
    Italia: {
      faculdades: [
        "Universidade de Nápoles Federico II",
        "Università degli Studi Roma Tre",
      ],
    },
    Portugal: {
      faculdades: [
        "Universidade de Lisboa – ISCSP",
        "Universidade Nova de Lisboa – FCSH",
        "Universidade de Coimbra",
      ],
    },
    Romenia: {
      faculdades: [
        "National University of Political Studies and Public Administration",
      ],
    },
    China: {
      faculdades: ["Chinese University of Hong Kong"],
    },
    Argentina: {
      faculdades: [
        "Universidad de Mendoza",
        "Universidad Nacional de La Plata",
      ],
    },
    Chile: {
      faculdades: ["Universidad de Chile"],
    },
    Colombia: {
      faculdades: ["Universidad Tecnológica de Bolívar"],
    },
    Uruguai: {
      faculdades: ["Universidad de Montevideo"],
    },
  },
  administracao: {
    Espanha: {
      faculdades: ["Universidad Jaume I", "Universidad de Nebrija"],
    },
    Italia: {
      faculdades: [
        "Universidade de Nápoles Federico II",
        "Università degli Studi Roma Tre",
      ],
    },
    Portugal: {
      faculdades: ["Universidade de Lisboa – ISCSP", "Universidade de Coimbra"],
    },
    Romenia: {
      faculdades: [
        "National University of Political Studies and Public Administration",
      ],
    },
    China: {
      faculdades: ["Chinese University of Hong Kong"],
    },
    Argentina: {
      faculdades: [
        "Universidad de Mendoza",
        "Universidad Nacional de La Plata",
      ],
    },
    Chile: {
      faculdades: ["Universidad Mayor"],
    },
    Colombia: {
      faculdades: ["Universidad Tecnológica de Bolívar"],
    },
    Uruguai: {
      faculdades: ["Universidad de Montevideo"],
    },
  },
  economia: {
    Espanha: {
      faculdades: ["Universidad Jaume I", "Universidad de Nebrija"],
    },
    Italia: {
      faculdades: [
        "Universidade de Nápoles Federico II",
        "Università degli Studi Roma Tre",
      ],
    },
    Portugal: {
      faculdades: ["Universidade de Lisboa – ISCSP", "Universidade de Coimbra"],
    },
    Romenia: {
      faculdades: [
        "National University of Political Studies and Public Administration",
      ],
    },
    China: {
      faculdades: ["Chinese University of Hong Kong"],
    },
    Argentina: {
      faculdades: [
        "Universidad de Mendoza",
        "Universidad Nacional de La Plata",
      ],
    },
    Colombia: {
      faculdades: ["Universidad Tecnológica de Bolívar"],
    },
    Uruguai: {
      faculdades: ["Universidad de Montevideo"],
    },
  },
  publicidade: {
    Espanha: {
      faculdades: ["Universidad Jaume I", "Universidad de Nebrija"],
    },
    Portugal: {
      faculdades: [
        "Universidade de Lisboa – ISCSP",
        "Universidade Nova de Lisboa – FCSH",
        "Universidade de Coimbra",
      ],
    },
    Romenia: {
      faculdades: [
        "National University of Political Studies and Public Administration",
      ],
    },
    China: {
      faculdades: ["Chinese University of Hong Kong"],
    },
    Argentina: {
      faculdades: [
        "Universidad de Mendoza",
        "Universidad Nacional de La Plata",
      ],
    },
    Chile: {
      faculdades: ["Universidad Mayor"],
    },
    Colombia: {
      faculdades: ["Universidad Tecnológica de Bolívar"],
    },
    Uruguai: {
      faculdades: ["Universidad de Montevideo"],
    },
  },
  arquitetura: {
    Espanha: {
      faculdades: ["Universidad Jaume I", "Universidad de Nebrija"],
    },
    Portugal: {
      faculdades: ["Universidade de Coimbra"],
    },
    Romenia: {
      faculdades: [
        "National University of Political Studies and Public Administration",
      ],
    },
    China: {
      faculdades: ["Chinese University of Hong Kong"],
    },
    Argentina: {
      faculdades: [
        "Universidad de Mendoza",
        "Universidad Nacional de La Plata",
      ],
    },
    Chile: {
      faculdades: ["Universidad Mayor"],
    },
    Colombia: {
      faculdades: ["Universidad Tecnológica de Bolívar"],
    },
    Uruguai: {
      faculdades: ["Universidad de Montevideo"],
    },
  },
  cic: {
    Portugal: {
      faculdades: ["Universidade da Beira Interior", "Universidade de Coimbra"],
    },
    Espanha: {
      faculdades: ["Universidad Jaume I", "Universidad de Nebrija"],
    },
    Romenia: {
      faculdades: [
        "National University of Political Studies and Public Administration",
      ],
    },
    China: {
      faculdades: ["Chinese University of Hong Kong"],
    },
    Argentina: {
      faculdades: [
        "Universidad de Mendoza",
        "Universidad Nacional de La Plata",
      ],
    },
    Chile: {
      faculdades: ["Universidad Mayor"],
    },
    Colombia: {
      faculdades: ["Universidad Tecnológica de Bolívar"],
    },
    Uruguai: {
      faculdades: ["Universidad de Montevideo"],
    },
  },
  software: {
    Portugal: {
      faculdades: ["Universidade da Beira Interior", "Universidade de Coimbra"],
    },
    Espanha: {
      faculdades: ["Universidad Jaume I", "Universidad de Nebrija"],
    },
    Romenia: {
      faculdades: [
        "National University of Political Studies and Public Administration",
      ],
    },
    China: {
      faculdades: ["Chinese University of Hong Kong"],
    },
    Argentina: {
      faculdades: [
        "Universidad de Mendoza",
        "Universidad Nacional de La Plata",
      ],
    },
    Chile: {
      faculdades: ["Universidad Mayor"],
    },
    Colombia: {
      faculdades: ["Universidad Tecnológica de Bolívar"],
    },
    Uruguai: {
      faculdades: ["Universidad de Montevideo"],
    },
  },
  psicologia: {
    Portugal: {
      faculdades: ["Universidade da Beira Interior", "Universidade de Coimbra"],
    },
    Espanha: {
      faculdades: ["Universidad Jaume I", "Universidad de Nebrija"],
    },
    Romenia: {
      faculdades: [
        "National University of Political Studies and Public Administration",
      ],
    },
    China: {
      faculdades: ["Chinese University of Hong Kong"],
    },
    Argentina: {
      faculdades: [
        "Universidad de Mendoza",
        "Universidad Nacional de La Plata",
      ],
    },
    Colombia: {
      faculdades: ["Universidad Tecnológica de Bolívar"],
    },
    Uruguai: {
      faculdades: ["Universidad de Montevideo"],
    },
  },
};
export const paises: Record<Pais, string> = {
  Alemanha:
    "Você é uma pessoa disciplinada, organizada e focada — alguém que valoriza a estrutura, o conhecimento e o esforço constante.<br/><br/>Por isso, o seu destino ideal é <b>Alemanha</b>, um país que une tradição e inovação, com excelência em tudo o que faz.",

  China:
    "Você é curioso(a), ambicioso(a) e se adapta com facilidade a novas culturas — alguém que busca compreender o mundo sob diferentes perspectivas.<br/><br/>Por isso, o seu destino ideal é <b>China</b>, um lugar de contrastes fascinantes onde tradição e modernidade convivem em perfeita harmonia.",

  Italia:
    "Você é criativo(a), apaixonado(a) e movido(a) pela beleza e pela arte — alguém que vive intensamente e sabe apreciar os prazeres simples da vida.<br/><br/>Por isso, o seu destino ideal é <b>Itália</b>, berço da cultura, da gastronomia e de uma forma única de celebrar cada momento com emoção e autenticidade.",

  Espanha:
    "Você é extrovertido(a), vibrante e cheio(a) de energia — alguém que vive a vida com entusiasmo e alegria.<br/><br/>Por isso, o seu destino ideal é <b>Espanha</b>, um país cheio de cores, sabores e uma vida social contagiante.",

  Portugal:
    "Você é tranquilo(a), empático(a) e busca equilíbrio em tudo o que faz — alguém que aprecia boas conversas, belas paisagens e uma vida com propósito.<br/><br/>Por isso, o seu destino ideal é <b>Portugal</b>, um país acolhedor, cheio de história, charme e um ritmo de vida harmonioso.",

  Romenia:
    "Você é autêntico(a), reflexivo(a) e curioso(a) — alguém que busca compreender o mundo e a si mesmo(a) em profundidade.<br/><br/>Por isso, o seu destino ideal é <b>Romênia</b>, um país rico em tradições, natureza exuberante e experiências transformadoras.",

  Argentina:
    "Você é intenso(a), comunicativo(a) e cheio(a) de emoção — alguém que valoriza conexões genuínas e vive cada momento com paixão.<br/><br/>Por isso, o seu destino ideal é <b>Argentina</b>, terra de cultura vibrante, boa conversa e um charme que conquista ao som do tango.",

  Chile:
    "Você é aventureiro(a), conectado(a) à natureza e valoriza a autenticidade das pessoas e dos lugares.<br/><br/>Por isso, o seu destino ideal é <b>Chile</b>, um país de paisagens impressionantes — do deserto às montanhas — e de uma energia que inspira novas descobertas.",

  Colombia:
    "Você é alegre, caloroso(a) e cheio(a) de curiosidade — alguém que espalha boas energias e se encanta pelas histórias das pessoas.<br/><br/>Por isso, o seu destino ideal é <b>Colômbia</b>, um país vibrante, cheio de cores, música e hospitalidade contagiante.",

  Uruguai:
    "Você é sereno(a), equilibrado(a) e valoriza uma vida tranquila e de qualidade — alguém que busca harmonia, boas companhias e momentos significativos.<br/><br/>Por isso, o seu destino ideal é <b>Uruguai</b>, um país acolhedor, encantador e com um charme simples que conquista quem o visita.",
};

export const faculdades: Record<string, string> = {
  // 🇩🇪 Alemanha
  "Goethe University": "GoetheUniversity.png",

  // 🇪🇸 Espanha
  "Comillas Universidad Pontificia": "ComillasUniversidad.png",
  "Universidad Jaume I": "UniversidadJaume.png",
  "Universidad de Nebrija": "Nebrija.png",

  // 🇮🇹 Itália
  "Universidade de Nápoles Federico II": "NapolesFederico.png",
  "Università degli Studi Roma Tre": "StudiRoma.png",

  // 🇵🇹 Portugal
  "Universidade Nova de Lisboa – Nova Law School": "NovaLaw.png",
  "Universidade Nova de Lisboa – FCSH": "FCSH.png",
  "Universidade de Coimbra": "Coimbra.png",
  "Universidade da Beira Interior": "BeiraInterior.png",
  "Universidade de Lisboa – ISCSP": "ISCSP.png",

  // 🇷🇴 Romênia
  "National University of Political Studies and Public Administration":
    "NUPSP.png",

  // 🇨🇳 China
  "University of Macau": "Macau.png",
  "Chinese University of Hong Kong": "HongKong.png",

  // 🇦🇷 Argentina
  "Universidad de Buenos Aires": "BuenosAires.png",
  "Universidad de Mendoza": "Mendoza.png",
  "Universidad Nacional de La Plata": "LaPlata.png",

  // 🇨🇱 Chile
  "Universidad Mayor": "Mayor.png",
  "Universidad de Chile": "Chile.png",

  // 🇨🇴 Colômbia
  "Universidad Tecnológica de Bolívar": "Bolivia.png",

  // 🇺🇾 Uruguai
  "Universidad de Montevideo": "Montevideo.png",
};
