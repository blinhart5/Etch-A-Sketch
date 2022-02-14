const body = document.querySelector('body'); 
const container = document.getElementById('container');
const clearBtn = document.getElementById('clear');  

clearBtn.addEventListener('click', () => {
    container.innerText = "";
    pixels = window.prompt('What size grid would you like? Max = 100');
    updateGrid();
    createGrid();

  
})


let pixels = 16;
createGrid();

function createGrid() {
    for (let i=0; i < pixels*pixels; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
    square.addEventListener('mouseover', () => {
    square.classList.add('black'); 
    })
   
    }
    
}

function updateGrid() {
    container.style.gridTemplateColumns = `repeat(${pixels}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${pixels}, 1fr)`;
}




console.log('wu-tang');
console.log(pixels); 




