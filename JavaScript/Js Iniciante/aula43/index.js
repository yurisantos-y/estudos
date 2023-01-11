/* Escreva uma função que recebe um número e retorne o seguinte: 
Número é divisível por 3 = Fizz 
Número é divisível por 5 = Buzz
Número é divisível por 3 e 5 = FizzBuzz
Número NÃO é divisível por 3 e 5 = Retorna a própria número
Checar se o número é realmente um número 
Use a função com números de 0 a 100*/

function divisivel (n1){
        if (typeof n1 !== 'number'){
            return n1;
        } else if (n1 % 3 === 0 && n1 % 5 === 0){
            return 'FizzBuzz';
        } else if (n1 % 3 === 0){
            return 'Fizz';
        } else if (n1 % 5 === 0){
            return 'Buzz';
        } else {
            return n1;
        }
    
};

console.log('a', divisivel('a'));
for (let i = 0; i <= 100; i++){
    console.log(i, divisivel(i));
}

