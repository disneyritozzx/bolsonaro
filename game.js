// Game state
let gameState = {
    players: [],
    currentPlayerIndex: 0,
    questions: [],
    boardSize: 60,
    board: []
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
    }
];

// UI Functions
function showMainMenu() {
    hideAllSections();
    document.getElementById('mainMenu').classList.remove('d-none');
}

function showGameSetup() {
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

    for (let i = 0; i < count; i++) {
        const div = document.createElement('div');
        div.className = 'player-input';
        div.innerHTML = `
            <div class="input-group">
                <span class="input-group-text">
                    <span class="player-color" style="background-color: ${playerColors[i]}"></span>
                </span>
                <input type="text" class="form-control" placeholder="Nome do Jogador ${i + 1}" id="player${i}">
            </div>
        `;
        container.appendChild(div);
    }
}

// Game Logic
function startGame() {
    const count = parseInt(document.getElementById('playerCount').value);
    gameState.players = [];

    for (let i = 0; i < count; i++) {
        const name = document.getElementById(`player${i}`).value || `Jogador ${i + 1}`;
        gameState.players.push({
            name: name,
            position: 0,
            color: playerColors[i]
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
        board.appendChild(cell);
    }

    // Initialize players on the board
    updatePlayers();
}

function updatePlayers() {
    const playersContainer = document.getElementById('players');
    playersContainer.innerHTML = '';

    gameState.players.forEach((player, index) => {
        const playerElement = document.createElement('div');
        playerElement.className = 'player';
        playerElement.style.backgroundColor = player.color;
        
        // Calculate position on the board
        const position = calculatePlayerPosition(player.position);
        playerElement.style.left = `${position.x}%`;
        playerElement.style.top = `${position.y}%`;
        
        playersContainer.appendChild(playerElement);
    });
}

function calculatePlayerPosition(position) {
    // Convert linear position to x,y coordinates on the board
    const totalCells = 36; // 10x10 grid
    const normalizedPosition = position % totalCells;
    
    // Calculate row and column
    const row = Math.floor(normalizedPosition / 10);
    const col = normalizedPosition % 10;
    
    return {
        x: (col * 10) + 5, // Center in cell
        y: (row * 10) + 5
    };
}

function rollDice() {
    const diceResult = Math.floor(Math.random() * 6) + 1;
    document.getElementById('diceResult').textContent = `Dado: ${diceResult}`;
    showQuestion(diceResult);
}

function showQuestion(diceResult) {
    const questionCard = document.getElementById('questionCard');
    const questionText = document.getElementById('questionText');
    const options = document.getElementById('options');
    
    // Get random question
    const randomIndex = Math.floor(Math.random() * gameState.questions.length);
    const question = gameState.questions[randomIndex];
    
    questionText.textContent = question.question;
    options.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option';
        button.textContent = option;
        button.onclick = () => checkAnswer(option, question.correctAnswer, diceResult);
        options.appendChild(button);
    });
    
    questionCard.classList.remove('d-none');
}

function checkAnswer(selected, correct, diceResult) {
    const currentPlayer = gameState.players[gameState.currentPlayerIndex];
    
    if (selected === correct) {
        currentPlayer.position += diceResult;
        if (currentPlayer.position >= gameState.boardSize) {
            alert(`${currentPlayer.name} venceu o jogo!`);
            showMainMenu();
            return;
        }
    }
    
    updatePlayers();
    nextPlayer();
}

function nextPlayer() {
    gameState.currentPlayerIndex = (gameState.currentPlayerIndex + 1) % gameState.players.length;
    updateGameInfo();
}

function updateGameInfo() {
    const currentPlayer = gameState.players[gameState.currentPlayerIndex];
    document.getElementById('currentPlayer').textContent = `Vez de: ${currentPlayer.name}`;
    document.getElementById('diceResult').textContent = '';
    document.getElementById('questionCard').classList.add('d-none');
}

// Event Listeners
document.getElementById('playerCount').addEventListener('change', updatePlayerInputs);

// Initialize game
showMainMenu(); 