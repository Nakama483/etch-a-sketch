const body = document.body;
const grid = document.createElement('div');

grid.setAttribute('id', 'grid');
body.appendChild(grid);

// Create a 16x16 grid of squares 
for (let i = 0; i < 256; i++){
    let square = document.createElement('div');
    grid.appendChild(square);
}

const squares = document.querySelectorAll('#grid > div');

function changeBackgroundColor(element){
    return element.setAttribute('style', 'background-color: blue');
}

squares.forEach((square) => 
    {square.addEventListener('mouseover', () => changeBackgroundColor(square))
});
