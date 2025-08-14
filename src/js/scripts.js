// Espera até que a página esteja completamente carregada
document.addEventListener('DOMContentLoaded', function () {

    // Seleciona todos os elementos que têm a classe 'player' e os armazena em uma variável chamada 'player'
    const player = document.querySelectorAll('.player');

    // Para cada botão (player) encontrado, adiciona um evento de clique
    player.forEach(btn => {
        btn.addEventListener('click', function () {

            // Quando o botão é clicado, pega o valor do atributo 'data-target' desse botão
            const targetId = this.getAttribute('data-target');
            // Usa esse valor para encontrar um elemento com o ID correspondente
            const targetBox = document.getElementById(targetId);

            // Seleciona todos os elementos que têm a classe 'box'
            document.querySelectorAll('.box').forEach(box => {
                // Remove a classe 'ativo' de todos os elementos 'box'
                box.classList.remove('ativo');
            });

            // Adiciona a classe 'ativo' ao 'targetBox', que é o elemento que queremos mostrar
            targetBox.classList.add('ativo');


        });

    });


});

const back = document.querySelectorAll('.back')

back.forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.box').forEach(box => {
            // Remove a classe 'ativo' de todos os elementos 'box'
            box.classList.remove('ativo');
        });

    })
})





