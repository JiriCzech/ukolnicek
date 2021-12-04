// VARIABLES
var tasks = document.querySelectorAll("li")
var ul = document.querySelector("ul");

var tasks = [
    {task: "umyt nadobi", isDone: true},
    {task: "jit do obchodu", isDone: false},
    {task: "spat", isDone: false},
]

//-----------------------------------------------------

// FUNCTIONS

//Create new list item
function createNewLi(text,isDone){

    // create new li
    var li = document.createElement("li") // Create new list item with specific task
    li.innerHTML = text
    if (isDone == true){
    li.classList.add("done");
    }
    var deleteButton = createDeleteButton(li, isDone)
         // add click lisener
    li.addEventListener("click", ()=>{ // add done line  if click to task
    li.classList.toggle("done");
    deleteButton.classList.toggle("hide");
    })
        
    ul.appendChild(li) 
            
}


// Create button
function createDeleteButton(li,isDone){
 var deleteButton = document.createElement("button")
 deleteButton.innerText = "smazat"
 if (isDone == false){
     deleteButton.classList.add("hide")
 }
 li.appendChild(deleteButton)

 deleteButton.addEventListener("click", ()=>{
     ul.removeChild(li)
 })
return deleteButton;
}

//---------------------------------------------------


// Main funkcionality

// Add all task from Array
tasks.forEach(task =>{
    createNewLi(task.task, task.isDone)
    })
    



// Create new task
function newTask(){

    var text = prompt("Nový úkol:")// PopUp with new task name
    if (text != "" && text != null){
        createNewLi(text, false)
    }
}


