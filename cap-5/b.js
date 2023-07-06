const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const chin = Number(frm.inChinchila.value)
    const anos = Number(frm.inAnos.value)

    let resposta = ""
    let total = chin

    for (i = 1; i <= anos; i++) {
        
        resposta = resposta + i + "º Ano: " + total + " Chinchilas\n"
        total = total * 3

    }

    resp.innerText = resposta

})