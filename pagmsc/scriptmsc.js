document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById('mainAudio');
    const playBtn = document.getElementById('playBtn');
    
    // MUDANÇA AQUI: Pegamos o container do disco inteiro, não só a imagem
    const recordSpinner = document.getElementById('recordSpinner');
    
    const lyricsContainer = document.getElementById('lyricsContainer');
    const discoWrapper = document.querySelector('.vinyl-wrapper');
    const titulo = document.querySelector('.gold-title-large');
    const subtitulo = document.querySelector('.gold-subtitle');

    let animacaoIniciada = false;

    const tempoInicio = 0; 
    const tempoFim = 213;    

    audio.currentTime = tempoInicio;

    // --- DADOS DA LETRA (ANJOS) ---
     const lyricsData = [
        { time: 1, text: "Vem aqui" },
        { time: 7, text: "Cantar comigo" },
        { time: 13, text: "Deixa eu" },
        { time: 18, text: "Tocar contigo" },
        { time: 24, text: "Me tira" },
        { time: 29, text: "Desse painel preto e branco" },
        { time: 36, text: "Que eu me esqueço" },
        { time: 41, text: "De todos outros planos" },
        { time: 52, text: "E eu nunca te beijei, mas eu sempre sonhei" },
        { time: 59, text: "Com esse amor" },
        { time: 64, text: "Sinto como os anjos, voando e desejando" },
        { time: 71, text: "O seu amor" },
        { time: 82, text: "Vem aqui (vem aqui)" },
        { time: 88, text: "Dançar comigo" },
        { time: 93, text: "Deixa eu" },
        { time: 99, text: "Dançar contigo" },
        { time: 104, text: "Eu cansei de olhar pra sua boca" },
        { time: 112, text: "Eu não sei se eu tô ficando louca" },
        { time: 117, text: "Vem dizer pra mim" },
        { time: 121, text: "Se tem que ser assim" },
        { time: 133, text: "E eu nunca te beijei, rezei e desejei" },
        { time: 140, text: "Te segurar" },
        { time: 145, text: "Sinto como os anjos que te ensinaram o canto" },
        { time: 151, text: "E o amor" },
        { time: 156, text: "Eu nunca te beijei, mas eu sempre sonhei" },
        { time: 162, text: "Com esse amor" },
        { time: 168, text: "Sinto como os anjos, voando e desejando" },
        { time: 174, text: "O seu amor..." },
        { time: 999, text: "" }
    ];


    lyricsContainer.innerHTML = ''; 
    lyricsData.forEach((line, index) => {
        const p = document.createElement('p');
        p.classList.add('frase');
        p.id = `line-${index}`;
        p.innerText = line.text;
        lyricsContainer.appendChild(p);
    });

    // --- CONTROLE PRINCIPAL ---
    playBtn.addEventListener('click', (e) => {
        e.stopPropagation();

        if (!animacaoIniciada) {
            animacaoIniciada = true;
            discoWrapper.classList.add('queda-suave'); 
            titulo.classList.add('animar-texto');      
            subtitulo.classList.add('animar-texto');   
        }

        if (audio.paused) {
            audio.play();
            // MUDANÇA AQUI: Adiciona spinning ao disco completo
            recordSpinner.classList.add('spinning');
            playBtn.innerHTML = "⏸";
        } else {
            audio.pause();
            // MUDANÇA AQUI: Remove spinning do disco completo
            recordSpinner.classList.remove('spinning');
            playBtn.innerHTML = "▶";
        }
    });

    audio.addEventListener('timeupdate', () => {
        if (audio.currentTime >= tempoFim) {
            audio.currentTime = tempoInicio; 
        }
    });

    // --- SINCRONIA DAS LETRAS ---
    audio.addEventListener('timeupdate', () => {
        const currentTime = audio.currentTime;

        lyricsData.forEach((line, index) => {
            const timeThis = line.time;
            const timeNext = lyricsData[index + 1] ? lyricsData[index + 1].time : 9999;
            const el = document.getElementById(`line-${index}`);

            if (currentTime >= timeThis && currentTime < timeNext) {
                if (!el.classList.contains('ativa')) {
                    document.querySelectorAll('.frase').forEach(f => f.classList.remove('ativa'));
                    el.classList.add('ativa');
                }
            }
        });
    });
});