const frm = document.querySelector("form") // obtém elementos da página
const respErros = document.querySelector("#outErros")
const respChances = document.querySelector("#outChances")
const respDica = document.querySelector("#outDica")

const erros = [] // vetor de escopo global com números já apostados
const sorteado = Math.floor(Math.random() * 100) + 1 // num aleatório entre 1 e 100
const chances = 6 // constante com número máximo de chances

