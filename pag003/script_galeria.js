// Pega os elementos do DOM
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("img01");
const closeBtn = document.getElementsByClassName("close-btn")[0];

// Pega todas as miniaturas com a classe .gallery-thumb
const thumbnails = document.querySelectorAll('.gallery-thumb');

// Para cada miniatura, adiciona um evento de clique
thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function() {
        modal.style.display = "flex"; // Mostra o modal (estava display: none)
        modal.style.alignItems = "center"; // Centraliza verticalmente
        modalImg.src = this.src; // Pega o SRC da imagem clicada e joga no modal
        // Opcional: pega o ALT da imagem e joga como legenda se quiser
        // captionText.innerHTML = this.alt; 
    });
});

// Função para fechar o modal
function closeModal() {
    modal.style.display = "none";
}

// Fecha ao clicar no X
closeBtn.onclick = function() {
    closeModal();
}

// Fecha ao clicar fora da imagem (no fundo preto)
modal.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
}

// Fecha ao apertar a tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});