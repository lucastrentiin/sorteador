function sortear() { //começamos pelo sortar pois ao clicar nele ele puxa essas informações
    let quantidadeNumero = parseInt(document.getElementById('quantidade').value); //usado parseInt para mostrar apenas o numero
    let de = parseInt(document.getElementById('de').value); //usado parseInt para mostrar apenas o numero
    let ate = parseInt(document.getElementById('ate').value); //usado parseInt para mostrar apenas o numero

    let sorteados = [];      
    let numero;

    for (let i = 0; i < quantidadeNumero; i++) {
        numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }
        sorteados.push(numero);
    }

let resultado = document.getElementById('resultado');
resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados} </label>`;
alterarStatusBotao();
}


function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar'); //peguei id do botão para sinalizar que la vai ser a alteração
    if (botao.classList.contains('container__botao-desabilitado')) { // Se a classe contiver container__botao-desabilitado 
        botao.classList.remove('container__botao-desabilitado');// Remove uma classe
        botao.classList.add('container__botao');// Adiciona uma classe
    } else {
        botao.classList.remove('container__botao');// Remove uma classe
        botao.classList.add('container__botao-desabilitado');// Adiciona uma classe
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}
