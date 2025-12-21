function atualizarContador() {
    // Mudei o jeito de criar a data. 
    // new Date(ano, mês-1, dia). Mês 2 é Março (porque janeiro é 0).
    // Isso garante que ele pegue o fuso horário local e não UTC.
    const start = new Date(2025, 2, 22, 0, 0, 0); 
    const now = new Date();

    // Se a data atual for anterior ao início (proteção contra bug de data futura)
    if (now < start) {
        document.getElementById("contador-texto").innerHTML = "Vem aí...";
        return;
    }

    // --- CÁLCULO PRECISO (Calendário) ---
    
    // 1. Calcula a diferença bruta em milissegundos para o relógio
    let diff = now - start;

    // 2. Lógica de Calendário (Anos, Meses, Dias exatos)
    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();
    let days = now.getDate() - start.getDate();

    // Ajuste se o dia atual for menor que o dia de início (pegou emprestado do mês anterior)
    if (days < 0) {
        months--;
        // Pega quantos dias tem no mês ANTERIOR para somar a diferença
        const ultimoDiaMesAnterior = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        days += ultimoDiaMesAnterior;
    }

    // Ajuste se o mês deu negativo (virada de ano)
    if (months < 0) {
        years--;
        months += 12;
    }

    // Se passou de um ano, converte anos em meses pra somar no total (opcional, mas comum)
    const totalMonths = (years * 12) + months;

  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const h = hours < 10 ? '0' + hours : hours;
    const m = minutes < 10 ? '0' + minutes : minutes;
    const s = seconds < 10 ? '0' + seconds : seconds;

    // Lógica para singular/plural ficar bonito
    const labelMeses = totalMonths === 1 ? "mês" : "meses";
    const labelDias = days === 1 ? "dia" : "dias";

    // Se o dia for 0, não mostra "0 dias", mostra só os meses
    let textoPrincipal = "";
    if (days === 0) {
        textoPrincipal = `${totalMonths} ${labelMeses}`;
    } else {
        textoPrincipal = `${totalMonths} ${labelMeses} e ${days} ${labelDias}`;
    }

    document.getElementById("contador-texto").innerHTML = 
        `${textoPrincipal} <span class="tempo-detalhe">${h}:${m}:${s}</span>`;

}

setInterval(atualizarContador, 1000);
atualizarContador();