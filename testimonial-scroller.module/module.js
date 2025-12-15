(function() {
  'use strict';

  // Initialize all testimonial scrollers on the page
  function initTestimonialScrollers() {
    const scrollers = document.querySelectorAll('.testimonial-scroller');

    scrollers.forEach(scroller => {
      new TestimonialScroller(scroller);
    });
  }

  class TestimonialScroller {
    constructor(element) {
      this.scroller = element;
      this.track = this.scroller.querySelector('.testimonial-track');
      this.cards = this.scroller.querySelectorAll('.testimonial-card');
      this.prevBtn = this.scroller.querySelector('.testimonial-nav-prev');
      this.nextBtn = this.scroller.querySelector('.testimonial-nav-next');
      this.dotsContainer = this.scroller.parentElement.querySelector('.testimonial-dots');

      this.currentIndex = 0;
      this.totalCards = this.cards.length;
      this.autoScrollInterval = null;

      // Get settings from data attributes
      this.autoScroll = this.scroller.dataset.autoScroll === 'true';
      this.scrollInterval = parseInt(this.scroller.dataset.scrollInterval) || 5000;

      this.init();
    }

    init() {
      if (this.totalCards === 0) return;

      // Create dots
      this.createDots();

      // Add event listeners
      if (this.prevBtn) {
        this.prevBtn.addEventListener('click', () => this.prev());
      }

      if (this.nextBtn) {
        this.nextBtn.addEventListener('click', () => this.next());
      }

      // Keyboard navigation
      this.scroller.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
          this.prev();
        } else if (e.key === 'ArrowRight') {
          this.next();
        }
      });

      // Pause auto-scroll on hover
      this.scroller.addEventListener('mouseenter', () => {
        this.stopAutoScroll();
      });

      this.scroller.addEventListener('mouseleave', () => {
        if (this.autoScroll) {
          this.startAutoScroll();
        }
      });

      // Touch/swipe support
      this.addSwipeSupport();

      // Start auto-scroll if enabled
      if (this.autoScroll) {
        this.startAutoScroll();
      }

      // Update on resize
      let resizeTimer;
      window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          this.updatePosition();
        }, 250);
      });

      // Initial update
      this.updatePosition();
      this.updateDots();
    }

    createDots() {
      if (!this.dotsContainer) return;

      this.dotsContainer.innerHTML = '';

      for (let i = 0; i < this.totalCards; i++) {
        const dot = document.createElement('button');
        dot.className = 'testimonial-dot';
        dot.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
        dot.addEventListener('click', () => this.goTo(i));
        this.dotsContainer.appendChild(dot);
      }

      this.dots = this.dotsContainer.querySelectorAll('.testimonial-dot');
    }

    updateDots() {
      if (!this.dots) return;

      this.dots.forEach((dot, index) => {
        if (index === this.currentIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }

    updatePosition() {
      const offset = -this.currentIndex * 100;
      this.track.style.transform = `translateX(${offset}%)`;
    }

    next() {
      this.currentIndex = (this.currentIndex + 1) % this.totalCards;
      this.updatePosition();
      this.updateDots();
      this.resetAutoScroll();
    }

    prev() {
      this.currentIndex = (this.currentIndex - 1 + this.totalCards) % this.totalCards;
      this.updatePosition();
      this.updateDots();
      this.resetAutoScroll();
    }

    goTo(index) {
      this.currentIndex = index;
      this.updatePosition();
      this.updateDots();
      this.resetAutoScroll();
    }

    startAutoScroll() {
      if (this.totalCards <= 1) return;

      this.stopAutoScroll();
      this.autoScrollInterval = setInterval(() => {
        this.next();
      }, this.scrollInterval);
    }

    stopAutoScroll() {
      if (this.autoScrollInterval) {
        clearInterval(this.autoScrollInterval);
        this.autoScrollInterval = null;
      }
    }

    resetAutoScroll() {
      if (this.autoScroll) {
        this.stopAutoScroll();
        this.startAutoScroll();
      }
    }

    addSwipeSupport() {
      let startX = 0;
      let startY = 0;
      let distX = 0;
      let distY = 0;
      let threshold = 50;
      let allowSwipe = true;

      this.scroller.addEventListener('touchstart', (e) => {
        const touch = e.touches[0];
        startX = touch.clientX;
        startY = touch.clientY;
        allowSwipe = true;
      }, { passive: true });

      this.scroller.addEventListener('touchmove', (e) => {
        if (!allowSwipe) return;

        const touch = e.touches[0];
        distX = touch.clientX - startX;
        distY = touch.clientY - startY;

        // If user is scrolling vertically, don't swipe
        if (Math.abs(distY) > Math.abs(distX)) {
          allowSwipe = false;
        }
      }, { passive: true });

      this.scroller.addEventListener('touchend', () => {
        if (!allowSwipe) return;

        if (Math.abs(distX) > threshold) {
          if (distX > 0) {
            this.prev();
          } else {
            this.next();
          }
        }

        distX = 0;
        distY = 0;
      });
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTestimonialScrollers);
  } else {
    initTestimonialScrollers();
  }
})();
