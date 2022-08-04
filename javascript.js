const body = document.body;
const grid = document.createElement('div');

grid.setAttribute('id', 'grid');

body.appendChild(grid);

for (let i = 0; i < 256; i++){
    let square = document.createElement('div');
    grid.appendChild(square);
}