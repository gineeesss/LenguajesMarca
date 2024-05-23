document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('gameBoard');
    const  meBtn = document.getElementById('startGame');
    const newGameBtn = document.getElementById('newGame');
    const newGameFromDrawBtn = document.getElementById('newGameFromDraw');
    const winMessage = document.getElementById('winMessage');
    const greenWins = document.getElementById('greenWins');
    const redWins = document.getElementById('redWins');
    let currentPlayer = '';
    let board = [];
    let gameActive = false;

    startGameBtn.addEventListener('click', startGame);
    newGameBtn.addEventListener('click', resetGame);
    newGameFromDrawBtn.addEventListener('click', resetGame);

    function startGame() {
        resetGame();
        currentPlayer = Math.random() < 0.5 ? 'green' : 'red';
        gameActive = true;
        startGameBtn.disabled = true;
        renderBoard();
    }

    function resetGame() {
        board = Array.from({ length: 6 }, () => Array(7).fill(null));
        gameActive = false;
        currentPlayer = '';
        startGameBtn.disabled = false;
        renderBoard();
    }

    function renderBoard() {
        gameBoard.innerHTML = '';
        for (let row = 0; row < 6; row++) {
            for (let col = 0; col < 7; col++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                if (board[row][col]) {
                    cell.classList.add(board[row][col]);
                }
                cell.addEventListener('click', () => placeToken(col));
                gameBoard.appendChild(cell);
            }
        }
    }

    function placeToken(col) {
        if (!gameActive) return;
        for (let row = 5; row >= 0; row--) {
            if (!board[row][col]) {
                board[row][col] = currentPlayer;
                renderBoard();
                if (checkWin()) {
                    gameActive = false;
                    updateScore();
                    showWinModal();
                } else if (checkDraw()) {
                    gameActive = false;
                    showDrawModal();
                } else {
                    currentPlayer = currentPlayer === 'green' ? 'red' : 'green';
                }
                break;
            }
        }
    }

    function checkWin() {
        // Implementación de la lógica para verificar si hay un ganador.
        return false;
    }

    function checkDraw() {
        return board.flat().every(cell => cell);
    }

    function updateScore() {
        if (currentPlayer === 'green') {
            greenWins.textContent = parseInt(greenWins.textContent) + 1;
        } else {
            redWins.textContent = parseInt(redWins.textContent) + 1;
        }
    }

    function showWinModal() {
        winMessage.textContent = `¡El jugador ${currentPlayer === 'green' ? 'Verde' : 'Rojo'} ha ganado!`;
        const winModal = new bootstrap.Modal(document.getElementById('winModal'));
        winModal.show();
    }

    function showDrawModal() {
        const drawModal = new bootstrap.Modal(document.getElementById('drawModal'));
        drawModal.show();
    }
});
