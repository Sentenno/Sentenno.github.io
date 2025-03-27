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
        
        // Create a textarea element for each cell
        const editableDiv = document.createElement('textarea');
        editableDiv.setAttribute('role', 'textbox'); // Optional: better accessibility

        // Add the input event listener to dynamically adjust font size
        editableDiv.addEventListener('input', () => scaleText(editableDiv));
        
        // Call the function to scale the text immediately on load
        scaleText(editableDiv);

        cell.appendChild(editableDiv);
        gridContainer.appendChild(cell);
    }
}

// Function to dynamically scale text size and adjust padding
function scaleText(textarea) {
    const maxHeight = textarea.offsetHeight;
    const contentLength = textarea.value.length;
    let padding = 5;  // Default padding value

    maxFont = 32
    minFont = 8
    const baseFontSize = 25; // Starting font size for minimal content
    const scaleFactor = 6; // Controls how quickly the font size decreases (higher means slower decrease)

    fontSize = baseFontSize - (contentLength / scaleFactor)
    if (fontSize < 10) {
        fontSize = 10
    }

    // Ensure the font size is within reasonable limits
    textarea.style.fontSize = `${fontSize}px`;

    // Resize the text area to fit the content if needed (optional)
    const lineCount = Math.ceil(contentLength / 30); // Adjust line count based on content length
    textarea.rows = lineCount > 1 ? lineCount : 1;  // Adjust rows based on line count
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


// Start a new game
function startNewGame() {
    generateBingoGrid();
    renderBingoGrid(grid);
}

startNewGame();