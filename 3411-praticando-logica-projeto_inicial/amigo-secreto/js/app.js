let amigosPar = 0;
let listaAmigos = []
reiniciar();

function adicionar(){

    if (document.getElementById("nome-amigo").value == ""){
        alert("digite um nome!")
    } else {
    let nome = document.getElementById("nome-amigo").value;
    let listaText = document.getElementById("lista-amigos").textContent;

    document.getElementById("lista-amigos").innerHTML = `${listaText}${nome}, `;
    document.getElementById("nome-amigo").value = ""

    listaAmigos.push(nome)

    console.log(listaAmigos)
    console.log(ordem)
    listaSorteio.innerHTML = ''
    }
}

function sortear(){
    listaSorteio = document.getElementById("lista-sorteio");
    let Amigos = obterOrdemAleatoria(listaAmigos);
    
    for(i=0;i<Amigos.length;i++){
        if (i == Amigos.length-1){
        listaSorteio.innerHTML = listaSorteio.innerHTML + Amigos[i] + " --> " + Amigos[0] + "<br>"
        } else
        listaSorteio.innerHTML = listaSorteio.innerHTML + Amigos[i] + " --> " + Amigos[i+1] + "<br>"
    } 
    document.getElementById("lista-amigos").innerHTML = ''
    listaAmigos = []
}

function reiniciar(){
    document.getElementById("lista-amigos").innerHTML = ``;
    document.getElementById("nome-amigo").value = ""
    listaAmigos = []
    listaSorteio.innerHTML = ''
}

function obterOrdemAleatoria(listaAmigos) {
        // Algoritmo de Fisher-Yates para embaralhar o array
        for (let i = listaAmigos.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [listaAmigos[i], listaAmigos[j]] = [listaAmigos[j], listaAmigos[i]]; // Swap elements
        }
        
        return listaAmigos;
    }