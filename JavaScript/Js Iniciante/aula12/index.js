let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A
let aux;

aux = varA;
varA = varB;
varB = varC;
varC = aux;


/*
    Outro modo: [varA, varB, varC] = [varB, varC, varA]
*/
console.log(varA, varB, varC);
