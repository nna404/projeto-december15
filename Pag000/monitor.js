document.addEventListener("DOMContentLoaded", function() {
    
    // --- CONFIGURAÇÃO ---
    const webhookURL = "SUA_URL_DO_DISCORD_AQUI"; // <--- Cola o link aqui
    
    // Verifica se é localhost (pra não contar você)
    const isLocalhost = window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost";

    // Verifica se já registrou (pra não floodar)
    if (!isLocalhost && !sessionStorage.getItem("acessoRegistrado")) {
        
        const paginaAtual = document.title || window.location.pathname;

        // Monta os dados
        const data = {
            content: `🚨 **ELA ENTROU:** Acesso detectado na página: **${paginaAtual}**`,
            username: "Espião do Amor",
            avatar_url: "https://cdn-icons-png.flaticon.com/512/2583/2583166.png"
        };

        // --- O PULO DO GATO: sendBeacon 🚀 ---
        // Cria um pacote de dados (Blob) pra mandar como JSON
        const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
        
        // Manda o sinal em segundo plano (muito mais rápido que fetch)
        navigator.sendBeacon(webhookURL, blob);

        console.log("Sinal enviado via Satélite (Beacon).");
        sessionStorage.setItem("acessoRegistrado", "true");
    }
});