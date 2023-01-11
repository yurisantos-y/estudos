// 7. Crie uma função que calcule a média de três números e retorne o resultado.

/* function media (n1, n2, n3) {
    const resultado = (n1 + n2 + n3) / 3;
    return resultado;
};

console.log(media(7, 9, 10)); */

// 8. Crie uma função que verifique se um número é par ou ímpar e retorne uma mensagem de acordo.

/* function parImpar (numero) {
    if (numero % 2 === 0){
        return 'O numero é Par';
    } else {
        return 'O numero é par';
    }
    return numero;
};

console.log(parImpar(3)); */

// 9. Crie uma função que verifique se um número é primo ou não e retorne uma mensagem de acordo.

/* function primo (numero) {
    if (numero < 2) {
        return 'O numero não é primo';
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return 'O numero não é primo';
        }
    }
    return 'O numero é primo'
};

console.log(primo(86)); */

// 10. Crie uma função que calcule o fatorial de um número e retorne o resultado.

/* function calcFatorial (n) {
    let fatorial = 1;

    for (let i = 2; i <= n; i++){
        fatorial *= i;
    }

    return fatorial;
};

console.log(calcFatorial(5)); */

// 11. Crie uma função que calcule o menor número divisível por todos os números de 1 a 20 e retorne o resultado.

/* function menorDivisivel () {
    let numero = 1;
    let achou = false;

    while (!achou){
        for (let i = 1; i <= 20; i++){
            if (numero % i !==0){
                break;
            }
            if (i === 20) {
                achou = true;
            }
        }
        numero++
    }
    return numero -1;
};

console.log(menorDivisivel()); */

// 12. Crie uma função que calcule a soma dos elementos de um array e retorne o resultado.

/* function somaArray (array) {
    let soma = 0;
    for(let i = 0; i < array.length; i++){
        soma += array[i];
    }
    return soma;
};

const numero = [2, 2, 2, 0, 2];
console.log(somaArray(numero)); */

// 13. Crie uma função que calcule a média dos elementos de um array e retorne o resultado.

/* function mediaArray (a) {
    let soma = 0;
    for (let i = 0; i < a.length; i++){
        soma += a[i];
    }
    return soma / a.length;

};
const numero = [1, 2, 3, 4, 5];

console.log(mediaArray(numero)); */

//