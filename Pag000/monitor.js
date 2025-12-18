document.addEventListener("DOMContentLoaded", function() {
    
    // --- CONFIGURAÇÃO ---
    const webhookURL = "https://discord.com/api/webhooks/1451156566173810719/Ul0aqvmKVnCQj0MGLodI0UrKn6WRVRt2g2VmYRA5T9_muaANSPfFj2dVwxrsL71qALet"; // <--- Seu Link
    
    const isLocalhost = window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost";

    // Pega o nome da página atual (ex: "Memorial", "A Música", etc)
    const paginaAtual = document.title;
    
    // Pega qual foi a última página que a gente avisou no Discord
    const ultimaPaginaAvisada = sessionStorage.getItem("ultimaPaginaAvisada");

    // LÓGICA DO FOFQUEIRO:
    // 1. Não é localhost?
    // 2. A página atual é DIFERENTE da última que avisei? (Isso evita F5 repetido, mas avisa se mudar de página)
    if (!isLocalhost && paginaAtual !== ultimaPaginaAvisada) {
        
        const data = {
            content: `👣 **ELA ANDOU:** Saiu da *${ultimaPaginaAvisada || "Entrada"}* e foi para **${paginaAtual}**!`,
            username: "Espião do Amor",
            avatar_url: "https://cdn-icons-png.flaticon.com/512/2583/2583166.png"
        };

        const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
        navigator.sendBeacon(webhookURL, blob);

        console.log(`Aviso enviado: ${paginaAtual}`);
        
        // Atualiza a memória com a página nova
        sessionStorage.setItem("ultimaPaginaAvisada", paginaAtual);
    }
});