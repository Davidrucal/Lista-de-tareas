let btn = document.querySelector("button")
let ul = document.querySelector("ul")



btn.addEventListener("click", function (){
    const ori =  null
    let input = document.querySelector("input").value
    //creacion de elementos
    let li = document.createElement("li")

 
    
    if (input.trim !== "") {
        li.textContent = input 
    }


    li.appendChild(addDeleteBtn()) //meter el button dentro de el item
    ul.appendChild(li)

    


    
})

function addDeleteBtn() {
    let deleteBtn = document.createElement("button")    
    deleteBtn.textContent = "Borrar";

    deleteBtn.addEventListener("click", (e) =>{
        let item = e.target.parentElement;
        ul.removeChild(item)

    })

    return deleteBtn;

}