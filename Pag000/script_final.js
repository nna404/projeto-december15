document.addEventListener("DOMContentLoaded", function() {
    
    const boxes = document.querySelectorAll('.box-card');
    const modal = document.getElementById('textModal');
    const modalContent = document.getElementById('modalContent');
    const closeBtn = document.querySelector('.close-btn');

    // Para cada caixinha...
    boxes.forEach(box => {
        box.addEventListener('click', function() {
            // 1. Vê qual é o número da caixa (1, 2, 3...)
            const key = this.getAttribute('data-key');
            
            // 2. Procura a div secreta correspondente (ex: conteudo-1)
            const conteudoSecreto = document.getElementById(`conteudo-${key}`);
            
            if (conteudoSecreto) {
                // 3. Copia o HTML de lá e joga no modal
                modalContent.innerHTML = conteudoSecreto.innerHTML;
                
                // 4. Abre o modal
                modal.style.display = 'flex';
            } else {
                console.error("Conteúdo não encontrado para a chave: " + key);
            }
        });
    });

    // Fechar Modal
    function closeModal() {
        modal.style.display = 'none';
        modalContent.innerHTML = ""; // Limpa pra não bugar o próximo
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
});