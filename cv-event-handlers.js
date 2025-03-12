/**
 * Arda Durmaz - CV Sayfası Olay Dinleyicileri
 * Button tıklama ve diğer olaylar için event handler'ları
 */

// Sayfa yüklendiğinde tüm butonlara event listener'lar eklenir
document.addEventListener('DOMContentLoaded', function() {
  // Yazdırma butonu
  const printButton = document.querySelector('.print-btn:not(.pdf-btn)');
  if (printButton) {
    printButton.addEventListener('click', function() {
      printCV();
    });
  }
  
  // PDF indirme butonu
  const pdfButton = document.querySelector('.pdf-btn');
  if (pdfButton) {
    pdfButton.addEventListener('click', function() {
      generatePDF();
    });
  }
}); 