document.addEventListener("DOMContentLoaded", function() {
    
    const boxes = document.querySelectorAll('.box-card');
    const modal = document.getElementById('textModal');
    const modalContent = document.getElementById('modalContent');
    const closeBtn = document.querySelector('.close-btn');

    
    boxes.forEach(box => {
        box.addEventListener('click', function() {
            
            const key = this.getAttribute('data-key');
            
            
            const conteudoSecreto = document.getElementById(`conteudo-${key}`);
            
            if (conteudoSecreto) {
                
                modalContent.innerHTML = conteudoSecreto.innerHTML;
                
               
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