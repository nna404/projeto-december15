document.addEventListener("DOMContentLoaded", () => {
    const container = document.body;

    function criarEstrela() {
        const estrela = document.createElement("div");
        estrela.className = "estrela-cadente";
        
        // Posição horizontal aleatória
        estrela.style.left = Math.random() * 100 + "vw";
        
        // Tamanhos variados para dar profundidade
        const tamanho = Math.random() * 3 + 1 + "px";
        estrela.style.width = tamanho;
        estrela.style.height = tamanho;
        
        // Duração da queda aleatória
        estrela.style.animationDuration = Math.random() * 3 + 2 + "s";
        
        // Brilho aleatório
        estrela.style.opacity = Math.random();

        container.appendChild(estrela);

        // Remove a estrela após a animação para não pesar o site
        setTimeout(() => {
            estrela.remove();
        }, 5000);
    }

    // Cria uma nova estrela a cada 200ms
    setInterval(criarEstrela, 200);
});