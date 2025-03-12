// Optimize edilmiş yükleme animasyonu
window.onload = function () {
    // Düşük performanslı cihazları tespit et
    const isMobile = window.innerWidth <= 768;
    const isLowEndDevice = isMobile && navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
    
    // Cihaz tipine göre yükleme süresi
    const fastLoading = localStorage.getItem('fastLoading') === 'true' || isMobile;
    
    // Düşük performanslı cihazlarda daha hızlı yükleme
    const animationDuration = isLowEndDevice ? 400 : (fastLoading ? 600 : 1000);
    const totalRotations = isLowEndDevice ? 1 : (fastLoading ? 2 : 3);
    
    // Görünürlük değişikliklerini izleme
    let redirectTimeout;
    let startTime = Date.now();
    
    function startRedirectTimer() {
        // Mevcut zamanı hesapla
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, (animationDuration * totalRotations) - elapsedTime);
        
        // Zaman kaldıysa, yeni bir zamanlayıcı başlat
        if (remainingTime > 0) {
            clearTimeout(redirectTimeout);
            redirectTimeout = setTimeout(function () {
                redirectToMainPage();
            }, remainingTime);
        } else {
            // Zaman dolmuşsa hemen yönlendir
            redirectToMainPage();
        }
    }
    
    function redirectToMainPage() {
        // Animasyonu devre dışı bırak (verimliliği artırmak için)
        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.animation = 'none';
        }
        
        // Yönlendirme
        window.location.href = "index.html";
    }
    
    // Sayfa görünürlük değişikliklerini izle
    document.addEventListener("visibilitychange", function() {
        if (document.hidden) {
            // Sayfa görünmüyorsa zamanlayıcıyı durdur
            clearTimeout(redirectTimeout);
        } else {
            // Sayfa tekrar görünürse zamanlayıcıyı yeniden başlat
            startRedirectTimer();
        }
    });
    
    // Zamanlayıcıyı başlat
    startRedirectTimer();
    
    // Animasyonu atlama seçeneği
    document.addEventListener('click', function() {
        redirectToMainPage();
    });
    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' || event.key === 'Enter' || event.key === ' ') {
            redirectToMainPage();
        }
    });
    
    // Düşük performanslı cihazlarda parçacık efektlerini kapat
    if (isLowEndDevice) {
        localStorage.setItem('disableParticles', 'true');
    }
};
