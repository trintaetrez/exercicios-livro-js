const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const num = Number(frm.inNumero.value);
    const resto = num % 2;
    if (resto == 0) {
        resp.innerText = `Resposta: ${num} é Par`
    } else {
        resp.innerText = `Resposta: ${num} é Ímpar`
    }
})