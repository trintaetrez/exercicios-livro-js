const frm = document.querySelector("form");
const resp = document.querySelector("pre");


frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const num = Number(frm.inNumero.value);
    const anos = Number(frm.inAnos.value);

    let resposta = "";
    let contador = num;

    for(i = 1; i <= anos; i++) {
        resposta = resposta + i + "º Ano: " + contador + " Chinchilas\n"
        contador = contador * 3; 
    }

    resp.innerText = resposta;
})