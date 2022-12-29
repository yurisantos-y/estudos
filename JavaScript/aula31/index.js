/*Diferença entre var e let*/

//Let tem escopo em bloco
const verdadeira = true;

let nome = 'Yuri';
var nome2 = 'Santos';

if(verdadeira){
   let nome = 'Brenda';
   var nome2 = 'Silva';
    console.log(nome, nome2);
}

//Var escopo de função

function darTchau(){
    var nome2 = 'Almeida'
    console.log(nome2);
}

darTchau();