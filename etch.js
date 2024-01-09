function createGrid(num){
    for (let i = 0; i < num; i++){
        const div = document.createElement("div");
        div.className = "box";
        div.style.display = "flex";
        div.style.borer = "1px";
        div.style.borderColor = "red";
        div.style.minWidth = "10px";
        div.style.minHeight = "10px";

        document.getElementById("container").appendChild(div);
    }
}

// Initialize values and run functions
let num = 16;
createGrid(num);