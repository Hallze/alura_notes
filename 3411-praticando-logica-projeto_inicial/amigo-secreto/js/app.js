let amigosPar = 0;
let vezes = -1;
let listaAmigos = []
let ordem = []
reiniciar();

function adicionar(){

    if (document.getElementById("nome-amigo").value == ""){
        alert("digite um nome!")
    } else {
    let nome = document.getElementById("nome-amigo").value;
    let listaText = document.getElementById("lista-amigos").textContent;

    document.getElementById("lista-amigos").innerHTML = `${listaText}${nome}, `;
    document.getElementById("nome-amigo").value = ""

    vezes++
    amigosPar = vezes % 2 == 0
    listaAmigos.push(nome)
    ordem.push(vezes)

    console.log(listaAmigos)
    console.log(ordem)
    }
}

function sortear(){
    let listaSorteio = document.getElementById("lista-sorteio");
    let listaText = document.getElementById("lista-amigos").textContent = "";
  
    let novaOrdem = obterOrdemAleatoria(0, listaAmigos.length-1);
    for (i=0;i<2;i++){
        listaSorteio.innerHTML = `${novaOrdem} <br>`;
        listaSorteio.insertAdjacentHTML('beforeend', novaOrdem);
    }

}

function reiniciar(){
    document.getElementById("lista-amigos").innerHTML = ``;
    document.getElementById("nome-amigo").value = ""
    amigosPar = 0;
    vezes = -1;
    listaAmigos = []
    ordem = []
}

function obterOrdemAleatoria(min, max) {
        // Algoritmo de Fisher-Yates para embaralhar o array
        for (let i = listaAmigos.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [listaAmigos[i], listaAmigos[j]] = [listaAmigos[j], listaAmigos[i]]; // Swap elements
        }
        
        return listaAmigos;
    }