/**
 * Advanced Pro Theme - GSAP Animations
 * Advanced scroll animations and interactive effects
 */

(function() {
  'use strict';

  // Wait for GSAP to load
  function initGSAP() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      setTimeout(initGSAP, 100);
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    /**
     * Fade In on Scroll
     */
    function initFadeInScroll() {
      gsap.utils.toArray('[data-gsap-fade]').forEach(function(element) {
        gsap.from(element, {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        });
      });
    }

    /**
     * Stagger Animation
     */
    function initStaggerAnimation() {
      gsap.utils.toArray('[data-gsap-stagger]').forEach(function(container) {
        const items = container.querySelectorAll('[data-stagger-item]');
        gsap.from(items, {
          opacity: 0,
          y: 30,
          stagger: 0.1,
          duration: 0.8,
          scrollTrigger: {
            trigger: container,
            start: 'top 75%'
          }
        });
      });
    }

    /**
     * Parallax Sections
     */
    function initParallaxGSAP() {
      gsap.utils.toArray('[data-gsap-parallax]').forEach(function(element) {
        const speed = parseFloat(element.dataset.gsapParallax) || 0.5;
        gsap.to(element, {
          y: () => element.offsetHeight * speed,
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      });
    }

    /**
     * Smooth Scroll
     */
    function initSmoothScroll() {
      if (window.innerWidth > 768) {
        gsap.to(document.body, {
          scrollBehavior: 'auto'
        });
      }
    }

    /**
     * Reveal Text
     */
    function initTextReveal() {
      gsap.utils.toArray('[data-gsap-text-reveal]').forEach(function(element) {
        const text = element.textContent;
        element.innerHTML = '<span style="display: inline-block;">' +
          text.split('').map(char => `<span style="display: inline-block; opacity: 0;">${char === ' ' ? '&nbsp;' : char}</span>`).join('') +
          '</span>';

        const chars = element.querySelectorAll('span span');
        gsap.to(chars, {
          opacity: 1,
          stagger: 0.03,
          scrollTrigger: {
            trigger: element,
            start: 'top 80%'
          }
        });
      });
    }

    /**
     * Counter Animation
     */
    function initGSAPCounters() {
      gsap.utils.toArray('[data-gsap-counter]').forEach(function(element) {
        const target = parseInt(element.dataset.gsapCounter) || 0;
        const obj = { value: 0 };

        gsap.to(obj, {
          value: target,
          duration: 2,
          ease: 'power2.out',
          onUpdate: function() {
            element.textContent = Math.floor(obj.value).toLocaleString();
          },
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            once: true
          }
        });
      });
    }

    /**
     * Pin Sections
     */
    function initPinSections() {
      gsap.utils.toArray('[data-gsap-pin]').forEach(function(element) {
        ScrollTrigger.create({
          trigger: element,
          start: 'top top',
          end: 'bottom bottom',
          pin: true,
          pinSpacing: false
        });
      });
    }

    /**
     * Horizontal Scroll
     */
    function initHorizontalScroll() {
      gsap.utils.toArray('[data-gsap-horizontal]').forEach(function(container) {
        const sections = container.querySelectorAll('[data-horizontal-section]');

        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            pin: true,
            scrub: 1,
            end: () => '+=' + container.offsetWidth
          }
        });
      });
    }

    /**
     * Scale on Scroll
     */
    function initScaleScroll() {
      gsap.utils.toArray('[data-gsap-scale]').forEach(function(element) {
        gsap.from(element, {
          scale: 0.8,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        });
      });
    }

    // Initialize all GSAP animations
    initFadeInScroll();
    initStaggerAnimation();
    initParallaxGSAP();
    initSmoothScroll();
    initTextReveal();
    initGSAPCounters();
    initPinSections();
    initHorizontalScroll();
    initScaleScroll();

    // Refresh ScrollTrigger on window resize
    window.addEventListener('resize', function() {
      ScrollTrigger.refresh();
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGSAP);
  } else {
    initGSAP();
  }

  // Expose GSAP utilities
  window.AdvancedProTheme = window.AdvancedProTheme || {};
  window.AdvancedProTheme.GSAP = {
    refresh: function() {
      if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.refresh();
      }
    }
  };

})();
