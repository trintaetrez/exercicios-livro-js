const frm = document.querySelector("form");
const resp1 = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = frm.inNome.value;
    const idade = Number(frm.inIdade.value);

    const linhaTracos = retornarTracos(nome);
    const categoria = categorizarAluno(idade);

    resp1.innerText = `${nome}\n${linhaTracos}\nCategoria: ${categoria}`
})

function retornarTracos(nome) {
    const nomeSplit = nome.split(""); 
    let resposta = [];
    for (const item of nomeSplit) {
        if (item === " ") {
            const espaco = " "
            resposta.push(espaco)
        } else {
            const traco = "-"
            resposta.push(traco)
        }
    }
    const respostaJoin = resposta.join("")
    return respostaJoin
}

function categorizarAluno(idade) {
    let resposta = "";
    if (idade <= 12) {
        resposta = "Infantil";
    } else if (idade >= 13 && idade <= 18) {
        resposta = "Juvenil"
    } else {
        resposta = "Adulto"
    }
    return resposta;
}