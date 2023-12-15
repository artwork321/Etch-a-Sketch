/* 
* Create 16x16 square divs
*/

const SIZE = 16;
const MAX_SIZE = 64;
let canva = document.createElement("div");
canva.setAttribute("id", "canva");
let gridNum = SIZE;

function createGrids(gridNum){
    for (let i = 0; i < gridNum; i++) {
        let row = document.createElement("div");
        row.setAttribute("id", "row");
    
        for (let i = 0; i < gridNum; i++){
            grid = document.createElement("div");
            grid.classList.add("grid");
            grid.addEventListener("mouseover", colored);
            grid.addEventListener("click", clickColored);
            row.appendChild(grid);
        }
        canva.appendChild(row);
    } 

    document.body.appendChild(canva);
}

createGrids(gridNum);


// Event for pressing a grid
let isMouseDown = false;

document.addEventListener('mousedown', () => {
    isMouseDown = true;
});

document.addEventListener('mouseup', () => {
    isMouseDown = false;
});

function clickColored() {
    this.classList.add("active");
}

// Only color the grid when the mouse is pressed
function colored() {
    if (isMouseDown) {
        this.classList.add("active");
    }
}

/* 
* Create a button to ask user number of grids to make
*/
buttons = document.createElement("div");
buttons.setAttribute("id", "buttons-container");

numGridButton = document.createElement("button");
numGridButton.addEventListener("click", takeGrids);
numGridButton.textContent = "Adjust Size"

buttons.appendChild(numGridButton);
document.body.insertBefore(buttons, canva);

function takeGrids() {
    let gridNum = SIZE;
    gridNum = prompt("Enter the number of grids you want (max 64):");

    if (gridNum > MAX_SIZE)
        gridNum = MAX_SIZE;

    canva.innerHTML = "";
    createGrids(gridNum);
}


