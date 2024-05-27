/* Luiz Otavio Miranda tem 30 anos, pesa 84kg
tem 1.8 de altura e seu IMC é de 25.92592592*/
//Luiz Otavio Miranda nasceu no ano de 1994
// Formula para IMC peso/ (altura*altura)
// template strings

const nome= 'Luiz Otavio';
const sobrenome= 'Miranda';
const idade= 30;
const peso = 84;
const alturaMetros = 1.80;
const ano= 2024;
let anoNascimento = (ano-idade)
let imc= peso/ (1.80*1.80)
console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg`);
console.log(`tem ${alturaMetros} de altura e seu IMC é de ${imc}`);
console.log(`${nome} ${sobrenome} nasceu no ano de ${anoNascimento}`);


