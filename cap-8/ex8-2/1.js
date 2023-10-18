const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

frm.addEventListener("submit", (e) => {
    e.preventDefault(); // evita envio do form
    const modelo = frm.inModelo.value; // obtém o conteúdo dos campos
    const ano = Number(frm.inAno.value);
    const preco = Number(frm.inPreco.value);
    const classificacao = classificarVeiculo(ano); // chama funções e atribui
    const entrada = calcularEntrada(preco, classificacao); // ... retorno as variáveis
    const parcela = (preco - entrada) / 10; // usa retorno da função cálculo

    resp1.innerText = modelo + " - " + classificacao; // exibe as respostas
    resp2.innerText = `Entrada R$: ${entrada.toFixed(2)}`;
    resp3.innerText = `+10x de R$: ${parcela.toFixed(2)}`;
})

// função recebe o ano do veículo como parâmetro
const classificarVeiculo = (ano) => {

}