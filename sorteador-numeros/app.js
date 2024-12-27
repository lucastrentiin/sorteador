function sortear() { //começamos pelo sortar pois ao clicar nele ele puxa essas informações
    let quantidadeNumero = parseInt(document.getElementById('quantidade').value); //usado parseInt para mostrar apenas o numero
    let de = parseInt(document.getElementById('de').value); //usado parseInt para mostrar apenas o numero
    let ate = parseInt(document.getElementById('ate').value); //usado parseInt para mostrar apenas o numero

    let sorteados = [];      
    let numero;

    for (let i = 0; i < quantidadeNumero; i++) {
        numero = obterNumeroAleatorio(de, ate);
        sorteados.push(numero);
    }

 alert(sorteados);
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}