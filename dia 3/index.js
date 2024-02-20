let nome = ""
let idade = 0
let altura = 0
let peso = 0


nome = prompt('seu nome')

idade = parseInt(prompt("sua idade: "))

altura = parseFloat(prompt("sua altura: "))

peso = Number(prompt("seu peso: "))

console.log(nome)
console.log(idade)
console.log(altura)
console.log(peso)


let nasc = 2002

nasc = 2023 - idade
console.log(nasc)


let imc = 0
imc = peso / (altura * altura)
console.log(imc)


console.log("olá " + nome + ", você tem  " + idade + "anos, nsceu em " + nasc + " , tem " + altura + " de altura, pesa  " + peso + "kg e seu imc é " + imc + "kg/m²")
