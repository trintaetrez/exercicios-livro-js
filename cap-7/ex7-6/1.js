const frm = document.querySelector("form") // obtém elementos da página
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault() // evita envio do form
    const senha = frm.inSenha.value // obtém senha informada pelo usuário
    const erros = [] // vetor com erros

    // verifica se o tamanho da senha é inválido
    if (senha.length < 8 || senha.length > 15) {
        erros.push("possuir entre 8 e 15 caracteres")
    }

    // verifica se não possui números
    if (senha.match(/[0-9]/g) == null) {
        
    }
})