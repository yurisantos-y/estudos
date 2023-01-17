//Escopo Léxico

const nome = 'Yuri';

function meuNome() {

    console.log(nome);
};

function falarNome () {
    const nome = 'Santos'
    meuNome();
}

falarNome();