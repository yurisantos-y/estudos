/* const data = new Date();
let diaSemana = data.getDate();
let mes = data.getMonth() +1;
let ano = data.getFullYear();

let container = document.querySelector(".container");
container.innerHTML = `${diaSemana} ${mes} ${ano}`; */

const data = new Date();
const formataData = Intl.DateTimeFormat ("pt-BR", {
    weekday: "long", year: "numeric", month: "long", day: "numeric", hour:"numeric", minute: "numeric"
});

let container = document.querySelector(".container");
container.innerText = formataData.format(data);