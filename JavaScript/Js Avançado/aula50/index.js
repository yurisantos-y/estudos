// Parâmetos da função

/* function teste (in1, in2, in3, ...in4){
    console.log(arguments); // Quando utilizado a variavel arguments a função vai retornar o que esta definido no parâmetros
}

teste('+', 0, 20, 30, 40, 50); */

function teste (in1, in2, ...in4){
    for(let numero of in4){
        if(in1 === '+') in2 += numero;
    }
    console.log(in2);
}

teste('+', 1, 20, 30, 40, 50);