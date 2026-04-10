let container = document.querySelector(".container");

//fixed to 960 pixels;
let pixels = 960;

function createGrid(gridSize) {

//clear previous 
container.innerHTML = "";

/////////////////////////////////////////
//BOX DETAILS
/////////////////////////////////////////
let box = document.createElement("div");
box.style.boxSizing = "border-box";

let boxEdge = pixels / gridSize;

box.style.height = `${boxEdge}px`;
box.style.width = `${boxEdge}px`;
box.style.border = "1px solid black";

/////////////////////////////////////////////////
//appending boxes to form a square grid
/////////////////////////////////////////////////
let colContainer = document.createElement("div");

for(let i = 0; i < gridSize; i++) {
    let duplicate = box.cloneNode(true);
    colContainer.append(duplicate);
}

for(let i = 0; i < gridSize; i++) {
    let duplicate = colContainer.cloneNode(true);
    container.append(duplicate);
}

}

createGrid(16);

//adding a button event listener 
let button = document.querySelector("button");
button.addEventListener("click", () => {
    let val = prompt("Enter Height/Width of Your Grid");
    if(val < 0) {
        alert("cannot handle this case");
    } else if(val > 100) {
        alert("Enter values below 100");
    }

    createGrid(val);
})

//////////////////////////////////////////////////////////////
//event listener to track mouseover and make relevant changes
/////////////////////////////////////////////////////////////
container.addEventListener("mouseover", (evt) => {
    if(evt.target != container) {
        evt.target.style.backgroundColor = "black"; 
    }    
})









