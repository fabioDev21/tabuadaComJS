function adicionaResultados(multiplicando, multiplicador){
    p.style.display = "none"
    tableResults.style.display = 'block'
    closeBtn.style.display = 'block'
    
    for(let i = 0; i <= multiplicador; i++){
        const tr = document.createElement("tr")
        tr.innerHTML += 
        `<td> ${multiplicando} x ${i} </td>
        <td> ${multiplicando * i} </td>`
        tableResults.appendChild(tr)
    }
}

const p = document.querySelector("div p")
const tableResults = document.querySelector("table")

function configuraValidaDados(){

    const userMultiplicando = parseInt(document.querySelector("#userMultiplicando").value)
    const userMultiplicador = parseInt(document.querySelector("#userMultiplicador").value)

    if(isNaN(userMultiplicando) || isNaN(userMultiplicador)){
        window.alert("Insira valores válidos!")
    } else if(userMultiplicando == null || userMultiplicador == null ){
        window.alert("Insira valores válidos!")
    } else{
        adicionaResultados(userMultiplicando, userMultiplicador)
    }
}

const closeBtn = document.querySelector("#closeBtn")
closeBtn.addEventListener("click", () => {
    if(p.style.display == "none"){
        tableResults.innerHTML = null
        tableResults.style.display = "none"
        p.style.display = "block"
        closeBtn.style.display = "none"
    }
})


// evento submit com prevent default para não enviar o formulário e realizar o loop da tabuada
const btnSubmit = document.querySelector("#btnSubmit")
btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    
    if(tableResults.innerHTML != null){
        tableResults.innerHTML = null
    }
    
    configuraValidaDados()
})