const rows = 6;
const cols = 7;
let board = [];
let currentPlayer = 'player1';
let gameActive = false;
let player1Score = 0;
let player2Score = 0;
const winnerModal = new bootstrap.Modal(document.getElementById('winnerModal'));
const drawModal = new bootstrap.Modal(document.getElementById('drawModal'));

document.getElementById('startGameBtn').addEventListener('click', startGame);

function startGame() {
    gameActive = true;
    currentPlayer = Math.random() < 0.5 ? 'player1' : 'player2';
    initializeBoard();
    updateControlPanel();
}

function initializeBoard() {
    board = Array(rows).fill(null).map(() => Array(cols).fill(''));
    renderBoard();
}

function renderBoard() {
    const gameBoard = document.getElementById('gameBoard');
    gameBoard.innerHTML = '';
    for (let r = 0; r < rows; r++) {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'board-row';
        for (let c = 0; c < cols; c++) {
            const cellDiv = document.createElement('div');
            cellDiv.className = 'board-cell';
            cellDiv.dataset.row = r;
            cellDiv.dataset.col = c;
            if (board[r][c] === 'player1') {
                cellDiv.classList.add('player1');
            } else if (board[r][c] === 'player2') {
                cellDiv.classList.add('player2');
            }
            rowDiv.appendChild(cellDiv);
        }
        gameBoard.appendChild(rowDiv);
    }
}

function dropPiece(col) {
    if (!gameActive) return;

    let row = findEmptyRow(col);
    if (row === -1) return; // Column is full

    dropPieceAnimation(col, row);
}

function findEmptyRow(col) {
    for (let r = rows - 1; r >= 0; r--) {
        if (board[r][col] === '') {
            return r;
        }
    }
    return -1;
}

function dropPieceAnimation(col, finalRow) {
    let currentRow = 0;

    function dropInterval() {
        if (currentRow > 0) {
            board[currentRow - 1][col] = '';
        }
        board[currentRow][col] = currentPlayer;
        renderBoard();

        if (currentRow < finalRow) {
            currentRow++;
            setTimeout(dropInterval, 100); // Delay for the animation step
        } else {
            completeMove(finalRow, col);
        }
    }

    dropInterval();
}

function completeMove(row, col) {
    if (checkWinner(row, col)) {
        gameActive = false;
        updateScore();
        setTimeout(() => {
            document.getElementById('winnerMessage').textContent = `¡Jugador ${currentPlayer === 'player1' ? 'Rojo' : 'Verde'} ha ganado!`;
            winnerModal.show();
        }, 500);
    } else if (board.flat().every(cell => cell !== '')) {
        gameActive = false;
        setTimeout(() => {
            drawModal.show();
        }, 500);
    } else {
        currentPlayer = currentPlayer === 'player1' ? 'player2' : 'player1';
        updateControlPanel();
    }
}

// Cambia el color de los botones:
function updateControlPanel() {
    const controlPanelButtons = document.querySelectorAll('#controlPanel .btn');
    controlPanelButtons.forEach((btn, index) => {
        btn.className = `btn ${currentPlayer === 'player1' ? 'btn-danger' : 'btn-success'}`;
    });
}

function checkWinner(row, col) {
    return checkDirection(row, col, 1, 0) || checkDirection(row, col, 0, 1) || 
           checkDirection(row, col, 1, 1) || checkDirection(row, col, 1, -1);
}

function checkDirection(row, col, rowDelta, colDelta) {
    let count = 1;
    count += countDiscs(row, col, rowDelta, colDelta);
    count += countDiscs(row, col, -rowDelta, -colDelta);
    return count >= 4;
}

function countDiscs(row, col, rowDelta, colDelta) {
    let r = row + rowDelta;
    let c = col + colDelta;
    let count = 0;
    while (r >= 0 && r < rows && c >= 0 && c < cols && board[r][c] === currentPlayer) {
        count++;
        r += rowDelta;
        c += colDelta;
    }
    return count;
}

function updateScore() {
    if (currentPlayer === 'player1') {
        player1Score++;
        document.getElementById('player1Score').textContent = `Rojo: ${player1Score}`;
    } else {
        player2Score++;
        document.getElementById('player2Score').textContent = `Verde: ${player2Score}`;
    }
}

function startNewGame() {
    startGame();
}
