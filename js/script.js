const questions = [
    {
        question: "1. O que significa a sigla EPI?",
        options: ["Equipamento de Proteção Industrial", "Equipamento de Proteção Individual", "Equipamento de Prevenção Individual"],
        correctAnswer: 1
    },
    {
        question: "2. Qual é a principal finalidade dos EPIs?",
        options: ["Tornar o trabalho mais desconfortável", "Melhorar a produtividade do trabalhador", "Proteger o trabalhador contra riscos à sua saúde e segurança"],
        correctAnswer: 2
    },
    {
        question: "3. O que é ergonomia?",
        options: ["Uma técnica de alongamento muscular", "O estudo das condições de trabalho que visam a adaptação do ambiente ao trabalhador", "Um método de controle de qualidade"],
        correctAnswer: 1
    },
    {
        question: "4. Qual é um exemplo de EPI para proteção da cabeça?",
        options: ["Óculos de segurança", "Protetor auricular", "Capacete"],
        correctAnswer: 2
    },
    {
        question: "5. Qual é um exemplo de EPI para proteção auditiva?",
        options: ["Protetor auricular", "Máscara facial", "Luvas"],
        correctAnswer: 0
    },

        {
            question: "6. O que é LER/DORT?",
            options: [
                "Lesão por Esforço Repetitivo/Distúrbios Osteomusculares Relacionados ao Trabalho",
                "Lesão por Esforço Repetitivo/Distúrbios Oculares Relacionados ao Trabalho",
                "Lesão por Esforço Repetitivo/Distúrbios Respiratórios Relacionados ao Trabalho",
            ],
            correctAnswer: 0
        },
        {
            question: "7. Quais são os principais fatores ergonômicos que podem causar LER/DORT?",
            options: [
                "Postura inadequada, esforço físico excessivo, repetitividade de movimentos e vibração",
                "Iluminação inadequada, ruído excessivo, temperatura elevada e umidade baixa",
                "Falta de treinamento, falta de motivação, falta de equipamentos de proteção e falta de supervisão",
            ],
            correctAnswer: 0
        },
        {
            question: "8 - O que é o SESMT?",
            options: [
                "Serviço de Engenharia de Segurança e Medicina do Trabalho",
                "Serviço de Engenharia de Segurança e Marketing do Trabalho",
                "Serviço de Engenharia de Segurança e Mercado do Trabalho"
            ],
            correctAnswer: 0
        },
        {
            question: "9 - Qual é a função do SESMT?",
            options: [
                "Orientar os trabalhadores sobre o uso correto do EPI",
                "Realizar estudos relativos à antropometria e avaliar os riscos do ambiente de trabalho",
                "Realizar a manutenção dos equipamentos de proteção individual"
            ],
            correctAnswer: 1
        },
        {
            question: "10 - Quais são os benefícios da utilização correta do EPI e da ergonomia no ambiente de trabalho?",
            options: [
                "Redução de acidentes e doenças ocupacionais, aumento da produtividade e melhoria da qualidade de vida do trabalhador",
                "Redução de custos da empresa, aumento da produtividade e melhoria da imagem da empresa",
                "Redução de custos da empresa, aumento dos lucros da empresa e melhoria da qualidade de vida do trabalhador"
            ],
            correctAnswer: 0
        }
    
    
    // ... (rest of your code remains the same)
    
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");
const nextButton = document.getElementById("next-button");
const tryAgainButton = document.getElementById("try-again-button");
const resultGif = document.getElementById("result-gif");
const gifImage = document.createElement("img");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(index));

        optionsElement.appendChild(button);
    });

    resultElement.textContent = "";
    nextButton.style.display = "none";
    tryAgainButton.style.display = "none";
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const answerButtons = document.querySelectorAll("#options button");

    answerButtons.forEach((button, index) => {
        if (index === currentQuestion.correctAnswer) {
            button.classList.add("correct-answer");
        } else {
            button.classList.add("incorrect-answer");
        }
        button.disabled = true;
    });

    if (selectedIndex === currentQuestion.correctAnswer) {
        score++;
        resultElement.textContent = "Resposta correta!";
    } else {
        resultElement.textContent = "Resposta incorreta!";
    }

    nextButton.style.display = "block";
}


function showResult() {
    questionElement.textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
    optionsElement.innerHTML = "";
    resultElement.textContent = "";

    const resultGif = document.getElementById("result-gif");
    resultGif.innerHTML = ""; // Limpa o conteúdo anterior

    const gifImage = document.createElement("img");
    gifImage.src = "img/XOsX.gif"; // Substitua "seu-gif.gif" pelo nome do seu arquivo GIF
    resultGif.appendChild(gifImage);
    resultGif.style.display = "block";

    tryAgainButton.style.display = "block"; // Mostra o botão "Tente Novamente"
    nextButton.style.display = "none"; // Oculta o botão "Próxima Pergunta"
}

tryAgainButton.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    resultGif.style.display = "none";
    tryAgainButton.style.display = "none";
    loadQuestion();
});

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

loadQuestion();
