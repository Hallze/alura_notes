function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    let sorteado = [];
    let numero

    for (let i = 0; i < quantidade; i++) {

        numero = obterNumeroAleatorio(de, ate);

        while (sorteado.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteado.push(numero);
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteado} </label>`

    alterarStatusBotao()
}

function obterNumeroAleatorio(de, ate) {
    return Math.floor(Math.random() * (ate - de + 1) + de);
}

function alterarStatusBotao() {
    let botao = document.getElementById("btn-reiniciar");
    if (botao.classList.contains("container__botao-desabilitado")) {
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");

    } else {
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
    }
}

function reiniciar(){
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    document.getElementById("resultado").innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;

    alterarStatusBotao();
}

