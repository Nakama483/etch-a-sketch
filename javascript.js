const body = document.body;
const grid = document.createElement('div');
const resizeButton = document.getElementById('resizeButton');

body.appendChild(grid);
grid.setAttribute('id', 'grid');

let gridDimensions;
let squareDiv;

function resizePrompt(){
    gridDimensions = +(window.prompt("Set side length 1 - 100"));  
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

function changeBackgroundColor(element){
    return element.style.backgroundColor = 'blue';
}

function selectNewSquares(){
    squares.forEach((squareDiv) => 
        {squareDiv.addEventListener('mouseover', () => changeBackgroundColor(squareDiv));
    });
}

//Create default 16x16 grid
for (let i = 0; i < 256; i++){
    squareDiv = document.createElement('div');
    grid.appendChild(squareDiv);
}

let squares = document.querySelectorAll('#grid > div');

squares.forEach((squareDiv) => 
    {squareDiv.addEventListener('mouseover', () => changeBackgroundColor(squareDiv));
});


resizeButton.addEventListener('click', resizePrompt);
resizeButton.addEventListener('click', () => removeAllChildNodes(grid));
resizeButton.addEventListener('click', () => createGrid(gridDimensions));
resizeButton.addEventListener('click', () => changeSquareSize(gridDimensions));
resizeButton.addEventListener('click', () => selectNewSquares());




