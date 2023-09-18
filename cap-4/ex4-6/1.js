const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const valorSaque = Number(frm.inSaque.value);
    if (valorSaque % 10 != 0) {
        alert("Valor inválido para notas disponíveis (R$ 10, 50, 100)")
        frm.inSaque.focus
        return
    }
    const notas100 = Math.floor(valorSaque / 100);
    let resto = valorSaque % 100;
    const notas50 = Math.floor(resto / 50);
    resto = resto % 50;
    const notas10 = Math.floor(resto / 10);

    if (notas100 > 0 ) {
        resp1.innerText = `Notas de R$ 100: ${notas100}`;
    }
    if (notas50 > 0) {
        resp2.innerText = `Notas de R$ 50: ${notas50}`;
    }
    if (notas10 > 0) {
        resp3.innerText = `Notas de R$ 10: ${notas10}`;
    }

    frm.addEventListener("reset", () => {
        resp1.innerText = "";
        resp2.innerText = "";
        resp3.innerText = "";
    })
})