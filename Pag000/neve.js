document.addEventListener("DOMContentLoaded", function() {
    // 1. Cria o CSS da neve dinamicamente
    const style = document.createElement('style');
    style.innerHTML = `
        .snowflake {
            position: fixed;
            top: -10px;
            color: #ffffffb4;
            font-size: 1em;
            font-family: Arial;
            text-shadow: 0 0 1px #000;
            z-index: 1; /* Fica por cima de tudo */
            user-select: none;
            pointer-events: none; /* O clique "atravessa" a neve */
            cursor: default;
            animation-name: fall;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
        }

        @keyframes fall {
            0% { transform: translateY(-10vh) translateX(0); opacity: 1; }
            100% { transform: translateY(110vh) translateX(20px); opacity: 0.3; }
        }
    `;
    document.head.appendChild(style);

    // 2. Configuração da Neve
    const snowCount = 50; // Quantidade de flocos (não exagera pra não travar celular)
    const characters = ["❄", "❅", "❆", "•"]; // Tipos de flocos

    // 3. Gerar os flocos
    for (let i = 0; i < snowCount; i++) {
        const span = document.createElement('span');
        span.className = 'snowflake';
        span.innerHTML = characters[Math.floor(Math.random() * characters.length)];
        
        // Posição aleatória na tela
        span.style.left = Math.random() * 100 + 'vw';
        
        // Tamanho aleatório
        const size = (Math.random() * 10) + 10 + 'px';
        span.style.fontSize = size;
        
        // Duração da queda aleatória (entre 5s e 15s)
        const duration = (Math.random() * 10) + 5 + 's';
        span.style.animationDuration = duration;
        
        // Atraso inicial pra não cair tudo junto de uma vez
        span.style.animationDelay = (Math.random() * 5) + 's';
        
        // Opacidade aleatória
        span.style.opacity = Math.random();

        document.body.appendChild(span);
    }
});