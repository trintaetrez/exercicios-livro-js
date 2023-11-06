const frm = document.querySelector("form");
const imClube = document.querySelector("#imgClube");
const dvTitulo = document.querySelector("#divTitulo");
const resp = document.querySelector("#respA")

const trocarClube = () => {
    let clube // variável que irá receber o nome do clube

    if (frm.rbBrasil.checked) { // verifica qual radiobutton está selecionado
        clube = "Brasil"
    } else if (frm.rbPelotas.checked) {
        clube = "Pelotas"
    } else {
        clube = "Farroupilha"
    }

    // define as classes de dvTitulo: row e cores do clube
    dvTitulo.className = `row cores-${clube}`

    // modifica a imagem de acordo com a seleção do cliente
    imClube.src = `/cap-9/ex9-1/img/${clube.toLowerCase()}.png`
    imClube.className = "img-fluid" // muda o estilo para exibir a imagem
    imClube.alt = `Símbolo do ${clube}` // modifica atributo alt

    localStorage.setItem("clube", clube) // salva no navegador a escolha do cliente
}

// associa ao evento change de cada botão do form a função trocarClube
frm.rbBrasil.addEventListener("change", trocarClube);
frm.rbPelotas.addEventListener("change", trocarClube);
frm.rbFarroupilha.addEventListener("change", trocarClube);

const verificarClube = () => {
    if (localStorage.getItem("clube")) { // se já estiver salvo algum clube
        const clube = localStorage.getItem("clube") // obtém o nome do clube

        if (clube == "Brasil") { // conforme o clube, marca checked
            frm.rbBrasil.checked = true
        } else if (clube = "Pelotas") {
            frm.rbPelotas.checked = true
        } else {
            frm.rbFarroupilha.checked = true
        }
        trocarClube() // chama function que troca imagem e cores
    }
}
// ao carregar a página, verifica se cliente já selecionou clube anteriormente
window.addEventListener("load", verificarClube)

const contadorVisitas = () => {
    let contador = 0;
    if (localStorage.getItem("clube")) {
        contador++
        resp.className = "respexa"
        let resposta = `Que bom que você voltou! Esta é a sua visita de número ${contador} ao site`
        resp.innerText = resposta
    } else {
        resp.className = "respexa"
        let resposta = "Muito bem-vindo ! Esta é a sua primeira visita ao nosso site."
        resp.innerText = resposta 
    }
}

window.addEventListener("load", contadorVisitas)

frm.btLimpar.addEventListener("click", () => {
    if (confirm("Confirma exclusão do time?")) {
        localStorage.removeItem("clube")
    }
})