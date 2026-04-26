export interface Question {
  id: number;
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export const questions: Question[] = [
  // FÁCIL
  {
    id: 1,
    difficulty: 'Fácil',
    question: 'Qual é o componente principal do computador, muitas vezes chamado de "cérebro" do sistema?',
    options: ['Monitor', 'Teclado', 'Processador (CPU)', 'Mouse'],
    answer: 'Processador (CPU)',
    explanation: 'A CPU (Unidade Central de Processamento) é responsável por processar todas as instruções do computador.'
  },
  {
    id: 2,
    difficulty: 'Fácil',
    question: 'Qual atalho de teclado é comumente usado para copiar um item selecionado?',
    options: ['Ctrl + V', 'Ctrl + X', 'Ctrl + C', 'Ctrl + Z'],
    answer: 'Ctrl + C',
    explanation: 'Ctrl + C é o comando universal para copiar conteúdo.'
  },
  {
    id: 3,
    difficulty: 'Fácil',
    question: 'Qual destes é um sistema operacional desenvolvido pela Microsoft?',
    options: ['Linux', 'Windows', 'Android', 'macOS'],
    answer: 'Windows',
    explanation: 'O Windows é o sistema operacional mais popular da Microsoft.'
  },
  {
    id: 4,
    difficulty: 'Fácil',
    question: 'O que significa a sigla RAM?',
    options: ['Read Access Menus', 'Random Access Memory', 'Real Active Memory', 'Route Access Machine'],
    answer: 'Random Access Memory',
    explanation: 'Memória de Acesso Aleatório é a memória volátil de curto prazo do computador.'
  },
  {
    id: 5,
    difficulty: 'Fácil',
    question: 'Qual dispositivo é utilizado para entrada de texto no computador?',
    options: ['Impressora', 'Monitor', 'Teclado', 'Caixa de Som'],
    answer: 'Teclado',
    explanation: 'O teclado é o principal periférico de entrada de caracteres.'
  },
  {
    id: 6,
    difficulty: 'Fácil',
    question: 'Qual desses é um navegador de internet?',
    options: ['Excel', 'Chrome', 'Word', 'PowerPoint'],
    answer: 'Chrome',
    explanation: 'O Google Chrome é um navegador web.'
  },
  {
    id: 7,
    difficulty: 'Fácil',
    question: 'Onde os arquivos costumam ser salvos permanentemente no computador?',
    options: ['Memória RAM', 'Processador', 'Disco Rígido (HD/SSD)', 'Monitor'],
    answer: 'Disco Rígido (HD/SSD)',
    explanation: 'HDs e SSDs são dispositivos de armazenamento não volátil.'
  },
  {
    id: 8,
    difficulty: 'Fácil',
    question: 'O que é o "Chrome", o "Firefox" e o "Edge"?',
    options: ['Editores de texto', 'Planilhas eletrônicas', 'Navegadores', 'Antivírus'],
    answer: 'Navegadores',
    explanation: 'São softwares usados para acessar a Web.'
  },
  {
    id: 9,
    difficulty: 'Fácil',
    question: 'Qual é a principal função do Mouse?',
    options: ['Digitar textos', 'Imprimir fotos', 'Controlar o ponteiro na tela', 'Processar dados'],
    answer: 'Controlar o ponteiro na tela',
    explanation: 'O mouse é um dispositivo apontador.'
  },
  {
    id: 10,
    difficulty: 'Fácil',
    question: 'Qual tecla apaga o caractere à esquerda do cursor?',
    options: ['Delete', 'Backspace', 'Shift', 'Enter'],
    answer: 'Backspace',
    explanation: 'Backspace apaga para trás (esquerda), enquanto Delete apaga para frente (direita).'
  },
  {
    id: 11,
    difficulty: 'Fácil',
    question: 'O que significa a "Lixeira" no Windows?',
    options: ['Local para formatar o disco', 'Local que armazena arquivos deletados temporariamente', 'Um vírus', 'O menu Iniciar'],
    answer: 'Local que armazena arquivos deletados temporariamente',
    explanation: 'Arquivos deletados vão para a lixeira antes de serem removidos permanentemente.'
  },
  {
    id: 12,
    difficulty: 'Fácil',
    question: 'Qual destes é um programa de planilhas eletrônicas?',
    options: ['Word', 'PowerPoint', 'Excel', 'Access'],
    answer: 'Excel',
    explanation: 'O Excel é a ferramenta de planilhas do pacote Office.'
  },
  {
    id: 13,
    difficulty: 'Fácil',
    question: 'Um "Pen Drive" é um dispositivo de:',
    options: ['Processamento', 'Saída de vídeo', 'Armazenamento', 'Entrada de voz'],
    answer: 'Armazenamento',
    explanation: 'Pen drives armazenam arquivos via porta USB.'
  },
  {
    id: 14,
    difficulty: 'Fácil',
    question: 'Qual é o nome da rede mundial de computadores?',
    options: ['Intranet', 'Ethernet', 'Internet', 'Bluetooth'],
    answer: 'Internet',
    explanation: 'Internet é a rede global que conecta bilhões de dispositivos.'
  },
  {
    id: 15,
    difficulty: 'Fácil',
    question: 'Qual botão fecha uma janela no Windows (X)?',
    options: ['Minimizar', 'Maximizar', 'Fechar', 'Restaurar'],
    answer: 'Fechar',
    explanation: 'O botão com "X" vermelho ou cinza serve para fechar o aplicativo.'
  },

  // MÉDIO
  {
    id: 16,
    difficulty: 'Médio',
    question: 'Qual porta lógica retorna verdadeiro apenas se ambas as entradas forem verdadeiras?',
    options: ['OR', 'NOT', 'AND', 'XOR'],
    answer: 'AND',
    explanation: 'Na lógica booleana, a porta AND exige que tudo seja verdade para o resultado ser verdade.'
  },
  {
    id: 17,
    difficulty: 'Médio',
    question: 'O que é um "Firewall"?',
    options: ['Um tipo de vírus', 'Um sistema de segurança que controla o tráfego de rede', 'Um acelerador de downloads', 'Um hardware de memória'],
    answer: 'Um sistema de segurança que controla o tráfego de rede',
    explanation: 'Firewalls filtram conexões para proteger a rede de acessos não autorizados.'
  },
  {
    id: 18,
    difficulty: 'Médio',
    question: 'Qual é o protocolo padrão para envio de e-mails?',
    options: ['POP3', 'IMAP', 'SMTP', 'HTTP'],
    answer: 'SMTP',
    explanation: 'Simple Mail Transfer Protocol é usado para o ENVIO de mensagens.'
  },
  {
    id: 19,
    difficulty: 'Médio',
    question: 'No Excel, qual função soma um intervalo de células baseado em uma condição?',
    options: ['SOMA', 'SOMASE', 'SOMASES', 'PROCV'],
    answer: 'SOMASE',
    explanation: 'SOMASE soma valores que atendem a um critério específico.'
  },
  {
    id: 20,
    difficulty: 'Médio',
    question: 'O que é "Phishing"?',
    options: ['Um esporte digital', 'Tentativa de roubar dados enganando o usuário', 'Uma técnica de limpeza de disco', 'Um tipo de cabo de rede'],
    answer: 'Tentativa de roubar dados enganando o usuário',
    explanation: 'É uma técnica de engenharia social focada em enganar vítimas.'
  },
  {
    id: 21,
    difficulty: 'Médio',
    question: 'Qual destas extensões é de um arquivo compactado?',
    options: ['.txt', '.zip', '.pdf', '.docx'],
    answer: '.zip',
    explanation: 'ZIP é um formato de compressão de arquivos popular.'
  },
  {
    id: 22,
    difficulty: 'Médio',
    question: 'Qual a principal diferença entre HTTP e HTTPS?',
    options: ['Velocidade', 'Criptografia de dados', 'Cor do ícone', 'Não há diferença'],
    answer: 'Criptografia de dados',
    explanation: 'O "S" no HTTPS significa Secure, indicando que os dados são criptografados.'
  },
  {
    id: 23,
    difficulty: 'Médio',
    question: 'O que é a BIOS de um computador?',
    options: ['O sistema operacional', 'Um software de edição', 'O primeiro software executado ao ligar o PC', 'Uma peça de monitor'],
    answer: 'O primeiro software executado ao ligar o PC',
    explanation: 'A BIOS inicia o hardware e carrega o sistema operacional.'
  },
  {
    id: 24,
    difficulty: 'Médio',
    question: 'Quantos bits existem em 1 byte?',
    options: ['4', '8', '16', '32'],
    answer: '8',
    explanation: 'Padrão da computação: 1 byte = 8 bits.'
  },
  {
    id: 25,
    difficulty: 'Médio',
    question: 'Qual comando no Linux mostra os arquivos de um diretório?',
    options: ['cd', 'mkdir', 'ls', 'rm'],
    answer: 'ls',
    explanation: '"ls" vem de list, listando o conteúdo da pasta.'
  },
  {
    id: 26,
    difficulty: 'Médio',
    question: 'O que é um arquivo com a extensão .ISO?',
    options: ['Uma imagem de disco', 'Um documento de texto', 'Um vírus', 'Uma foto'],
    answer: 'Uma imagem de disco',
    explanation: 'Arquivos ISO contêm cópias exatas de CDs ou DVDs.'
  },
  {
    id: 27,
    difficulty: 'Médio',
    question: 'No Word, para que serve a tecla F7?',
    options: ['Salvar', 'Imprimir', 'Verificação Ortográfica', 'Ajuda'],
    answer: 'Verificação Ortográfica',
    explanation: 'F7 inicia a correção de texto no Microsoft Word.'
  },
  {
    id: 28,
    difficulty: 'Médio',
    question: 'Qual a função de um Roteador?',
    options: ['Processar vídeos', 'Encaminhar pacotes de dados entre redes', 'Armazenar arquivos', 'Resfriar a CPU'],
    answer: 'Encaminhar pacotes de dados entre redes',
    explanation: 'Roteadores decidem o melhor caminho para os dados na rede.'
  },
  {
    id: 29,
    difficulty: 'Médio',
    question: 'O que é Memória Cache?',
    options: ['Memória de longa duração', 'Memória rápida de apoio ao processador', 'A memória do teclado', 'Espaço no Google Drive'],
    answer: 'Memória rápida de apoio ao processador',
    explanation: 'Reduz o tempo médio de acesso a dados da memória principal.'
  },
  {
    id: 30,
    difficulty: 'Médio',
    question: 'Qual atalho bloqueia o computador no Windows rapidamente?',
    options: ['Win + L', 'Win + D', 'Alt + F4', 'Ctrl + Alt + Del'],
    answer: 'Win + L',
    explanation: 'Lock (Bloquear) -> tecla Windows + L.'
  },

  // DIFÍCIL
  {
    id: 31,
    difficulty: 'Difícil',
    question: 'Em Redes, o que significa a sigla DHCP?',
    options: ['Data Hub Central Port', 'Dynamic Host Configuration Protocol', 'Detailed Hyper Core Process', 'Direct High Connectivity Point'],
    answer: 'Dynamic Host Configuration Protocol',
    explanation: 'O DHCP atribui endereços IP automaticamente aos dispositivos na rede.'
  },
  {
    id: 32,
    difficulty: 'Difícil',
    question: 'O que é um ataque de "Denial of Service" (DoS)?',
    options: ['Roubo de senhas', 'Tentativa de tornar um serviço indisponível inundando-o com tráfego', 'Uso de softwares piratas', 'Espionagem por webcam'],
    answer: 'Tentativa de tornar um serviço indisponível inundando-o com tráfego',
    explanation: 'O objetivo é sobrecarregar o servidor até que ele pare de responder.'
  },
  {
    id: 33,
    difficulty: 'Difícil',
    question: 'Qual o endereço IP de loopback padrão (próprio host)?',
    options: ['192.168.0.1', '8.8.8.8', '127.0.0.1', '10.0.0.1'],
    answer: '127.0.0.1',
    explanation: 'Loopback é o endereço que o computador usa para se referir a si mesmo.'
  },
  {
    id: 34,
    difficulty: 'Difícil',
    question: 'O que é RAID 1?',
    options: ['Divisão de dados', 'Espelhamento de dados', 'Criptografia de disco', 'Compactação de arquivos'],
    answer: 'Espelhamento de dados',
    explanation: 'RAID 1 grava a mesma informação em dois discos para segurança.'
  },
  {
    id: 35,
    difficulty: 'Difícil',
    question: 'No modelo OSI, em qual camada opera o protocolo IP?',
    options: ['Física', 'Enlace', 'Rede', 'Transporte'],
    answer: 'Rede',
    explanation: 'O protocolo IP é o cerne da camada de Rede (Camada 3).'
  },
  {
    id: 36,
    difficulty: 'Difícil',
    question: 'O que é escalonamento de processos em um sistema operacional?',
    options: ['Aumento da velocidade do PC', 'Decisão de qual processo ocupará a CPU e por quanto tempo', 'Instalação de programas', 'Organização de ícones'],
    answer: 'Decisão de qual processo ocupará a CPU e por quanto tempo',
    explanation: 'O escalonador gerencia a execução de múltiplos processos.'
  },
  {
    id: 37,
    difficulty: 'Difícil',
    question: 'Qual a principal característica de uma Memória Virtual?',
    options: ['Memória que não existe', 'Uso do disco rígido para simular memória RAM extra', 'Memória de GPUs de vídeo', 'Memória de servidores na nuvem'],
    answer: 'Uso do disco rígido para simular memória RAM extra',
    explanation: 'Permite rodar programas maiores que a RAM física disponível.'
  },
  {
    id: 38,
    difficulty: 'Difícil',
    question: 'O que é um "Exploit"?',
    options: ['Um programa antivírus', 'Um pedaço de código que aproveita uma vulnerabilidade de segurança', 'Um arquivo de log', 'Um processador antigo'],
    answer: 'Um pedaço de código que aproveita uma vulnerabilidade de segurança',
    explanation: 'Exploits são usados para atacar sistemas vulneráveis.'
  },
  {
    id: 39,
    difficulty: 'Difícil',
    question: 'O que significa o termo "Kernel"?',
    options: ['A interface de usuário', 'O núcleo do sistema operacional que gerencia o hardware', 'Um tipo de teclado robusto', 'A caixa do computador'],
    answer: 'O núcleo do sistema operacional que gerencia o hardware',
    explanation: 'O Kernel é a parte essencial que conecta o software ao hardware.'
  },
  {
    id: 40,
    difficulty: 'Difícil',
    question: 'Qual destes protocolos opera na camada de Transporte do modelo OSI?',
    options: ['HTTP', 'TCP', 'IP', 'Ethernet'],
    answer: 'TCP',
    explanation: 'TCP e UDP são os principais protocolos da Camada de Transporte.'
  },
  {
    id: 41,
    difficulty: 'Difícil',
    question: 'O que é Criptografia Assimétrica?',
    options: ['Uso da mesma chave para cifrar e decifrar', 'Uso de um par de chaves: uma pública e uma privada', 'Criptografia de arquivos ZIP', 'Uso de senhas simples'],
    answer: 'Uso de um par de chaves: uma pública e uma privada',
    explanation: 'Diferente da simétrica, usa chaves distintas para segurança.'
  },
  {
    id: 42,
    difficulty: 'Difícil',
    question: 'O que é um Barramento (Bus)?',
    options: ['Um cabo de energia', 'Um conjunto de linhas para transporte de dados entre componentes', 'Um software de rede', 'A ventoinha do PC'],
    answer: 'Um conjunto de linhas para transporte de dados entre componentes',
    explanation: 'Ex: Barramento PCI Express.'
  },
  {
    id: 43,
    difficulty: 'Difícil',
    question: 'Qual a função da Unidade de Controle (UC) na CPU?',
    options: ['Fazer cálculos matemáticos', 'Buscar, decodificar e orquestrar a execução de instruções', 'Armazenar o Windows', 'Mostrar a hora'],
    answer: 'Buscar, decodificar e orquestrar a execução de instruções',
    explanation: 'A UC é a gerência interna do processador.'
  },
  {
    id: 44,
    difficulty: 'Difícil',
    question: 'O que é um sistema "Real-Time" (Tempo Real)?',
    options: ['Um sistema rápido', 'Um sistema que garante respostas em prazos rígidos de tempo', 'Um relógio digital', 'O Google Maps'],
    answer: 'Um sistema que garante respostas em prazos rígidos de tempo',
    explanation: 'Usado em sistemas críticos como aviação e medicina.'
  },
  {
    id: 45,
    difficulty: 'Difícil',
    question: 'O que é esteganografia?',
    options: ['Estudo de pedras', 'Técnica de esconder uma mensagem dentro de outro arquivo', 'Criptografia de alto nível', 'Instalação de drives'],
    answer: 'Técnica de esconder uma mensagem dentro de outro arquivo',
    explanation: 'Ex: esconder texto dentro de uma imagem sem alterar sua aparência visual.'
  }
];
