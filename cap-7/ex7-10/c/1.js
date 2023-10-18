const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("outResp2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const dataInfracao = frm.inData.value
    console.log(dataInfracao)
    const valor = Number(frm.inValor.value)
    const vencimento = new Date()

})