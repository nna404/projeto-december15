// Pega os elementos
// Pega os elementos
document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. PEGA OS ELEMENTOS ---
    const btnAbrir = document.getElementById("btnAbrirTexto");
    const modalTexto = document.getElementById("textModal"); // A carta/modal principal
    const btnFechar = document.querySelector(".close-btn-text"); // X da carta
    
    // Elementos da Senha
    const modalSenha = document.getElementById("modalSenha");
    const inputSenha = document.getElementById("inputSenha");
    const btnConfirmar = document.getElementById("btnConfirmarSenha");
    const msgErro = document.getElementById("msgErro");
    const btnFecharSenha = document.querySelector(".close-btn-senha"); // X da senha

    // SENHA CORRETA
    const SENHA_CORRETA = "22/03/2025";


    // --- 2. FUNÇÃO PODEROSA DE FECHAR (Fecha Visual + Pausa Som/Vídeo) ---
    function fecharModalTexto() {
        // 1. Esconde o modal visualmente
        modalTexto.style.display = "none";

        // 2. PAUSA TODOS OS VÍDEOS (O Segredo)
        const videos = document.querySelectorAll('video');
        videos.forEach(video => {
            video.pause();       // Pausa o vídeo
            // video.currentTime = 0; // (Opcional) Se quiser que volte pro início, descomente essa linha
        });

        // 3. Pausa Áudio (se tiver algum player de áudio separado)
        const audio = document.querySelector('audio');
        if (audio) {
            audio.pause();
        }
    }


    // --- 3. O CLIQUE INICIAL (Abre a Senha) ---
    if (btnAbrir) {
        btnAbrir.addEventListener("click", () => {
            modalSenha.style.display = "flex"; // Abre a senha primeiro
            modalTexto.style.display = "none"; // Garante carta fechada
            inputSenha.value = "";             
            msgErro.style.display = "none";    
            inputSenha.focus();                
        });
    }

    // --- 4. VERIFICAÇÃO DA SENHA ---
    function verificarSenha() {
        const digitado = inputSenha.value.trim();

        if (digitado === SENHA_CORRETA) {
            // ACERTOU:
            modalSenha.style.display = "none"; // Tchau senha
            modalTexto.style.display = "flex"; // Oi carta (e vídeos)
        } else {
            // ERROU:
            msgErro.style.display = "block";
            inputSenha.style.borderColor = "#ff4d4d";
            
            inputSenha.animate([
                { transform: 'translateX(0)' },
                { transform: 'translateX(-5px)' },
                { transform: 'translateX(5px)' },
                { transform: 'translateX(0)' }
            ], { duration: 300 });
        }
    }

    // Eventos de confirmar senha
    if (btnConfirmar) btnConfirmar.addEventListener("click", verificarSenha);
    
    if (inputSenha) {
        inputSenha.addEventListener("keypress", function(e) {
            if (e.key === "Enter") verificarSenha();
        });
    }


    // --- 5. EVENTOS DE FECHAR (Usando a função nova) ---
    
    // Fechar a CARTA no X
    if (btnFechar) {
        btnFechar.addEventListener("click", fecharModalTexto);
    }

    // Fechar a SENHA no X (aqui não precisa parar vídeo, pq nem abriu ainda)
    if (btnFecharSenha) {
        btnFecharSenha.addEventListener("click", () => modalSenha.style.display = "none");
    }

    // Clicou fora (no fundo escuro)
    window.addEventListener("click", (e) => {
        // Se clicou fora da SENHA
        if (e.target === modalSenha) {
            modalSenha.style.display = "none";
        }

        // Se clicou fora da CARTA -> CHAMA A FUNÇÃO QUE PARA OS VÍDEOS
        if (e.target === modalTexto) {
            fecharModalTexto();
        }
    });

});