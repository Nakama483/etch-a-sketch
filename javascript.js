const body = document.body;
const grid = document.createElement('div');
const resizeButton = document.getElementById('resizePrompt');

body.appendChild(grid);
grid.setAttribute('id', 'grid');

let squareDiv;
let initialColor = randomRGB();


function randomRGB() {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256); 
  }

// Limit grid size to 100 due to performance issues
function buttonPrompt(){
    gridDimensions = +(window.prompt("Set side length 1 - 100"));  
    if (gridDimensions <= 0){
        return gridDimensions = 16;
    }else if (gridDimensions <= 100) {
        return gridDimensions;
    } else if (gridDimensions > 100) {
        return gridDimensions = 100;
    }else {
        return gridDimensions = 16;
    }
} 

function changeSquareSize(size){
    squares = document.querySelectorAll('#grid > div');
    let squareLength = (960/size) - 2;
    squares.forEach((squareDiv) => 
        {squareDiv.style.height = `${squareLength}px`
    });
    squares.forEach((squareDiv) => 
        {squareDiv.style.width = `${squareLength}px`   
    });
}

function createGrid(length){
    for (let i = 0; i < (length ** 2); i++){
        squareDiv = document.createElement('div');
        grid.appendChild(squareDiv);
    }    
}

function removeAllChildNodes(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// Subtract 2 from RGB values to create fade to black effect on hover
function changeSquareColor(element){
    return element.style.backgroundColor = "rgb(" + (r-=2) + "," + (g-=2) + "," + (b-=2) + ")";
}

function selectNewSquares(){
    squares.forEach((squareDiv) => 
        {squareDiv.addEventListener('mouseover', () => changeSquareColor(squareDiv));
    });
}

// Create default 16x16 grid
for (let i = 0; i < 256; i++){
    squareDiv = document.createElement('div');
    grid.appendChild(squareDiv);
}

let squares = document.querySelectorAll('#grid > div');

squares.forEach((squareDiv) => 
    {squareDiv.addEventListener('mouseover', () => changeSquareColor(squareDiv));
});

resizeButton.addEventListener('click', buttonPrompt);
resizeButton.addEventListener('click', () => removeAllChildNodes(grid));
resizeButton.addEventListener('click', () => initialColor = randomRGB());
resizeButton.addEventListener('click', () => createGrid(gridDimensions));
resizeButton.addEventListener('click', () => changeSquareSize(gridDimensions));
resizeButton.addEventListener('click', () => selectNewSquares());



