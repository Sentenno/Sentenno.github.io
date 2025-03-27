// script.js

// Array to hold the Bingo grid values
const bingoNumbers = [];

function generateBingoGrid() {
    const gridContainer = document.getElementById('bingo-grid');
    gridContainer.innerHTML = ''; // Clear any existing grid
  
    // Loop to create 5x5 grid
    for (let i = 0; i < 25; i++) {
        const cell = document.createElement('div');
        cell.classList.add('bingo-cell');
        
        // Create a textarea element for each cell (multiline)
        const editableDiv = document.createElement('textarea');
        editableDiv.setAttribute('role', 'textbox'); // Optional: better accessibility
        
        // Optional: Add placeholder-like content or initial value
        // editableDiv.textContent = `B${i + 1}`; // You can prefill with some text or leave it empty
        
        cell.appendChild(editableDiv);
        gridContainer.appendChild(cell);
    }
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
    generateBingoGrid();
    renderBingoGrid(grid);
}

// Set up the game
//document.getElementById("new-game").addEventListener("click", startNewGame);

// Initialize the game with a grid
startNewGame();