const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const num = frm.inNumber.value
    const resto = num % 2
    if (resto == 0) {
        resp.innerText = `${num} é par!`
    } else {
        resp.innerText = `${num} é ímpar!`
    }
})
