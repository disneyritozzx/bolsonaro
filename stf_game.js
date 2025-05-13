// Game state
let gameState = {
    players: [],
    currentPlayerIndex: 0,
    questions: [],
    boardSize: 60,
    board: [],
    canContinue: false, // New state to track if player can continue
    justMoved: false,
    unaskedQuestions: []
};

// Player colors
const playerColors = ['#dc3545', '#0d6efd', '#198754', '#ffc107'];

// Questions database
const questions = [
    {
        question: "O que significa a sigla STF?",
        options: ["Supremo Tribunal Federalista", "Supremo Tribunal Federal", "Sistema de Tribunal Federal", "Supremo Tribunal da Federação"],
        correctAnswer: "Supremo Tribunal Federal",
        difficulty: "Fácil"
    },
    {
        question: "Quantos ministros compõem o STF?",
        options: ["7", "10", "11", "15"],
        correctAnswer: "11",
        difficulty: "Fácil"
    },
    {
        question: "Qual é a principal função do STF?",
        options: ["Criar leis", "Defender o presidente", "Julgar ações constitucionais", "Fiscalizar empresas"],
        correctAnswer: "Julgar ações constitucionais",
        difficulty: "Fácil"
    },
    {
        question: "Em que cidade está localizado o STF?",
        options: ["Brasília", "São Paulo", "Rio de Janeiro", "Belo Horizonte"],
        correctAnswer: "Brasília",
        difficulty: "Fácil"
    },
    {
        question: "O STF faz parte de qual Poder da República?",
        options: ["Executivo", "Legislativo", "Judiciário", "Moderador"],
        correctAnswer: "Judiciário",
        difficulty: "Fácil"
    },
    {
        question: "Quem nomeia os ministros do STF?",
        options: ["Senado Federal", "Câmara dos Deputados", "Supremo Conselho Nacional", "Presidente da República"],
        correctAnswer: "Presidente da República",
        difficulty: "Fácil"
    },
    {
        question: "Qual é o tempo de mandato de um ministro do STF?",
        options: ["8 anos", "10 anos", "15 anos", "Até completar 75 anos"],
        correctAnswer: "Até completar 75 anos",
        difficulty: "Fácil"
    },
    {
        question: "Qual é a idade mínima para ser nomeado ministro do STF?",
        options: ["30 anos", "35 anos", "40 anos", "45 anos"],
        correctAnswer: "35 anos",
        difficulty: "Fácil"
    },
    {
        question: "Qual é a idade máxima para permanecer no STF?",
        options: ["65 anos", "70 anos", "75 anos", "Vitalício"],
        correctAnswer: "75 anos",
        difficulty: "Fácil"
    },
    {
        question: "O STF julga apenas pessoas comuns?",
        options: ["Sim", "Apenas militares", "Apenas políticos", "Não"],
        correctAnswer: "Não",
        difficulty: "Fácil"
    },
    {
        question: "Em que ano foi criado o STF?",
        options: ["1988", "1891", "1964", "1946"],
        correctAnswer: "1891",
        difficulty: "Fácil"
    },
    {
        question: "Qual Constituição criou oficialmente o STF?",
        options: ["Constituição de 1824", "Constituição de 1946", "Constituição de 1891", "Constituição de 1988"],
        correctAnswer: "Constituição de 1891",
        difficulty: "Fácil"
    },
    {
        question: "O STF é o órgão máximo de qual Poder?",
        options: ["Legislativo", "Judiciário", "Executivo", "Federal"],
        correctAnswer: "Judiciário",
        difficulty: "Fácil"
    },
    {
        question: "O STF pode julgar o presidente da República?",
        options: ["Não", "Apenas com autorização do Senado", "Sim, em certos crimes", "Apenas após o mandato"],
        correctAnswer: "Sim, em certos crimes",
        difficulty: "Fácil"
    },
    {
        question: "O STF pode declarar uma lei como inconstitucional?",
        options: ["Não", "Sim", "Só o Congresso pode", "Somente o STJ pode"],
        correctAnswer: "Sim",
        difficulty: "Fácil"
    },
    {
        question: "O STF julga ações relacionadas à Constituição.",
        options: ["Verdadeiro", "Falso", "Apenas em casos federais", "Apenas em crimes"],
        correctAnswer: "Verdadeiro",
        difficulty: "Fácil"
    },
    {
        question: "O STF é o guardião de qual documento?",
        options: ["Código Penal", "Constituição Federal", "Código Civil", "Lei das Leis"],
        correctAnswer: "Constituição Federal",
        difficulty: "Fácil"
    },
    {
        question: "Quantos Poderes existem na República Federativa do Brasil?",
        options: ["2", "4", "3", "5"],
        correctAnswer: "3",
        difficulty: "Fácil"
    },
    {
        question: "Qual é o órgão do Judiciário brasileiro mais importante?",
        options: ["STJ", "STF", "TJ-SP", "CNJ"],
        correctAnswer: "STF",
        difficulty: "Fácil"
    },
    {
        question: "O que é uma Ação Direta de Inconstitucionalidade (ADI)?",
        options: ["Um tipo de apelação comum", "Um questionamento direto à constitucionalidade de uma norma", "Um recurso contra decisão do juiz", "Uma denúncia criminal"],
        correctAnswer: "Um questionamento direto à constitucionalidade de uma norma",
        difficulty: "Médio"
    },
    {
        question: "O que é o controle de constitucionalidade?",
        options: ["Controle de gastos públicos", "Verificação se uma lei fere a Constituição", "Controle de sentenças", "Revisão de provas"],
        correctAnswer: "Verificação se uma lei fere a Constituição",
        difficulty: "Médio"
    },
    {
        question: "Qual a diferença entre o STF e o STJ?",
        options: ["Nenhuma, são o mesmo órgão", "O STJ é superior ao STF", "O STF julga questões constitucionais e o STJ, legais", "O STJ é do Legislativo"],
        correctAnswer: "O STF julga questões constitucionais e o STJ, legais",
        difficulty: "Médio"
    },
    {
        question: "O STF julga crimes comuns cometidos por deputados federais?",
        options: ["Nunca", "Apenas crimes graves", "Sim, em função do foro privilegiado", "Só em crimes estaduais"],
        correctAnswer: "Sim, em função do foro privilegiado",
        difficulty: "Médio"
    },
    {
        question: "Qual é o nome do prédio onde funciona o STF?",
        options: ["Palácio do Congresso", "Palácio da Justiça", "Edifício Sede Supremo", "Tribunal Federal Central"],
        correctAnswer: "Palácio da Justiça",
        difficulty: "Médio"
    },
    {
        question: "Qual é o quórum mínimo de ministros para decisões do plenário do STF?",
        options: ["5", "7", "6", "10"],
        correctAnswer: "6",
        difficulty: "Médio"
    },
    {
        question: "O que significa dizer que o STF tem jurisdição nacional?",
        options: ["Atua apenas na capital", "Atua em crimes federais", "Atua em todo o território nacional", "Atua só em Brasília"],
        correctAnswer: "Atua em todo o território nacional",
        difficulty: "Médio"
    },
    {
        question: "O que é o Plenário do STF?",
        options: ["Um grupo de jurados", "Reunião dos 11 ministros para decisão conjunta", "Um salão do Senado", "A comissão jurídica do Congresso"],
        correctAnswer: "Reunião dos 11 ministros para decisão conjunta",
        difficulty: "Médio"
    },
    {
        question: "O que é a súmula vinculante?",
        options: ["Enunciado com interpretação obrigatória da Constituição", "Lei criada pelo STF", "Projeto de lei", "Ordem do presidente"],
        correctAnswer: "Enunciado com interpretação obrigatória da Constituição",
        difficulty: "Médio"
    },
    {
        question: "Quem pode propor uma ADI?",
        options: ["Qualquer cidadão", "Apenas advogados", "Entidades como partidos políticos e PGR", "Apenas deputados"],
        correctAnswer: "Entidades como partidos políticos e PGR",
        difficulty: "Médio"
    },
    {
        question: "O que é o habeas corpus?",
        options: ["Garantia contra prisão ilegal", "Tipo de processo civil", "Código Penal", "Ordem de prisão"],
        correctAnswer: "Garantia contra prisão ilegal",
        difficulty: "Médio"
    },
    {
        question: "Qual é a função do relator no STF?",
        options: ["Julgar sozinho", "Defender o réu", "Conduzir o processo e apresentar relatório e voto inicial", "Redigir a Constituição"],
        correctAnswer: "Conduzir o processo e apresentar relatório e voto inicial",
        difficulty: "Médio"
    },
    {
        question: "Qual a diferença entre voto de relator e voto de revisor?",
        options: ["Nenhuma", "O revisor sempre vence", "O relator apresenta primeiro, o revisor revisa e opina", "O relator julga, o revisor não vota"],
        correctAnswer: "O relator apresenta primeiro, o revisor revisa e opina",
        difficulty: "Médio"
    },
    {
        question: "O que é o 'foro privilegiado'?",
        options: ["Privilégio de pagar menos impostos", "Direito de falar no Congresso", "Direito de ser julgado por tribunal superior", "Direito de ter prioridade em concursos"],
        correctAnswer: "Direito de ser julgado por tribunal superior",
        difficulty: "Médio"
    },
    {
        question: "Requisitos para ser ministro do STF:",
        options: ["Ter mais de 50 anos", "Ter notável saber jurídico e reputação ilibada", "Ser político eleito", "Ser juiz de carreira"],
        correctAnswer: "Ter notável saber jurídico e reputação ilibada",
        difficulty: "Médio"
    },
    {
        question: "O que é o princípio da separação dos Poderes?",
        options: ["Divisão entre estado e religião", "Independência entre Executivo, Legislativo e Judiciário", "Separação entre estados", "Separação entre homens e mulheres no governo"],
        correctAnswer: "Independência entre Executivo, Legislativo e Judiciário",
        difficulty: "Médio"
    },
    {
        question: "O que significa 'ativismo judicial'?",
        options: ["Juízes fazendo campanha política", "Juízes interpretando além da letra da lei", "Participação de juízes em protestos", "Férias do Judiciário"],
        correctAnswer: "Juízes interpretando além da letra da lei",
        difficulty: "Médio"
    },
    {
        question: "O que acontece quando o STF declara uma lei como inconstitucional?",
        options: ["A lei é modificada", "A lei vai ao Senado", "A lei deixa de ter validade", "Nada acontece"],
        correctAnswer: "A lei deixa de ter validade",
        difficulty: "Médio"
    },
    {
        question: "O que é a presunção de inocência?",
        options: ["Direito do juiz", "Todos são inocentes até prova em contrário", "Lei que protege políticos", "Teoria da defesa criminal"],
        correctAnswer: "Todos são inocentes até prova em contrário",
        difficulty: "Médio"
    },
    {
        question: "Um ministro do STF pode ser destituído?",
        options: ["Sim, por impeachment no Senado", "Não, é vitalício", "Apenas pelo presidente", "Apenas pela Câmara"],
        correctAnswer: "Sim, por impeachment no Senado",
        difficulty: "Médio"
    },
    {
        question: "O que é o controle difuso de constitucionalidade?",
        options: ["Controle feito só pelo STF", "Controle exercido por qualquer juiz em caso concreto", "Controle feito pelo Congresso", "Revisão automática de leis"],
        correctAnswer: "Controle exercido por qualquer juiz em caso concreto",
        difficulty: "Difícil"
    },
    {
        question: "O que é o controle concentrado de constitucionalidade?",
        options: ["Feito por promotores", "Julgamento centralizado no STF", "Controle das comissões do Congresso", "Feito pelo STJ"],
        correctAnswer: "Julgamento centralizado no STF",
        difficulty: "Difícil"
    },
    {
        question: "O que é a ADPF?",
        options: ["Ação de defesa da família pública", "Arguição de Descumprimento de Preceito Fundamental", "Ação Direta Popular Federal", "Ação de Defesa do Patrimônio Federal"],
        correctAnswer: "Arguição de Descumprimento de Preceito Fundamental",
        difficulty: "Difícil"
    },
    {
        question: "Em que casos o STF atua como tribunal penal?",
        options: ["Em qualquer crime", "Para julgar altas autoridades com foro privilegiado", "Apenas crimes federais", "Jamais atua como tribunal penal"],
        correctAnswer: "Para julgar altas autoridades com foro privilegiado",
        difficulty: "Difícil"
    },
    {
        question: "O que é o Recurso Extraordinário?",
        options: ["Pedido ao STJ", "Pedido ao Congresso", "Recurso ao STF sobre violação constitucional", "Recurso contra prisões"],
        correctAnswer: "Recurso ao STF sobre violação constitucional",
        difficulty: "Difícil"
    },
    {
        question: "Efeitos de decisão do STF em ADI?",
        options: ["A lei perde validade imediatamente", "A lei é enviada ao Congresso", "A lei é suspensa por um ano", "A lei passa a ser opcional"],
        correctAnswer: "A lei perde validade imediatamente",
        difficulty: "Difícil"
    },
    {
        question: "O que é modulação de efeitos?",
        options: ["Julgamento parcial", "Suspensão de lei", "STF define a partir de quando sua decisão valerá", "Suspensão de ministros"],
        correctAnswer: "STF define a partir de quando sua decisão valerá",
        difficulty: "Difícil"
    },
    {
        question: "O que é repercussão geral?",
        options: ["Relevância do tema para todo o país", "Tema polêmico na TV", "Questão eleitoral", "Recurso negado"],
        correctAnswer: "Relevância do tema para todo o país",
        difficulty: "Difícil"
    },
    {
        question: "O que é o princípio da colegialidade?",
        options: ["Cada ministro vota em segredo", "O presidente do STF decide tudo", "Decisões devem ser coletivas no plenário", "Os votos são revistos por deputados"],
        correctAnswer: "Decisões devem ser coletivas no plenário",
        difficulty: "Difícil"
    },
    {
        question: "Como funciona a sabatina de um ministro indicado?",
        options: ["Por votação popular", "Audiência pública no Senado Federal", "Decisão do STF", "Nomeação direta"],
        correctAnswer: "Audiência pública no Senado Federal",
        difficulty: "Difícil"
    },
    {
        question: "Papel do Senado na nomeação de ministros?",
        options: ["Nomeia diretamente", "Aprova ou rejeita indicação do presidente", "Faz campanha", "Não tem papel"],
        correctAnswer: "Aprova ou rejeita indicação do presidente",
        difficulty: "Difícil"
    },
    {
        question: "Quem foi o primeiro presidente do STF?",
        options: ["José Antônio Pimenta Bueno", "Rui Barbosa", "Joaquim Barbosa", "Teori Zavascki"],
        correctAnswer: "José Antônio Pimenta Bueno",
        difficulty: "Difícil"
    },
    {
        question: "O que é órgão contramajoritário?",
        options: ["Que representa a maioria", "Que defende partidos", "Atua contra vontades da maioria para proteger direitos fundamentais", "Que decide em eleições"],
        correctAnswer: "Atua contra vontades da maioria para proteger direitos fundamentais",
        difficulty: "Difícil"
    },
    {
        question: "O STF pode legislar?",
        options: ["Sim", "Não, mas pode interpretar leis e indicar mudanças necessárias", "Apenas no recesso", "Sempre que quiser"],
        correctAnswer: "Não, mas pode interpretar leis e indicar mudanças necessárias",
        difficulty: "Difícil"
    },
    {
        question: "O que são votos vencidos?",
        options: ["Votos dos ministros aposentados", "Votos de ministros que ficaram em minoria", "Votos do relator", "Votos do presidente"],
        correctAnswer: "Votos de ministros que ficaram em minoria",
        difficulty: "Difícil"
    },
    {
        question: "Como o STF interfere na jurisprudência?",
        options: ["Criando leis", "Proibindo recursos", "Uniformizando a interpretação da Constituição", "Revogando códigos"],
        correctAnswer: "Uniformizando a interpretação da Constituição",
        difficulty: "Difícil"
    },
    {
        question: "O que são direitos fundamentais?",
        options: ["Direitos do governo", "Direitos básicos garantidos pela Constituição", "Direitos dos empresários", "Direitos da ONU"],
        correctAnswer: "Direitos básicos garantidos pela Constituição",
        difficulty: "Difícil"
    },
    {
        question: "Função contramajoritária do STF:",
        options: ["Defender o governo", "Proteger minorias contra decisões populares injustas", "Votar com maioria", "Atuar no Congresso"],
        correctAnswer: "Proteger minorias contra decisões populares injustas",
        difficulty: "Difícil"
    },
    {
        question: "Se um ministro do STF cometer crime, quem o julga?",
        options: ["O presidente da República", "O próprio STF", "A Polícia Federal", "A OAB"],
        correctAnswer: "O próprio STF",
        difficulty: "Difícil"
    },
    {
        question: "Qual é o nome do atual presidente do STF (2024)?",
        options: ["Luiz Fux", "Rosa Weber", "Luís Roberto Barroso", "Cármen Lúcia"],
        correctAnswer: "Luís Roberto Barroso",
        difficulty: "Fácil"
    },
    {
        question: "Qual destes NÃO é um poder da República?",
        options: ["Executivo", "Legislativo", "Judiciário", "Militar"],
        correctAnswer: "Militar",
        difficulty: "Fácil"
    },
    {
        question: "Qual é o prazo máximo para um ministro do STF permanecer no cargo?",
        options: ["Até 70 anos", "Até 75 anos", "Vitalício", "8 anos"],
        correctAnswer: "Até 75 anos",
        difficulty: "Médio"
    },
    {
        question: "Quem pode propor uma Ação Direta de Inconstitucionalidade (ADI)?",
        options: ["Qualquer cidadão", "Apenas o presidente", "Entidades como partidos políticos e PGR", "Apenas deputados"],
        correctAnswer: "Entidades como partidos políticos e PGR",
        difficulty: "Médio"
    },
    {
        question: "Qual foi o primeiro caso julgado pelo STF após a promulgação da Constituição de 1988?",
        options: ["ADI 1", "HC 84.078", "MS 20.257", "RE 100.000"],
        correctAnswer: "ADI 1",
        difficulty: "Extrema"
    },
    {
        question: "Qual ministro do STF foi responsável pelo voto de minerva no julgamento do Mensalão?",
        options: ["Joaquim Barbosa", "Celso de Mello", "Ayres Britto", "Cezar Peluso"],
        correctAnswer: "Celso de Mello",
        difficulty: "Extrema"
    },
    {
        question: "Qual é o número da Súmula Vinculante que trata da presunção de inocência?",
        options: ["11", "14", "48", "52"],
        correctAnswer: "48",
        difficulty: "Extrema"
    },
    {
        question: "Em que ano o STF julgou a primeira ADPF (Arguição de Descumprimento de Preceito Fundamental)?",
        options: ["1999", "2001", "2004", "2007"],
        correctAnswer: "2004",
        difficulty: "Extrema"
    },
];

// Rule questions for cell 100
const ruleQuestions = [
    {
        question: 'Qual é a Regra 1?',
        options: [
            'Cada jogador começa na posição inicial do tabuleiro.',
            'Se errar a resposta, permaneça na mesma posição.',
            'Desafio Relâmpago: Acerte 3 perguntas seguidas e ganhe +2 casas de bônus.',
            'Pergunta Dourada: A cada 10 rodadas, uma pergunta especial vale o dobro do dado.'
        ],
        correctAnswer: 'Cada jogador começa na posição inicial do tabuleiro.'
    },
    {
        question: 'Qual é a Regra 2?',
        options: [
            'Na sua vez, role o dado para determinar quantas casas avançar.',
            'Se errar, volte 1 casa (exceto na inicial).',
            'O primeiro jogador a chegar ao final do tabuleiro vence!',
            'Casa de Sorte ou Revés: Casas 10, 20, 30, 40 e 50: responda uma pergunta extra.'
        ],
        correctAnswer: 'Na sua vez, role o dado para determinar quantas casas avançar.'
    },
    {
        question: 'Qual é a Regra 3?',
        options: [
            'Responda corretamente à pergunta para avançar o número de casas do dado.',
            'Desafio Relâmpago: Acerte 3 perguntas seguidas e ganhe +2 casas de bônus.',
            'Pergunta Dourada: A cada 10 rodadas, uma pergunta especial vale o dobro do dado.',
            'Se errar a resposta, permaneça na mesma posição.'
        ],
        correctAnswer: 'Responda corretamente à pergunta para avançar o número de casas do dado.'
    },
    {
        question: 'Qual é a Regra 4?',
        options: [
            'Se errar a resposta, permaneça na mesma posição.',
            'Cada jogador começa na posição inicial do tabuleiro.',
            'O primeiro jogador a chegar ao final do tabuleiro vence!',
            'Casa de Sorte ou Revés: Casas 10, 20, 30, 40 e 50: responda uma pergunta extra.'
        ],
        correctAnswer: 'Se errar a resposta, permaneça na mesma posição.'
    },
    {
        question: 'Qual é a Regra 5?',
        options: [
            'O primeiro jogador a chegar ao final do tabuleiro vence!',
            'Desafio Relâmpago: Acerte 3 perguntas seguidas e ganhe +2 casas de bônus.',
            'Se errar, volte 1 casa (exceto na inicial).',
            'Pergunta Dourada: A cada 10 rodadas, uma pergunta especial vale o dobro do dado.'
        ],
        correctAnswer: 'O primeiro jogador a chegar ao final do tabuleiro vence!'
    },
    {
        question: 'Qual é a Regra 6?',
        options: [
            'Desafio Relâmpago: Acerte 3 perguntas seguidas e ganhe +2 casas de bônus.',
            'Responda corretamente à pergunta para avançar o número de casas do dado.',
            'Se errar a resposta, permaneça na mesma posição.',
            'Casa de Sorte ou Revés: Casas 10, 20, 30, 40 e 50: responda uma pergunta extra.'
        ],
        correctAnswer: 'Desafio Relâmpago: Acerte 3 perguntas seguidas e ganhe +2 casas de bônus.'
    },
    {
        question: 'Qual é a Regra 7?',
        options: [
            'Se errar, volte 1 casa (exceto na inicial).',
            'Cada jogador começa na posição inicial do tabuleiro.',
            'O primeiro jogador a chegar ao final do tabuleiro vence!',
            'Pergunta Dourada: A cada 10 rodadas, uma pergunta especial vale o dobro do dado.'
        ],
        correctAnswer: 'Se errar, volte 1 casa (exceto na inicial).'
    },
    {
        question: 'Qual é a Regra 8?',
        options: [
            'Pergunta Dourada: A cada 10 rodadas, uma pergunta especial vale o dobro do dado.',
            'Desafio Relâmpago: Acerte 3 perguntas seguidas e ganhe +2 casas de bônus.',
            'Se errar a resposta, permaneça na mesma posição.',
            'Casa de Sorte ou Revés: Casas 10, 20, 30, 40 e 50: responda uma pergunta extra.'
        ],
        correctAnswer: 'Pergunta Dourada: A cada 10 rodadas, uma pergunta especial vale o dobro do dado.'
    },
    {
        question: 'Qual é a Regra 9?',
        options: [
            'Casa de Sorte ou Revés: Casas 10, 20, 30, 40 e 50: responda uma pergunta extra. Acertou? Avance +1. Errou? Volte -1.',
            'Desafio Relâmpago: Acerte 3 perguntas seguidas e ganhe +2 casas de bônus.',
            'Se errar a resposta, permaneça na mesma posição.',
            'O primeiro jogador a chegar ao final do tabuleiro vence!'
        ],
        correctAnswer: 'Casa de Sorte ou Revés: Casas 10, 20, 30, 40 e 50: responda uma pergunta extra. Acertou? Avance +1. Errou? Volte -1.'
    }
];

const presidentOptions = [
    { name: 'Lula', img: 'img/presidents/lula.png' },
    { name: 'Bolsonaro', img: 'img/presidents/bolsonaro.png' },
    { name: 'Fernando Collor', img: 'img/presidents/collor.png' },
    { name: 'Michel Temer', img: 'img/presidents/temer.png' },
    { name: 'Dilma', img: 'img/presidents/dilma.png' },
    { name: 'Getulio Vargas', img: 'img/presidents/getulio.png' },
    { name: 'Tancredo Neves', img: 'img/presidents/tancredo.png' }
];

const specialHouses = {
  1:   { name: 'Ditadura', colorClass: 'casa-ditadura' },
  7:   { name: 'AI-5', colorClass: 'casa-ai5' },
  11:  { name: 'STF', colorClass: 'casa-stf' },
  15:  { name: 'Redemocratização', colorClass: 'casa-redemocratizacao' },
  24:  { name: 'Constituição', colorClass: 'casa-constituicao' },
  61:  { name: 'Impeachment Dilma', colorClass: 'casa-impeachment-dilma' },
  64:  { name: 'Golpe 64', colorClass: 'casa-golpe64' },
  85:  { name: 'Fim Ditadura', colorClass: 'casa-fimditadura' },
  88:  { name: 'Constituição 88', colorClass: 'casa-constituicao88' },
  89:  { name: 'Primeira Ministra', colorClass: 'casa-ministra' },
  92:  { name: 'Impeachment Collor', colorClass: 'casa-impeachment-collor' },
  100: { name: 'Vitória', colorClass: 'casa-vitoria' }
};

// UI Functions
function showMainMenu() {
    hideAllSections();
    document.getElementById('mainMenu').classList.remove('d-none');
}

function showGameSetup() {
    if (!document.getElementById('rulesAgreeCheckbox').checked) {
        alert('Você deve ler e concordar com as regras do jogo antes de começar!');
        return;
    }
    hideAllSections();
    document.getElementById('gameSetup').classList.remove('d-none');
    updatePlayerInputs();
}

function showRules() {
    hideAllSections();
    document.getElementById('rules').classList.remove('d-none');
}

function showGameBoard() {
    hideAllSections();
    document.getElementById('gameBoard').classList.remove('d-none');
    initializeBoard();
    updateGameInfo();
}

function hideAllSections() {
    document.querySelectorAll('.menu-section').forEach(section => {
        section.classList.add('d-none');
    });
}

function updatePlayerInputs() {
    const count = parseInt(document.getElementById('playerCount').value);
    const container = document.getElementById('playerInputs');
    container.innerHTML = '';

    // Track selected presidents
    let selectedPresidents = Array(count).fill(null);

    function refreshDropdowns() {
        // Get all selected values
        const selected = [];
        for (let i = 0; i < count; i++) {
            const sel = document.getElementById(`playerFace${i}`);
            if (sel) selected.push(sel.value);
        }
        // Update all dropdowns
        for (let i = 0; i < count; i++) {
            const sel = document.getElementById(`playerFace${i}`);
            if (!sel) continue;
            for (let j = 0; j < presidentOptions.length; j++) {
                // Only disable if selected by another player
                sel.options[j].disabled = selected.includes(j.toString()) && sel.value !== j.toString();
            }
        }
    }

    for (let i = 0; i < count; i++) {
        const div = document.createElement('div');
        div.className = 'player-input';
        div.innerHTML = `
            <div class="input-group mb-2">
                <span class="input-group-text">
                    <img src="${presidentOptions[i % presidentOptions.length].img}" alt="Presidente" class="player-face-preview" id="playerFacePreview${i}" style="width:32px;height:32px;border-radius:50%;object-fit:cover;">
                </span>
                <input type="text" class="form-control" placeholder="Nome do Jogador ${i + 1}" id="player${i}" value="${presidentOptions[i % presidentOptions.length].name}" readonly>
                <select class="form-select" id="playerFace${i}" style="max-width:160px;">
                    ${presidentOptions.map((p, idx) => `<option value="${idx}">${p.name}</option>`).join('')}
                </select>
            </div>
        `;
        container.appendChild(div);
    }

    // Add event listeners for dropdowns
    for (let i = 0; i < count; i++) {
        const faceSelect = document.getElementById(`playerFace${i}`);
        const facePreview = document.getElementById(`playerFacePreview${i}`);
        const nameInput = document.getElementById(`player${i}`);
        faceSelect.value = i % presidentOptions.length;
        faceSelect.addEventListener('change', function() {
            const idx = this.value;
            facePreview.src = presidentOptions[idx].img;
            nameInput.value = presidentOptions[idx].name;
            refreshDropdowns();
        });
    }
    refreshDropdowns();
}

// Game Logic
function startGame() {
    const count = parseInt(document.getElementById('playerCount').value);
    gameState.players = [];
    let hasEmpty = false;
    let usedPresidents = new Set();
    for (let i = 0; i < count; i++) {
        const faceIdx = document.getElementById(`playerFace${i}`).value;
        const name = presidentOptions[faceIdx].name;
        if (usedPresidents.has(faceIdx)) {
            alert('Cada presidente só pode ser escolhido por um jogador!');
            return;
        }
        usedPresidents.add(faceIdx);
        gameState.players.push({
            name: name,
            position: 1,
            color: playerColors[i % playerColors.length],
            president: presidentOptions[faceIdx].name,
            faceImg: presidentOptions[faceIdx].img
        });
    }
    gameState.questions = [...questions];
    showGameBoard();
}

function initializeBoard() {
    const board = document.getElementById('board');
    board.innerHTML = '';

    // Create 10x10 grid
    for (let i = 0; i < 100; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.textContent = i + 1;
        cell.setAttribute('data-position', i + 1);
        if (i === 0) cell.classList.add('start-cell');
        if (i === 99) cell.classList.add('finish-cell');
        board.appendChild(cell);
    }

    // Initialize players on the board
    updatePlayers();
}

function updatePlayers() {
    // Clear all players
    document.querySelectorAll('.player').forEach(p => p.remove());
    
    // Group players by position
    const playersByPosition = {};
    gameState.players.forEach(player => {
        if (!playersByPosition[player.position]) {
            playersByPosition[player.position] = [];
        }
        playersByPosition[player.position].push(player);
    });

    // Update each cell with its players
    Object.entries(playersByPosition).forEach(([position, players]) => {
        const cell = document.querySelector(`.cell[data-position="${position}"]`);
        if (cell) {
            // Create players container if it doesn't exist
            let container = cell.querySelector('.players-container');
            if (!container) {
                container = document.createElement('div');
                container.className = 'players-container';
                cell.appendChild(container);
            } else {
                container.innerHTML = '';
            }
            // Remove classes antigas players-X
            container.className = 'players-container';
            container.classList.add(`players-${players.length}`);

            // Add players to the container
            players.forEach(player => {
                const playerElement = document.createElement('img');
                playerElement.className = 'player';
                playerElement.src = player.faceImg;
                playerElement.alt = player.president;
                playerElement.title = player.name + ' (' + player.president + ')';
                container.appendChild(playerElement);
            });

            // Add has-players class to cell
            cell.classList.add('has-players');
        }
    });

    // Remove has-players class e container de células sem jogadores
    document.querySelectorAll('.cell').forEach(cell => {
        const container = cell.querySelector('.players-container');
        if (container && (!container.querySelector('.player') || container.children.length === 0)) {
            container.remove();
            cell.classList.remove('has-players');
        }
    });

    updateDebugMovePanel();
}

function calculatePlayerPosition(position) {
    const cell = document.querySelector(`.cell[data-position="${position}"]`);
    if (!cell) return { left: 0, top: 0 };
    
    const rect = cell.getBoundingClientRect();
    const boardRect = document.querySelector('.board').getBoundingClientRect();
    
    return {
        left: rect.left - boardRect.left + rect.width / 2,
        top: rect.top - boardRect.top + rect.height / 2
    };
}

function rollDice() {
    const diceResult = document.getElementById('diceResult');
    const rollButton = document.querySelector('button[onclick="rollDice()"]');
    rollButton.disabled = true;
    
    // Animate dice roll
    let rolls = 0;
    const maxRolls = 10;
    const rollInterval = setInterval(() => {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        diceResult.innerHTML = `
            <div class="dice rolling">
                <div class="dice-inner">
                    ${getDiceFace(randomNumber)}
                </div>
            </div>
        `;
        rolls++;
        
        if (rolls >= maxRolls) {
            clearInterval(rollInterval);
            const finalNumber = Math.floor(Math.random() * 6) + 1;
            diceResult.innerHTML = `
                <div class="dice">
                    <div class="dice-inner">
                        ${getDiceFace(finalNumber)}
                    </div>
                </div>
            `;
            showQuestion(finalNumber);
        }
    }, 100);
}

function getDiceFace(number) {
    // Each array is a 3x3 grid, 1 = dot, 0 = empty
    const patterns = {
        1: [
            0,0,0,
            0,1,0,
            0,0,0
        ],
        2: [
            1,0,0,
            0,0,0,
            0,0,1
        ],
        3: [
            1,0,0,
            0,1,0,
            0,0,1
        ],
        4: [
            1,0,1,
            0,0,0,
            1,0,1
        ],
        5: [
            1,0,1,
            0,1,0,
            1,0,1
        ],
        6: [
            1,0,1,
            1,0,1,
            1,0,1
        ]
    };
    const grid = patterns[number];
    let html = '';
    for (let i = 0; i < 9; i++) {
        html += `<span class="dot${grid[i] ? '' : ' empty'}"></span>`;
    }
    return html;
}

function showQuestion(diceResult, isRuleQuestion = false) {
    const questionCard = document.getElementById('questionCard');
    const questionText = document.getElementById('questionText');
    const options = document.getElementById('options');

    if (isRuleQuestion) {
        // Pick a random rule question
        const ruleIdx = Math.floor(Math.random() * ruleQuestions.length);
        const ruleQ = ruleQuestions[ruleIdx];
        questionText.textContent = ruleQ.question;
        options.innerHTML = '';
        // Shuffle options
        const shuffled = ruleQ.options.slice().sort(() => Math.random() - 0.5);
        shuffled.forEach(option => {
            const button = document.createElement('button');
            button.className = 'option';
            button.textContent = option;
            button.onclick = () => {
                // Disable all options after selection
                const allOptions = document.querySelectorAll('.option');
                allOptions.forEach(opt => opt.disabled = true);
                // Show correct/incorrect feedback
                allOptions.forEach(opt => {
                    if (opt.textContent === ruleQ.correctAnswer) {
                        opt.classList.add('correct-answer');
                    } else if (opt.textContent === option) {
                        opt.classList.add(option === ruleQ.correctAnswer ? 'correct-answer' : 'wrong-answer');
                    }
                });
                // Add checkmark or X icon
                const icon = document.createElement('span');
                icon.className = option === ruleQ.correctAnswer ? 'answer-icon correct' : 'answer-icon wrong';
                icon.textContent = option === ruleQ.correctAnswer ? '✓' : '✗';
                button.appendChild(icon);
                // Wait for animation before proceeding
                setTimeout(() => {
                    checkRuleAnswer(option, ruleQ.correctAnswer);
                }, 1500);
            };
            options.appendChild(button);
        });
        questionCard.classList.remove('d-none');
        questionCard.classList.add('fade-in');
        return;
    }

    // Only use questions that haven't been asked yet
    if (!gameState.unaskedQuestions || gameState.unaskedQuestions.length === 0) {
        gameState.unaskedQuestions = [...gameState.questions];
    }
    if (gameState.unaskedQuestions.length === 0) {
        questionText.textContent = 'Nenhuma pergunta disponível no momento.';
        options.innerHTML = '';
        questionCard.classList.remove('d-none');
        questionCard.classList.add('fade-in');
        return;
    }
    // Get random question and remove it from the pool
    const randomIndex = Math.floor(Math.random() * gameState.unaskedQuestions.length);
    const question = gameState.unaskedQuestions.splice(randomIndex, 1)[0];

    questionText.textContent = question.question;
    options.innerHTML = '';

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option';
        button.textContent = option;
        button.onclick = () => {
            // Disable all options after selection
            const allOptions = document.querySelectorAll('.option');
            allOptions.forEach(opt => opt.disabled = true);

            // Show correct/incorrect feedback
            allOptions.forEach(opt => {
                if (opt.textContent === question.correctAnswer) {
                    opt.classList.add('correct-answer');
                } else if (opt.textContent === option) {
                    opt.classList.add(option === question.correctAnswer ? 'correct-answer' : 'wrong-answer');
                }
            });

            // Add checkmark or X icon
            const icon = document.createElement('span');
            icon.className = option === question.correctAnswer ? 'answer-icon correct' : 'answer-icon wrong';
            icon.textContent = option === question.correctAnswer ? '✓' : '✗';
            button.appendChild(icon);

            // Wait for animation before proceeding
            setTimeout(() => {
                checkAnswer(option, question.correctAnswer, diceResult);
            }, 1500);
        };
        options.appendChild(button);
    });

    questionCard.classList.remove('d-none');
    questionCard.classList.add('fade-in');
}

function checkAnswer(selected, correct, diceResult) {
    const currentPlayer = gameState.players[gameState.currentPlayerIndex];
    const rollButton = document.querySelector('button[onclick="rollDice()"]');
    
    if (selected === correct) {
        showToastFeedback('Resposta Correta!', true);
        // Animate walk
        gameState.justMoved = true;
        let newPosition = currentPlayer.position + diceResult;
        if (newPosition > 100) {
            newPosition = 99;
        }
        // Primeiro move o jogador
        currentPlayer.position = newPosition;
        updatePlayers();

        // Só faz pergunta de regra se PARAR exatamente na 99
        if (currentPlayer.position === 99) {
            setTimeout(() => {
                showQuestion(null, true);
            }, 1200);
            return;
        }

        if (currentPlayer.position === 100) {
            setTimeout(() => {
                showQuestion(null, true);
            }, 1200);
            return;
        }

        // Enable continue if answer is correct
        gameState.canContinue = true;
        rollButton.textContent = 'Continuar';
        rollButton.disabled = false; // Reabilita o botão
    } else {
        showToastFeedback('Resposta Incorreta!', false);
        // Reset continue state if answer is wrong
        gameState.canContinue = false;
        rollButton.textContent = 'Rolar Dado';
        rollButton.disabled = false; // Reabilita o botão
        nextPlayer();
    }
    
    updatePlayers();
}

function nextPlayer() {
    gameState.currentPlayerIndex = (gameState.currentPlayerIndex + 1) % gameState.players.length;
    updateGameInfo();
}

function updateGameInfo() {
    const currentPlayer = gameState.players[gameState.currentPlayerIndex];
    const currentPlayerDiv = document.getElementById('currentPlayer');
    currentPlayerDiv.innerHTML = `<span class="player-badge" style="background:${currentPlayer.color}"></span> <span class="player-name">${currentPlayer.name}</span>`;
    document.getElementById('diceResult').textContent = '';
    document.getElementById('questionCard').classList.add('d-none');
    
    // Update roll button text and style based on continue state
    const rollButton = document.querySelector('button[onclick="rollDice()"]');
    if (gameState.canContinue) {
        rollButton.innerHTML = '<span class="btn-icon">▶️</span> Continuar';
        rollButton.classList.add('continue-btn');
        rollButton.classList.remove('roll-btn');
    } else {
        rollButton.innerHTML = '<span class="btn-icon">🎲</span> Rolar Dado';
        rollButton.classList.add('roll-btn');
        rollButton.classList.remove('continue-btn');
    }
}

// Event Listeners
document.getElementById('playerCount').addEventListener('change', updatePlayerInputs);

// Enable 'Novo Jogo' only if rules are agreed
const rulesCheckbox = document.getElementById('rulesAgreeCheckbox');
const newGameBtn = document.getElementById('newGameBtn');
const rulesArrow = document.getElementById('rulesArrow');
const leiaRegrasText = document.getElementById('leiaRegrasText');
if (rulesCheckbox && newGameBtn && rulesArrow && leiaRegrasText) {
    function updateRulesArrow() {
        if (!rulesCheckbox.checked) {
            rulesArrow.classList.remove('d-none');
            leiaRegrasText.classList.remove('d-none');
        } else {
            rulesArrow.classList.add('d-none');
            leiaRegrasText.classList.add('d-none');
        }
    }
    rulesCheckbox.addEventListener('change', function() {
        newGameBtn.disabled = !this.checked;
        updateRulesArrow();
    });
    // Show arrow and text on load if not checked
    updateRulesArrow();
}

// Initialize game
showMainMenu(); 

// Show custom win modal with confetti
function showWinModal(winner) {
    const winModal = document.getElementById('winModal');
    const winnerName = document.getElementById('winnerName');
    const winnerFace = document.getElementById('winnerFace');
    winnerName.textContent = winner.name + ' (' + winner.president + ')';
    winnerFace.src = winner.faceImg;
    winModal.style.display = 'block';
    winModal.classList.add('show');
    // Easter egg: se for Michel Temer
    const easterEggDivId = 'temerEasterEgg';
    let easterEggDiv = document.getElementById(easterEggDivId);
    if (easterEggDiv) easterEggDiv.remove();
    if (winner.president === 'Michel Temer') {
        easterEggDiv = document.createElement('div');
        easterEggDiv.id = easterEggDivId;
        easterEggDiv.style.display = 'flex';
        easterEggDiv.style.justifyContent = 'center';
        easterEggDiv.style.alignItems = 'center';
        easterEggDiv.style.gap = '16px';
        easterEggDiv.style.margin = '18px 0 0 0';
        // Imagem do Elio
        const elioImg = document.createElement('img');
        elioImg.src = 'img/presidents/elio.png';
        elioImg.alt = 'Elio';
        elioImg.style.width = '54px';
        elioImg.style.height = '54px';
        elioImg.style.borderRadius = '50%';
        elioImg.style.objectFit = 'cover';
        // Imagem da esposa do Temer
        const esposaImg = document.createElement('img');
        esposaImg.src = 'img/presidents/esposa.png';
        esposaImg.alt = 'Esposa do Temer';
        esposaImg.style.width = '54px';
        esposaImg.style.height = '54px';
        esposaImg.style.borderRadius = '50%';
        esposaImg.style.objectFit = 'cover';
        // Emoji de aperto de mão
        const handshake = document.createElement('span');
        handshake.textContent = '🤝';
        handshake.style.fontSize = '2.2rem';
        handshake.style.margin = '0 8px';
        // Monta a ordem: Elio, handshake, esposa
        easterEggDiv.appendChild(elioImg);
        easterEggDiv.appendChild(handshake);
        easterEggDiv.appendChild(esposaImg);
        // Adiciona ao modal
        winnerFace.parentNode.appendChild(easterEggDiv);
    }
    // Toast de vitória
    showToastFeedback('Parabéns! Vitória de ' + winner.name + '!', true);
}

function closeWinModal() {
    const winModal = document.getElementById('winModal');
    winModal.style.display = 'none';
    winModal.classList.remove('show');
    showMainMenu();
}

// Confetti animation (canvas-confetti ou fallback)
function launchConfetti() {
    if (window.confetti) {
        confetti({
            particleCount: 150,
            spread: 90,
            origin: { y: 0.6 }
        });
    } else {
        // Fallback simples
        const canvas = document.getElementById('confettiCanvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < 100; i++) {
            ctx.beginPath();
            ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, 6 + Math.random() * 8, 0, 2 * Math.PI);
            ctx.fillStyle = `hsl(${Math.random() * 360}, 80%, 60%)`;
            ctx.fill();
        }
        setTimeout(() => ctx.clearRect(0, 0, canvas.width, canvas.height), 2000);
    }
}

// About and Credits modal logic
function showAboutModal() {
    document.getElementById('aboutModal').style.display = 'block';
    document.getElementById('aboutModal').classList.add('show');
}
function closeAboutModal() {
    document.getElementById('aboutModal').style.display = 'none';
    document.getElementById('aboutModal').classList.remove('show');
}
function showCreditsModal() {
    document.getElementById('creditsModal').style.display = 'block';
    document.getElementById('creditsModal').classList.add('show');
}
function closeCreditsModal() {
    document.getElementById('creditsModal').style.display = 'none';
    document.getElementById('creditsModal').classList.remove('show');
}

// Replace win logic in checkRuleAnswer
function checkRuleAnswer(selected, correct) {
    const feedbackElement = document.getElementById('answerFeedback');
    if (selected === correct) {
        feedbackElement.innerHTML = `
            <div class="feedback-content">
                <span class="feedback-icon">✓</span>
                <span class="feedback-text">Você acertou a regra! Parabéns, você venceu!</span>
            </div>
        `;
        feedbackElement.className = 'answer-feedback correct fade-in';
        setTimeout(() => {
            feedbackElement.classList.add('d-none');
            showWinModal(gameState.players[gameState.currentPlayerIndex]);
        }, 2000);
    } else {
        feedbackElement.innerHTML = `
            <div class="feedback-content">
                <span class="feedback-icon">✗</span>
                <span class="feedback-text">Resposta incorreta! Tente novamente na próxima vez que chegar ao 100.</span>
            </div>
        `;
        feedbackElement.className = 'answer-feedback incorrect fade-in';
        setTimeout(() => {
            feedbackElement.classList.add('d-none');
            nextPlayer();
        }, 2000);
    }
}

function showToastFeedback(mensagem, correto = true) {
    const toast = document.getElementById('toastFeedback');
    toast.textContent = mensagem;
    toast.className = 'toast-feedback show' + (correto ? '' : ' incorrect');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// Função para atualizar painel de debug de movimentação
function updateDebugMovePanel() {
    const panel = document.getElementById('debugMovePlayers');
    if (!panel) return;
    panel.innerHTML = '';
    gameState.players.forEach((player, idx) => {
        const div = document.createElement('div');
        div.style.display = 'flex';
        div.style.alignItems = 'center';
        div.style.gap = '8px';
        div.style.marginBottom = '8px';
        div.innerHTML = `
            <span style="min-width:32px;display:inline-block;"><img src="${player.faceImg}" style="width:28px;height:28px;border-radius:50%;vertical-align:middle;"></span>
            <span style="min-width:90px;">${player.name}</span>
            <input type="number" min="1" max="100" value="${player.position}" id="movePlayerInput${idx}" style="width:60px;padding:2px 6px;border-radius:6px;border:1px solid #444;background:#111;color:#fff;">
            <button class="btn btn-sm btn-success" onclick="movePlayerToHouse(${idx})">Mover</button>
        `;
        panel.appendChild(div);
    });
    updateDebugPlayerSelect();
}

window.movePlayerToHouse = function(idx) {
    const input = document.getElementById(`movePlayerInput${idx}`);
    let pos = parseInt(input.value);
    if (isNaN(pos) || pos < 1 || pos > 100) return;
    gameState.players[idx].position = pos;
    updatePlayers();
    updateDebugMovePanel();
};

// Chamar updateDebugMovePanel sempre que atualizar jogadores
const _oldUpdatePlayers = updatePlayers;
updatePlayers = function() {
    _oldUpdatePlayers();
    updateDebugMovePanel();
};

// Atualizar painel de seleção de jogador atual
function updateDebugPlayerSelect() {
    const panel = document.getElementById('debugPlayerSelect');
    if (!panel) return;
    let html = '<label for="selectCurrentPlayer">Selecionar jogador atual:</label> ';
    html += '<select id="selectCurrentPlayer" style="margin:0 8px 8px 0;">';
    gameState.players.forEach((player, idx) => {
        html += `<option value="${idx}" ${idx === gameState.currentPlayerIndex ? 'selected' : ''}>${player.name}</option>`;
    });
    html += '</select>';
    panel.innerHTML = html;
    document.getElementById('selectCurrentPlayer').onchange = function() {
        gameState.currentPlayerIndex = parseInt(this.value);
        updateGameInfo();
        updateDebugPlayerSelect();
    };
}

// Botão Auto Win
window.autoWin = function() {
    // Move o jogador atual para a casa 99 e aciona a pergunta de regra
    gameState.players[gameState.currentPlayerIndex].position = 99;
    updatePlayers();
    setTimeout(() => {
        showQuestion(null, true);
    }, 500);
}; 