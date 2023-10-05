const frm = document.querySelector("form")
const resp1 = document.querySelector("#outLista")
const resp2 = document.querySelector("#outOrdem")

const numeros = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const num = Number(frm.inNumero.value)
    if (numeros.includes(num)) {
        alert("Esse número já foi digitado !!")
        frm.inNumero.focus()
        return
    } else {
        numeros.push(num)
        resp1.innerText = `Números: ${numeros.join(", ")}`
        frm.inNumero.value = ""
        frm.inNumero.focus()
    }
})

frm.btVerificar.addEventListener("click", () => {
    if (numeros.length == 0) {
        alert("Não há números na lista...")
        inNum.focus()
        return
      }
    /*const copia = [...numeros]
    console.log(copia);
    const copiaOrdenada = copia.sort((a, b) => a - b)
    console.log(copiaOrdenada);*/
    const array1 = `${numeros.join(", ")}`
    const copia = [...numeros]
    const copiaOrdenada = copia.sort((a, b) => a - b)
    const array2 = `${copiaOrdenada.join(", ")}`
    if (array1 === array2) {
        resp2.innerText = `Números estão em ordem crescente !`
    } else {
        resp2.innerText = `Atenção... Números não estão em ordem crescente !`
    }
})