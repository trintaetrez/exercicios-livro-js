const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.rbSim.addEventListener("click", () => {
    frm.inConvenio.className = "exibe";
})

frm.rbNao.addEventListener("click", () => {
    frm.inConvenio.className = "oculta";
})

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const valor = Number(frm.inValor.value);

    let desconto

    if (frm.rbSim.checked) {
        const num = frm.inConvenio.selectedIndex
        if (num == 0) {
            desconto = 0.2
        } else {
            desconto = 0.5
        }
    } else {
        desconto = 0.10
    }

    const valorDesconto = calcularDesconto(valor, desconto);
    const valorPagar = valor - valorDesconto;
    
    resp1.innerText = `Desconto R$: ${valorDesconto.toFixed(2)}`
    resp2.innerText = `A Pagar R$: ${valorPagar.toFixed(2)}`
})

function calcularDesconto(valor, desconto) {
    return valor * desconto
}