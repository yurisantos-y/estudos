function meuEscopo () { // Criando uma funcao para executar no navegador
    const form = document.querySelector('.form'); // varia const form recebe uma consulta do documento html, onde la tem uma class chamada form
    const resultado = document.querySelector('.resultado'); //Faz uma consulta do elemento class resultado no documento html

    const pessoas = []; // Cria um array vazio

    function recebeEventoForm (evento) { //funcao que recebe os "dados" do documento
        evento.preventDefault(); // Retorna o estado padrão do evento para o console

        const nome = form.querySelector('.nome'); // Seleciona a class nome do documento html
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const idade = form.querySelector('.idade');

        pessoas.push({ // Adciona o nome, sobrenome, peso e idade ao array pessoas que antes estava vazio
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            idade: idade.value
        });

        console.log(pessoas); // Exibe no console a variavel pessoas

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${idade.value}</p>`; // Acrescenta o resultado obtido no corpo do documento html
        
    }

    form.addEventListener('submit', recebeEventoForm); // Formulário escuta tal acao conforme os parametros
}

meuEscopo(); //Executa a funcao

