const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const num = Number(frm.inNumero.value);

    let resposta = "";
    let contador = 0;

    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            contador = contador + i;
            resposta = resposta + i + ", "
        } else {
            contador = contador;
            resposta = resposta;
        }
    }

    resp1.innerText = `Divisores do ${num}: ${resposta} (Soma: ${contador})`

    if (num == contador) {
        resp2.innerText = `${num} É um Número Perfeito`;
    } else {
        resp2.innerText = `${num} Não é um Número Perfeito`;
    }
})