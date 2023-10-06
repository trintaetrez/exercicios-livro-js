const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const candidatos = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const candidato = frm.inCandidato.value
    const acertos = Number(frm.inAcertos.value)
    candidatos.push({candidato, acertos})
    frm.inCandidato.value = ""
    frm.inAcertos.value = ""
    frm.inCandidato.focus()
    frm.btListar.dispatchEvent(new Event("click"))
})

frm.btListar.addEventListener("click", () => {
    if (candidatos == 0) {
        alert("Não há candidatos na lista !")
        frm.inCandidato.focus()
        return
    }

    let lista = ""
    for (const candi of candidatos) {
        const { candidato, acertos} = candi
        lista += `${candidato} - ${acertos} acertos\n`
    }
    resp.innerText = lista
})

frm.btAprovados.addEventListener("click", () => {
    const minAcertos = Number(prompt("Número de Acertos para Aprovação ??"))
    if (minAcertos == 0 || isNaN(minAcertos)) {
        return
    } 
    const candidatosFilter = candidatos.filter(aux => aux.acertos > minAcertos)
    const listaAprovados = candidatosFilter.sort((a, b) => a - b)
    const listaAprovados1 = listaAprovados.reverse((a, b) => b - a)
    
    let lista = ""
    for (const candi of listaAprovados1) {
        const { candidato, acertos} = candi
        lista += `${candidato} - ${acertos} acertos\n`
    }
    resp.innerText = lista

})