const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
    if (numeros === 2){
        numero++;
        continue;
    }

    console.log(numero);

    if (numero === 9) {
        console.log(`${numero} encontrado`);
        numero++;
        break;
    }
    numero++;

}