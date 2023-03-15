var disciplinas = document.querySelectorAll(".disciplinas")
var text = document.querySelector(".text")
var submit = document.querySelector(".submit")
var input = document.querySelector(".input")
var receba = document.querySelector(".receba")

input.addEventListener("click" , function(){
    if(receba.classList.contains("open-modal")){
        receba.classList.remove("open-modal")
    }else{
        receba.classList.add("open-modal")
    }
})
input.addEventListener("keyup", (e)=>{
    while (receba.hasChildNodes()) {
        receba.removeChild(receba.firstChild);
    }
    var procura = e.target.value.toLowerCase()
    disciplinas.forEach(element => {
        var disciplin = element.textContent.toLocaleLowerCase()
        const node = document.createElement("li");
        const textnode = document.createTextNode(disciplin);
        node.appendChild(textnode);
        if(disciplin.includes(procura)){
            receba.appendChild(node)
        }
    });
})