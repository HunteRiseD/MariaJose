document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.backgroundColor = lightenColor(this.style.backgroundColor, 20);
        });

        button.addEventListener('mouseout', function() {
            this.style.backgroundColor = revertColor(this);
        });
    });

    function lightenColor(color, percent) {
        // Remove espaços em branco no início e no fim da string
        color = color.replace(/^\s+|\s+$/g, '');
        
        // Verifica se a cor é um valor hexadecimal
        if (color.startsWith('#') && (color.length === 7 || color.length === 4)) {
            let R, G, B;

            // Se a cor for abreviada (#RGB), expande para o formato completo (#RRGGBB)
            if (color.length === 4) {
                R = parseInt(color[1].repeat(2), 16);
                G = parseInt(color[2].repeat(2), 16);
                B = parseInt(color[3].repeat(2), 16);
            } else {
                R = parseInt(color.substring(1,3), 16);
                G = parseInt(color.substring(3,5), 16);
                B = parseInt(color.substring(5,7), 16);
            }

            R = parseInt((100 + percent) * R/100);
            G = parseInt((100 + percent) * G/100);
            B = parseInt((100 + percent) * B/100);

            R = (R<255)?R:255;  
            G = (G<255)?G:255;  
            B = (B<255)?B:255;  

            let RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
            let GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
            let BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));

            return "#"+RR+GG+BB;
        } else {
            // Se a cor não for um valor hexadecimal válido, retorna a cor original
            return color;
        }
    }

    function revertColor(button) {
        if (button.classList.contains('consultor')) {
            return '#cceeff';
        } else if (button.classList.contains('economize')) {
            return '#cceeff';
        } else if (button.classList.contains('whatsapp')) {
            return '#4CAF50';
        }
        return '#cceeff';
    }

    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        document.body.appendChild(particle);

        const size = Math.random() * 10 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.backgroundColor = `rgba(163, 213, 247, ${Math.random()})`;

        particle.addEventListener('animationend', () => {
            particle.remove();
        });
    }

    setInterval(createParticle, 500);

    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            themeToggle.textContent = '☀️';
        } else {
            themeToggle.textContent = '🌙';
        }
    });
});
