let nome = prompt('Digite seu nome: '); // Declarei a variavel nome
document.body.innerHTML = `Seu nome é: ${nome}<br/>`; // Vai mostrar a variavel nome
document.body.innerHTML += `seu nome tem: ${nome.length} letras<br/>`; //Quantidade de letras
document.body.innerHTML += `A segunda letra do seu nome é: ${nome.charAt(1)}<br/>`; //Mostra a letra que esta localizada na posição 1 da frase
document.body.innerHTML += `Qual o primeiro índice da letra n no seu nome? ${nome.indexOf('n')}<br/>`; // Mostra o primeiro indice do meu nome com base em uma letra
document.body.innerHTML += `Qual o último índice da letra n no seu nome? ${nome.lastIndexOf('n')}<br/>`; //Mostra o ultimo indice do nome com base em uma letra pré definida
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(18)}<br/>`; //Ultimas letras do nome
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')}<br/>`; // Mostra todas as letras do nome
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()}<br/>`; // Deixa em CAIXA ALTA
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()}<br/>`; //Deixa em letra minusculas

//Yuri dos Santos Pinto