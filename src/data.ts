export interface Question {
  id: number;
  category: string;
  question: string;
  options?: string[];
  answer: string | boolean;
  type: 'multiple' | 'true-false';
  hint: string;
  explanation: string;
}

export const questions: Question[] = [
  {
    id: 1,
    category: 'Hardware',
    question: 'A Unidade Central de Processamento (CPU) é considerada o cérebro do computador e divide-se em componentes menores. Qual é a principal função da Unidade Lógica e Aritmética (ULA)?',
    options: [
      'Gerenciar o fluxo de dados entre a memória e os periféricos.',
      'Executar os cálculos matemáticos e as operações lógicas do sistema.',
      'Armazenar temporariamente as instruções que serão processadas.',
      'Decodificar as instruções recebidas da memória principal.'
    ],
    answer: 'Executar os cálculos matemáticos e as operações lógicas do sistema.',
    type: 'multiple',
    hint: 'Pense no componente específico responsável por "fazer as contas".',
    explanation: 'A ULA (Unidade Lógica e Aritmética) é a parte do processador que realiza operações matemáticas (soma, subtração) e lógicas (AND, OR, NOT).'
  },
  {
    id: 2,
    category: 'Atalhos',
    question: 'No Microsoft Excel e no Microsoft Word, a tecla de função F12 possui uma ação padronizada. Qual é essa ação?',
    options: [
      'Salvar o arquivo atual.',
      'Imprimir o documento.',
      'Abrir a caixa de diálogo "Salvar como".',
      'Inserir uma nova planilha.'
    ],
    answer: 'Abrir a caixa de diálogo "Salvar como".',
    type: 'multiple',
    hint: 'Este atalho é útil para criar uma nova versão de um documento existente.',
    explanation: 'A tecla F12 é o atalho universal no Office para "Salvar Como", permitindo mudar o nome ou formato do arquivo.'
  },
  {
    id: 3,
    category: 'Microsoft Excel',
    question: 'No Microsoft Excel, a função PROCV tem como finalidade principal:',
    options: [
      'Procurar um valor na primeira linha de uma matriz.',
      'Procurar um valor na primeira coluna à esquerda de uma matriz e retornar um valor na mesma linha.',
      'Realizar uma busca binária em toda a planilha.',
      'Validar se um valor existe em um intervalo nomeado.'
    ],
    answer: 'Procurar um valor na primeira coluna à esquerda de uma matriz e retornar um valor na mesma linha.',
    type: 'multiple',
    hint: 'A letra "V" significa "Vertical".',
    explanation: 'O PROCV (Procura Vertical) busca um valor na coluna mais à esquerda e retorna dados de colunas à direita na mesma linha.'
  },
  {
    id: 4,
    category: 'Segurança da Informação',
    question: 'Descreva o conceito de ataque do tipo "Phishing".',
    options: [
      'Interceptação de dados em redes sem fio protegidas.',
      'Fraude que engana o usuário com mensagens falsas para roubar dados sensíveis.',
      'Uso de força bruta para adivinhar senhas administrativas.',
      'Inundação de um servidor com requisições falsas para derrubá-lo.'
    ],
    answer: 'Fraude que engana o usuário com mensagens falsas para roubar dados sensíveis.',
    type: 'multiple',
    hint: 'O termo vem de "fishing" (pescar).',
    explanation: 'Phishing é uma técnica de engenharia social usada para enganar usuários e obter informações confidenciais (senhas, cartões).'
  },
  {
    id: 5,
    category: 'Redes',
    question: 'Qual é a topologia de rede que utiliza um nó central (como um switch) ao qual todos os computadores se conectam?',
    options: [
      'Anel (Ring)',
      'Barramento (Bus)',
      'Estrela (Star)',
      'Malha (Mesh)'
    ],
    answer: 'Estrela (Star)',
    type: 'multiple',
    hint: 'O formato lembra um corpo celeste irradiando raios.',
    explanation: 'Na topologia em Estrela, todos os periféricos são conectados a um nó central (concentrador).'
  },
  {
    id: 6,
    category: 'Hardware',
    question: 'Diferentemente dos computadores pessoais tradicionais, os tablets costumam possuir firmwares em vez de processadores.',
    answer: false,
    type: 'true-false',
    hint: 'Tablets também precisam de um "cérebro" de processamento.',
    explanation: 'Tablets possuem processadores (geralmente arquitetura ARM), assim como os PCs tradicionais. Firmware é o software básico gravado em hardware.'
  },
  {
    id: 7,
    category: 'Segurança da Informação',
    question: 'O uso de senha de BIOS permite melhor controle de acesso ao equipamento físico.',
    answer: true,
    type: 'true-false',
    hint: 'Verifique se isso impede o boot por estranhos.',
    explanation: 'A senha de BIOS (ou UEFI) impede que usuários não autorizados alterem configurações de hardware ou iniciem o sistema operacional.'
  },
  {
    id: 8,
    category: 'Internet e Intranet',
    question: 'A Intranet utiliza as mesmas tecnologias da Internet, mas é restrita a um público específico de uma organização.',
    answer: true,
    type: 'true-false',
    hint: 'Pense no prefixo "Intra" (dentro).',
    explanation: 'Uma Intranet é uma rede privada baseada em protocolos TCP/IP, para uso interno de uma empresa ou instituição.'
  },
  {
    id: 9,
    category: 'Sistemas Operacionais',
    question: 'Ubuntu é um sistema operacional baseado no Linux e pode ser utilizado em laptops, desktops e servidores.',
    answer: true,
    type: 'true-false',
    hint: 'Ubuntu é uma das distribuições mais famosas.',
    explanation: 'O Ubuntu é uma distribuição Linux completa e versátil desenvolvida pela Canonical.'
  },
  {
    id: 10,
    category: 'Microsoft Word',
    question: 'O atalho de teclado Ctrl + J executa qual ação de alinhamento no Word?',
    options: [
      'Alinha à esquerda.',
      'Centraliza o texto.',
      'Alinha à direita.',
      'Justifica o parágrafo.'
    ],
    answer: 'Justifica o parágrafo.',
    type: 'multiple',
    hint: 'Pense na letra "J".',
    explanation: 'Ctrl + J aplica o alinhamento Justificado, onde o texto é alinhado em ambas as margens.'
  }
];
