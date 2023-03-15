//variaveis globais

const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");
var toggle1 = document.querySelectorAll(".botaoescoleoquequer")
var inspira = document.querySelector(".block")
var inspira1 = document.querySelector(".block1")
var toggle = document.querySelectorAll(".botaofacul")
var questao = document.querySelector(".Tensquestao")
var Classe = document.querySelector(".Classes")
var botoesclasses = document.querySelectorAll(".btn1")
var Disciplinasecu = document.querySelector(".Disciplinasecu")
var Anosecu = document.querySelector(".Anosecu")
var btn2 = document.querySelectorAll(".btn2")
var btn3 = document.querySelectorAll(".btn3")
var btn4 = document.querySelectorAll(".btn4")
var epoca = document.querySelector(".epoca")
var disciplinaano = document.getElementById("disciplinaano")
var classeepoca = document.getElementById("classeepoca")
var tipoensino = document.getElementById("tipoensino")
var voltar = document.querySelector(".voltar")
var Universidade = document.querySelector(".Universidade")
var btnfacul = document.querySelectorAll(".btnfacul")
var btnDISCIPLINAFAC = document.querySelectorAll(".btnDISCIPLINAFAC")
var Disciplinafacul = document.querySelector(".Disciplinafacul")
var btnanofac = document.querySelectorAll(".btnanofac")
var AnoSFACUL = document.querySelector(".AnoSFACUL")
var inspiracaounica = document.querySelectorAll(".inspiracaounica")
var ano = "."
var disciplina = "."
var nomedafacul = "."
var DisciplinafaculTXT = "."
var textoepoca = "."
var textooquequerfazer = "."
var textoclasse = "."
var textofaculsecuuni = "."

//Textos de inspiracao
var math = Math.floor(Math.random() * inspiracaounica.length)
inspiracaounica[math].classList.add("show-div")

//primeiros botoes
console.log(inspiracaounica[math]);
toggle.forEach(e1 => e1.addEventListener("click", function(){
    textofaculsecuuni= e1.textContent
    toggle.item(1).classList.remove("mudacor")
    toggle.item(0).classList.remove("mudacor")
    if(questao.classList.contains("show-div")){
        toggle1.item(1).classList.remove("mudacor")
        toggle1.item(0).classList.remove("mudacor")
        Classe.classList.remove("show-div")
        questao.classList.remove('show-div')
        epoca.classList.remove('show-div')
        Disciplinasecu.classList.remove('show-div')
        Anosecu.classList.remove('show-div')
        e1.classList.remove('mudacor')
        inspira.classList.remove("hide-div")
        inspira1.classList.remove("hide-div")
    }else{
        e1.classList.add('mudacor')
        questao.classList.add("show-div")
    }
}))

//segundos botoes

toggle1.forEach(e1 => e1.addEventListener("click", function(){
    toggle1.item(1).classList.remove("mudacor")
    toggle1.item(0).classList.remove("mudacor")
    textooquequerfazer = e1
    if(questao.classList.contains("show-div")){
        inspira.classList.add("hide-div")
        inspira1.classList.add("hide-div")
        e1.classList.add('mudacor')
    }else{
        e1.classList.remove('mudacor')
    }
    if(textofaculsecuuni === "Ensino medio"){
        Classe.classList.add("show-div")
    }
    if(textofaculsecuuni === "Ensino superior"){
        Universidade.classList.add("show-div")
    }
}))

// classe

for(let item of botoesclasses){
    item.addEventListener("click", function(){
        botoesclasses.item(0).classList.remove("mudacor")
        botoesclasses.item(1).classList.remove("mudacor")
        textoclasse = item.textContent
        console.log(textoclasse)
        if(Disciplinasecu.classList.contains("show-div")){
            item.classList.add("mudacor")
        }else{
            Disciplinasecu.classList.add('show-div')
            item.classList.add("mudacor")
        }
    })
}

// disciplina

for(let item of btn2){
    item.addEventListener("click", function(){
        disciplina = item.textContent
        var tamanho = btn2.length
        var i = 0
        while(tamanho>i){
            btn2.item(i).classList.remove("mudacor")
            i++
        }
        if(Anosecu.classList.contains("show-div")){
            Anosecu.classList.remove('show-div')
            item.classList.remove("mudacor")
        }else{
            Anosecu.classList.add('show-div')
            item.classList.add("mudacor")
        }
    })
}

// Ano

for(let item of btn3){
    item.addEventListener("click", function(){
        var tamanho = btn3.length
        var i = 0
        ano = item.textContent
        console.log(ano)
        while(tamanho>i){
            btn3.item(i).classList.remove("mudacor")
            i++
        }
        if(epoca.classList.contains("show-div")){
            epoca.classList.remove('show-div')
            item.classList.remove("mudacor")
        }else{
            epoca.classList.add('show-div')
            item.classList.add("mudacor")
        }
    })
}

//Coisas do modal

for(let item of btn4){
    item.addEventListener("click", function(){
        modal.classList.add("open-modal");  
        textoepoca = item.textContent
        disciplinaano.innerHTML = disciplina + " - " + ano
        classeepoca.innerHTML = textoclasse + " - " + textoepoca
        tipoensino.innerHTML = textofaculsecuuni
    })
}
closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});

voltar.addEventListener("click", function () {
    modal.classList.remove("open-modal");
  });

  
  // Universidade

for(let item of btnfacul){
    item.addEventListener("click", function(){
        var tamanho = btnfacul.length
        var i = 0
        nomedafacul = item.textContent
        while(tamanho>i){
            btnfacul.item(i).classList.remove("mudacor")
            i++
        }
        if(Disciplinafacul.classList.contains("show-div")){
            Disciplinafacul.classList.remove('show-div')
            item.classList.remove("mudacor")
        }else{
            Disciplinafacul.classList.add('show-div')
            item.classList.add("mudacor")
        }
    })
}

for(let item of btnDISCIPLINAFAC){
    item.addEventListener("click", function(){
        DisciplinafaculTXT = item.textContent
        var tamanho = btnDISCIPLINAFAC.length
        var i = 0
        while(tamanho>i){
            btnDISCIPLINAFAC.item(i).classList.remove("mudacor")
            i++
        }
        if(AnoSFACUL.classList.contains("show-div")){
            AnoSFACUL.classList.remove('show-div')
            item.classList.remove("mudacor")
        }else{
            AnoSFACUL.classList.add('show-div')
            item.classList.add("mudacor")
        }
    })
}


for(let item of btnanofac){
    item.addEventListener("click", function(){
        modal.classList.add("open-modal");
        ano = item.textContent  
        disciplinaano.innerHTML = DisciplinafaculTXT + " - " + ano
        classeepoca.innerHTML = nomedafacul
        tipoensino.innerHTML = textofaculsecuuni
    })
}