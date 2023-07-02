const frm = document.querySelector("form") 
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const valor = Number(frm.inValor.value)
    if ( valor < 1) {
        resp1.innerText = "Valor Insuficiente"
        resp2.innerText = ""
        return
    } else if (valor >= 1 && valor < 1.75) {
            const troco = valor - 1
            resp1.innerText = "Tempo: 30 min"
            resp2.innerText = `Troco R$: ${troco.toFixed(2)}`
        } else if (valor >= 1.75 && valor < 3) {
                const troco = valor - 1.75
                resp1.innerText = "Tempo: 60 min"
                resp2.innerText = `Troco R$: ${troco.toFixed(2)}`
            }   else if ( valor >= 3) {
                    const troco = valor - 3
                    resp1.innerText = "Tempo: 120 min"
                    resp2.innerText = `Troco R$: ${troco.toFixed(2)}`
            }
        }
    
)