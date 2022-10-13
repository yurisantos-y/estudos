let num1 = 0.7;
let num2 = 0.3;

num1 += num2; //num1 = num1 + num2

num1 = parseFloat(num1.toFixed(2));
num1 = num1.toFixed(1);
console.log(num1);

console.log(num1.toString() + num2); // Transforma temporariamente a variavel em uma string
num1 = num1.toString(); // Transforma realmente a variavel do tipo number em uma string
console.log(num1.toFixed(2)); // Determina a quantidade de casas decimais que o numero vai ser arredondado
console.log(Number.isInteger(num1)); //Verifica se a variavel é ou não do tipo string

console.log(num1.toString(2)); // Mostra o codigo em binário de um numero
