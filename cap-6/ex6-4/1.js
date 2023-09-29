const frm = document.querySelector("form") // obtém elementos a serem manipulados
const resp = document.querySelector("pre")

const criancas = [] // declara vetor global

frm.addEventListener("submit", (e) => {
    e.preventDefault() // evita envio do form
    const nome = frm.inNome.value // obtém conteúdo dos campos
    const idade = Number(frm.inIdade.value)
    criancas.push({nome, idade}) // adiciona dados ao vetor de objetos
    frm.reset() // limpa campos do form
    frm.inNome.focus() // posiciona no campo de formulário
    frm.btListar.dispatchEvent(new Event("click")) // dispara click em btListar
})

frm.btListar.addEventListener("click", () => {
    if (criancas.length == 0) { // se vazio, exibe alerta
        alert("Não há crianças na lista")
        return
    }
    let lista = "" // para concatenar lista de crianças
    for (const crianca of criancas) {
        const { nome, idade } = crianca // desestrutura o objeto
        lista += nome + " - " + idade + "anos\n"
    }
    resp.innerText = lista // exibe a lista
})

frm.btResumir.addEventListener("click", () => {
    if (criancas.length == 0) {
        alert("Não há crianças na lista")
        return
    }
    const copia = [...criancas] // cri uma cópia do vetor criança
})