const audio = document.getElementById('meuAudio');
const lyricsBox = document.getElementById('lyricsBox');

// AQUI É ONDE VOCÊ TRABALHA: Sincronia
// Coloque o tempo (em segundos) que cada frase começa
const lyricsData = [
    { time: 0, text: "..." },
    { time: 25, text: "Eu provei do amor e sei o gosto" }, 
    { time: 32, text: "Bebi da fonte da dor e descobri" },
    { time: 39, text: "Que no final não sobra nada" },
    { time: 45, text: "Pra nós dois" },
    { time: 49, text: "Passei alguns dias sozinho" },
    { time: 56, text: "Na minha casa lá no mato" }, 
    { time: 63, text: "Montei nosso quebra-cabeça" },
    { time: 69, text: "O mesmo que nunca havia mudado" },
    { time: 76, text: "Segurei na mão de Deus e pedi" },
    { time: 80, text: "Ouvir o seu chamado" },
    { time: 83, text: "Seu nome na minha boca não sei porque" }, 
    { time: 87, text: "Soa tão amargo" },
    { time: 90, text: "Sonho com o dia que você vai resolver ficar" },
    { time: 103, text: "Você chora como uma mulher" },
    { time: 107, text: "Briga como uma mulher" },
    { time: 110, text: "Sangra como uma mulher, mas é" },
    { time: 116, text: "Uma menina ao meu lado" },
    { time: 119, text: "..." },
    { time: 132, text: "Já chega seu aniversário" }, 
    { time: 139, text: "De 20 e quase poucos anos" },
    { time: 146, text: "Não me lembro da minha idade" },
    { time: 152, text: "Já não me lembro de nada" },
    { time: 160, text: "As conversas na cozinha" },
    { time: 167, text: "Agora sozinho, penso" }, 
    { time: 174, text: "Me lembro quase todo dia" },
    { time: 180, text: "Do seu sorriso, do seu chamego" },
    { time: 187, text: "Segurei na mão de Deus e pedi" },
    { time: 191, text: "Ouvir o seu chamado" },
    { time: 194, text: "Seu nome na minha boca não sei porque" }, 
    { time: 198, text: "Soa tão amargo" },
    { time: 201, text: "Sonho com o dia que você vai resolver ficar" },
    { time: 214, text: "Você chora como uma mulher" },
    { time: 217, text: "Briga como uma mulher" },
    { time: 221, text: "Sangra como uma mulher, mas é" },
    { time: 226, text: "Uma menina ao meu lado" },
    { time: 230, text: "Chora como uma mulher" },
    { time: 233, text: "Briga como uma mulher" },
    { time: 237, text: "Sangra como uma mulher, mas é" },
    { time: 242, text: "Uma menina ao meu lado" },
    { time: 245, text: "..." }
];


function createLyrics() {
    lyricsBox.innerHTML = ""; // Limpa antes
    lyricsData.forEach((line, index) => {
        const p = document.createElement('p');
        p.classList.add('line');
        p.dataset.index = index; 
        p.innerText = line.text;
        lyricsBox.appendChild(p);
    });
}

createLyrics(); 


audio.addEventListener('timeupdate', () => {
    const currentTime = audio.currentTime;

    // 1. Acha qual é a linha ATUAL
    let activeIndex = -1;
    for (let i = 0; i < lyricsData.length; i++) {
        if (currentTime >= lyricsData[i].time) {
            activeIndex = i;
        } else {
            break; 
        }
    }

    // 2. Se achou, atualiza o visual
    if (activeIndex !== -1) {
        document.querySelectorAll('.line').forEach(l => l.classList.remove('active'));
        
        const currentLine = lyricsBox.children[activeIndex];
        
        if (currentLine) {
            currentLine.classList.add('active');
            
            // --- AQUI TÁ A CORREÇÃO DO CÁLCULO ---
            
            // 1. Altura da caixa (ex: 300px)
            const containerHeight = lyricsBox.clientHeight;
            // 2. Altura da linha (ex: 20px)
            const lineHeight = currentLine.clientHeight;
            
            // 3. Posição RELATIVA (O Pulo do Gato 😺)
            // A gente pega a posição da linha e SUBTRAI a posição da caixa.
            // Assim a gente descobre onde a linha tá DENTRO da caixa.
            const lineLocation = currentLine.offsetTop - lyricsBox.offsetTop;

            // 4. Centraliza
            const scrollPosition = lineLocation - (containerHeight / 2) + (lineHeight / 2);

            lyricsBox.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });
        }
    }
});