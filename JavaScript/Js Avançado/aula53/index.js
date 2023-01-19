// Closures (fechamento)

function primaria() {
    const mostrar = 'Variavel';
    function mostrarSecundaria () { // mostrarSecundaria é uma closures
        console.log(mostrar)
    }
    mostrarSecundaria();
}

primaria();