const frm = document.querySelector("form");
const resp1 =  document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const a = Number(frm.inA.value);
    const b = Number(frm.inB.value);
    const c = Number(frm.inC.value);

    if ( a + b > c && b + c > a && c + a > b ) {
        resp1.innerText = `Lados podem formar um triângulo.`

        if ( a == b && b == c) {
            resp2.innerText = `Tipo: Equilátero`
        } else if (a == b && b != c) {
            resp2.innerText = `Tipo: Isóceles`
        } if ( a != b && b != c) {
            resp2.innerText = `Tipo: Escaleno`
        }
    } else {
        resp1.innerText = `Lados não podem formar um triângulo.`
    }
})