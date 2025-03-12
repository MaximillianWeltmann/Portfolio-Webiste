// Contact form düzeltme scripti
document.addEventListener('DOMContentLoaded', function() {
    // Contact form ana container
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        // Form stillerini düzelt
        contactForm.style.display = 'flex';
        contactForm.style.flexDirection = 'column';
        contactForm.style.alignItems = 'center';
        contactForm.style.maxWidth = '900px';
        contactForm.style.margin = '3rem auto';
        contactForm.style.width = '100%';
        contactForm.style.gap = '2rem';
        
        // Input gruplarını düzelt
        const inputGroup = document.querySelector('.input-group');
        if (inputGroup) {
            inputGroup.style.display = 'flex';
            inputGroup.style.width = '100%';
            inputGroup.style.gap = '1.5rem';
            
            // Mobil görünüm için media query işlevselliği
            if (window.innerWidth <= 768) {
                inputGroup.style.flexDirection = 'column';
                inputGroup.style.gap = '0';
            }
        }
        
        // Input box'ları düzelt
        const inputBoxes = document.querySelectorAll('.input-box');
        inputBoxes.forEach(box => {
            box.style.display = 'flex';
            box.style.flexDirection = 'column';
            box.style.width = '100%';
        });
        
        // Input group 2'yi düzelt
        const inputGroup2 = document.querySelector('.input-group-2');
        if (inputGroup2) {
            inputGroup2.style.display = 'flex';
            inputGroup2.style.flexDirection = 'column';
            inputGroup2.style.width = '100%';
        }
        
        // Gönder butonunu düzelt
        const submitButton = document.querySelector('.sumbits');
        if (submitButton) {
            submitButton.style.width = '100%';
            submitButton.style.maxWidth = '300px';
            submitButton.style.margin = '1rem auto';
        }
        
        // Textarea yüksekliğini düzelt
        const textarea = document.querySelector('textarea');
        if (textarea) {
            textarea.style.transform = 'none';
            
            if (window.innerWidth <= 450) {
                textarea.style.height = '180px';
            } else if (window.innerWidth <= 768) {
                textarea.style.height = '200px';
            } else {
                textarea.style.height = '274px';
            }
        }
    }
    
    // Ekran boyutu değiştiğinde form stillerini güncelle
    window.addEventListener('resize', function() {
        const inputGroup = document.querySelector('.input-group');
        const textarea = document.querySelector('textarea');
        
        if (inputGroup) {
            if (window.innerWidth <= 768) {
                inputGroup.style.flexDirection = 'column';
                inputGroup.style.gap = '0';
            } else {
                inputGroup.style.flexDirection = 'row';
                inputGroup.style.gap = '1.5rem';
            }
        }
        
        if (textarea) {
            if (window.innerWidth <= 450) {
                textarea.style.height = '180px';
            } else if (window.innerWidth <= 768) {
                textarea.style.height = '200px';
            } else {
                textarea.style.height = '274px';
            }
        }
    });
}); 