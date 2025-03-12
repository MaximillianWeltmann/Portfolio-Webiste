/**
 * Arda Durmaz - Portfolyo Dil Çevirileri ve Sayfa İşlevleri
 */

// Otomatik olarak yılı güncelleyen küçük bir script
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Projeler için kaydırma işlevselliği
  const track = document.getElementById("image-track");
  let isDown = false;
  let startX;
  let scrollLeft;
  
  // Masaüstü için fare olayları
  track.addEventListener("mousedown", (e) => {
    isDown = true;
    track.classList.add("active");
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });
  
  track.addEventListener("mouseleave", () => {
    isDown = false;
    track.classList.remove("active");
  });
  
  track.addEventListener("mouseup", () => {
    isDown = false;
    track.classList.remove("active");
  });
  
  track.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 2; // Kaydırma hızı çarpanı
    track.scrollLeft = scrollLeft - walk;
  });
  
  // Mobil cihazlar için dokunma olayları
  track.addEventListener("touchstart", (e) => {
    isDown = true;
    track.classList.add("active");
    startX = e.touches[0].pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });
  
  track.addEventListener("touchend", () => {
    isDown = false;
    track.classList.remove("active");
  });
  
  track.addEventListener("touchmove", (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - track.offsetLeft;
    const walk = (x - startX) * 2;
    track.scrollLeft = scrollLeft - walk;
  });
  
  // Sayfa yüklendiğinde dili ayarla
  changeLanguage('tr'); // Varsayılan dil Türkçe
});

// Çeviri veritabanı (tüm metinler)
const translations = {
  'tr': {
    // Navbar
    'nav-home': 'Ana Sayfa',
    'nav-about': 'Hakkımda',
    'nav-skills': 'Beceriler',
    'nav-services': 'Hizmetler',
    'nav-projects': 'Projeler',
    'nav-contact': 'İletişim',
    
    // Projects
    'projects-title': 'Projeler',
    'projects-desc': 'Bu projeler, yazılım geliştirme yolculuğumda oluşturduğum çalışmalarımdan bazıları. Kaydırmak için sağa veya sola sürükleyin.',
    'swipe-text': 'Sürükleyin',
    
    // Home
    'home-hi': 'Merhaba Ben',
    'home-im': 'Ben bir\'ım',
    'home-desc': 'Kullanıcı dostu, modern ve yaratıcı web uygulamaları geliştiren bir frontend geliştiriciyim. Hedefim, insanların dijital dünyada en iyi deneyimi yaşamasını sağlamak.',
    'home-hire': 'İşe Al',
    'home-contact': 'İletişim',
    
    // About
    'about-me': 'Hakkımda',
    'me': 'Ben',
    'about-desc': 'FullStack Developer olarak, kullanıcı deneyimini ön planda tutan modern ve dinamik web uygulamaları geliştiriyorum. Amacım, çalışanların yaşadığı zorlukları kolaylaştıracak yazılım çözümleri geliştirmek ve dijital dünyada fark yaratan projelerle katkı sağlamak.',
    'about-btn': 'Daha Fazla',
    
    // Services
    'services-title': 'Hizmetler',
    'service-frontend': 'Frontend Geliştirme',
    'service-frontend-desc': 'Modern ve kullanıcı dostu arayüzler tasarlıyorum. Projelerinize görsel estetik katarken, kullanıcı deneyimini ön planda tutarak hızlı ve işlevsel web çözümleri sunuyorum.',
    'service-backend': 'Backend Geliştirme',
    'service-backend-desc': 'Veri güvenliği, performans ve ölçeklenebilirlik odaklı backend çözümleri geliştiriyorum. İş süreçlerinizi optimize edecek sağlam ve etkili sunucu tarafı altyapılar sağlıyorum.',
    'service-mobile': 'Mobil Uygulama Geliştirme',
    'service-mobile-desc': 'iOS ve Android platformları için yüksek performanslı, sezgisel ve estetik mobil uygulamalar tasarlıyorum. Fikirlerinizi mobil dünyada hayata geçirelim.',
    
    // Skills
    'learning-stage': 'Öğrenme Aşamasında',
    'skills-title': 'Beceriler',
    
    // Contact
    'contact-me': 'Benimle İletişime Geç',
    'contact-name': 'Ad Soyad',
    'contact-email': 'E-posta',
    'contact-phone': 'Telefon Numarası',
    'contact-subject': 'Konu',
    'contact-message': 'Mesajınız',
    'contact-send': 'Mesaj Gönder',
    
    // Footer
    'footer-freelance': 'Freelance işlere açık',
    'footer-cv': 'Özgeçmiş',
    'footer-copyright': '© Arda Durmaz |'
  },
  'en': {
    // Navbar
    'nav-home': 'Home',
    'nav-about': 'About',
    'nav-skills': 'Skills',
    'nav-services': 'Services',
    'nav-projects': 'Projects',
    'nav-contact': 'Contact',
    
    // Projects
    'projects-title': 'Projects',
    'projects-desc': 'These projects are some of the works I created during my software development journey. Swipe left or right to scroll.',
    'swipe-text': 'Swipe',
    
    // Home
    'home-hi': 'Hi It\'s',
    'home-im': 'I\'m a',
    'home-desc': 'I am a frontend developer creating user-friendly, modern and creative web applications. My goal is to provide people with the best experience in the digital world.',
    'home-hire': 'Hire',
    'home-contact': 'Contact',
    
    // About
    'about-me': 'About Me',
    'me': 'Me',
    'about-desc': 'As a FullStack Developer, I develop modern and dynamic web applications that prioritize user experience. My aim is to contribute to businesses and individuals achieving their goals with projects that make a difference in the digital world.',
    'about-btn': 'Read More',
    
    // Services
    'services-title': 'Services',
    'service-frontend': 'Frontend Development',
    'service-frontend-desc': 'I design modern and user-friendly interfaces. I provide fast and functional web solutions by keeping the user experience at the forefront while adding visual aesthetics to your projects.',
    'service-backend': 'Backend Development',
    'service-backend-desc': 'I develop backend solutions focused on data security, performance, and scalability. I provide robust and effective server-side infrastructures that will optimize your business processes.',
    'service-mobile': 'Mobile App Development',
    'service-mobile-desc': 'I design high-performance, intuitive, and aesthetic mobile applications for iOS and Android platforms. Let\'s bring your ideas to life in the mobile world.',
    
    // Skills
    'learning-stage': 'Currently Learning',
    'skills-title': 'Skills',
    
    // Contact
    'contact-me': 'Contact Me',
    'contact-name': 'Full Name',
    'contact-email': 'Email',
    'contact-phone': 'Phone Number',
    'contact-subject': 'Subject',
    'contact-message': 'Your Message',
    'contact-send': 'Send Message',
    
    // Footer
    'footer-freelance': 'Open to freelance projects',
    'footer-cv': 'View CV',
    'footer-copyright': '© Arda Durmaz |'
  }
};

// Şu anki dil
let currentLang = 'tr';

// Dil değiştirme fonksiyonu
function changeLanguage(lang) {
  currentLang = lang;
  
  // NOT: Logo yazısı (sol üstteki "Arda Durmaz") ve Home yazısı sabit kalacak
  
  // Navbar - Tüm navigasyon çevirisi (logoyu ve Home yazısını etkilemeden)
  // document.querySelector('.navbar a[href="#home"]').textContent = translations[lang]['nav-home']; // Home yazısı sabit kalmalı
  document.querySelector('.navbar a[href="#about"]').textContent = translations[lang]['nav-about'];
  document.querySelector('.navbar a[href="#skills"]').textContent = translations[lang]['nav-skills'];
  document.querySelector('.navbar a[href="#services"]').textContent = translations[lang]['nav-services'];
  document.querySelector('.navbar a[href="#projects"]').textContent = translations[lang]['nav-projects'];
  document.querySelector('.navbar a[href="#contact"]').textContent = translations[lang]['nav-contact'];
  
  // Home section
  document.querySelector('.home-content h1').innerHTML = `${translations[lang]['home-hi']} <span>Arda</span>`;
  document.querySelector('.home-content h3').innerHTML = `${translations[lang]['home-im']} <span>FullStack Programmer</span>`;
  document.querySelector('.home-content p').textContent = translations[lang]['home-desc'];
  document.querySelector('.btn-group a:first-child').textContent = translations[lang]['home-hire'];
  document.querySelector('.btn-group a:last-child').textContent = translations[lang]['home-contact'];
  
  // About section
  document.querySelector('.about-content h2').innerHTML = `${translations[lang]['about-me'].replace('Me', `<span>${translations[lang]['me']}</span>`)}`;
  document.querySelector('.about-content p').textContent = translations[lang]['about-desc'];
  document.querySelector('.about-content .btn').textContent = translations[lang]['about-btn'];
  
  // Skills section - "Öğrenme Aşamasında" çevirisi
  document.querySelector('#skills .heading').textContent = translations[lang]['skills-title'];
  document.querySelector('.skill-category:nth-child(3) h3').textContent = translations[lang]['learning-stage'];
  
  // Services section
  document.querySelector('.heading').textContent = translations[lang]['services-title'];
  const serviceBoxes = document.querySelectorAll('.service-box');
  serviceBoxes[0].querySelector('h4').textContent = translations[lang]['service-frontend'];
  serviceBoxes[0].querySelector('p').textContent = translations[lang]['service-frontend-desc'];
  serviceBoxes[1].querySelector('h4').textContent = translations[lang]['service-backend'];
  serviceBoxes[1].querySelector('p').textContent = translations[lang]['service-backend-desc'];
  serviceBoxes[2].querySelector('h4').textContent = translations[lang]['service-mobile'];
  serviceBoxes[2].querySelector('p').textContent = translations[lang]['service-mobile-desc'];
  
  // Projects section
  document.querySelector('#projects .heading').textContent = translations[lang]['projects-title'];
  document.querySelector('.projects-description').textContent = translations[lang]['projects-desc'];
  document.querySelector('.swipe-indicator span').textContent = translations[lang]['swipe-text'];
  
  // Contact section
  document.querySelector('#contact .heading').innerHTML = `${translations[lang]['contact-me']}`;
  document.querySelector('#name').placeholder = translations[lang]['contact-name'];
  document.querySelector('#email').placeholder = translations[lang]['contact-email'];
  document.querySelector('#phone').placeholder = translations[lang]['contact-phone'];
  document.querySelector('#subject').placeholder = translations[lang]['contact-subject'];
  document.querySelector('#message').placeholder = translations[lang]['contact-message'];
  document.querySelector('.sumbits').textContent = translations[lang]['contact-send'];
  
  // Footer - "Home" yazısı sabit kalmalı
  document.querySelector('.footer-info .available').textContent = translations[lang]['footer-freelance'];
  // document.querySelector('.footer-links a[href="#home"]').textContent = translations[lang]['nav-home']; // Home yazısı sabit kalmalı
  document.querySelector('.footer-links a[href="#about"]').textContent = translations[lang]['nav-about'];
  document.querySelector('.footer-links a[href="#skills"]').textContent = translations[lang]['nav-skills'];
  document.querySelector('.footer-links a[href="#services"]').textContent = translations[lang]['nav-services'];
  document.querySelector('.footer-links a[href="#projects"]').textContent = translations[lang]['nav-projects'];
  document.querySelector('.footer-links a[href="#contact"]').textContent = translations[lang]['nav-contact'];
  document.querySelector('.cv-download').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24" fill="currentColor"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"/></svg> ${translations[lang]['footer-cv']}`;
  document.querySelector('.copyright').innerHTML = `${translations[lang]['footer-copyright']} <span id="current-year">${new Date().getFullYear()}</span>`;
}

// Dil değiştirme butonları için event listener'lar
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('lang-tr').addEventListener('click', function() {
    this.classList.add('active');
    document.getElementById('lang-en').classList.remove('active');
    changeLanguage('tr');
  });
  
  document.getElementById('lang-en').addEventListener('click', function() {
    this.classList.add('active');
    document.getElementById('lang-tr').classList.remove('active');
    changeLanguage('en');
  });
}); 