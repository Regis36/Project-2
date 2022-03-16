let colorSelected;

//Adds a row
//function done by Antony 
function addR() {
    //alert("Clicked Add Row")
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");
      let gridrows = grid.rows.length;
      let row = document.createElement("tr"); //add a row to the grid 
        let col = document.createElement("td");
    console.log(rows.length);

    if (rows.length === 0) {
        let row = document.createElement("tr");
        let col = document.createElement("td");
        col.onclick = function(){

            this.style.backgroundColor = colorSelected;
        };
        
        row.appendChild(col);
        grid.appendChild(row);
    } 
    else {
        for(let i = 0; i < grid.rows.length; i++){
            grid.appendChild(row);
        }
    }

    else {
      let row = document.createElement("tr");
      let col = document.createElement("td");
      col.onclick = function(){
          this.style.backgroundColor = colorSelected;
      };
      row.appendChild(col);
      grid.appendChild(row);
    }
}
//Adds a column
//function done by Blaise 
function addC() {
    //alert("Clicked Add Col")
    let cols = document.getElementsByTagName("td");
}

//Removes a row
//function done by Regis 
function removeR() {
    grid.deleteRow(0); 
}

//Remove a column
//Function done by Regis 
function removeC() {
    alert("Clicked Remove Col")
    let rows = document.getElementsByTagName("tr"); 
    for (let i = 0; i < rows[0].cells.length; i++) {
        rows[i].deleteCell(i); 
    }
}
//sets global var for selected color
//Function done by Antony
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}
//Function done by Blaise 
function fill(){
    alert("Clicked Fill All")
}

//Clear all colors in rows and columns (make it the default white)
//function done by Regis 
function clearAll(){
    alert("Clicked Clear All")
}

//Function 
//Function done by Blaise
function fillU(){
    alert("Clicked Fill All Uncolored")
}
