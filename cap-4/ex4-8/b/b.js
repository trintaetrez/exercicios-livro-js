const frm = document.querySelector("form")
const resp = document.querySelector("h3")

/* igual ou abaixo do permitido a multa é level
velocidade até 20% maior que o permitido multa leve
velocidade superior a 20% é multa grave */

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const vper = Number(frm.inVelper.value)
    const vcon = Number(frm.inVelcon.value)
    const limite = (vper * 0.2) + vper
    if (vcon <= vper) {
        resp.innerText = "Situação: Sem Multa"
    } else {
        if (vcon > vper && vcon <= limite) {
            resp.innerText = "Situação: Multa Leve"
        } else {
            if (vcon > limite) {
                resp.innerText = "Situação: Multa Grave"
            }
        }
    }
})

