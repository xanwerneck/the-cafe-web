import type { BlogPost } from "@/lib/blog/types";

const post: BlogPost = {
  slug: "o-que-e-cafe-especial",
  title: "O que é café especial? Guia completo para iniciantes",
  description:
    "Entenda o que define um café especial, como ler rótulos, identificar origens e começar sua jornada no mundo dos grãos de qualidade.",
  publishedAt: "2026-07-19",
  author: "The Cafe",
  tags: ["café especial", "guia", "iniciantes", "origens"],
  readingTimeMinutes: 6,
  content: [
    {
      type: "p",
      text: "Se você já passou por uma cafeteria de specialty coffee ou recebeu a recomendação de um amigo entusiasta, provavelmente ouviu a expressão café especial. Mas o que isso significa na prática — e por que tantas pessoas estão trocando o pacote tradicional por grãos selecionados?",
    },
    {
      type: "p",
      text: "Café especial não é apenas marketing. Em termos técnicos, trata-se de grãos classificados com pontuação acima de 80 pontos na escala da SCA (Specialty Coffee Association), livres de defeitos graves e com rastreabilidade de origem. Na experiência do consumidor, isso se traduz em mais aroma, doçura, acidez equilibrada e notas sensoriais que vão muito além do amargo.",
    },
    {
      type: "h2",
      text: "O que diferencia café especial do tradicional?",
    },
    {
      type: "ul",
      items: [
        "Seleção rigorosa dos grãos na origem e após a colheita",
        "Rastreabilidade: você sabe de onde veio, quem produziu e como foi processado",
        "Torra mais cuidadosa, pensada para valorizar as características do grão",
        "Notas sensoriais distintas — frutas, chocolate, flor, caramelo e muito mais",
      ],
    },
    {
      type: "h2",
      text: "Como ler um rótulo de café especial",
    },
    {
      type: "p",
      text: "Um bom rótulo costuma informar origem (país, região ou fazenda), produtor ou torrefação, processo (natural, lavado, honey), altitude, variedade do grão e data de torra. Quanto mais informação, melhor para comparar experiências e repetir aquela xícara que você amou.",
    },
    {
      type: "p",
      text: "No The Cafe, você cataloga exatamente esses dados — foto do pacote, origem, produtor, torra, notas e sua opinião — para construir sua estante virtual e evoluir como apreciador.",
    },
    {
      type: "h2",
      text: "Por onde começar",
    },
    {
      type: "ul",
      items: [
        "Experimente origens diferentes: Etiópia, Colômbia, Brasil, Guatemala",
        "Varie o método: filtro, prensa francesa, espresso ou V60",
        "Anote o que gostou: doçura, acidez, corpo e retrogosto",
        "Compare rótulos parecidos para treinar o paladar",
      ],
    },
    {
      type: "p",
      text: "Café especial é uma jornada de descoberta. Quanto mais você registra o que prova, mais rápido aprende a identificar perfis que combinam com o seu gosto — e encontra novos grãos para experimentar.",
    },
  ],
};

export default post;
