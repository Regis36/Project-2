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
    let grid = document.getElementById("grid"); 
    let rows = document.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++)
    {
        let col = document.createElement("td"); 
        let row = document.createElement("tr"); 

        col.onclick = function(){
          this.style.backgroundColor = colorSelected;
      };

        rows[i].appendChild(col);
    }
}

//Removes a row
//function done by Regis 
function removeR() {
    // alert("Clicked Remove Row")
    grid.deleteRow(0); 
}
//Remove a column
function removeC() {
    let rows = document.getElementsByTagName("tr"); 
    for (let i = 0; i < rows[0].cells.length; i++) {
        rows[i].deleteCell(i); 
    }
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
    let grid = document.querySelectorAll("grid"); 
    grid.onclick = function(){
        this.style.backgroundColor = ' ';
        // if(grid === colorSelected ){
        //     this.style.backgroundColor = white; 
        // }
    };
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}
