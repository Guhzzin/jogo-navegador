const dino = document.querySelector('.dino');
const cacto = document.querySelector('.cacto');

const jump = () => {
    dino.classList.add('jump');
    setTimeout (() => {
        
        dino.classList.remove('jump');
        
    }, 500);
}

    const loop = setInterval( () => {

        const cactoPosition = cacto.offsetLeft;
        const dinoPosition = +window.getComputedStyle(dino).bottom.replace('px', '');
        console.log(dinoPosition)
        if(cactoPosition <= 85 && cactoPosition >0 && dinoPosition <80) {

            cacto.style.animation = 'none';
            cacto.style.left = `${cactoPosition}px`;

            dino.style.animation = 'none';
            dino.style.bottom = `${dinoPosition}px`;

            dino.src = './images/dino/dino game over.png'
            dino.style.width= '100px'
            dino.style.bottom= '-20px'
            dino.style.marginLeft= '5px'

            clearInterval(loop);
        }
    }, 10)

document.addEventListener("keydown", jump);

    const scoreElement = document.getElementById('score');
let currentScore = 0;
let highScore = 0;
let gameSpeed = 100; // Milliseconds for score update, adjust for game speed
let scoreInterval;

// Função para formatar a pontuação com zeros à esquerda
function formatScore(score) {
    return score.toString().padStart(5, '0');
}

// Função para atualizar o display da pontuação
function updateScoreDisplay() {
    scoreElement.textContent = `HI ${formatScore(highScore)} ${formatScore(currentScore)}`;
}

// Função para incrementar a pontuação
function incrementScore() {
    currentScore++;
    updateScoreDisplay();
}

// Função para iniciar a contagem de pontos
function startGame() {
    currentScore = 0;
    // Carrega o highScore do localStorage, se existir
    const storedHighScore = localStorage.getItem('dinoHighScore');
    if (storedHighScore) {
        highScore = parseInt(storedHighScore, 10);
    }
    updateScoreDisplay();

    // Limpa qualquer intervalo anterior para evitar múltiplos contadores
    if (scoreInterval) {
        clearInterval(scoreInterval);
    }
    // Inicia o intervalo para incrementar a pontuação
    scoreInterval = setInterval(incrementScore, gameSpeed);
}

// Função para parar o jogo (quando o dinossauro morre)
function stopGame() {
    clearInterval(scoreInterval);
    if (currentScore > highScore) {
        highScore = currentScore;
        localStorage.setItem('dinoHighScore', highScore); // Salva o novo highScore
    }
    // Aqui você pode adicionar a lógica de "Game Over"
    console.log("Game Over! Final Score:", currentScore, "High Score:", highScore);
}

// Inicia o jogo (você pode chamar isso quando o jogo começar de fato)
startGame();

// Exemplo de como parar o jogo após um tempo (simulando o dinossauro morrendo)
// setTimeout(stopGame, 10000); // Para o jogo após 10 segundos para teste





