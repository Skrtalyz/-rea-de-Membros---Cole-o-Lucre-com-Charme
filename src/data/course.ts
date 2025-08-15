export interface Lesson {
  id: string;
  title: string;
  description: string;
  videoId: string;
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export const courseData: Module[] = [
  {
    id: "module-1",
    title: "Fundamentos do Crochê",
    lessons: [
      {
        id: "lesson-1-1",
        title: "Escolhendo sua Primeira Agulha e Fio",
        description: "Bem-vindo ao maravilhoso mundo do crochê! Nesta primeira aula, vamos guiá-lo na seleção do fio e da agulha de crochê perfeitos para iniciar sua jornada. Abordaremos diferentes materiais, espessuras e tamanhos para garantir que você tenha as melhores ferramentas para o sucesso.",
        videoId: "aAxGTnVNJiE",
      },
      {
        id: "lesson-1-2",
        title: "Dominando o Nó Corrediço e a Correntinha",
        description: "Todo projeto de crochê começa com essas duas técnicas fundamentais. Aprenda a criar um nó corrediço seguro e pratique fazer correntinhas uniformes e consistentes. Esta é a base sobre a qual todos os outros pontos são construídos!",
        videoId: "PSi7r5Tih3s",
      },
    ],
  },
  {
    id: "module-2",
    title: "Pontos Básicos",
    lessons: [
      {
        id: "lesson-2-1",
        title: "O Ponto Baixo (pb)",
        description: "Descubra o ponto baixo, um dos pontos mais versáteis e comuns. Vamos detalhá-lo passo a passo, ajudando você a criar um tecido denso e firme, perfeito para amigurumi, toalhinhas e muito mais.",
        videoId: "--_yIe2S0kU",
      },
      {
        id: "lesson-2-2",
        title: "O Meio Ponto Alto e o Ponto Alto (mpa, pa)",
        description: "Pronto para adicionar um pouco de altura aos seus projetos? Aprenda o meio ponto alto e o ponto alto. Esses pontos mais altos são trabalhados rapidamente e criam um tecido mais macio e flexível, ideal para cobertores e cachecóis.",
        videoId: "GcOzdAzmtNM",
      },
    ],
  },
  {
    id: "module-3",
    title: "Seu Primeiro Projeto: Um Cachecol Simples",
    lessons: [
      {
        id: "lesson-3-1",
        title: "Juntando Tudo",
        description: "Vamos combinar suas novas habilidades para criar um cachecol lindo e simples! Esta aula irá guiá-lo para iniciar o projeto, trabalhar em carreiras e manter as bordas retas. Você ficará surpreso com a rapidez com que ele toma forma.",
        videoId: "l_uTCQWyh-I",
      },
    ],
  },
];
