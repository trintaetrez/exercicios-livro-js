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

console.log(clubes);