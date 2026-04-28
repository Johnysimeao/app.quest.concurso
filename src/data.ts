import { Question, Difficulty, Banca } from './types';

export const questions: Question[] = [
  // FÁCIL
  {
    id: 1,
    difficulty: 'Fácil',
    banca: 'FGV',
    question: 'Qual é o componente principal do computador, muitas vezes chamado de "cérebro" do sistema?',
    options: ['Monitor', 'Teclado', 'Processador (CPU)', 'Mouse'],
    answer: 'Processador (CPU)',
    explanation: 'A CPU (Unidade Central de Processamento) é responsável por processar todas as instruções do computador.'
  },
  {
    id: 101,
    difficulty: 'Fácil',
    banca: 'FGV',
    question: 'Qual dispositivo é utilizado para entrada de dados em um computador?',
    options: ['Monitor', 'Teclado', 'Impressora', 'Caixa de Som'],
    answer: 'Teclado',
    explanation: 'O teclado é um periférico de entrada clássico na informática.'
  },
  {
    id: 102,
    difficulty: 'Fácil',
    banca: 'CESPE',
    question: 'No Windows, o atalho de teclado utilizado para renomear um arquivo selecionado é:',
    options: ['F1', 'F2', 'F5', 'F10'],
    answer: 'F2',
    explanation: 'A tecla de função F2 é o padrão para renomeação no explorador de arquivos.'
  },
  {
    id: 103,
    difficulty: 'Médio',
    banca: 'FGV',
    question: 'Assinale a alternativa que apresenta um exemplo de software de correio eletrônico.',
    options: ['Outlook', 'Excel', 'PowerPoint', 'Chrome'],
    answer: 'Outlook',
    explanation: 'O Microsoft Outlook é um cliente de e-mail e gerenciador de informações.'
  },
  {
    id: 104,
    difficulty: 'Médio',
    banca: 'CESPE',
    question: 'Acerca de hardware e software, julgue o item: O SSD é um dispositivo de armazenamento volátil.',
    options: ['Certo', 'Errado'],
    answer: 'Errado',
    explanation: 'O SSD é um dispositivo de armazenamento NÃO volátil (permanente).'
  },
  {
    id: 105,
    difficulty: 'Fácil',
    banca: 'FCC',
    question: 'Qual é a principal função de um Browser?',
    options: ['Editar textos', 'Acessar páginas na Web', 'Criar planilhas', 'Prover segurança via rede'],
    answer: 'Acessar páginas na Web',
    explanation: 'Navegadores ou browsers como Chrome e Firefox servem para navegar na internet.'
  },
  {
    id: 106,
    difficulty: 'Fácil',
    banca: 'Vunesp',
    question: 'A sigla URL refere-se a:',
    options: ['Um endereço único de um recurso na web', 'Um tipo de vírus', 'Um comando do Word', 'A velocidade da conexão'],
    answer: 'Um endereço único de um recurso na web',
    explanation: 'Uniform Resource Locator é o endereço de sites e arquivos online.'
  },
  {
    id: 107,
    difficulty: 'Médio',
    banca: 'FCC',
    question: 'Qual linguagem é a base fundamental para a criação de páginas web estruturadas?',
    options: ['Python', 'HTML', 'Java', 'SQL'],
    answer: 'HTML',
    explanation: 'HyperText Markup Language é a linguagem de marcação usada na estrutura da web.'
  },
  {
    id: 108,
    difficulty: 'Difícil',
    banca: 'FGV',
    question: 'Qual porta de comunicação é padrão para o protocolo HTTPS?',
    options: ['80', '443', '21', '25'],
    answer: '443',
    explanation: 'A porta 443 é reservada para o tráfego HTTP Seguro (HTTPS).'
  },
  {
    id: 109,
    difficulty: 'Médio',
    banca: 'Vunesp',
    question: 'No Excel, qual símbolo inicia obrigatoriamente uma fórmula?',
    options: ['+', '#', '=', '@'],
    answer: '=',
    explanation: 'Toda fórmula ou função no Excel deve começar com o sinal de igual.'
  },
  {
    id: 110,
    difficulty: 'Médio',
    banca: 'CESPE',
    question: 'A memória RAM é considerada uma memória volátil porque:',
    options: ['É muito rápida', 'Seus dados são perdidos ao desligar o computador', 'É pequena', 'Pode ser expandida'],
    answer: 'Seus dados são perdidos ao desligar o computador',
    explanation: 'Volatilidade significa que a manutenção dos dados depende de energia elétrica.'
  },
  {
    id: 111,
    difficulty: 'Médio',
    banca: 'CESPE',
    question: 'Para se garantir o correto funcionamento de um computador com placa-mãe dual-channel, é obrigatória a instalação de dois pentes de memória nessa placa.',
    options: ['Certo', 'Errado'],
    answer: 'Errado',
    explanation: 'Embora o modo dual-channel exija dois pentes para ser ativado, a placa-mãe funciona normalmente com apenas um (em single-channel).'
  },
  {
    id: 112,
    difficulty: 'Fácil',
    banca: 'CESPE',
    question: 'Fontes de alimentação do tipo ATX contam com sinais de controle que desligam o computador de forma automática caso sejam verificadas alterações nas tensões.',
    options: ['Certo', 'Errado'],
    answer: 'Certo',
    explanation: 'Fontes ATX possuem o sinal Power Good que monitora a estabilidade da energia.'
  },
  {
    id: 113,
    difficulty: 'Difícil',
    banca: 'CESPE',
    question: 'Diferentemente dos PCs tradicionais, os tablets possuem firmwares em vez de processadores, como o PC.',
    options: ['Certo', 'Errado'],
    answer: 'Errado',
    explanation: 'Tablets possuem processadores (geralmente arquitetura ARM), assim como os PCs (arquitetura x86).'
  },
  {
    id: 114,
    difficulty: 'Médio',
    banca: 'CESPE',
    question: 'O uso de senhas de BIOS permite melhor controle de acesso ao equipamento, impedindo o carregamento do sistema operacional sem autorização.',
    options: ['Certo', 'Errado'],
    answer: 'Certo',
    explanation: 'A senha de supervisor ou boot na BIOS restringe o acesso ao hardware e ao início do sistema.'
  },
  {
    id: 115,
    difficulty: 'Médio',
    banca: 'CESPE',
    question: 'É responsável pela realização de cálculos matemáticos em um computador o componente de hardware denominado:',
    options: ['Barramento', 'Memória RAM', 'Processador (CPU)', 'HD'],
    answer: 'Processador (CPU)',
    explanation: 'A ULA (Unidade Lógica e Aritmética) dentro da CPU realiza as contas.'
  },
  {
    id: 116,
    difficulty: 'Fácil',
    banca: 'CESPE',
    question: 'No Windows, a perda da configuração dos dados da BIOS normalmente é um indicativo da necessidade de troca da bateria da placa-mãe.',
    options: ['Certo', 'Errado'],
    answer: 'Certo',
    explanation: 'A bateria de lítio mantém a memória CMOS ativa quando o PC está desligado.'
  },
  {
    id: 117,
    difficulty: 'Médio',
    banca: 'CESPE',
    question: 'Um software livre pode ser usado, copiado, estudado, modificado e redistribuído sem restrição.',
    options: ['Certo', 'Errado'],
    answer: 'Certo',
    explanation: 'Essas são as quatro liberdades fundamentais do software livre definidas pela FSF.'
  },
  {
    id: 118,
    difficulty: 'Fácil',
    banca: 'CESPE',
    question: 'Ubuntu é um sistema operacional baseado no Linux e pode ser utilizado em laptops, desktops e servidores.',
    options: ['Certo', 'Errado'],
    answer: 'Certo',
    explanation: 'O Ubuntu é uma das distribuições Linux mais populares e versáteis do mercado.'
  },
  {
    id: 119,
    difficulty: 'Médio',
    banca: 'CESPE',
    question: 'Na Internet, o protocolo IPv6 permite aumentar o número de endereços IP disponíveis, suportando o crescimento de dispositivos conectados.',
    options: ['Certo', 'Errado'],
    answer: 'Certo',
    explanation: 'O IPv6 utiliza 128 bits, oferecendo um espaço de endereçamento imensamente maior que o IPv4.'
  },
  {
    id: 120,
    difficulty: 'Difícil',
    banca: 'CESPE',
    question: 'O firewall é o dispositivo que permite a conexão com a Internet, sendo responsável pela conversão do sinal analógico em digital.',
    options: ['Certo', 'Errado'],
    answer: 'Errado',
    explanation: 'Quem converte sinal analógico em digital é o MODEM. O firewall é um dispositivo de segurança.'
  },
  {
    id: 121,
    difficulty: 'Médio',
    banca: 'CESPE',
    question: 'As intranets utilizam os mesmos protocolos de comunicação usados na Internet, como o TCP/IP.',
    options: ['Certo', 'Errado'],
    answer: 'Certo',
    explanation: 'A intranet é uma rede privada que usa tecnologias e protocolos da Internet (Web, Email, FTP, IP).'
  },
  {
    id: 122,
    difficulty: 'Médio',
    banca: 'CESPE',
    question: 'No Microsoft Excel, a fórmula =SOMA(D2:D7) resultará na soma de todas as células no intervalo entre D2 e D7.',
    options: ['Certo', 'Errado'],
    answer: 'Certo',
    explanation: 'Os dois pontos (:) indicam um intervalo contínuo.'
  },
  {
    id: 123,
    difficulty: 'Difícil',
    banca: 'CESPE',
    question: 'Phishing é um programa utilizado para combater spyware, adware e keyloggers.',
    options: ['Certo', 'Errado'],
    answer: 'Errado',
    explanation: 'Phishing é um ataque de engenharia social para roubar dados, não um software de segurança.'
  },
  {
    id: 124,
    difficulty: 'Médio',
    banca: 'CESPE',
    question: 'Um disco rígido (HD) é um dispositivo de armazenamento volátil.',
    options: ['Certo', 'Errado'],
    answer: 'Errado',
    explanation: 'O HD é armazenamento secundário NÃO volátil; os dados permanecem sem energia.'
  },
  {
    id: 125,
    difficulty: 'Médio',
    banca: 'CESPE',
    question: 'Ao se criar uma nova pasta no Windows Explorer, ela é inicialmente criada sem nome e vazia.',
    options: ['Certo', 'Errado'],
    answer: 'Certo',
    explanation: 'O Windows cria como "Nova Pasta" aguardando o usuário digitar um nome.'
  },
  {
    id: 126,
    difficulty: 'Fácil',
    banca: 'CESPE',
    question: 'A sigla URL refere-se ao endereço único de um recurso disponível na rede mundial de computadores.',
    options: ['Certo', 'Errado'],
    answer: 'Certo',
    explanation: 'Uniform Resource Locator é o padrão de endereçamento da Web.'
  },
  {
    id: 127,
    difficulty: 'Fácil',
    banca: 'CESPE',
    question: 'Qual atalho de teclado é usado para copiar um item selecionado no Windows?',
    options: ['Ctrl + X', 'Ctrl + V', 'Ctrl + C', 'Ctrl + Z'],
    answer: 'Ctrl + C',
    explanation: 'Ctrl+C copia, Ctrl+X recorta e Ctrl+V cola.'
  },
  {
    id: 128,
    difficulty: 'Médio',
    banca: 'CESPE',
    question: 'O protocolo SMTP é responsável pelo envio de mensagens eletrônicas através da rede.',
    options: ['Certo', 'Errado'],
    answer: 'Certo',
    explanation: 'Simple Mail Transfer Protocol é o padrão para SAÍDA (envio) de emails.'
  },
  {
    id: 129,
    difficulty: 'Difícil',
    banca: 'CESPE',
    question: 'O backbone da Internet no Brasil é administrado exclusivamente pelo governo federal por questões de segurança nacional.',
    options: ['Certo', 'Errado'],
    answer: 'Errado',
    explanation: 'O backbone é operado por diversas empresas privadas de telecomunicações.'
  },
  {
    id: 130,
    difficulty: 'Médio',
    banca: 'CESPE',
    question: 'Assinale o protocolo utilizado para receber mensagens de correio eletrônico descarregando-as do servidor:',
    options: ['SMTP', 'HTTP', 'POP3', 'FTP'],
    answer: 'POP3',
    explanation: 'O POP3 baixa as mensagens do servidor para a máquina local.'
  },
  {
    id: 131,
    difficulty: 'Fácil',
    banca: 'CESPE',
    question: 'São causas comuns de problemas com impressoras: falta de papel, tinta ou alimentação, juntamente com travamento de CPU por sobreaquecimento.',
    options: ['Certo', 'Errado'],
    answer: 'Certo',
    explanation: 'De acordo com o material, sobreaquecimento e falta de suprimentos são falhas comuns exploradas em provas.'
  },
  {
    id: 132,
    difficulty: 'Médio',
    banca: 'CESPE',
    question: 'A manutenção corretiva pode ser planejada ou não, sendo motivada por emergência ou detecção de uma situação que possa vir a causar pane.',
    options: ['Certo', 'Errado'],
    answer: 'Certo',
    explanation: 'A manutenção corretiva ocorre após a falha ou quando se detecta a iminência de uma.'
  },
  {
    id: 133,
    difficulty: 'Fácil',
    banca: 'CESPE',
    question: 'O conector do tipo PS2 é utilizado para conectar mouses e teclados aos computadores.',
    options: ['Certo', 'Errado'],
    answer: 'Certo',
    explanation: 'O padrão PS/2 foi o antecessor do USB para periféricos de entrada.'
  },
  {
    id: 134,
    difficulty: 'Médio',
    banca: 'CESPE',
    question: 'A sigla FTP designa um protocolo que pode ser usado para a transferência de arquivos de dados na Internet.',
    options: ['Certo', 'Errado'],
    answer: 'Certo',
    explanation: 'File Transfer Protocol é o padrão para movimentação de arquivos entre hosts.'
  },
  {
    id: 135,
    difficulty: 'Difícil',
    banca: 'FGV',
    question: 'O Bluetooth é um padrão sem fio que transmite dados entre dispositivos compatíveis usando radiofrequência aberta padronizada.',
    options: ['Certo', 'Errado'],
    answer: 'Certo',
    explanation: 'O Bluetooth opera na faixa de 2.4GHz, que é aberta mundialmente.'
  },
  {
    id: 136,
    difficulty: 'Fácil',
    banca: 'FGV',
    question: 'No ambiente Windows, a ferramenta Scandisk permite a formatação do disco rígido.',
    options: ['Certo', 'Errado'],
    answer: 'Errado',
    explanation: 'O Scandisk (ou CHKDSK) verifica erros no disco, não formata.'
  },
  {
    id: 137,
    difficulty: 'Médio',
    banca: 'FGV',
    question: 'A memória RAM é um tipo de memória não volátil, pois a informação nela armazenada não é perdida quando o computador é desligado.',
    options: ['Certo', 'Errado'],
    answer: 'Errado',
    explanation: 'A memória RAM é VOLÁTIL. Perde os dados sem energia.'
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
    explanation: 'Reduz o tempo médio de acesso a dados da memória principal, utilizando armazenamento ultrarrápido.'
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
    id: 1101,
    difficulty: 'Fácil',
    banca: 'CESPE',
    question: 'A porta padrão utilizada para a conexão de pendrive em um computador moderno é denominada USB.',
    options: ['Certo', 'Errado'],
    answer: 'Errado',
    explanation: 'A porta padrão para pendrives é a USB (Universal Serial Bus).'
  },
  {
    id: 1102,
    difficulty: 'Médio',
    banca: 'CESPE',
    question: 'O uso de senha de BIOS permite melhor controle de acesso ao equipamento, prevenindo que usuários não autorizados alterem as configurações básicas do hardware.',
    options: ['Certo', 'Errado'],
    answer: 'Certo',
    explanation: 'A senha de supervisor na BIOS restringe o acesso ao setup.'
  },
  {
    id: 1103,
    difficulty: 'Médio',
    banca: 'CESPE',
    question: 'Um driver de dispositivo é o software responsável por permitir a comunicação entre o sistema operacional e um hardware específico.',
    options: ['Certo', 'Errado'],
    answer: 'Certo',
    explanation: 'Drivers funcionam como tradutores entre o hardware e o SO.'
  },
  {
    id: 1104,
    difficulty: 'Difícil',
    banca: 'CESPE',
    question: 'O recurso Pipeline em processadores modernos é utilizado para reconectar a placa de rede à Internet automaticamente.',
    options: ['Certo', 'Errado'],
    answer: 'Errado',
    explanation: 'Pipeline é uma técnica de processamento paralelo de instruções na CPU, não tem relação com rede.'
  },
  {
    id: 1105,
    difficulty: 'Médio',
    banca: 'CESPE',
    question: 'Uma das principais características das impressoras multifuncionais é reunir em um único equipamento as funções de impressora, copiadora e escâner.',
    options: ['Certo', 'Errado'],
    answer: 'Certo',
    explanation: 'A multifuncional integra múltiplos dispositivos de entrada/saída.'
  },
  {
    id: 1106,
    difficulty: 'Fácil',
    banca: 'CESPE',
    question: 'No Word 2007/2010, o atalho Ctrl + C tem a função de recortar o texto selecionado.',
    options: ['Certo', 'Errado'],
    answer: 'Errado',
    explanation: 'Ctrl+C copia; Ctrl+X é que recorta.'
  },
  {
    id: 1107,
    difficulty: 'Médio',
    banca: 'CESPE',
    question: 'No Excel, as colunas são identificadas por letras e as linhas por números.',
    options: ['Certo', 'Errado'],
    answer: 'Certo',
    explanation: 'É o padrão do sistema de coordenadas de células (ex: A1).'
  },
  {
    id: 1108,
    difficulty: 'Difícil',
    banca: 'CESPE',
    question: 'O protocolo HTTPS utiliza criptografia para garantir a confidencialidade e integridade dos dados durante o tráfego entre o cliente e o servidor.',
    options: ['Certo', 'Errado'],
    answer: 'Certo',
    explanation: 'O HTTPS usa SSL/TLS para segurança.'
  },
  {
    id: 1109,
    difficulty: 'Fácil',
    banca: 'FGV',
    question: 'Qual atalho de teclado é utilizado para fechar a janela ativa no Windows?',
    options: ['Alt + F4', 'Ctrl + F4', 'Win + L', 'Ctrl + C'],
    answer: 'Alt + F4',
    explanation: 'Alt+F4 encerra o programa/janela ativa.'
  },
  {
    id: 1110,
    difficulty: 'Médio',
    banca: 'FGV',
    question: 'O software que atua como intermediário entre o usuário e o hardware do computador é chamado de:',
    options: ['BIOS', 'Kernel', 'Firmware', 'Sistema Operacional'],
    answer: 'Sistema Operacional',
    explanation: 'O SO gerencia recursos e provê a interface ao usuário.'
  },
  {
    id: 1111,
    difficulty: 'Médio',
    banca: 'Geral',
    question: 'O termo "Backup" refere-se à cópia de segurança dos dados de um dispositivo para outro local.',
    options: ['Certo', 'Errado'],
    answer: 'Certo',
    explanation: 'Backup serve para recuperação em caso de perda original.'
  },
  {
    id: 1112,
    difficulty: 'Fácil',
    banca: 'Geral',
    question: 'Qual o nome do conector de vídeo digital mais comum em computadores modernos?',
    options: ['VGA', 'HDMI', 'PS2', 'RJ45'],
    answer: 'HDMI',
    explanation: 'High-Definition Multimedia Interface é o padrão atual.'
  },
  {
    id: 1113,
    difficulty: 'Difícil',
    banca: 'Geral',
    question: 'A memória cache L1 é geralmente mais rápida porém menor que a memória cache L2.',
    options: ['Certo', 'Errado'],
    answer: 'Certo',
    explanation: 'Quanto mais próxima do núcleo da CPU (L1), mais rápida e cara.'
  },
  {
    id: 1114,
    difficulty: 'Médio',
    banca: 'FCC',
    question: 'A sigla WAN (Wide Area Network) refere-se a uma rede de computadores de alcance local, como em uma residência.',
    options: ['Certo', 'Errado'],
    answer: 'Errado',
    explanation: 'WAN é rede de longa distância (países/continentes). A local é LAN.'
  },
  {
    id: 1116,
    difficulty: 'Fácil',
    banca: 'CESPE',
    question: 'A porta padrão utilizada para a conexão de pendrive em um computador — representada pelo símbolo de um tridente — é denominada:',
    options: ['USB', 'PS2', 'DB9', 'HDMI'],
    answer: 'USB',
    explanation: 'O pendrive utiliza a interface USB (Universal Serial Bus).'
  },
  {
    id: 1117,
    difficulty: 'Médio',
    banca: 'CESPE',
    question: 'Entre os componentes periféricos de um computador, constituem, respectivamente, exemplos de dispositivos de entrada e de saída de dados:',
    options: ['Mouse e Teclado', 'Impressora e Microfone', 'Teclado e Microfone', 'Mouse e Monitor LCD'],
    answer: 'Mouse e Monitor LCD',
    explanation: 'Mouse envia dados ao PC (entrada), Monitor exibe dados ao usuário (saída).'
  },
  {
    id: 1118,
    difficulty: 'Médio',
    banca: 'CESPE',
    question: 'O recurso "Hot Swapping", comum em dispositivos USB, permite conectar e desconectar periféricos com o computador ligado sem risco de danos ao hardware.',
    options: ['Certo', 'Errado'],
    answer: 'Certo',
    explanation: 'USB foi projetado para suporte a troca a quente (plug and play).'
  },
  {
    id: 1119,
    difficulty: 'Difícil',
    banca: 'CESPE',
    question: 'A principal função da memória cache é reduzir o tempo médio de acesso a dados na memória principal?',
    options: ['Certo', 'Errado'],
    answer: 'Certo',
    explanation: 'A cache armazena cópias de dados da RAM para acesso ultrarrápido pela CPU.'
  },
  {
    id: 1120,
    difficulty: 'Fácil',
    banca: 'CESPE',
    question: 'Qual recurso do Windows 7+ organiza arquivos de várias pastas em uma única visualização centralizada?',
    options: ['Bibliotecas', 'Meus Documentos', 'Painel de Controle', 'Desktop'],
    answer: 'Bibliotecas',
    explanation: 'As Bibliotecas (Libraries) agregam conteúdos de locais distintos sem movê-los.'
  },
  {
    id: 1121,
    difficulty: 'Médio',
    banca: 'CESPE',
    question: 'Tanto no sistema operacional Windows quanto no Linux, cada arquivo, diretório ou pasta encontra-se em um caminho (path) único.',
    options: ['Certo', 'Errado'],
    answer: 'Certo',
    explanation: 'O caminho define a localização lógica do arquivo na estrutura de diretórios.'
  },
  {
    id: 1122,
    difficulty: 'Médio',
    banca: 'CESPE',
    question: 'O recurso "Dual Channel" em memórias RAM exige obrigatoriamente que os pentes sejam de marcas e frequências diferentes para funcionar.',
    options: ['Certo', 'Errado'],
    answer: 'Errado',
    explanation: 'Para melhor estabilidade, recomenda-se que os pentes sejam idênticos (par casado).'
  },
  {
    id: 1123,
    difficulty: 'Fácil',
    banca: 'FGV',
    question: 'No Word, o botão representado por um pincel (Pincel de Formatação) serve para copiar o conteúdo de um parágrafo para outro local.',
    options: ['Certo', 'Errado'],
    answer: 'Errado',
    explanation: 'O Pincel de Formatação copia apenas a formatação (estilo), não o conteúdo.'
  },
  {
    id: 1124,
    difficulty: 'Difícil',
    banca: 'FGV',
    question: 'Qual das alternativas abaixo representa uma característica exclusiva do protocolo UDP em comparação ao TCP?',
    options: ['Garantia de entrega', 'Controle de fluxo', 'Orientado a conexão', 'Baixa sobrecarga (overhead)'],
    answer: 'Baixa sobrecarga (overhead)',
    explanation: 'O UDP não realiza verificações de erro complexas nem confirmações, sendo mais rápido porém menos confiável.'
  },
  {
    id: 1125,
    difficulty: 'Médio',
    banca: 'CESPE',
    question: 'Uma das desvantagens da computação em nuvem (cloud computing) é a necessidade obrigatória de conexão com a Internet para acessar os dados.',
    options: ['Certo', 'Errado'],
    answer: 'Certo',
    explanation: 'A dependência da rede é um fator crítico para o modelo SaaS e armazenamento online.'
  },
  {
    id: 1126,
    difficulty: 'Fácil',
    banca: 'Geral',
    question: 'O atalho Ctrl + Alt + Del no Windows 10/11 abre diretamente o Prompt de Comando.',
    options: ['Certo', 'Errado'],
    answer: 'Errado',
    explanation: 'Abre uma tela de segurança com opções como Bloquear, Trocar Usuário, Sair e Gerenciador de Tarefas.'
  },
  {
    id: 1127,
    difficulty: 'Médio',
    banca: 'CESPE',
    question: 'O software Malicioso conhecido como "Ransomware" tem como principal característica cifrar os arquivos do usuário e exigir resgate.',
    options: ['Certo', 'Errado'],
    answer: 'Certo',
    explanation: 'É o "sequestro digital" de dados.'
  },
  {
    id: 1128,
    difficulty: 'Médio',
    banca: 'CESPE',
    question: 'No Excel, para estender uma fórmula para células vizinhas de forma rápida, utiliza-se a alça de:',
    options: ['Seleção', 'Preenchimento', 'Formatação', 'Movimentação'],
    answer: 'Preenchimento',
    explanation: 'O pequeno quadrado no canto inferior direito da célula selecionada.'
  },
  {
    id: 1129,
    difficulty: 'Fácil',
    banca: 'FGV',
    question: 'Cookies são pequenos arquivos de texto gravados no computador do usuário pelos sites para armazenar preferências e dados de navegação.',
    options: ['Certo', 'Errado'],
    answer: 'Certo',
    explanation: 'Cookies servem para personalização e rastreamento de seção.'
  },
  {
    id: 1130,
    difficulty: 'Difícil',
    banca: 'CESPE',
    question: 'O Protocolo SNMP (Simple Network Management Protocol) é utilizado para o envio de mensagens de erro na camada de rede.',
    options: ['Certo', 'Errado'],
    answer: 'Errado',
    explanation: 'O SNMP é para gerenciamento de rede. O de mensagens de erro é o ICMP.'
  },
  {
    id: 1131,
    difficulty: 'Fácil',
    banca: 'CESPE',
    question: 'A placa-mãe (motherboard) é o componente central do computador, sendo responsável pela conexão física e lógica entre os demais hardwares.',
    options: ['Certo', 'Errado'],
    answer: 'Certo',
    explanation: 'A placa-mãe interliga CPU, memória, barramentos e periféricos.'
  },
  {
    id: 1132,
    difficulty: 'Médio',
    banca: 'CESPE',
    question: 'O recurso de "Hibernação" no Windows desliga o computador, salvando o estado atual do sistema apenas na memória RAM para um retorno imediato.',
    options: ['Certo', 'Errado'],
    answer: 'Errado',
    explanation: 'A hibernação salva o estado no DISCO RÍGIDO (HD/SSD); a Suspensão é que salva na RAM.'
  },
  {
    id: 1133,
    difficulty: 'Fácil',
    banca: 'CESPE',
    question: 'Um bit é o menor fragmento de informação processável, podendo assumir apenas dois valores distintos: 0 ou 1.',
    options: ['Certo', 'Errado'],
    answer: 'Certo',
    explanation: 'Binary Digit (Bit) é a base da computação binária.'
  },
  {
    id: 1134,
    difficulty: 'Médio',
    banca: 'FGV',
    question: 'Em relação aos navegadores de Internet, o termo "URL" é sinônimo de "Protocolo de Transferência de Hipertexto".',
    options: ['Certo', 'Errado'],
    answer: 'Errado',
    explanation: 'URL é o endereço do recurso; HTTP é o protocolo.'
  },
  {
    id: 1135,
    difficulty: 'Difícil',
    banca: 'Geral',
    question: 'A arquitetura de processadores baseada em múltiplos núcleos (Multi-core) permite a execução paralela de instruções, aumentando o desempenho total do sistema.',
    options: ['Certo', 'Errado'],
    answer: 'Certo',
    explanation: 'Cada núcleo pode processar tarefas de forma independente.'
  },
  {
    id: 1136,
    difficulty: 'Fácil',
    banca: 'Vunesp',
    question: 'O atalho de teclado Ctrl + Z no Microsoft Word é utilizado para:',
    options: ['Salvar o arquivo', 'Desfazer a última ação', 'Refazer a última ação', 'Copiar o texto'],
    answer: 'Desfazer a última ação',
    explanation: 'Padrão universal para Undo (Desfazer).'
  },
  {
    id: 1137,
    difficulty: 'Médio',
    banca: 'CESPE',
    question: 'As ferramentas de busca permitem localizar arquivos indexados em servidores web através de algoritmos complexos de rastreamento (crawling).',
    options: ['Certo', 'Errado'],
    answer: 'Certo',
    explanation: 'Buscadores como Google usam "aranhas" para varrer a web.'
  },
  {
    id: 1138,
    difficulty: 'Difícil',
    banca: 'CESPE',
    question: 'O software "Spyware" é classificado como um programa de proteção que detecta invasores na rede local.',
    options: ['Certo', 'Errado'],
    answer: 'Errado',
    explanation: 'Spyware é um malware (software malicioso) espião.'
  },
  {
    id: 1139,
    difficulty: 'Médio',
    banca: 'FGV',
    question: 'Qual o nome do software que gerencia o acesso de múltiplos usuários a uma única conexão de Internet em uma empresa, filtrando conteúdos?',
    options: ['Switch', 'Router', 'Proxy', 'Modem'],
    answer: 'Proxy',
    explanation: 'O servidor Proxy atua como intermediário e filtro de requisições.'
  },
  {
    id: 1140,
    difficulty: 'Fácil',
    banca: 'CESPE',
    question: 'No ambiente Windows, ao apagar um arquivo de um pendrive, ele é movido automaticamente para a Lixeira para recuperação posterior.',
    options: ['Certo', 'Errado'],
    answer: 'Errado',
    explanation: 'Arquivos excluídos de mídias removíveis (pendrives) são apagados permanentemente sem passar pela Lixeira.'
  },
  {
    id: 1141,
    difficulty: 'Médio',
    banca: 'Vunesp',
    question: 'No Excel 365, qual função retorna a posição de um item em um intervalo que corresponde a um valor específico?',
    options: ['PROCV', 'CORRESP', 'INDICE', 'ESCOLHER'],
    answer: 'CORRESP',
    explanation: 'A função CORRESP procura um item específico em um intervalo de células e retorna a posição relativa desse item.'
  },
  {
    id: 1142,
    difficulty: 'Médio',
    banca: 'Vunesp',
    question: 'No MS-Windows 10, em sua configuração padrão, o atalho de teclado utilizado para alternar entre os aplicativos abertos é:',
    options: ['Alt + Tab', 'Ctrl + Esc', 'Win + D', 'Alt + F4'],
    answer: 'Alt + Tab',
    explanation: 'O atalho Alt + Tab permite alternar rapidamente entre janelas e aplicativos em execução.'
  },
  {
    id: 1143,
    difficulty: 'Médio',
    banca: 'Vunesp',
    question: 'No MS-Word 2016, o recurso que permite copiar a formatação de um texto e aplicá-la em outro é o:',
    options: ['Copiar estilo', 'Pincel de Formatação', 'Autoformatação', 'Substituir formatado'],
    answer: 'Pincel de Formatação',
    explanation: 'O Pincel de Formatação copia cores, fontes e outros estilos de um lugar para outro rapidamente.'
  },
  {
    id: 1144,
    difficulty: 'Difícil',
    banca: 'Vunesp',
    question: 'Qual protocolo de e-mail permite acessar pastas no servidor e manter mensagens sincronizadas entre vários aparelhos?',
    options: ['SMTP', 'POP3', 'IMAP', 'HTTP'],
    answer: 'IMAP',
    explanation: 'O IMAP permite a sincronização bidirecional, mantendo o estado das mensagens no servidor.'
  },
  {
    id: 1145,
    difficulty: 'Difícil',
    banca: 'Vunesp',
    question: 'No Windows 10, o utilitário que permite gerenciar os processos em execução e monitorar o desempenho do sistema em tempo real é o:',
    options: ['Prompt de Comando', 'Gerenciador de Tarefas', 'Painel de Controle', 'Explorador de Arquivos'],
    answer: 'Gerenciador de Tarefas',
    explanation: 'O Gerenciador de Tarefas fornece informações detalhadas sobre a utilização de CPU, Memória e Disco.'
  },
  {
    id: 1146,
    difficulty: 'Médio',
    banca: 'FCC',
    question: 'No sistema operacional Linux, o comando utilizado para listar os arquivos de um diretório com detalhes (como permissões e tamanho) é:',
    options: ['ls -l', 'list', 'show', 'dir /w'],
    answer: 'ls -l',
    explanation: 'O comando "ls" com a opção "-l" exibe informações detalhadas de cada arquivo.'
  },
  {
    id: 1147,
    difficulty: 'Médio',
    banca: 'FCC',
    question: 'Qual dos seguintes tipos de malware é projetado especificamente para exigir um resgate para restaurar o acesso aos arquivos do usuário?',
    options: ['Spyware', 'Adware', 'Ransomware', 'Worm'],
    answer: 'Ransomware',
    explanation: 'Ransomware criptografa os dados da vítima e exige pagamento (resgate) para a liberação.'
  },
  {
    id: 1148,
    difficulty: 'Médio',
    banca: 'FCC',
    question: 'No contexto de redes de computadores, o protocolo responsável por converter nomes de domínio (como www.google.com) em endereços IP é o:',
    options: ['HTTP', 'FTP', 'DNS', 'DHCP'],
    answer: 'DNS',
    explanation: 'O Domain Name System atua como a "lista telefônica" da internet, traduzindo nomes em IPs.'
  },
  {
    id: 1149,
    difficulty: 'Difícil',
    banca: 'FCC',
    question: 'No modelo OSI, em qual camada operam os roteadores para realizar o encaminhamento de pacotes baseado em endereços lógicos?',
    options: ['Camada 1 - Física', 'Camada 2 - Enlace', 'Camada 3 - Rede', 'Camada 4 - Transporte'],
    answer: 'Camada 3 - Rede',
    explanation: 'Os roteadores operam na camada de Rede, utilizando protocolos como o IP para direcionar o tráfego.'
  },
  {
    id: 1150,
    difficulty: 'Difícil',
    banca: 'FCC',
    question: 'Em segurança da informação, o princípio que garante que a informação esteja disponível apenas para pessoas autorizadas é a:',
    options: ['Integridade', 'Disponibilidade', 'Confidencialidade', 'Autenticidade'],
    answer: 'Confidencialidade',
    explanation: 'A confidencialidade foca em restringir o acesso à informação a quem possui permissão.'
  },
  {
    id: 1151,
    difficulty: 'Difícil',
    banca: 'CESPE',
    question: 'Diferentemente do phishing, o pharming consiste em redirecionar o tráfego de um site legítimo para um site fraudulento por meio da corrupção do cache DNS.',
    options: ['Certo', 'Errado'],
    answer: 'Certo',
    explanation: 'O pharming ataca a infraestrutura de rede (DNS) para enganar o usuário sem necessidade de interação direta inicial.'
  },
  {
    id: 1152,
    difficulty: 'Difícil',
    banca: 'CESPE',
    question: 'No Windows 10, o BitLocker protege apenas arquivos individuais, não sendo capaz de criptografar unidades (drivers) inteiras?',
    options: ['Certo', 'Errado'],
    answer: 'Errado',
    explanation: 'O BitLocker é projetado para criptografar volumes inteiros (unidades de disco), protegendo todos os dados do drive.'
  },
  {
    id: 1153,
    difficulty: 'Difícil',
    banca: 'CESPE',
    question: 'As redes de computadores classificadas como PAN (Personal Area Network) possuem alcance geográfico superior às redes LAN (Local Area Network).',
    options: ['Certo', 'Errado'],
    answer: 'Errado',
    explanation: 'PAN é uma rede pessoal (curtíssimo alcance, ex: Bluetooth), enquanto LAN é uma rede local (ex: escritório).'
  },
  {
    id: 1154,
    difficulty: 'Difícil',
    banca: 'CESPE',
    question: 'Um certificado digital do tipo A3 é armazenado em hardware (como tokens ou smartcards), o que oferece maior segurança em comparação ao tipo A1, que é armazenado em software.',
    options: ['Certo', 'Errado'],
    answer: 'Certo',
    explanation: 'O hardware criptográfico do A3 impede a cópia da chave privada, tornando-o mais seguro que o A1.'
  },
  {
    id: 1155,
    difficulty: 'Difícil',
    banca: 'CESPE',
    question: 'Em uma planilha do Excel, ao se utilizar uma referência absoluta (ex: $A$1), a referência não sofrerá alteração quando a fórmula for copiada para outra célula.',
    options: ['Certo', 'Errado'],
    answer: 'Certo',
    explanation: 'O cifrão ($) fixa a coluna e a linha, tornando a referência absoluta.'
  },
  {
    id: 1156,
    difficulty: 'Difícil',
    banca: 'FGV',
    question: 'Qual técnica de backup realiza a cópia apenas dos arquivos que foram criados ou alterados desde o último backup completo, e que NÃO zera o bit de arquivamento?',
    options: ['Backup Incremental', 'Backup Diferencial', 'Backup de Cópia', 'Backup Diário'],
    answer: 'Backup Diferencial',
    explanation: 'O diferencial copia alterações desde o último completo e não zera o bit, permitindo que backups subsequentes também peguem as mesmas alterações.'
  },
  {
    id: 1157,
    difficulty: 'Difícil',
    banca: 'FGV',
    question: 'No contexto de criptografia, qual algoritmo é considerado simétrico?',
    options: ['RSA', 'ECC', 'AES', 'DSA'],
    answer: 'AES',
    explanation: 'O AES (Advanced Encryption Standard) é o padrão de criptografia simétrica mais utilizado mundialmente.'
  },
  {
    id: 1158,
    difficulty: 'Difícil',
    banca: 'FGV',
    question: 'Qual camada do modelo OSI é responsável pelo controle de diálogo, sincronização e gerenciamento de tokens?',
    options: ['Camada de Sessão', 'Camada de Transporte', 'Camada de Rede', 'Camada de Aplicação'],
    answer: 'Camada de Sessão',
    explanation: 'A camada de Sessão (Camada 5) estabelece, gerencia e finaliza as sessões entre aplicações.'
  },
  {
    id: 1159,
    difficulty: 'Difícil',
    banca: 'FGV',
    question: 'No Linux, o comando que permite visualizar o início de um arquivo de texto, por padrão as primeiras 10 linhas, é o:',
    options: ['tail', 'head', 'cat', 'less'],
    answer: 'head',
    explanation: 'O comando "head" mostra o topo do arquivo, enquanto "tail" mostra o final.'
  },
  {
    id: 1160,
    difficulty: 'Difícil',
    banca: 'FGV',
    question: 'No MS-Word, a funcionalidade "Quebra de Seção (Próxima Página)" é utilizada principalmente para:',
    options: ['Iniciar um novo parágrafo', 'Permitir diferentes formatações de página (como orientação) no mesmo documento', 'Inserir uma imagem em uma nova folha', 'Verificar erros gramaticais'],
    answer: 'Permitir diferentes formatações de página (como orientação) no mesmo documento',
    explanation: 'As quebras de seção isolam partes do documento para permitir cabeçalhos, rodapés ou orientações distintas.'
  }
];
