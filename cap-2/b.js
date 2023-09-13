const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const valor = Number(frm.inValor.value);
    const tempo = Number(frm.inTempo.value);

    const fracoes = Math.ceil(tempo / 15);
    const aPagar = fracoes * valor;

    resp.innerText = `Valor a Pagar R$: ${aPagar.toFixed(2)}`

    e.preventDefault();
})