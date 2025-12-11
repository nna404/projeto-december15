// Pega os elementos do DOM
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption"); // <--- NOVO!
const closeBtn = document.getElementsByClassName("close-btn")[0];

// Pega todas as miniaturas
const thumbnails = document.querySelectorAll('.gallery-thumb');

// Para cada miniatura...
thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function() {
        modal.style.display = "flex";
        modal.style.alignItems = "center";
        modal.style.justifyContent = "center"; // Centraliza tudo
        
        modalImg.src = this.src; // Pega a imagem
        
        // --- AQUI ESTÁ A MÁGICA DO TEXTO ---
        // Pega o texto que está no atributo 'data-caption' da miniatura clicada
        const textoDaLegenda = this.getAttribute('data-caption');
        
        // Se tiver texto, mostra. Se não, deixa vazio.
        if (textoDaLegenda) {
            captionText.innerHTML = textoDaLegenda;
            captionText.style.display = "block"; // Mostra a caixinha
        } else {
            captionText.innerHTML = ""; // Limpa
            captionText.style.display = "none"; // Esconde a caixinha
        }
    });
});

// Função para fechar o modal
function closeModal() {
    modal.style.display = "none";
    captionText.innerHTML = ""; // Limpa o texto ao fechar pra não dar bug
}

// Eventos para fechar
closeBtn.onclick = function() { closeModal(); }
modal.onclick = function(event) {
    if (event.target === modal) { closeModal(); }
}
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") { closeModal(); }
});