/* 
* Create 16x16 square divs
*/

const SIZE = 16;
let canva = document.createElement("div");
canva.setAttribute("id", "canva");

for (let i = 0; i < SIZE; i++) {
    let row = document.createElement("div");
    row.setAttribute("id", "row");

    for (let i = 0; i < SIZE; i++){
        grid = document.createElement("div");
        grid.classList.add("grid");
        grid.addEventListener("mouseover", colored);
        grid.addEventListener("click", clickColored);
        row.appendChild(grid);
    }
    canva.appendChild(row);
} 


document.body.appendChild(canva);

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

