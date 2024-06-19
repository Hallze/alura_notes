

function adicionar(){
    let prodvalue = document.getElementById("produto").value;
    let produto = prodvalue.split(' - ')[0];
    let quantidade = document.getElementById("quantidade").value;
    let valor = prodvalue.split(' - ')[1];

    let carrinho= document.querySelector(".carrinho__produtos__produto");

    let novoprod = `<span class="texto-azul">${quantidade}x</span> ${produto} <span class="texto-azul">${valor}</span>`

    carrinho.append(`<span class="texto-azul">${quantidade}x</span> ${produto} <span class="texto-azul">${valor}</span>`)

    console.log(carrinho)
}