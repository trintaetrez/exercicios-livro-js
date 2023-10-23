const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inNome.value;

    const validador = validarNome(nome);
    
    if (validador == false) {
        alert("Digite um nome válido!")
        frm.inNome.value = ""
        return
    }

    const sobrenome = obterSobrenome(nome);
    const vogais = contarVogais(nome)

    resp.innerText = `Senha Inicial: ${sobrenome}${vogais}`
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

function obterSobrenome(nome) {
    const nomeLowerCase = nome.toLowerCase();
    const nomeSplit2 = nomeLowerCase.split(" ");
    const tamNome2 = nomeSplit2.length
    const resposta2 = nomeSplit2[tamNome2 - 1];
    return resposta2
}

function contarVogais(nome) {
    const nomeLowerCase2 = nome.toLowerCase(); 
    const nomeSplit3 = nomeLowerCase2.split("");
    let contador = 0;
    for (const item of nomeSplit3) {
        if (item == "a" || item == "e" || item == "i" || item == "o" || item == "u") {
            contador += 1
        }
    }
    
    let resposta3 = ""
    if (contador <= 9) {
        resposta3 = `0${contador}`; 
    } else {
        resposta3 = contador;
    }
    return resposta3;
}