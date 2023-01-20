// Função de Callback

function apresentaUsuario (nome) {
    alert('Olá' + nome);
}

function forcaUsuario(callback) {
    var nome = prompt('Por favor insira seu nome: ');
    callback(nome);
}

forcaUsuario(apresentaUsuario);