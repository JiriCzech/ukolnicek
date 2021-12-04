var tasks = document.querySelectorAll("li")
var ul = document.querySelector("ul");

function newTask(){
    var text = prompt("Nový úlol:")
    if (text != "" && text != null){
        var li = document.createElement("li")
    li.innerHTML = text
    li.addEventListener("click", ()=>{
        li.classList.toggle("done")
    })

    ul.appendChild(li)
    }


}




tasks.forEach(element => {
    element.addEventListener("click", ()=>{
        element.classList.toggle("done")
    })
});
