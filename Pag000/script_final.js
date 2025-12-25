document.addEventListener("DOMContentLoaded", function() {
    
    // --- LÓGICA DO MENU DE ANOS (NOVO) ---
    const btn2025 = document.getElementById('open-2025');
    const btn2026 = document.getElementById('open-2026');
    const modalAno2025 = document.getElementById('modal-ano-2025');
    const modalAno2026 = document.getElementById('modal-ano-2026');
    const closeAnoBtns = document.querySelectorAll('.close-ano-btn');

    // Abrir 2025
    btn2025.addEventListener('click', () => {
        modalAno2025.style.display = 'flex';
    });

    // Abrir 2026
    btn2026.addEventListener('click', () => {
        modalAno2026.style.display = 'flex';
    });

    // Fechar Modais de Ano
    closeAnoBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            document.getElementById(targetId).style.display = 'none';
        });
    });

    // --- LÓGICA DOS TEXTOS (O SEU CÓDIGO ORIGINAL, LEVEMENTE AJUSTADO) ---
    const boxes = document.querySelectorAll('.box-card');
    const textModal = document.getElementById('textModal');
    const modalContent = document.getElementById('modalContent');
    const closeTextBtn = document.querySelector('.close-btn');

    // Lista dos IDs que são CARTAS
    const idsCartas = ['1', '5', '12'];

    boxes.forEach(box => {
        box.addEventListener('click', function() {
            // Se o card não tem data-key (ex: o card vazio de 2026), não faz nada
            if (!this.hasAttribute('data-key')) return;

            const key = this.getAttribute('data-key');
            const conteudoSecreto = document.getElementById(`conteudo-${key}`);
            
            if (conteudoSecreto) {
                // 1. Joga o texto no modal
                modalContent.innerHTML = conteudoSecreto.innerHTML;
                
                // 2. Decide estilo
                modalContent.classList.remove('modo-carta', 'modo-poema');
                if (idsCartas.includes(key)) {
                    modalContent.classList.add('modo-carta');
                } else {
                    modalContent.classList.add('modo-poema');
                }
               
                // 3. Abre o modal de LEITURA (por cima do modal de ano)
                textModal.style.display = 'flex';
            }
        });
    });

    // Fechar Modal de Leitura
    function closeTextModal() {
        textModal.style.display = 'none';
        modalContent.innerHTML = "";
    }

    if (closeTextBtn) closeTextBtn.addEventListener('click', closeTextModal);

    // Fechar ao clicar fora (somente para o modal de LEITURA)
    window.addEventListener('click', (e) => {
        if (e.target === textModal) {
            closeTextModal();
        }
    });
});