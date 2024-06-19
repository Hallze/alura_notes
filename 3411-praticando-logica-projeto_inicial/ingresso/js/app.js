

function comprar() {
    let tipo = document.getElementById("tipo-ingresso").value
    let qtd = document.getElementById("qtd").value || 0

    let qtdDisponivel = parseInt(document.getElementById(`qtd-${tipo}`).textContent)

    if(qtdDisponivel<qtd){
        alert(`Quantidade ${qtd} Indisponível`)
    } else {
    qtdDisponivel = qtdDisponivel - qtd
    }
  
    
    let novaQtdDisponivel = document.getElementById(`qtd-${tipo}`)
    novaQtdDisponivel.textContent = qtdDisponivel


    document.getElementById("qtd").value = ''
}

