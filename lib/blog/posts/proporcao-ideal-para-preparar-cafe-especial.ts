import type { BlogPost } from "@/lib/blog/types";

const post: BlogPost = {
  slug: "proporcao-ideal-para-preparar-cafe-especial",
  title: "Qual a Proporção Ideal para Preparar o Café Especial?",
  description:
    "Descubra qual a proporção de café e água usar no seu método de preparo, como ajustar a receita de acordo com a embalagem e o seu gosto pessoal.",
  publishedAt: "2026-08-24",
  author: "Alexandre Werneck",
  tags: [
    "proporção de café",
    "receita de café",
    "como preparar café especial",
    "coado",
    "dicas de café",
  ],
  readingTimeMinutes: 3,
  coverImage: {
    src: "https://storage.googleapis.com/thecafe-pictures/coffee/original/coffee-120-1783709945.jpeg",
    alt: "Preparo de café especial coado medindo a proporção de água e café",
  },
  content: [
    {
      type: "p",
      text: "Você comprou um café especial incrível, abriu o pacote, sentiu aquele aroma marcante... mas na hora de passar na cozinha, a bebida ficou fraca demais ou amarga além da conta? O segredo para acertar a xícara perfeita quase sempre está na proporção entre café e água.",
    },
    {
      type: "h2",
      text: "A Proporção Base: Quanto Usar de Café e Água?",
    },
    {
      type: "p",
      text: "No dia a dia, muita gente começa utilizando a proporção padrão de 1:10 — ou seja, 10 gramas de café para cada 100 ml de água (ou 30g para 300ml). Essa é uma proporção que entrega uma bebida mais intensa e encorpada.",
    },
    {
      type: "p",
      text: "No entanto, no universo dos cafés especiais (grãos 100% Arábica de alta pontuação), é muito comum ver baristas iniciando com proporções mais diluídas, como 1:15 ou 1:16 (ex: 20g de café para 300ml de água), para destacar a acidez natural e as notas florais ou frutadas sem pesar o amargor.",
    },
    {
      type: "h2",
      text: "1. Fique Atento à Sugestão da Embalagem",
    },
    {
      type: "p",
      text: "Antes de definir a receita, sempre confira a embalagem do produto! As torrefações conhecem a fundo a densidade e o ponto exato de torra daquele lote. Muitas marcas imprimem no rótulo a proporção exata para a qual o café foi testado na mesa de degustação.",
    },
    {
      type: "h2",
      text: "2. O Seu Gosto Pessoal é a Regra Final",
    },
    {
      type: "p",
      text: "Não existe 'regra sagrada' no café. A proporção ideal é aquela que agrada o seu paladar:",
    },
    {
      type: "ul",
      items: [
        "Prefere um café mais encorpado e intenso? Use proporções mais concentradas (como 1:10 ou 1:12).",
        "Gosta de um café mais leve, aromático e fácil de tomar? Experimente abrir a proporção para 1:15 ou 1:16.",
        "Dica extra: Use sempre uma balança de cozinha para manter a consistência depois que encontrar o seu ponto favorito!",
      ],
    },
    {
      type: "h2",
      text: "Registre Suas Receitas e Rótulos no Acervo",
    },
    {
      type: "p",
      text: "Quer descobrir a ficha técnica do café que você está tomando hoje e ver quais notas sensoriais a comunidade encontrou nele?",
    },
    {
      type: "p",
      text: "Acesse o acervo colaborativo e explore os detalhes de centenas de rótulos no The Cafe: https://www.thecafe.app",
    },
  ],
};

export default post;
