import type { BlogPost } from "@/lib/blog/types";

const coverImage = {
  src: "https://storage.googleapis.com/thecafe-pictures/coffee/original/coffee-125-1789224221.webp",
  alt: "Embalagem do Café Especial em Grãos Guatambú 250g",
};

const post: BlogPost = {
  slug: "cafe-especial-guatambu-vale-a-pena-historia-e-origem",
  title: "Café Guatambú Vale a Pena? Conheça a História de 4 Gerações no Sul de Minas",
  description:
    "Descubra a história do Café Especial Guatambú, produzido em São Sebastião do Paraíso (MG) com tradição familiar de 4 gerações, o significado do nome e o cuidado da lavoura ao pós-colheita.",
  publishedAt: "2026-09-12",
  updatedAt: "2026-09-15",
  author: "Alexandre Werneck",
  tags: [
    "café guatambú",
    "guatambu",
    "café especial",
    "sul de minas",
    "são sebastião do paraíso",
    "análise de café",
  ],
  readingTimeMinutes: 3,
  coverImage,
  content: [
    {
      type: "p",
      text: "Quem navega pelo universo dos cafés especiais sabe que por trás de um grande grão quase sempre existe uma história de dedicação com a terra. O Café Especial Guatambú é um desses exemplos marcantes, unindo tradição secular no interior de Minas Gerais com cuidado rigoroso na lavoura e no pós-colheita.",
    },
    {
      type: "h2",
      text: "Tradição de 4 Gerações em São Sebastião do Paraíso (MG)",
    },
    {
      type: "p",
      text: "Produzido em São Sebastião do Paraíso, na região Sudoeste de Minas, a história da família à frente do Café Guatambú acompanha quatro gerações dedicadas ao cultivo do café. Todo esse conhecimento acumulado ao longo de décadas se traduz em um cuidado único na seleção dos lotes.",
    },
    {
      type: "h2",
      text: "Do Plantio à Secagem: Cuidado na Origem",
    },
    {
      type: "p",
      text: "Um dos grandes diferenciais do Café Guatambú é o acompanhamento próximo do ciclo na origem: do plantio das mudas ao manejo sustentável, da colheita seletiva à secagem dos grãos. Esse controle da lavoura ao pós-colheita ajuda a manter lotes mais uniformes e fiéis ao terroir da fazenda.",
    },
    {
      type: "h2",
      text: "O Que Significa o Nome Guatambú?",
    },
    {
      type: "p",
      text: "O nome da marca é uma homenagem ao primeiro talhão de café da família. Na cafeicultura, um talhão é uma subdivisão da lavoura: uma área delimitada geograficamente onde as plantas compartilham características parecidas, o que facilita o manejo e a seleção dos lotes.",
    },
    {
      type: "p",
      text: "Esse talhão se chama Guatambú porque a árvore, nativa da região, nasce no meio do cafezal. A presença do Guatambú entre os pés de café deu identidade ao lote pioneiro e, depois, à própria marca.",
    },
    {
      type: "h2",
      text: "Como Extrair o Melhor Desse Grão?",
    },
    {
      type: "p",
      text: "Por ser um café em grãos de perfil equilibrado e aroma marcante, ele brilha tanto em métodos coados (como Hario V60 ou prensa francesa) quanto no espresso. Se você quer acertar a medida certa na hora do preparo, vale conferir o nosso guia sobre a proporção ideal para preparar café especial.",
    },
    {
      type: "link",
      text: "Ler: Qual a Proporção Ideal para Preparar o Café Especial? →",
      href: "https://blog.thecafe.app/proporcao-ideal-para-preparar-cafe-especial",
    },
    {
      type: "h2",
      text: "Confira a Ficha Técnica no Acervo",
    },
    {
      type: "p",
      text: "Já experimentou o Café Guatambú ou quer registrar suas impressões sensoriais sobre este lote? A ficha no The Cafe reúne a foto do pacote, o produtor, a torra e as opiniões da comunidade.",
    },
    {
      type: "coffeeCard",
      href: "https://www.thecafe.app/coffee/125-cafe-especial-em-graos-250g-guatambu",
      title: "Café especial EM GRÃOS 250g Guatambu",
      image: coverImage.src,
      imageAlt: coverImage.alt,
      producer: "Guatambu Café",
      meta: "100% Arábica · Grão · Torra 4/8",
      description:
        "Notas de chocolate, caramelo e melaço. Origem: Sudoeste Mineiro.",
    },
  ],
};

export default post;
