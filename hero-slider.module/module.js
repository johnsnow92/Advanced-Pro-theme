(function() {
  function initHeroSlider(sliderElement) {
    const track = sliderElement.querySelector('.hero-slider__track');
    const slides = sliderElement.querySelectorAll('.hero-slider__slide');
    const prevBtn = sliderElement.querySelector('.hero-slider__nav--prev');
    const nextBtn = sliderElement.querySelector('.hero-slider__nav--next');
    const dots = sliderElement.querySelectorAll('.hero-slider__dot');
    
    let currentSlide = 0;
    const slideCount = slides.length;
    const autoplay = sliderElement.dataset.autoplay === 'true';
    const autoplaySpeed = parseInt(sliderElement.dataset.speed) || 5000;
    let autoplayInterval;
    
    function goToSlide(index) {
      currentSlide = (index + slideCount) % slideCount;
      const offset = currentSlide * 100;
      track.style.transform = 'translateX(-' + offset + '%)';
      
      dots.forEach(function(dot, i) {
        dot.classList.toggle('active', i === currentSlide);
      });
    }
    
    function nextSlide() {
      goToSlide(currentSlide + 1);
    }
    
    function prevSlide() {
      goToSlide(currentSlide - 1);
    }
    
    function startAutoplay() {
      if (autoplay && slideCount > 1) {
        autoplayInterval = setInterval(nextSlide, autoplaySpeed);
      }
    }
    
    function stopAutoplay() {
      clearInterval(autoplayInterval);
    }
    
    if (prevBtn) prevBtn.addEventListener('click', function() {
      stopAutoplay();
      prevSlide();
      startAutoplay();
    });
    
    if (nextBtn) nextBtn.addEventListener('click', function() {
      stopAutoplay();
      nextSlide();
      startAutoplay();
    });
    
    dots.forEach(function(dot, index) {
      dot.addEventListener('click', function() {
        stopAutoplay();
        goToSlide(index);
        startAutoplay();
      });
    });
    
    sliderElement.addEventListener('mouseenter', stopAutoplay);
    sliderElement.addEventListener('mouseleave', startAutoplay);
    
    startAutoplay();
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.hero-slider').forEach(initHeroSlider);
  });
})();
