// VARIABLES
var tasks = document.querySelectorAll("li")
var ul = document.querySelector("ul");



//-----------------------------------------------------

// FUNCTIONS
// Create button
function createDeleteButton(li){
 var deleteButton = document.createElement("button")
 deleteButton.innerText = "smazat"
 deleteButton.classList.add("hide")
 li.appendChild(deleteButton)

 deleteButton.addEventListener("click", ()=>{
     ul.removeChild(li)
 })

return deleteButton;


 

}

//---------------------------------------------------



// Create new task
function newTask(){

    var text = prompt("Nový úkol:")// PopUp with new task name
    if (text != "" && text != null){ // check if the task is not empty

    var li = document.createElement("li") // Create new list item with specific task
    li.innerHTML = text
    var deleteButton = createDeleteButton(li)

    li.addEventListener("click", ()=>{ // add done line  if click to task
    li.classList.toggle("done");
    deleteButton.classList.toggle("hide");
    
    
    })

    ul.appendChild(li) 
    }


}


// Setings ->  

tasks.forEach(element => {
    element.addEventListener("click", ()=>{
        element.classList.toggle("done")
    })
});
