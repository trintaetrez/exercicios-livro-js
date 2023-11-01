const frm = document.querySelector("form");
const respLista = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault(); // evita o envio do form

    const nome = frm.inNome.value         // conteúdo do campo nome
    const peso = Number(frm.inPeso.value) // conteúdo do campo peso (em número)

    // chama function que verifica se peso já foi apostado

    if (verApostaExiste(peso)) {
        alert("Alguém já apostou este peso, informe outro...")
        frm.inPeso.focus()
        return
    }

    if (localStorage.getItem("melanciaNome")) { // se houver dados em localStorage
        // obtém o conteúdo já salvo e acrescenta ";" + dados da aposta
        const melanciaNome = localStorage.getItem("melanciaNome") + ";" + nome
        const melanciaPeso = localStorage.getItem("melanciaPeso") + ";" + peso
        localStorage.setItem("melanciaNome", melanciaNome) // salva os dados
        localStorage.setItem("melanciaPeso", melanciaPeso)
} else { // senão é a primeira aposta
    localStorage.setItem("melanciaNome", nome) // salva os dados (sem ";")
    localStorage.setItem("melanciaPeso", peso)
}

mostrarApostas()     // chama function que mostra as apostas já salvas
frm.reset()          // limpa o form
frm.inNome.focus()   // joga o foco (cursor) no campo inNome
})

const varApostaExiste = (peso) => {
    if (localStorage.getItem(melanciaPeso)) { // se existir dados em localStorage
        // obtém seu conteúdo e a string é dividida em itens de vetor a cada ";"
        const pesos = localStorage.getItem("melanciaPeso").split(";")
}
}