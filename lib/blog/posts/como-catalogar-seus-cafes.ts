import type { BlogPost } from "@/lib/blog/types";

const post: BlogPost = {
  slug: "como-catalogar-seus-cafes",
  title: "Como catalogar seus cafés e montar sua estante virtual",
  description:
    "Aprenda a registrar rótulos, guardar origens, comparar torras e compartilhar opiniões na maior comunidade de café especial do Brasil.",
  publishedAt: "2026-07-19",
  author: "The Cafe",
  tags: ["the cafe", "catalogar", "comunidade", "app"],
  readingTimeMinutes: 4,
  content: [
    {
      type: "p",
      text: "Provar um café incrível e esquecer o nome do rótulo semanas depois é uma frustração clássica. A boa notícia: montar uma estante virtual resolve isso — e ainda te ajuda a evoluir como apreciador.",
    },
    {
      type: "h2",
      text: "O que registrar em cada rótulo",
    },
    {
      type: "ul",
      items: [
        "Foto do pacote para identificação visual rápida",
        "Título e produtor ou torrefação",
        "Origem, processo, altitude e nível de torra",
        "Notas sensoriais e sua opinião sobre a xícara",
      ],
    },
    {
      type: "p",
      text: "Com o tempo, sua estante vira um diário de paladar. Você percebe padrões — talvez prefira grãos lavados da Colômbia ou torras mais claras com acidez frutada — e passa a escolher melhor na hora da compra.",
    },
    {
      type: "h2",
      text: "Por que compartilhar na comunidade",
    },
    {
      type: "p",
      text: "No The Cafe, cada rótulo pode receber opiniões de outros entusiastas. Isso enriquece a descoberta: além do seu registro, você vê como outras pessoas prepararam e avaliaram o mesmo café.",
    },
    {
      type: "p",
      text: "Quem cataloga de forma consistente também pode conquistar o selo de especialista verificado — um sinal de que você leva a jornada a sério dentro da comunidade.",
    },
    {
      type: "h2",
      text: "Comece agora",
    },
    {
      type: "p",
      text: "Abra o app ou acesse thecafe.app, fotografe seu próximo pacote e publique seu primeiro rótulo. Em poucos minutos você já tem a base da sua estante virtual — e material de sobra para comparar e evoluir.",
    },
  ],
};

export default post;
