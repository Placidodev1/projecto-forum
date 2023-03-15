//Definicao de variaveis
var toggle = document.querySelectorAll(".iconeparabaixo")
var divdabarra = document.querySelectorAll(".disciplinasbarra")
var respostas = document.querySelector(".respostas")
var iconeparabaixopergunta = document.querySelectorAll(".iconeparabaixopergunta")


//Switch da barra para explorar outras disciplinas


toggle.forEach(e1 => e1.addEventListener("click", ()=>{
    
    if(e1.classList.contains("iconeparabaixorotacao")){
        e1.classList.remove("iconeparabaixorotacao")
        e1.parentNode.parentElement.parentElement.childNodes[3].childNodes[1].classList.remove("show-disciplinasbarra")
        }else{
        e1.classList.add("iconeparabaixorotacao")
        e1.parentNode.parentElement.parentElement.childNodes[3].childNodes[1].classList.add("show-disciplinasbarra")
    }
}))


//Switch da barra para explorar outras disciplinas


iconeparabaixopergunta.forEach(e1=>e1.addEventListener("click", ()=>{
    console.log(e1.parentNode.parentElement.parentElement)
    if(e1.classList.contains("iconeparabaixorotacao")){
        e1.classList.remove("iconeparabaixorotacao")
        e1.parentNode.parentElement.parentElement.childNodes[3].classList.remove("respostas_mostra")
        }else{
            e1.classList.add("iconeparabaixorotacao")
            e1.parentNode.parentElement.parentElement.childNodes[3].classList.add("respostas_mostra")
        }
}))
