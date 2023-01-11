// Declaração de função (Function Hoisting)

falaOi();

function falaOi(){
	console.log('Oi');
};

//First-class objects (Objetos de primeira classe)
//function expression

const faleAlgo = function () {
	console.log('Algo');
};

faleAlgo();

//Arrow Function

const exemploArrowFunction = () => {
	console.log('Sou um arrow function');
};

exemploArrowFunction();

// Dentro do objeto

const obj = {
    falar() {
        console.log('Estou falando...');
    }
};

obj.falar();