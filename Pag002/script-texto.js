document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. PEGA OS ELEMENTOS (VARIÁVEIS) ---
    const btnAbrir = document.getElementById("btnAbrirTexto");
    const modalTexto = document.getElementById("textModal"); // A carta
    const btnFechar = document.querySelector(".close-btn-text"); // X da carta
    const audioPlayer = document.getElementById("meuAudio"); // O player de música
    
    // Elementos da Senha
    const modalSenha = document.getElementById("modalSenha");
    const inputSenha = document.getElementById("inputSenha");
    const btnConfirmar = document.getElementById("btnConfirmarSenha");
    const msgErro = document.getElementById("msgErro");
    const btnFecharSenha = document.querySelector(".close-btn-senha"); // X da senha

    // CONFIGURAÇÃO DA SENHA
    const SENHA_CORRETA = "Como perder um homem em 10 dias"; // Defina a senha correta aqui


    // --- 2. O CLIQUE INICIAL ---
    // Quando clica no botão, abre PRIMEIRO a senha
    if (btnAbrir) {
        btnAbrir.addEventListener("click", () => {
            modalSenha.style.display = "flex"; // Abre a senha
            modalTexto.style.display = "none"; // Garante que a carta tá fechada
            
            // Reseta o campo de senha
            inputSenha.value = "";             
            msgErro.style.display = "none";    
            inputSenha.focus();                
        });
    }


    // --- 3. FUNÇÃO QUE VERIFICA A SENHA ---
    function verificarSenha() {
        const digitado = inputSenha.value.trim();

        if (digitado === SENHA_CORRETA) {
            // ACERTOU:
            modalSenha.style.display = "none"; // Fecha a senha
            modalTexto.style.display = "flex"; // Abre a carta
        } else {
            // ERROU:
            msgErro.style.display = "block";
            inputSenha.style.borderColor = "#ff4d4d";
            
            // Animação de tremer
            inputSenha.animate([
                { transform: 'translateX(0)' },
                { transform: 'translateX(-5px)' },
                { transform: 'translateX(5px)' },
                { transform: 'translateX(0)' }
            ], { duration: 300 });
        }
    }


    // --- 4. EVENTOS DE CONFIRMAÇÃO DA SENHA ---
    if (btnConfirmar) {
        btnConfirmar.addEventListener("click", verificarSenha);
    }
    
    if (inputSenha) {
        inputSenha.addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
                verificarSenha();
            }
        });
    }


    // --- 5. EVENTOS DE FECHAR (AQUI TÁ A MÁGICA DO ÁUDIO) ---
    
    // Função auxiliar pra fechar a carta e parar o som
    function fecharCartaEPararSom() {
        modalTexto.style.display = "none";
        
        // Se o player existir, pausa e zera
        if (audioPlayer) {
            audioPlayer.pause();
            audioPlayer.currentTime = 0;
        }
    }

    // Fechar a CARTA clicando no X
    if (btnFechar) {
        btnFechar.addEventListener("click", fecharCartaEPararSom);
    }

    // Fechar a SENHA clicando no X (aqui não precisa parar som, pq nem começou)
    if (btnFecharSenha) {
        btnFecharSenha.addEventListener("click", () => modalSenha.style.display = "none");
    }

    // Clicou fora dos modais (no fundo escuro)
    window.addEventListener("click", (e) => {
        // Se clicou fora da SENHA
        if (e.target === modalSenha) {
            modalSenha.style.display = "none";
        }

        // Se clicou fora da CARTA -> Fecha e PARA O SOM
        if (e.target === modalTexto) {
            fecharCartaEPararSom();
        }
    });

}); // Fim do DOMContentLoaded