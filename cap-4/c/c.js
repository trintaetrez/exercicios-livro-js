const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const valor = Number(frm.inValor.value);

    if (valor < 1.00) {
        resp1.innerText = `Valor Insuficiente`
        alert("Valor Insuficiente (no mínimo, R$ 1.00)")
        frm.inValor.focus()
        return
    } else if (valor >= 1.00 && valor < 1.75) {
        resp1.innerText = `Tempo: 30 min`
        const troco = valor - 1.00;
        if ( troco == 0) {
            resp2.innerText = `Não há troco`
        } else {
            resp2.innerText = `Troco R$: ${troco.toFixed(2)}`
        }
    } else if (valor >= 1.75 && valor < 3.00) {
        resp1.innerText = `Tempo: 60 min`
        const troco = valor - 1.75;
        if ( troco == 0) {
            resp2.innerText = `Não há troco`
        } else {
            resp2.innerText = `Troco R$: ${troco.toFixed(2)}`
        }
    } if (valor >= 3.00) {
        resp1.innerText = `Tempo: 120 min`
        const troco = valor - 3.00;
        if ( troco == 0) {
            resp2.innerText = `Não há troco`
        } else {
            resp2.innerText = `Troco R$: ${troco.toFixed(2)}`
        }
    }
})