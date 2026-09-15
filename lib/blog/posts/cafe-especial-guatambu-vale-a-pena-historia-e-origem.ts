import type { BlogPost } from "@/lib/blog/types";

const coverImage = {
  src: "https://storage.googleapis.com/thecafe-pictures/coffee/original/coffee-125-1789224221.webp",
  alt: "Embalagem do Café Especial em Grãos Guatambú 250g",
};

const post: BlogPost = {
  slug: "cafe-especial-guatambu-vale-a-pena-historia-e-origem",
  title: "Café Guatambú Vale a Pena? Conheça a História de 4 Gerações no Sul de Minas",
  description:
    "Descubra a história do Café Especial Guatambú, produzido em São Sebastião do Paraíso (MG) com tradição familiar de 4 gerações, controle total da lavoura à torra e o significado do seu nome.",
  publishedAt: "2026-09-12",
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
      text: "Quem navega pelo universo dos cafés especiais sabe que por trás de um grande grão quase sempre existe uma história de dedicação com a terra. O Café Especial Guatambú é um desses exemplos marcantes, unindo tradição secular no interior de Minas Gerais com controle rigoroso de cada etapa da produção.",
    },
    {
      type: "h2",
      text: "Tradição de 4 Gerações em São Sebastião do Paraíso (MG)",
    },
    {
      type: "p",
      text: "Produzido em São Sebastião do Paraíso, uma das regiões cafeeiras mais prestigiadas do Sul de Minas, a história da família à frente do Café Guatambú acompanha quatro gerações dedicadas ao cultivo do café. Todo esse conhecimento acumulado ao longo de décadas se traduz em um cuidado único na seleção dos lotes.",
    },
    {
      type: "h2",
      text: "Do Plantio à Torra: Controle Total do Processo",
    },
    {
      type: "p",
      text: "Um dos grandes diferenciais do Café Guatambú é que eles cuidam pessoalmente de todo o ciclo: desde o plantio das mudas, passando pelo manejo sustentável, colheita seletiva, secagem e, por fim, a torra dos grãos. Ter a torrefação própria dentro da origem garante um padrão de qualidade constante e grãos sempre frescos.",
    },
    {
      type: "h2",
      text: "O Que Significa o Nome Guatambú?",
    },
    {
      type: "p",
      text: "O nome da marca é uma homenagem direta à Guatambú, uma árvore nativa símbolo de resistência, força e profunda conexão com a natureza. Essa identidade reflete a filosofia da fazenda em preservar o meio ambiente local enquanto produz grãos 100% Arábica de altíssima qualidade.",
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
