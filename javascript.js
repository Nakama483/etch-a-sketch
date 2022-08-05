const resizeButton = document.getElementById('resizeButton');

let gridDimensions;

function resizePrompt(){
    gridDimensions = +(window.prompt("Set size: 1-100"));  
} 

function changeGridSize(size){
    let squareLength = (960/size) - 2;
    squares.forEach((squareDiv) => 
        {squareDiv.style.height = `${squareLength}px`
    });
    squares.forEach((squareDiv) => 
        {squareDiv.style.width = `${squareLength}px`   
    });
}
resizeButton.addEventListener('click', resizePrompt)
resizeButton.addEventListener('click', () => changeGridSize(gridDimensions))

const body = document.body;
const grid = document.createElement('div');

body.appendChild(grid);
grid.setAttribute('id', 'grid');

// Create a grid of squares 
for (let i = 0; i < 256; i++){
    let squareDiv = document.createElement('div');
    grid.appendChild(squareDiv);
}

const squares = document.querySelectorAll('#grid > div');

function changeBackgroundColor(element){
    return element.style.backgroundColor = 'blue';
}
squares.forEach((squareDiv) => 
    {squareDiv.addEventListener('mouseover', () => changeBackgroundColor(squareDiv));
});




