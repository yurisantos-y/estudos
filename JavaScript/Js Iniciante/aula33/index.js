const pessoa = {
    nome: 'Yuri',
    sobrenome: 'Santos',
    idade: 21,
    endereco: {
        rua: 'Av.Brasil',
        numero: 249
    }
};
//Atribuição via desestruturação

const { nome, sobrenome, endereco: {rua}} = pessoa;
console.log(nome, sobrenome, rua);