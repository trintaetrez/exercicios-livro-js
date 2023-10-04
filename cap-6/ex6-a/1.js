const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const clubes = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const clube = frm.inClube.value
    clubes.push(clube)
    frm.inClube.value = ""
    frm.inClube.focus()
    frm.btListar.dispatchEvent(new Event("click"))
})

frm.btListar.addEventListener("click", () => {
    if (clubes.length == 0) {
        alert("Não há clubes na lista!")
        return
    } 
    let lista = ""
    clubes.forEach((clube, i) => (lista += `${i + 1}. ${clube}\n`))
    resp.innerText = lista
    frm.inClube.focus()
})

frm.inMontar.addEventListener("click", () => {
    const tam = clubes.length
    if (tam % 2 != 0) {
        alert("Não é possível montar a tabela com número ímpar de times. Adicione mais um time. ")
        frm.inClube.focus()
        return
    }
    let tabela = ""
    const ultimo = tam - 1
    for (let i = 0; i < tam / 2; i++) {
        tabela += `${clubes[i]} X ${clubes[ultimo - i]}\n`
    }
    resp.innerText = tabela
})