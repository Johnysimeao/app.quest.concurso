
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://oulcsebvrarfmsxljbbb.supabase.co';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseKey) {
  console.error('VITE_SUPABASE_ANON_KEY is missing');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const questions = [
  // Vunesp - Médio
  {
    difficulty: 'Médio',
    banca: 'Vunesp',
    question: 'No Microsoft Excel 365, a função utilizada para retornar a posição de um item em um intervalo que corresponde a um valor específico é:',
    options: ['PROCV', 'CORRESP', 'INDICE', 'ESCOLHER'],
    answer: 'CORRESP',
    explanation: 'A função CORRESP procura um item específico em um intervalo de células e retorna a posição relativa desse item.'
  },
  {
    difficulty: 'Médio',
    banca: 'Vunesp',
    question: 'No MS-Windows 10, em sua configuração padrão, o atalho de teclado utilizado para alternar entre os aplicativos abertos é:',
    options: ['Alt + Tab', 'Ctrl + Esc', 'Win + D', 'Alt + F4'],
    answer: 'Alt + Tab',
    explanation: 'O atalho Alt + Tab permite alternar rapidamente entre janelas e aplicativos em execução.'
  },
  {
    difficulty: 'Médio',
    banca: 'Vunesp',
    question: 'No MS-Word 2016, o recurso que permite copiar a formatação de um texto e aplicá-la em outro é o:',
    options: ['Copiar estilo', 'Pincel de Formatação', 'Autoformatação', 'Substituir formatado'],
    answer: 'Pincel de Formatação',
    explanation: 'O Pincel de Formatação copia cores, fontes e outros estilos de um lugar para outro rapidamente.'
  },
  // Vunesp - Difícil
  {
    difficulty: 'Difícil',
    banca: 'Vunesp',
    question: 'No contexto de Correio Eletrônico, o protocolo que permite que o cliente de e-mail acesse as pastas no servidor e mantenha as mensagens sincronizadas entre múltiplos dispositivos é o:',
    options: ['SMTP', 'POP3', 'IMAP', 'HTTP'],
    answer: 'IMAP',
    explanation: 'O IMAP permite a sincronização bidirecional, mantendo o estado das mensagens no servidor.'
  },
  {
    difficulty: 'Difícil',
    banca: 'Vunesp',
    question: 'No Windows 10, o utilitário que permite gerenciar os processos em execução e monitorar o desempenho do sistema em tempo real é o:',
    options: ['Prompt de Comando', 'Gerenciador de Tarefas', 'Painel de Controle', 'Explorador de Arquivos'],
    answer: 'Gerenciador de Tarefas',
    explanation: 'O Gerenciador de Tarefas (Task Manager) fornece informações detalhadas sobre a utilização de CPU, Memória e Disco.'
  },
  // FCC - Médio
  {
    difficulty: 'Médio',
    banca: 'FCC',
    question: 'No sistema operacional Linux, o comando utilizado para listar os arquivos de um diretório com detalhes (como permissões e tamanho) é:',
    options: ['ls -l', 'list', 'show', 'dir /w'],
    answer: 'ls -l',
    explanation: 'O comando "ls" com a opção "-l" (long) exibe informações detalhadas de cada arquivo.'
  },
  {
    difficulty: 'Médio',
    banca: 'FCC',
    question: 'Qual dos seguintes tipos de malware é projetado especificamente para exigir um resgate para restaurar o acesso aos arquivos do usuário?',
    options: ['Spyware', 'Adware', 'Ransomware', 'Worm'],
    answer: 'Ransomware',
    explanation: 'Ransomware criptografa os dados da vítima e exige pagamento (resgate) para a liberação.'
  },
  {
    difficulty: 'Médio',
    banca: 'FCC',
    question: 'No contexto de redes de computadores, o protocolo responsável por converter nomes de domínio (como www.google.com) em endereços IP é o:',
    options: ['HTTP', 'FTP', 'DNS', 'DHCP'],
    answer: 'DNS',
    explanation: 'O Domain Name System atua como a "lista telefônica" da internet, traduzindo nomes em IPs.'
  },
  // FCC - Difícil
  {
    difficulty: 'Difícil',
    banca: 'FCC',
    question: 'No modelo OSI, em qual camada operam os roteadores para realizar o encaminhamento de pacotes baseado em endereços lógicos?',
    options: ['Camada 1 - Física', 'Camada 2 - Enlace', 'Camada 3 - Rede', 'Camada 4 - Transporte'],
    answer: 'Camada 3 - Rede',
    explanation: 'Os roteadores operam na camada de Rede, utilizando protocolos como o IP para direcionar o tráfego.'
  },
  {
    difficulty: 'Difícil',
    banca: 'FCC',
    question: 'Em segurança da informação, o princípio que garante que a informação esteja disponível apenas para pessoas autorizadas é a:',
    options: ['Integridade', 'Disponibilidade', 'Confidencialidade', 'Autenticidade'],
    answer: 'Confidencialidade',
    explanation: 'A confidencialidade foca em restringir o acesso à informação a quem possui permissão.'
  },
  // CESPE (Cebraspe) - Difícil (Certo/Errado)
  {
    difficulty: 'Difícil',
    banca: 'CESPE',
    question: 'Diferentemente do phishing, o pharming consiste em redirecionar o tráfego de um site legítimo para um site fraudulento por meio da corrupção do cache DNS.',
    options: ['Certo', 'Errado'],
    answer: 'Certo',
    explanation: 'O pharming ataca a infraestrutura de rede (DNS) para enganar o usuário sem necessidade de interação direta inicial.'
  },
  {
    difficulty: 'Difícil',
    banca: 'CESPE',
    question: 'No Windows 10, o BitLocker é uma ferramenta de criptografia que protege apenas arquivos individuais selecionados pelo usuário, não sendo capaz de criptografar drivers inteiros.',
    options: ['Certo', 'Errado'],
    answer: 'Errado',
    explanation: 'O BitLocker é projetado para criptografar volumes inteiros (unidades de disco), protegendo todos os dados do drive.'
  },
  {
    difficulty: 'Difícil',
    banca: 'CESPE',
    question: 'As redes de computadores classificadas como PAN (Personal Area Network) possuem alcance geográfico superior às redes LAN (Local Area Network).',
    options: ['Certo', 'Errado'],
    answer: 'Errado',
    explanation: 'PAN é uma rede pessoal (curtíssimo alcance, ex: Bluetooth), enquanto LAN é uma rede local (ex: escritório).'
  },
  {
    difficulty: 'Difícil',
    banca: 'CESPE',
    question: 'Um certificado digital do tipo A3 é armazenado em hardware (como tokens ou smartcards), o que oferece maior segurança em comparação ao tipo A1, que é armazenado em software.',
    options: ['Certo', 'Errado'],
    answer: 'Certo',
    explanation: 'O hardware criptográfico do A3 impede a cópia da chave privada, tornando-o mais seguro que o A1.'
  },
  {
    difficulty: 'Difícil',
    banca: 'CESPE',
    question: 'Em uma planilha do Excel, ao se utilizar uma referência absoluta (ex: $A$1), a referência não sofrerá alteração quando a fórmula for copiada para outra célula.',
    options: ['Certo', 'Errado'],
    answer: 'Certo',
    explanation: 'O cifrão ($) fixa a coluna e a linha, tornando a referência absoluta.'
  },
  // FGV - Difícil
  {
    difficulty: 'Difícil',
    banca: 'FGV',
    question: 'Qual técnica de backup realiza a cópia apenas dos arquivos que foram criados ou alterados desde o último backup completo, e que NÃO zera o bit de arquivamento?',
    options: ['Backup Incremental', 'Backup Diferencial', 'Backup de Cópia', 'Backup Diário'],
    answer: 'Backup Diferencial',
    explanation: 'O diferencial copia alterações desde o último completo e não zera o bit, permitindo que backups subsequentes também peguem as mesmas alterações.'
  },
  {
    difficulty: 'Difícil',
    banca: 'FGV',
    question: 'No contexto de criptografia, qual algoritmo é considerado simétrico?',
    options: ['RSA', 'ECC', 'AES', 'DSA'],
    answer: 'AES',
    explanation: 'O AES (Advanced Encryption Standard) é o padrão de criptografia simétrica mais utilizado mundialmente.'
  },
  {
    difficulty: 'Difícil',
    banca: 'FGV',
    question: 'Qual camada do modelo OSI é responsável pelo controle de diálogo, sincronização e gerenciamento de tokens?',
    options: ['Camada de Sessão', 'Camada de Transporte', 'Camada de Rede', 'Camada de Aplicação'],
    answer: 'Camada de Sessão',
    explanation: 'A camada de Sessão (Camada 5) estabelece, gerencia e finaliza as sessões entre aplicações.'
  },
  {
    difficulty: 'Difícil',
    banca: 'FGV',
    question: 'No Linux, o comando que permite visualizar o início de um arquivo de texto, por padrão as primeiras 10 linhas, é o:',
    options: ['tail', 'head', 'cat', 'less'],
    answer: 'head',
    explanation: 'O comando "head" mostra o topo do arquivo, enquanto "tail" mostra o final.'
  },
  {
    difficulty: 'Difícil',
    banca: 'FGV',
    question: 'No MS-Word, a funcionalidade "Quebra de Seção (Próxima Página)" é utilizada principalmente para:',
    options: ['Iniciar um novo parágrafo', 'Permitir diferentes formatações de página (como orientação) no mesmo documento', 'Inserir uma imagem em uma nova folha', 'Verificar erros gramaticais'],
    answer: 'Permitir diferentes formatações de página (como orientação) no mesmo documento',
    explanation: 'As quebras de seção isolam partes do documento para permitir cabeçalhos, rodapés ou orientações distintas.'
  }
];

async function seed() {
  console.log('Iniciando inserção de questões...');
  
  for (const q of questions) {
    const { error } = await supabase.from('questions').insert([q]);
    if (error) {
      console.error(`Erro ao inserir questão: ${q.question.substring(0, 30)}...`, error);
    } else {
      console.log(`Sucesso: ${q.question.substring(0, 30)}...`);
    }
  }
  
  console.log('Fim do processo.');
}

seed();
