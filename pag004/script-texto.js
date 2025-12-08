// Pega os elementos
const btnAbrir = document.getElementById("btnAbrirTexto");
const modalTexto = document.getElementById("textModal");
const btnFechar = document.querySelector(".close-btn-text");

// Clicou no botão -> Abre o modal
btnAbrir.addEventListener("click", () => {
    modalTexto.style.display = "flex";
});

// Clicou no X -> Fecha
btnFechar.addEventListener("click", () => {
    modalTexto.style.display = "none";
});

// Clicou fora da caixinha (no fundo escuro) -> Fecha também
modalTexto.addEventListener("click", (e) => {
    if (e.target === modalTexto) {
        modalTexto.style.display = "none";
    }
});