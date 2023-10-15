const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const frase = frm.inFrase.value.toUpperCase();
    console.log(frase)
    const fraseNoSpace = frase.split(' ').join('');
    console.log(fraseNoSpace)
    const fraseSplit = fraseNoSpace.split("");
    console.log(fraseSplit)
    const fraseReverse = fraseSplit.reverse();
    console.log(fraseReverse);
    fraseJoin = fraseReverse.join("");
    console.log(fraseJoin);

    if (fraseNoSpace == fraseJoin) {
        resp.innerText = `${frase} é um Palíndromo`
    } else {
        resp.innerText = `${frase} não é um Palíndromo`
    }
})