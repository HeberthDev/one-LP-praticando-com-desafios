function comprar() {
    let setorEscolhido = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;

    let quantidadeSetorPista = document.getElementById('qtd-pista').innerHTML;
    let quantidadeSetorSuperior = document.getElementById('qtd-superior').innerHTML;
    let quantidadeSetorInferior = document.getElementById('qtd-inferior').innerHTML;

    if ( setorEscolhido === 'pista' && quantidade <= quantidadeSetorPista ) {
        let quantidadeTotal = quantidadeSetorPista - quantidade;
        document.getElementById('qtd-pista').innerHTML = quantidadeTotal;

    } else if (setorEscolhido === 'inferior' && quantidade <= quantidadeSetorInferior) {
        let quantidadeTotal = quantidadeSetorInferior - quantidade;
        document.getElementById('qtd-inferior').innerHTML = quantidadeTotal;

    } else if (setorEscolhido === 'superior' && quantidade <= quantidadeSetorSuperior) {
        let quantidadeTotal = quantidadeSetorInferior - quantidade;
        document.getElementById('qtd-superior').innerHTML = quantidadeTotal;
        
    } else {
        alert('Sem ingressos disponíveis para esse setor.');
    }
}