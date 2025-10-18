function toggleMobileMenu() {
      const mobileMenu = document.getElementById('mobileMenu');
      const hamburger = document.querySelector('.hamburger');
      const header = document.querySelector('.header');
      
      mobileMenu.classList.toggle('active');
      hamburger.classList.toggle('active');
      header.classList.toggle('mobile-menu-active');
    }
    
    function closeMobileMenu() {
      const mobileMenu = document.getElementById('mobileMenu');
      const hamburger = document.querySelector('.hamburger');
      const header = document.querySelector('.header');
      
      mobileMenu.classList.remove('active');
      hamburger.classList.remove('active');
      header.classList.remove('mobile-menu-active');
    }
    
    // Fechar menu ao clicar fora dele
    document.addEventListener('click', function(event) {
      const mobileMenu = document.getElementById('mobileMenu');
      const hamburger = document.querySelector('.hamburger');
      const header = document.querySelector('.header');
      
      if (!header.contains(event.target)) {
        mobileMenu.classList.remove('active');
        hamburger.classList.remove('active');
        header.classList.remove('mobile-menu-active');
      }
    });