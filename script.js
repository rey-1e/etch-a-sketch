let container = document.querySelector(".container");

//fixed to 960 pixels;
let pixels = 760;

function createGrid(gridSize) {

//clear previous 
container.innerHTML = "";

/////////////////////////////////////////
//BOX DETAILS
/////////////////////////////////////////
let box = document.createElement("div");
box.style.boxSizing = "border-box";
box.style.backgroundColor = "aliceblue";
box.style.opacity = "1";

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

//function to get a random color: 
function getRandomColor() {
    let r = Math.floor(Math.random() * 257);
    let g = Math.floor(Math.random() * 257);
    let b = Math.floor(Math.random() * 257);

    return `rgb(${r}, ${g}, ${b})`;
}


//////////////////////////////////////////////////////////////
//event listener to track mouseover and make relevant changes
/////////////////////////////////////////////////////////////
container.addEventListener("mouseover", (evt) => {
    if(evt.target != container) {
        if(evt.target.style.backgroundColor == "aliceblue") {
            evt.target.style.backgroundColor = getRandomColor(); 
        }
        if(evt.target.style.opacity > 0) {
        evt.target.style.opacity -= 0.1;
        }
    }    
})









