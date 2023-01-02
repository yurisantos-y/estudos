const fruta =   ['Uva', 'Pera', 'Maca', 'Banana'];

/* for (let i in fruta){
    console.log(i); //Retorna o index // frutas[i] retorna os nomes
}; */

const pessoa = {
    nome: 'Yuri',
    sobrenome: 'Santos',
    idade: 20,
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}