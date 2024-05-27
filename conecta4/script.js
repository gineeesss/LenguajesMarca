let currentPlayer = 'bg-danger';

function fillCell(column) {
    const cells = document.querySelectorAll(`.cell[data-column='${column}']`);
    for (let i = cells.length - 1; i >= 0; i--) {
        if (!cells[i].classList.contains('bg-danger') && !cells[i].classList.contains('bg-success')) {
            cells[i].classList.add(currentPlayer);
            currentPlayer = currentPlayer === 'bg-danger' ? 'bg-success' : 'bg-danger';
            break;
        }
    }
}
function resetGame() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.classList.remove('bg-danger', 'bg-success');
    });
    currentPlayer = 'bg-danger';
    document.getElementById('winnerMessage').innerHTML = '';
}

function checkWinner() {
    const cells = document.querySelectorAll('.cell');
    const columns = 7;
    const rows = 6;

    // Convert cells NodeList to a 2D array
    let board = Array.from({ length: rows }, () => Array(columns).fill(null));
    cells.forEach((cell, index) => {
        const row = Math.floor(index / columns);
        const column = index % columns;
        if (cell.classList.contains('bg-danger')) {
            board[row][column] = 'bg-danger';
        } else if (cell.classList.contains('bg-success')) {
            board[row][column] = 'bg-success';
        }
    });

    // Check horizontal, vertical, and diagonal for a win
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            const cell = board[row][col];
            if (cell && checkDirection(row, col, 1, 0, cell, board) ||  // horizontal
                cell && checkDirection(row, col, 0, 1, cell, board) ||  // vertical
                cell && checkDirection(row, col, 1, 1, cell, board) ||  // diagonal down-right
                cell && checkDirection(row, col, 1, -1, cell, board)) { // diagonal up-right
                return true;
            }
        }
    }
    return false;
}
