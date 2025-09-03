document.addEventListener('DOMContentLoaded', () => {
    const hideAllBoxes = () => document.querySelectorAll('.box').forEach(box => box.classList.remove('ativo'));

    document.addEventListener('click', ({ target }) => {
        const player = target.closest('.player');
        
        if (player) {
            hideAllBoxes();
            document.getElementById(player.dataset.target).classList.add('ativo');
        } else if (target.classList.contains('back')) {
            hideAllBoxes();
        }
    });
});