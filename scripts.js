/* 
* Create 16x16 square divs
*/

const SIZE = 16;
const MAX_SIZE = 64;
const MAX_CANVA = 640.0;
let canva = document.createElement("div");
canva.setAttribute("id", "canva");
let gridNum = SIZE;
let isRainBow = false;
let isMouseDown = false;

function createGrids(num){
    for (let i = 0; i < num; i++) {
        let row = document.createElement("div");
        row.setAttribute("id", "row");
    
        for (let i = 0; i < num; i++){
            grid = document.createElement("div");
            grid.classList.add("grid");
            grid.style["width"] = MAX_CANVA/num + "px";
            grid.style["height"] = MAX_CANVA/num + "px";
            grid.addEventListener("mouseover", coloured);
            grid.addEventListener("click", clickColored);
            row.appendChild(grid);
        }
        canva.appendChild(row);
    } 

    document.body.appendChild(canva);
}

createGrids(gridNum);


// Event for pressing a grid
document.addEventListener('mousedown', () => {
    isMouseDown = true;
});

document.addEventListener('mouseup', () => {
    isMouseDown = false;
});

let colour = "pink";

function clickColored() {
    this.style["background-color"] = colour;
}


// Draw rainbow colours when the mouse is pressed
function coloured() {
    if (isMouseDown) {
        if (isRainBow){
            let rpg = [];
            rpg.push(Math.floor(Math.random() * 256));
            rpg.push(Math.floor(Math.random() * 256));
            rpg.push(Math.floor(Math.random() * 256));
            let text = rpg.join(",");
            colour = "rgb(" + text + ")";
        }
        this.style["background-color"] = colour;
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

/* Button to draw in rainbow colour*/
rainbowMode = document.createElement("button");

rainbowMode.textContent = "Rainbow Mode";
rainbowMode.addEventListener("click", ()=> {
    isRainBow = true;
    rainbowMode.classList.toggle("pressed");
})

buttons.appendChild(rainbowMode);

