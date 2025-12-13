
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("img01");
const videoInsideModal = document.getElementById("video01"); // Elemento de vídeo
const captionText = document.getElementById("caption"); 
const closeBtn = document.getElementsByClassName("close-btn")[0];

// Pega todas as miniaturas
const thumbnails = document.querySelectorAll('.gallery-thumb');

// Para cada miniatura...
thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function() {
        modal.style.display = "flex";
        modal.style.alignItems = "center";
        modal.style.justifyContent = "center"; // Centraliza tudo
        
        // --- LÓGICA NOVA: VÍDEO OU FOTO? ---
        // Tenta pegar o link do vídeo
        const videoSrc = this.getAttribute('data-video');
        
        if (videoSrc) {
            // -- CENÁRIO 1: É VÍDEO --
            modalImg.style.display = "none";         // Esconde a tag de imagem
            videoInsideModal.style.display = "block"; // Mostra o player de vídeo
            
            videoInsideModal.src = videoSrc;         // Carrega o arquivo mp4
            videoInsideModal.play();                 // Já sai tocando (opcional)
            
        } else {
            // -- CENÁRIO 2: É FOTO --
            videoInsideModal.style.display = "none"; // Esconde o vídeo
            videoInsideModal.pause();                // Garante que tá mudo
            modalImg.style.display = "block";        // Mostra a imagem
            
            modalImg.src = this.src;                 // Pega a imagem clicada
        }
        
        // --- A MÁGICA DO TEXTO (Mantida) ---
        const textoDaLegenda = this.getAttribute('data-caption');
        
        if (textoDaLegenda) {
            captionText.innerHTML = textoDaLegenda;
            captionText.style.display = "block"; 
        } else {
            captionText.innerHTML = ""; 
            captionText.style.display = "none"; 
        }
    });
});

// Função para fechar o modal
function closeModal() {
    modal.style.display = "none";
    captionText.innerHTML = ""; // Limpa texto
    
    // --- NOVO: PARAR O VÍDEO AO FECHAR ---
    if (videoInsideModal) {
        videoInsideModal.pause();
        videoInsideModal.currentTime = 0;
        videoInsideModal.src = ""; // Limpa a fonte pra não ficar carregando a toa
    }
}

// Eventos para fechar
if (closeBtn) closeBtn.onclick = function() { closeModal(); }

modal.onclick = function(event) {
    if (event.target === modal) { closeModal(); }
}

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") { closeModal(); }
});