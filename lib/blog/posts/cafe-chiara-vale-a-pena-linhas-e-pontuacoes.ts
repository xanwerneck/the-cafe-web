import type { BlogPost } from "@/lib/blog/types";

const coverImage = {
  src: "https://storage.googleapis.com/thecafe-pictures/coffee/original/coffee-121-1784940529.jpeg",
  alt: "Rótulo do Café Chiara Tangará 82 pontos",
};

const post: BlogPost = {
  slug: "cafe-chiara-vale-a-pena-linhas-e-pontuacoes",
  title: "Café Chiara Vale a Pena? Conheça os Rótulos, Pontuações e Origem",
  description:
    "Descubra os cafés da Chiara Café, da Fazenda Marapé em Brejetuba (ES): a homenagem à vovó Clarinha, as linhas Tangará e Flor, os microlotes e se vale a pena o investimento.",
  publishedAt: "2026-08-09",
  updatedAt: "2026-09-16",
  author: "Alexandre Werneck",
  tags: [
    "café chiara",
    "Chiara Café",
    "café especial",
    "fazenda marapé",
    "brejetuba",
    "café capixaba",
    "microlote",
    "análise de café",
    "custo benefício",
  ],
  readingTimeMinutes: 4,
  coverImage,
  content: [
    {
      type: "p",
      text: "Se você está buscando cafés especiais que combinam alta qualidade com um preço acessível para o consumo diário, a Chiara Café é uma marca que merece entrar no seu radar. Produzida na Fazenda Marapé, em Brejetuba (ES), ela une história familiar, terroir de montanha e um excelente custo-benefício — com rótulos que vão do coado do dia a dia aos microlotes.",
    },
    {
      type: "h2",
      text: "Tradição e Origem Familiar",
    },
    {
      type: "p",
      text: "Um dos pontos mais interessantes da Chiara Café é a sua história. Trata-se de uma produção de origem familiar, fundamentada no cuidado desde o manejo na lavoura até a seleção final dos grãos. Essa dedicação se reflete no padrão constante que entregam em cada pacote.",
    },
    {
      type: "p",
      text: "Conforme explicado no site da Chiara Café, o nome da marca é uma homenagem à vovó Clarinha - a matriarca da família - \"Traduzido para italiano, seguindo nossas raízes, vovó Clarinha nos serviu de inspiração para a criação marca Chiara\". Tornou-se o nome que hoje estampa os pacotes da marca.",
    },
    {
      type: "h2",
      text: "Fazenda Marapé: Uma Comunidade no Café",
    },
    {
      type: "p",
      text: "Os grãos da Chiara saem da Fazenda Marapé. Lá moram 12 famílias que, há mais de 20 anos, constroem esse legado junto com a marca. A fazenda se descreve como uma comunidade: além dos pés de café, nascem filhos dos trabalhadores, com escola, lazer e espaço para os próprios sonhos. A missão declarada é garantir suporte, individual e coletivo — gostar de pessoas e zelar por elas.",
    },
    {
      type: "h2",
      text: "Origem dos Grãos: Brejetuba, nas Montanhas Capixabas",
    },
    {
      type: "p",
      text: "A Fazenda Marapé fica em Brejetuba, nas montanhas do Espírito Santo. Altitude e clima da região são ideais para um café rico em sabor e em qualidade — e, como a própria Chiara enfatiza, em histórias. Esse terroir de montanha ajuda a explicar a doçura e o equilíbrio que aparecem nos rótulos da casa.",
    },
    {
      type: "link",
      text: "Conheça a trajetória e os valores da família na página Quem Somos da Chiara Café →",
      href: "https://caffechiara.com.br/pages/quem-somos",
    },
    {
      type: "h2",
      text: "Conheça os Principais Rótulos da Chiara Café",
    },
    {
      type: "p",
      text: "A marca oferece opções que atendem desde quem busca uma xícara equilibrada para o dia a dia até quem quer explorar complexidades sensoriais:",
    },
    {
      type: "ul",
      items: [
        "Chiara Tangará (82 Pontos): Um café especial bastante equilibrado e versátil, ideal para o coado do dia a dia, entregando doçura honesta e acidez suave.",
        "Chiara Flor (85 Pontos): Subindo o nível na escala SCA, o rótulo Flor entrega uma pontuação elevada com notas florais e frutadas mais evidentes, perfeito para quem busca maior complexidade.",
        "Microlotes Especiais: Lotes limitados produzidos com processos diferenciados de colheita e fermentação para quem quer uma experiência sensorial exclusiva.",
      ],
    },
    {
      type: "h2",
      text: "Vale a Pena Comprar?",
    },
    {
      type: "p",
      text: "Sim! Para quem deseja sair dos cafés tradicionais de supermercado sem gastar uma fortuna em microlotes caros, a Chiara Café entrega exatamente o que promete: grãos 100% Arábica de qualidade, pontuações honestas e uma origem rastreável — da homenagem à vovó Clarinha à Fazenda Marapé, em Brejetuba.",
    },
    {
      type: "h2",
      text: "Confira a Ficha do Chiara no Acervo",
    },
    {
      type: "p",
      text: "Já experimentou o Café Chiara ou quer registrar suas impressões sensoriais sobre este lote? A ficha no The Cafe reúne a foto do pacote, o produtor, a torra e as opiniões da comunidade.",
    },
    {
      type: "coffeeCard",
      href: "https://www.thecafe.app/coffee/121-chiara",
      title: "Chiara",
      image: coverImage.src,
      imageAlt: coverImage.alt,
      producer: "Andrea Vivacqua",
      meta: "Grão · Torra 4/8",
      description:
        "Notas de chocolate e caramelo. Origem: Fazenda Marapé.",
    },
  ],
};

export default post;
