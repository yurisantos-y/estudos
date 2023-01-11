const hora = 110;

if (hora >= 12 && hora <= 18){
    console.log('Boa tarde');
} else if (hora >= 19 && hora <= 24){
    console.log('Boa noite')
} else if (hora >=0 && hora <= 11){
    console.log('Bom dia')
} else{
    console.log('Horário invalido')
}

// If pode ser usado sozinho
// Sempre que utilizo a palavra else, preciso ter um if antes
// Posso ter vários if's na checagem
// Só posso ter um else na checagem