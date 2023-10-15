const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const mensagem = frm.inMensagem.value
    let resposta = ""
    const tam = mensagem.length

    for (let i = 1; i < tam; i = i + 2) {
        resposta += mensagem.charAt(i)
    }

    for (let i = 0; i < tam; i = i + 2) {
        resposta += mensagem.charAt(i)
    }

    resp.innerText = resposta
})

frm.btDecript.addEventListener("click", () => {
    // verifica se as validações do form estão ok (no caso, mensagem is required)
    if (!frm.checkValidity()) {
      alert("Informe a mensagem criptografada")
      frm.inMensagem.focus() // posiciona o cursor no campo
      return // retorna ao form
    }
    const mensagem = frm.inMensagem.value          // conteúdo do campo
  
    resposta = mensagem
  
    resp.innerText = resposta
  })

  frm.btReset.addEventListener("click", () => {
    resp.innerText = ""
  })