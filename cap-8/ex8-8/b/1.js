const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inNome.value;
    console.log(nome);
    const validador = validarNome(nome);
    console.log(validador)
    if (validador == false) {
        alert("Digite um nome válido!")
        frm.inNome.value = ""
        return
    }
})

function validarNome(nome) {
    const nomeSplit = nome.split(" ");
    const tamNome = nomeSplit.length
    let resposta
    if (tamNome > 1) {
        resposta = true;
    } else {
        resposta = false;
    }
    return resposta;
}