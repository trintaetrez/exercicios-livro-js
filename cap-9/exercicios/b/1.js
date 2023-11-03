const frm = document.querySelector("form")
const respLista = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const produto = frm.inProduto.value

    if (localStorage.getItem("produtoNome")) {

    const produtoNome = localStorage.getItem("produtoNome") + ";" + produto
    localStorage.setItem("produtoNome", produtoNome)
    } else {
        localStorage.setItem("produtoNome", produto)
    }

    mostrarProdutos()
    frm.reset()
    frm.inProduto.focus()
})

const mostrarProdutos = () => {
    if (!localStorage.getItem("produtoNome")) {
        respLista.innerText = ""
        return
    }

    const produtos = localStorage.getItem("produtoNome").split(";")
    const produtosOrdem = produtos.sort()

    let linhas = ""

    for (let i = 0; i < produtosOrdem.length; i++) {
        linhas +=  `${produtosOrdem[i]}\n`
    }

    respLista.innerText = `Produtos Adicionados\n--------------------------\n${linhas}`

}

window.addEventListener("load", mostrarProdutos)

frm.btLimpar.addEventListener("click", () => {
    if (confirm("Confirma exclusão de todos os produtos?")) {
        localStorage.removeItem("produtoNome")
        mostrarProdutos()
    } else {
        alert("A lista esta vazia!")
    }
})

