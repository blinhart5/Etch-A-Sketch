const body = document.querySelector('body'); 
const container = document.getElementById('container');
const clearBtn = document.getElementById('clear'); 
const randomBtn = document.getElementById('random'); 
const blackBtn = document.getElementById('black');
const greyScaleBtn = document.getElementById('greyScale')
const colorBtns = document.querySelectorAll('.colorBtn');

/* Adds event listener to buttons that changes the color of the grid on hover/mouseover */

colorBtns.forEach(colorBtn => colorBtn.addEventListener('click', changeColor));

/* Default settings for page loadup */

let color = 'black'; 
let pixels = 16;
createGrid();

/* Clears grid and prompts user for new size. */

clearBtn.addEventListener('click', () => {
    container.innerText= "";
        pixels = window.prompt("Size of Grid?")
        updateGrid();
        createGrid();
})

/* Updates grid-template-columns in css based on default/prompted user input. */

function updateGrid() {
    container.style.gridTemplateColumns = `repeat(${pixels}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${pixels}, 1fr)`;
}

/* Creates grid by adding divs based on default/prompted user input */

function createGrid() {
    for (let i=0; i < pixels*pixels; i++) {
    let gridSquare = document.createElement('div');
    gridSquare.classList.add('square');
    container.appendChild(gridSquare);
   }

   /* Adds event listener to grid divs to change color when mouse moves/hovers over them */

    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', colorGrid));
}

/* Changes color variable based on the id of which button is clicked */

function changeColor (event) {
    switch (event.target.id) {
        case 'random': 
            color = 'random'; 
            break; 
        case 'black':
            color = 'black'; 
            break; 
        case 'eraser': 
            color = 'eraser';
            break; 
    }
}

/* updates the background of the grid pixels based on which color button was clicked */

function colorGrid () {
    switch (color) { 
        case 'random': 
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            break; 
        case 'black': 
            this.style.backgroundColor = `hsl(0, 0%, 0%)`;
            break; 
        case 'eraser': 
            this.style.backgroundColor = `hsl(0, 50%, 100%)`; 
            break;      
    }
}




 







