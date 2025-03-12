/**
 * Arda Durmaz - CV Sayfası JavaScript
 * PDF oluşturma ve diğer işlevler için
 */

// Sayfa yüklendiğinde çalışacak işlevler
document.addEventListener('DOMContentLoaded', function() {
    // Şu anda başka bir yükleme işlevi yok
    console.log('CV sayfası yüklendi');
});

/**
 * HTML sayfasını PDF'e dönüştürür
 * html2pdf.js kütüphanesini kullanır
 */
function generatePDF() {
    // Kontrol butonlarını gizle
    const printControls = document.querySelector('.print-controls');
    printControls.style.display = 'none';
    
    // PDF oluşturma ayarları
    const options = {
        margin: 10,
        filename: 'Arda_Durmaz_CV.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    
    // HTML'i PDF'e dönüştürme
    const container = document.getElementById('cv-container');
    html2pdf().from(container).set(options).save().then(function() {
        // İşlem tamamlandıktan sonra butonları tekrar göster
        printControls.style.display = 'flex';
    });
}

// Yazdırma işlevi - Tarayıcının yazdırma dialogunu açar
function printCV() {
    window.print();
} 