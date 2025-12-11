// Pega os elementos
document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. PEGA OS ELEMENTOS ---
    const btnAbrir = document.getElementById("btnAbrirTexto");
    const modalTexto = document.getElementById("textModal");
    const btnFechar = document.querySelector(".close-btn-text"); // X da carta
    
    // Elementos da Senha
    const modalSenha = document.getElementById("modalSenha");
    const inputSenha = document.getElementById("inputSenha");
    const btnConfirmar = document.getElementById("btnConfirmarSenha");
    const msgErro = document.getElementById("msgErro");
    const btnFecharSenha = document.querySelector(".close-btn-senha"); // X da senha

    // SENHA CORRETA
    const SENHA_CORRETA = "22/03/2025";

    // --- 2. O CLIQUE INICIAL ---
    // Quando clica no botão, abre a SENHA (não a carta!)
    if (btnAbrir) {
        btnAbrir.addEventListener("click", () => {
            modalSenha.style.display = "flex"; // <--- Mudei aqui: Abre a senha
            modalTexto.style.display = "none"; // Garante que a carta tá fechada
            inputSenha.value = "";             // Limpa o campo
            msgErro.style.display = "none";    // Esconde erro velho
            inputSenha.focus();                // Já foca pra digitar
        });
    }

    // --- 3. FUNÇÃO QUE VERIFICA ---
    function verificarSenha() {
        const digitado = inputSenha.value.trim();

        if (digitado === SENHA_CORRETA) {
            // ACERTOU:
            modalSenha.style.display = "none"; // Tchau senha
            modalTexto.style.display = "flex"; // Oi carta
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

    // --- 4. EVENTOS DE CONFIRMAÇÃO ---
    // Clicou no botão confirmar
    if (btnConfirmar) {
        btnConfirmar.addEventListener("click", verificarSenha);
    }
    
    // Apertou ENTER no input
    if (inputSenha) {
        inputSenha.addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
                verificarSenha();
            }
        });
    }

    // --- 5. EVENTOS DE FECHAR ---
    
    // Fechar a CARTA
    if (btnFechar) {
        btnFechar.addEventListener("click", () => {
            modalTexto.style.display = "none";
        });
    }

    // Fechar a SENHA (no X)
    if (btnFecharSenha) {
        btnFecharSenha.addEventListener("click", () => modalSenha.style.display = "none");
    }

    // Clicou fora da SENHA -> Fecha
    window.addEventListener("click", (e) => {
        if (e.target === modalSenha) {
            modalSenha.style.display = "none";
        }
    });

    // Clicou fora da CARTA -> Fecha
    window.addEventListener("click", (e) => {
        if (e.target === modalTexto) {
            modalTexto.style.display = "none";
        }
    });

}); 