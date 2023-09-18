const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const num = Number(frm.inNumero.value);
    const raiz = Math.sqrt(num);

    if (Number.isInteger(raiz)) {
        resp.innerText = `Raíz: ${raiz}`
    } else {
        resp.innerText = `Não há raíz exata para ${num}`
    }
})