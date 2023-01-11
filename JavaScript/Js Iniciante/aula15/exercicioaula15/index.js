const numero = Number(prompt('Digite um número: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML += ''; //Para aparecer o innerHTML é necessário utilizar +=, se caso utilizarmos somento o =, o texto vai sobressair
texto.innerHTML += `<p>Raiz quadrada: ${Math.sqrt(numero)}</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>É NAN: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondar para baixo ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondado para cima ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais${numero.toFixed(2)}</p>`