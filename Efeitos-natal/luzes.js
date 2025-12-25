const config = {
    quantity: 30,          
    minSize: 5,
    maxSize: 15,
    colors: ['#ff0055', '#00eaff', '#ffcc00', '#ffffff'],
    blinkSpeed: 0.01,      // Velocidade do piscar (menor = mais suave)
    headerHeight: 700   // Defina até onde (em px) as luzes podem aparecer descendo do topo
};

class Light {
    constructor() {
        this.element = document.createElement('div');
        this.element.classList.add('light-particle');
        document.body.appendChild(this.element);
        
        this.size = Math.random() * (config.maxSize - config.minSize) + config.minSize;
        this.element.style.width = `${this.size}px`;
        this.element.style.height = `${this.size}px`;
        
        this.reset(); 
    }

    reset() {
        // Posição X: Qualquer lugar da largura da tela
        this.x = Math.random() * window.innerWidth;
        
        // Posição Y: Aleatório entre 0 (topo absoluto) e o limite que definimos no config
        this.y = Math.random() * config.headerHeight;
        
        const color = config.colors[Math.floor(Math.random() * config.colors.length)];
        this.element.style.backgroundColor = color;
        this.element.style.boxShadow = `0 0 ${this.size * 2}px ${color}`;
        
        // Config inicial do piscar
        this.opacity = Math.random(); 
        this.opacityDir = Math.random() > 0.5 ? 1 : -1;
        
        // Aplica a posição APENAS UMA VEZ no reset, já que não se movem
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }

    update() {
        // AQUI TÁ O SEGREDO: Sem this.x += ... ou this.y += ...
        // Elas ficam paradas. Só mexemos na opacidade.

        // Piscar
        this.opacity += config.blinkSpeed * this.opacityDir;
        
        // Limites do piscar (0.1 pra não sumir totalmente, 1 pra brilho total)
        if (this.opacity >= 1 || this.opacity <= 0.1) { 
            this.opacityDir *= -1;
        }

        this.element.style.opacity = this.opacity;
    }
}

// Inicialização
const lights = [];

function init() {
    for (let i = 0; i < config.quantity; i++) {
        lights.push(new Light());
    }
    animate();
}

function animate() {
    lights.forEach(light => light.update());
    requestAnimationFrame(animate);
}

window.addEventListener('load', init);

// Opcional: Se redimensionar a tela, reseta as posições pra não quebrar o layout
window.addEventListener('resize', () => {
    lights.forEach(light => light.reset());
});