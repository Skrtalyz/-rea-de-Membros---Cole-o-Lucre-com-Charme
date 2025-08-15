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
    id: 'module-1',
    title: 'Primeiros Passos no Crochê (Iniciante)',
    lessons: [
      {
        id: 'lesson-1-1',
        title: 'Apresentação e Materiais',
        description: 'O que você vai precisar para começar a crochetar.',
        videoId: 'H3S4ixtTJOk',
      },
      {
        id: 'lesson-1-2',
        title: 'Correntinha',
        description: 'O primeiro ponto e o mais importante do crochê.',
        videoId: 'azLFdnza13A',
      },
      {
        id: 'lesson-1-3',
        title: 'Ponto Baixíssimo',
        description: 'Para fechar carreiras e fazer acabamentos.',
        videoId: '8vtrxf6uX4E',
      },
      {
        id: 'lesson-1-4',
        title: 'Ponto Baixo',
        description: 'Um ponto essencial para peças mais firmes.',
        videoId: 'J5vof2o91yM',
      },
      {
        id: 'lesson-1-5',
        title: 'Meio Ponto Alto',
        description: 'Ponto versátil para diversas peças.',
        videoId: 'P5uxpOfnYk4',
      },
      {
        id: 'lesson-1-6',
        title: 'Ponto Alto',
        description: 'A base para a maioria das peças de crochê.',
        videoId: 'NI2gtt5J32I',
      },
      {
        id: 'lesson-1-7',
        title: 'Ponto Alto Duplo',
        description: 'Criando peças maiores e mais rápido.',
        videoId: 'A0XcN9vata4',
      },
      {
        id: 'lesson-1-8',
        title: 'Anel Mágico',
        description: 'Como iniciar trabalhos redondos sem um buraco no centro.',
        videoId: '-eVPbU-Mli0',
      },
      {
        id: 'lesson-1-9',
        title: 'Como Ler Receitas e Gráficos',
        description: 'Entendendo o passo a passo de qualquer peça.',
        videoId: 'hFQI5bMiYcs',
      },
      {
        id: 'lesson-1-10',
        title: 'Troca de Fio e Arremate',
        description: 'Adicionando cor e finalizando seu trabalho.',
        videoId: 'S5-We2GoxGE',
      },
    ],
  },
  {
    id: 'module-2',
    title: 'Peças Rápidas e Lucrativas (Intermediário)',
    lessons: [
      {
        id: 'lesson-2-1',
        title: 'Tapete Simples e Rápido',
        description: 'Receita de tapete de crochê com fio de malha.',
        videoId: '0tu7EVWNnQ0',
      },
      {
        id: 'lesson-2-2',
        title: 'Sousplat com Fio de Malha',
        description: 'O primeiro sousplat redondo da coleção.',
        videoId: 'N1JofK32zFg',
      },
      {
        id: 'lesson-2-3',
        title: 'Sousplat com Barbante',
        description: 'Outra opção de sousplat com um material diferente.',
        videoId: 'mR46t9y1pMk',
      },
      {
        id: 'lesson-2-4',
        title: 'Porta-copos e Porta-guardanapos',
        description: 'Conjunto de mesa completo.',
        videoId: 'zj7fdf6jsHo',
      },
      {
        id: 'lesson-2-5',
        title: 'Tapete com Pontos de Relevo',
        description: 'Elevando o nível do seu tapete.',
        videoId: 'nvlY0KL1HGE',
      },
      {
        id: 'lesson-2-6',
        title: 'Flor de Crochê Simples',
        description: 'Um detalhe que valoriza qualquer peça.',
        videoId: 'N9Jb6fvDu5g',
      },
      {
        id: 'lesson-2-7',
        title: 'Cesta de Fio de Malha',
        description: 'Uma peça de decoração versátil e fácil de vender.',
        videoId: 'aevHxwMvXiE',
      },
      {
        id: 'lesson-2-8',
        title: 'Tapete Oval de Crochê',
        description: 'Como trabalhar em formatos diferentes.',
        videoId: 'TMHyvEpe2Ms',
      },
      {
        id: 'lesson-2-9',
        title: 'Bolsa de Crochê com Fio de Malha',
        description: 'Um acessório de moda de alta demanda.',
        videoId: 'ABxMgCLOvBw',
      },
      {
        id: 'lesson-2-10',
        title: 'Mini Tapete de Crochê',
        description: 'Peças pequenas para venda rápida.',
        videoId: 'v8XUFGuD1Os',
      },
    ],
  },
  {
    id: 'module-3',
    title: 'Crochê Avançado e Peças de Destaque',
    lessons: [
      {
        id: 'lesson-3-1',
        title: 'Amigurumi: A Base - Materiais',
        description: 'Tudo sobre fios, agulhas e enchimento para Amigurumis.',
        videoId: 'pyoYh8tcZLo',
      },
      {
        id: 'lesson-3-2',
        title: 'Amigurumi: A Base - Bolinha',
        description: 'O primeiro passo para criar qualquer bichinho.',
        videoId: 'xzcFsGBRfYI',
      },
      {
        id: 'lesson-3-3',
        title: 'Amigurumi: Cachorrinho Receita',
        description: 'Criando o seu primeiro bichinho.',
        videoId: 'rjYwUB5uCYo',
      },
      {
        id: 'lesson-3-4',
        title: 'Amigurumi: Coelhinho Receita',
        description: 'Mais uma receita para o seu catálogo.',
        videoId: '2yv1iYJHB-s',
      },
      {
        id: 'lesson-3-5',
        title: 'Amigurumi: Acabamento e Expressão',
        description: 'Como dar vida aos seus bonecos.',
        videoId: 'sLkJLmNxgD4',
      },
      {
        id: 'lesson-3-6',
        title: 'Blusa de Crochê para Iniciantes',
        description: 'O primeiro passo no vestuário.',
        videoId: 'bfkKtTda6ng',
      },
      {
        id: 'lesson-3-7',
        title: 'Gorro de Crochê Unissex',
        description: 'Uma peça que vende o ano todo.',
        videoId: 'PLsQwUgQOvY',
      },
      {
        id: 'lesson-3-8',
        title: 'Bolsa de Praia de Crochê',
        description: 'Perfeita para a estação e com alta procura.',
        videoId: '4qwYoh3ObyQ',
      },
      {
        id: 'lesson-3-9',
        title: 'Tapete Degrade',
        description: 'Uma técnica de cor que adiciona valor à peça.',
        videoId: '0BgW3h1vevw',
      },
      {
        id: 'lesson-3-10',
        title: 'Flores de Crochê 3D',
        description: 'Flores com mais volume e realismo.',
        videoId: 'w6nOESXlpqE',
      },
    ],
  },
  {
    id: 'module-4',
    title: 'Vendendo e Lucrando de Verdade',
    lessons: [
      {
        id: 'lesson-4-1',
        title: 'Precificação: Quanto Cobrar?',
        description: 'Aprenda a dar o valor justo para o seu trabalho.',
        videoId: 'UJr-Ggs3vbE',
      },
      {
        id: 'lesson-4-2',
        title: 'Como Organizar a Produção',
        description: 'Dicas para produzir mais em menos tempo.',
        videoId: 'ljoxft7ti24',
      },
      {
        id: 'lesson-4-3',
        title: 'Melhores Fios para Lucrar',
        description: 'Como escolher os materiais que dão mais margem de lucro.',
        videoId: 'tdrNKtKwE88',
      },
      {
        id: 'lesson-4-4',
        title: 'Como Vender Crochê na Internet',
        description: 'Estratégias para usar as redes sociais.',
        videoId: '-_UKGIHjwqE',
      },
      {
        id: 'lesson-4-5',
        title: 'Fotografia de Produtos',
        description: 'O segredo para atrair clientes.',
        videoId: 'LHxLgOlu_GY',
      },
      {
        id: 'lesson-4-6',
        title: 'Criação de um Catálogo',
        description: 'Como organizar suas peças para venda.',
        videoId: 'CxplMLXpnzM',
      },
      {
        id: 'lesson-4-7',
        title: 'Embalagem e Encantamento',
        description: 'O toque final que fideliza a cliente.',
        videoId: '86KcC41fdUE',
      },
      {
        id: 'lesson-4-8',
        title: 'Como Enviar as Encomendas',
        description: 'Dicas sobre frete e correios.',
        videoId: 'ZNc_MyBu3cs',
      },
      {
        id: 'lesson-4-9',
        title: 'Organizando as Finanças',
        description: 'Como controlar o dinheiro do seu negócio.',
        videoId: '3glUj53M6Vo',
      },
      {
        id: 'lesson-4-10',
        title: 'Como Montar um Kit de Vendas',
        description: 'Kits de sousplats, tapetes e outras peças.',
        videoId: 'ApGiQtP9QPQ',
      },
    ],
  },
];
