const frm = document.querySelector("form") // obtém elementos da página
const resp = document.querySelector("pre")

const carros = []  // declara vetor global

frm.addEventListener("submit", (e) => {  // "escuta" evento submit do form
    e.preventDefault() // evita envio do form
    const modelo = frm.inModelo.value // obtém dados do form
    const preco = Number(frm.inPreco.value)
    carros.push({ modelo, preco}) // adiciona dados ao vetor de objetos
    frm.inModelo.value = "" // limpa campos do form
    frm.inPreco.value = ""
    frm.inModelo.focus() // posiciona cursor em inModelo
    // dispara um evento de click em btListar (equivale a um click no botão na página)
    frm.btListar.dispatchEvent(new Event("click")) 
})

console.log(carros);