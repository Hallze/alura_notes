document.addEventListener("DOMContentLoaded", function() {
    limpar();
});

function adicionar() {
    let prodvalue = document.getElementById("produto").value;
    let produto = prodvalue.split(' - ')[0];
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let valorUnitario = parseInt(prodvalue.split(' - R$')[1]);
    let valorComprado = valorUnitario * quantidade;

    let carrinho = document.getElementById("lista-produtos");
    let produtoExistente = Array.from(carrinho.children).find(p => p.dataset.produto === produto);

    if (produtoExistente) {
        let quantElem = produtoExistente.querySelector('.quantidade');
        let valorElem = produtoExistente.querySelector('.valor');
        let novaQuantidade = parseInt(quantElem.textContent.split('x')[0]) + quantidade;
        quantElem.textContent = novaQuantidade + 'x';
        valorElem.textContent = `R$${(novaQuantidade * valorUnitario).toLocaleString('pt-BR')}`;
    } else {
        let novoProduto = `<section class="carrinho__produtos__produto" data-produto="${produto}">
            <span class="texto-azul quantidade">${quantidade}x</span> ${produto} 
            <span class="texto-azul valor">R$${valorComprado.toLocaleString('pt-BR')}</span>
        </section>`;
        carrinho.insertAdjacentHTML('beforeend', novoProduto);
    }

    atualizarTotal(valorComprado);
}

function atualizarTotal(valorAdicionado) {
    let valorTotalElemento = document.getElementById("valor-total");
    let valorTotalAtual = parseInt(valorTotalElemento.textContent.replace('R$', '').replace(/\./g, '').replace(',', '.')) || 0;
    let novoValorTotal = valorTotalAtual + valorAdicionado;
    valorTotalElemento.textContent = `R$${novoValorTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function limpar() {
    let carrinho = document.getElementById("lista-produtos");
    carrinho.innerHTML = '';
    document.getElementById("valor-total").textContent = 'R$0,00';
}
