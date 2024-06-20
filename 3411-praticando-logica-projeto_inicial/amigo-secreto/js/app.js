function adicionar(){

    if (document.getElementById("nome-amigo").value == ""){
        alert("digite um nome!")
    } else {
    let nome = document.getElementById("nome-amigo").value;
    let listaText = document.getElementById("lista-amigos").textContent;
    let listacampo = document.getElementById("lista-amigos");

    document.getElementById("lista-amigos").innerHTML = `${listaText}${nome}, `;
    document.getElementById("nome-amigo").value = ""
    }
}

function sortear(){
    
}

function reiniciar(){
    document.getElementById("lista-amigos").innerHTML = ``;
    document.getElementById("nome-amigo").value = ""
}