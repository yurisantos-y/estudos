function criaHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pr-BR', {
        hour12: false,
        timeZone: 'UTC'
    }, 1000);
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const resetar = document.querySelector('.resetar');
let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
};


iniciar.addEventListener('click', function(event){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
});

pausar.addEventListener('click', function(event){
    relogio.classList.add('pausado');
    clearInterval(timer);
});

resetar.addEventListener('click', function(event){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
});