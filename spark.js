const canvas = document.getElementById('fireCanvas');
const ctx = canvas.getContext('2d');

// Canvas boyutunu ayarla
function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
setCanvasSize();

// Responsive particle settings
const isMobile = window.innerWidth <= 768;
const isLowEndDevice = isMobile && navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;

// Cihaz performansına göre ayarlamalar
const amount = isLowEndDevice ? 15 : (isMobile ? 25 : 50); // Düşük performanslı cihazlarda daha az parçacık
const sizeRate = isLowEndDevice ? 0.995 : (isMobile ? 0.996 : 0.998); // Daha hızlı yok olma
const speedRate = isLowEndDevice ? 0.6 : (isMobile ? 0.8 : 1); // Daha yavaş hız
const windSpeed = isLowEndDevice ? 0.03 : (isMobile ? 0.05 : 0.1); // Daha az rüzgar etkisi

const sparks = [];

// Resize canvas when window size changes
window.addEventListener('resize', () => {
    setCanvasSize();
    
    // Re-initialize with appropriate settings for the new screen size
    const newIsMobile = window.innerWidth <= 768;
    if (newIsMobile !== isMobile) {
        // Only reinit if we've crossed the mobile breakpoint
        init();
    }
});

class Spark {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * (isLowEndDevice ? 2 : (isMobile ? 3 : 5)) + 2;
        this.speedX = (Math.random() - 0.5) * speedRate;
        this.speedY = Math.random() * -speedRate;
        this.opacity = 1;
    }

    update() {
        this.x += this.speedX + (Math.random() - 0.5) * windSpeed;
        this.y += this.speedY;
        this.size *= sizeRate;
        this.opacity *= sizeRate;

        // Randomly change direction (less frequently on mobile)
        if (Math.random() < (isLowEndDevice ? 0.02 : (isMobile ? 0.03 : 0.05))) {
            this.speedX = (Math.random() - 0.5) * speedRate;
        }
    }

    draw() {
        ctx.fillStyle = `rgba(0, 255, 81, ${this.opacity})`; // Green color
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function init() {
    sparks.length = 0; // Clear existing sparks on reinit
    for (let i = 0; i < amount; i++) {
        const x = Math.random() * canvas.width;
        const y = canvas.height;
        sparks.push(new Spark(x, y));
    }
}

let lastTime = 0;
const fps = isLowEndDevice ? 20 : (isMobile ? 30 : 60); // Daha düşük FPS
const fpsInterval = 1000 / fps;

// Animasyon durdurma kontrolü
let isAnimating = true;
document.addEventListener('visibilitychange', () => {
    isAnimating = !document.hidden;
});

function animate(timestamp) {
    if (!isAnimating) {
        requestAnimationFrame(animate);
        return;
    }
    
    const elapsed = timestamp - lastTime;
    
    if (elapsed > fpsInterval) {
        lastTime = timestamp - (elapsed % fpsInterval);
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Sayfada görünmeyen animasyonları atlama
        if (!document.hidden) {
            sparks.forEach((spark, index) => {
                spark.update();
                spark.draw();
                if (spark.size < 0.5 || spark.opacity < 0.1) {
                    sparks.splice(index, 1);
                    const x = Math.random() * canvas.width;
                    const y = canvas.height;
                    sparks.push(new Spark(x, y));
                }
            });
        }
    }
    
    requestAnimationFrame(animate);
}

// Kullanıcının cihaz performansını algılama
function checkPerformance() {
    // Düşük performanslı cihazlarda animasyonu devre dışı bırakma seçeneği
    if (isLowEndDevice && localStorage.getItem('disableParticles') === 'true') {
        canvas.style.display = 'none';
        return false;
    }
    return true;
}

// Eğer cihaz performansı yeterliyse animasyonu başlat
if (checkPerformance()) {
    init();
    animate(0);
}
