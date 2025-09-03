// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener('DOMContentLoaded', () => {
    // Função para remover a classe 'ativo' de todos os elementos com a classe 'box'
    const hideAllBoxes = () => document.querySelectorAll('.box').forEach(box => box.classList.remove('ativo'));

    // Adiciona um ouvinte de evento para cliques em todo o documento
    document.addEventListener('click', ({ target }) => {
        // Verifica se o elemento clicado ou algum de seus ancestrais possui a classe 'player'
        const player = target.closest('.player');

        // Se um elemento 'player' foi clicado
        if (player) {
            // Esconde todas as caixas
            hideAllBoxes();
            // Exibe a caixa correspondente ao jogador clicado, adicionando a classe 'ativo'
            document.getElementById(player.dataset.target).classList.add('ativo');
            // Se o elemento clicado possui a classe 'back'
        } else if (target.classList.contains('back')) {
            // Esconde todas as caixas
            hideAllBoxes();
        }
    });
});        