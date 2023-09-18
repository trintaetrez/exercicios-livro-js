const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const velPermitida = Number(frm.inPermitida.value);
    const velCondutor = Number(frm.inCondutor.value);

    const vel20 = (velPermitida * 0.2) + velPermitida;

    if ( velCondutor <= velPermitida) {
        resp.innerText = `Situação: Sem Multa`
    } else if (velCondutor < vel20) {
        resp.innerText = `Situação: Multa Leve`
    } if (velCondutor > vel20) {
        resp.innerText = `Situação: Multa Grave`
    }
})