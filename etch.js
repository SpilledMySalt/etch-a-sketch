// Creates a row for the boxes
function createRow(num){
    for (let i = 0; i < num; i++){
        const div = document.createElement("div");
        div.className = "boxRow";
        div.style.display = "flex";
        div.style.justifyContent = "center";
        div.style.border = "10px";
        div.style.backgroundColor = "black";
        div.style.margin = "2px";
        document.getElementById("container").appendChild(div);

        // Calling function and adding horizontal boxes
        createBox(num);
    }
}

// Creates boxes
function createBox(num){

    for (let i = 0; i < num; i++){
        const div = document.createElement("div");
        div.className = "box";
        div.style.display = "flex";
        div.style.flexDirection = "row";
        div.style.backgroundColor = "pink";
        div.style.margin = "2px";

        // Use last child to select last created element of class
        document.querySelector(".boxRow:last-child").appendChild(div);
    }

    // Add num boxes to the row

}

// Initialize values and run functions
let num = 16;
createRow(num);