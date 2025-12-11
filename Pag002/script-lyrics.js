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
    { time: 63, text: "Montei nosso quebra-cabeças" },
    { time: 69, text: "O mesmo que nunca havia mudado" },
    { time: 76, text: "Segurei nas mãos de Deus e pedi" },
    { time: 80, text: "Ouvir o seu chamado" },
    { time: 83, text: "Seu nome na minha boca não sei porque" }, 
    { time: 87, text: "Soa tão amargo" },
    { time: 90, text: "Sonho com o dia que você vai resolver ficar" },
    { time: 103, text: "Você chora como uma mulher" },
    { time: 107, text: "Briga como uma mulher" },
    { time: 110, text: "Sangra como uma mulher, mas é" },
    { time: 116, text: "Uma menina ao meu lado" },
    { time: 119, text: "..." }
];

// Função que cria as letras no HTML automaticamente
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

    lyricsData.forEach((line, index) => {
        
        if (currentTime >= line.time) {
            
            document.querySelectorAll('.line').forEach(l => l.classList.remove('active'));
            
           
            const currentLine = lyricsBox.children[index];
            currentLine.classList.add('active');

            
        }
    });
});