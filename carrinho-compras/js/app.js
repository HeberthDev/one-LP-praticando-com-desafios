let textoCarrinho = document.querySelector('.carrinho__produtos__produto');
let textoPrecoTotal = document.querySelector('.carrinho__total');
let precoTotal = 0;

textoCarrinho.innerHTML = '';
textoPrecoTotal.innerHTML = `Total: <span class="texto-azul" id="valor-total">R$${0}</span>`;

function adicionar() {
    let textoNomeProdutoOption = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;

    let nomeDoProdutoQuebrado = textoNomeProdutoOption.split(' - R$');
    let precoDoProdutoEscolhidoParaInteiro = parseInt(nomeDoProdutoQuebrado[1]);

    let precoProduto = quantidade * precoDoProdutoEscolhidoParaInteiro;

    precoTotal = precoTotal + precoProduto;
    console.log(precoTotal);
    
    textoCarrinho.innerHTML = textoCarrinho.innerHTML + `<br> <span class="texto-azul">${quantidade}x</span> ${nomeDoProdutoQuebrado[0]} <span class="texto-azul">R$${precoDoProdutoEscolhidoParaInteiro}</span>`;

    textoPrecoTotal.innerHTML = `Total: <span class="texto-azul" id="valor-total">R$${precoTotal}</span>`;

    document.getElementById('quantidade').value = 0;
}

function limpar() {
    let textoCarrinho = document.querySelector('.carrinho__produtos__produto');
    let textoPrecoTotal = document.querySelector('.carrinho__total');

    textoCarrinho.innerHTML = '';
    textoPrecoTotal.innerHTML = `Total: <span class="texto-azul" id="valor-total">R$${0}</span>`;
}