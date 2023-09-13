const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const preco = Number(frm.inPreco.value);
    const consumo = Number(frm.inConsumo.value);

    const aPagar = (consumo / 1000) * preco;

    resp.innerText = `Valor a pagar R$: ${aPagar.toFixed(2)}`

    e.preventDefault();
})