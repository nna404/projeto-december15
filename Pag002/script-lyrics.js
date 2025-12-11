const audio = document.getElementById('meuAudio');
const lyricsBox = document.getElementById('lyricsBox');

// AQUI É ONDE VOCÊ TRABALHA: Sincronia
// Coloque o tempo (em segundos) que cada frase começa
const lyricsData = [
    { time: 0, text: "..." },
    { time: 14, text: "Teus olhos tem um tempo particular" }, 
    { time: 25, text: "Traz sinais de tudo que eu quero encontrar" },
    { time: 29, text: "Teu corpo sempre faz eu esquentar" },
    { time: 36, text: "Entra no meu tempo" },
    { time: 38, text: "Que eu quero te mostrar" },
    { time: 43, text: "A luz do meu amor no teu amor" }, 
    { time: 48, text: "Sem machucar, sem machucar" },
    { time: 54, text: "O tempo todo que a gente estiver cantando" },
    { time: 61, text: "As gotas do tempo vão parar pra escutar" },
    { time: 66, text: "..." },
    { time: 72, text: "E se a gente acabar sei lá, sei lá" }, 
    { time: 77, text: "Viver é mais importante do que pensar" },
    { time: 83, text: "E se a gente acabar sei lá, sei lá" },
    { time: 88, text: "Pensar nisso é perder tempo de te amar" },
    { time: 93, text: "..." }
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