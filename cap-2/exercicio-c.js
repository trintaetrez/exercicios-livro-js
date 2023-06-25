frm = document.querySelector("form")
resp1 = document.querySelector("#outResp1")
resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    const produto = frm.inProduto.value
    const preco = Number(frm.inPreco.value)

    const desconto = preco * 0.5
    const ptotal = (preco * 2) + desconto

    resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${ptotal.toFixed(2)}`
    resp2.innerText = `O 3º produto custa apenas R$: ${desconto.toFixed(2)}`

    e.preventDefault()
})