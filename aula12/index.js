let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A
const varATemp = varA // Criar uma variavel temporaria (reservar o valor x)

[varA, varB, varC] = [varB, varC, varA]//inversao de valores sem criar uma nova variavel

varA = varB
varB = varC
varC = varATemp
console.log(varA, varB, varC)