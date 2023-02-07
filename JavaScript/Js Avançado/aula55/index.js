// IIFE -> Immediately invoked function expression

(function(idade, peso, altura){

    const sobrenome = 'Santos';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Yuri'))
    }

    falaNome();
    console.log(idade, peso, altura)
})(21, 80, 1.80);