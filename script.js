// script.js

// Array to hold the Bingo grid values
const bingoNumbers = [];

// Function to generate a Bingo grid with random numbers
function generateBingoGrid() {
    const grid = [];
    const usedNumbers = new Set();

    // Loop to fill the grid
    for (let i = 0; i < 5; i++) {
        grid[i] = [];
        for (let j = 0; j < 5; j++) {
            let num;
            // Generate a unique random number for each cell
            do {
                num = "dex"
            } while (usedNumbers.has(num));
            usedNumbers.add(num);
            grid[i][j] = num;
        }
    }

    return grid;
}

// Function to render the Bingo grid on the page
function renderBingoGrid(grid) {
    const gridContainer = document.getElementById("bingo-grid");
    gridContainer.innerHTML = ''; // Clear previous grid

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            const cell = document.createElement("div");
            cell.classList.add("bingo-cell");
            cell.textContent = grid[i][j];
            cell.addEventListener("click", () => markCell(cell, grid[i][j]));
            gridContainer.appendChild(cell);
        }
    }
}

// Function to mark a cell when clicked
function markCell(cell, num) {
    if (!cell.classList.contains("marked")) {
        cell.classList.add("marked");
        addToCalledList(num);
    }
}

// Function to add a number to the called list
function addToCalledList(num) {
    const calledList = document.getElementById("called-list");
    const listItem = document.createElement("li");
    listItem.textContent = num;
    calledList.appendChild(listItem);
}

// Start a new game
function startNewGame() {
    const grid = generateBingoGrid();
    renderBingoGrid(grid);
    const calledList = document.getElementById("called-list");
    calledList.innerHTML = ''; // Clear previous called numbers
}

// Set up the game
document.getElementById("new-game").addEventListener("click", startNewGame);

// Initialize the game with a grid
startNewGame();
