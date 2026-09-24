import type { BlogPost } from "@/lib/blog/types";

const coverImage = {
  src: "https://storage.googleapis.com/thecafe-pictures/coffee/original/coffee-120-1783709945.jpeg",
  alt: "Preparo de café especial coado na chaleira pescoço de ganso",
};

const post: BlogPost = {
  slug: "5-erros-que-destroem-seu-cafe-especial",
  title: "5 Erros Clássicos que Destroem o seu Café Especial (e Você Continua Fazendo)",
  description:
    "Você pode estar jogando dinheiro fora no seu coado diário sem perceber. Descubra os 5 erros mais comuns ao preparar café especial e como corrigir hoje.",
  publishedAt: "2026-09-24",
  author: "Alexandre Werneck",
  tags: [
    "dicas de café",
    "preparo de café",
    "erros no café",
    "café especial",
    "coado",
    "barista",
  ],
  readingTimeMinutes: 4,
  coverImage,
  content: [
    {
      type: "p",
      text: "Você escolhe a dedo um grão 100% Arábica de alta pontuação, investe num pacote incrível, mas na hora de tomar a xícara em casa... o café fica amargo, sem aroma ou com gosto de nada? O problema quase nunca é o grão. A verdade é que pequenos hábitos no preparo diário podem arruinar completamente a experiência sensorial de um café especial.",
    },
    {
      type: "p",
      text: "Listamos os 5 erros mais comuns que quase todo mundo comete na cozinha — e como ajustar a sua rotina para nunca mais jogar dinheiro fora.",
    },
    {
      type: "h2",
      text: "1. Usar Água Fervendo Trincando (100°C Direct no Pó)",
    },
    {
      type: "p",
      text: "Aquele mito de que 'a água precisa ferver bastante para extrair o café' é o pesadelo dos grãos de torra média ou clara. Jogar água fervendo diretamente sobre o pó queima os compostos aromáticos mais delicados e traz um amargor excessivo para a xícara.",
    },
    {
      type: "p",
      text: "Dica: Assim que a água atingir a fervura, desligue o fogo e aguarde cerca de 45 a 60 segundos antes de começar a despejar. A temperatura ideal fica entre 90°C e 94°C.",
    },
    {
      type: "h2",
      text: "2. Guardar o Café na Geladeira ou no Congelador Sem Vedação",
    },
    {
      type: "p",
      text: "O café é higroscópico, o que significa que ele absorve umidade e odores do ambiente como uma esponja. Se você guarda o pacote aberto na geladeira ao lado da comida, o seu café vai absorver a umidade do eletrodoméstico e perder a doçura natural rapidinho.",
    },
    {
      type: "p",
      text: "Dica: Mantenha o café na própria embalagem original (que tem válvula desgaseificadora e ziplock) ou em um pote hermético opaco, dentro do armário, longe de luz, calor e umidade.",
    },
    {
      type: "h2",
      text: "3. Esquecer de Escaldar o Filtro de Papel",
    },
    {
      type: "p",
      text: "Se você coloca o pó direto no filtro de papel seco e despeja a água quente, o gosto residual de celulose vai direto para a sua xícara. Além disso, o filtro seco absorve a primeira água da extração, que é justamente a mais rica em óleos e aromas.",
    },
    {
      type: "p",
      text: "Dica: Passe água quente por todo o filtro de papel antes de colocar o pó e descarte essa água da jarra. Só então adicione o café moído.",
    },
    {
      type: "h2",
      text: "4. Errar Feio na Proporção de Água e Café",
    },
    {
      type: "p",
      text: "Fazer café no 'olhômetro' usando colheres de mãe é uma roleta russa: um dia fica fraco e ressecado, no outro fica denso e travando a língua. O café especial exige consistência.",
    },
    {
      type: "p",
      text: "Dica: Use sempre uma balança de cozinha simples. Para não ter erro na matemática, confira o nosso guia prático sobre a proporção ideal para preparar o café especial.",
    },
    {
      type: "coffeeCard",
      href: "https://blog.thecafe.app/proporcao-ideal-para-preparar-cafe-especial",
      title: "Qual a Proporção Ideal para Preparar o Café Especial?",
      image:
        "https://storage.googleapis.com/thecafe-pictures/coffee/original/coffee-120-1783709945.jpeg",
      imageAlt: "Preparo de café especial coado medindo a proporção de água e café",
      description:
        "Descubra qual a proporção de café e água usar no seu método de preparo, como ajustar a receita de acordo com a embalagem e o seu gosto pessoal.",
      kicker: "Leia também",
      cta: "Ler o artigo →",
    },
    {
      type: "h2",
      text: "5. Comprar Café Já Moído Há Meses",
    },
    {
      type: "p",
      text: "O café moído perde cerca de 60% dos seus óleos essenciais e compostos aromáticos nos primeiros 15 a 30 minutos após a moagem devido à oxidação em contato com o ar. Se você compra um pacote moído há dois meses, está tomando apenas uma fração do potencial daquele grão.",
    },
    {
      type: "p",
      text: "Dica: Investir em um moedor manual de entrada muda completamente o seu jogo na cozinha. Moer na hora é o maior upgrade de sabor que você pode fazer.",
    },
    {
      type: "h2",
      text: "E Você, Qual Desses Erros Ainda Comete?",
    },
    {
      type: "p",
      text: "Aproveite também para buscar seus rótulos favoritos e deixar suas notas no acervo do The Cafe.",
    },
    {
      type: "link",
      text: "Explorar o acervo no The Cafe →",
      href: "https://www.thecafe.app",
    },
  ],
};

export default post;
