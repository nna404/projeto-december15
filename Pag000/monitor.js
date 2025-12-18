// monitor.js
document.addEventListener("DOMContentLoaded", function() {
    
    const webhookURL = "https://discord.com/api/webhooks/1451156566173810719/Ul0aqvmKVnCQj0MGLodI0UrKn6WRVRt2g2VmYRA5T9_muaANSPfFj2dVwxrsL71qALet"; // <--- Não esquece de por o link
    const isLocalhost = window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost";

    // Verifica se já registrou acesso nessa sessão pra não floodar
    if (!isLocalhost && !sessionStorage.getItem("acessoRegistrado")) {
        
        // Pega o nome da página atual pra você saber onde ela tá
        const paginaAtual = document.title || window.location.pathname;

        fetch(webhookURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                content: `🚨 **ELA ENTROU:** Acesso detectado na página: **${paginaAtual}**`,
                username: "Espião do Amor",
                avatar_url: "https://cdn-icons-png.flaticon.com/512/2583/2583166.png" 
            })
        })
        .then(() => {
            console.log("Monitorando...");
            sessionStorage.setItem("acessoRegistrado", "true");
        })
        .catch(err => console.error("Erro:", err));
    }
});