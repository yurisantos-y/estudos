//Exercicio lógica de prog - 02

//Escreva um função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number). 
//Retorne true se a imagem estiver no modo paisagem

function ePaisagem (largura, altura) {
    if (largura > altura) {
        return true;
    } else {
        return 'Modo retrato'
    }
};

console.log(ePaisagem(1920, 1080));

const paisagem = (a1, a2) => a1 > a2 ? a1 : a2;
console.log(paisagem(1920, 1080));