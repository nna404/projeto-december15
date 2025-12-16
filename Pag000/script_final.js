document.addEventListener("DOMContentLoaded", function() {
    
    const boxes = document.querySelectorAll('.box-card');
    const modal = document.getElementById('textModal');
    const modalContent = document.getElementById('modalContent');
    const closeBtn = document.querySelector('.close-btn');

    // Lista dos IDs que são CARTAS (Texto corrido)
    // O 1 e o 5 são cartas. O resto o código assume que é poema.
    const idsCartas = ['1', '5'];

    boxes.forEach(box => {
        box.addEventListener('click', function() {
            
            const key = this.getAttribute('data-key');
            const conteudoSecreto = document.getElementById(`conteudo-${key}`);
            
            if (conteudoSecreto) {
                // 1. Joga o texto no modal
                modalContent.innerHTML = conteudoSecreto.innerHTML;
                
                // 2. A MÁGICA: Decide o estilo automaticamente
                // Remove classes antigas pra não misturar
                modalContent.classList.remove('modo-carta', 'modo-poema');

                if (idsCartas.includes(key)) {
                    // É Carta? Aplica estilo de carta
                    modalContent.classList.add('modo-carta');
                } else {
                    // Não tá na lista? Então é Poema!
                    modalContent.classList.add('modo-poema');
                }
               
                // 3. Abre o modal
                modal.style.display = 'flex';
            } else {
                console.error("Conteúdo não encontrado para a chave: " + key);
            }
        });
    });

    // Fechar Modal
    function closeModal() {
        modal.style.display = 'none';
        modalContent.innerHTML = "";
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
});