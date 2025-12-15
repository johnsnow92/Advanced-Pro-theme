/**
 * Advanced Pro Theme - Main JavaScript
 * Core functionality for the theme
 */

(function() {
  'use strict';

  /**
   * Mobile Menu Toggle
   */
  function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.body;

    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener('click', function() {
        const isOpen = mobileMenu.classList.contains('is-open');

        if (isOpen) {
          mobileMenu.classList.remove('is-open');
          menuToggle.setAttribute('aria-expanded', 'false');
          body.style.overflow = '';
        } else {
          mobileMenu.classList.add('is-open');
          menuToggle.setAttribute('aria-expanded', 'true');
          body.style.overflow = 'hidden';
        }
      });

      // Close menu when clicking outside
      document.addEventListener('click', function(event) {
        if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
          if (mobileMenu.classList.contains('is-open')) {
            mobileMenu.classList.remove('is-open');
            menuToggle.setAttribute('aria-expanded', 'false');
            body.style.overflow = '';
          }
        }
      });
    }
  }

  /**
   * Smooth Scroll for Anchor Links
   */
  function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        if (href === '#') {
          return;
        }

        const target = document.querySelector(href);

        if (target) {
          e.preventDefault();
          const offsetTop = target.offsetTop - 80; // Account for fixed header

          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  /**
   * Lazy Load Images
   */
  function initLazyLoading() {
    if ('IntersectionObserver' in window) {
      const lazyImages = document.querySelectorAll('img[data-src]');

      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        });
      });

      lazyImages.forEach(img => imageObserver.observe(img));
    }
  }

  /**
   * Animation on Scroll
   */
  function initScrollAnimations() {
    if ('IntersectionObserver' in window) {
      const animatedElements = document.querySelectorAll('[data-aos]');

      const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target;
            const animation = element.dataset.aos;
            element.classList.add(animation);
            animationObserver.unobserve(element);
          }
        });
      }, {
        threshold: 0.1
      });

      animatedElements.forEach(el => animationObserver.observe(el));
    }
  }

  /**
   * Accordion Functionality
   */
  function initAccordions() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
      header.addEventListener('click', function() {
        const accordionItem = this.closest('.accordion-item');
        const accordionBody = accordionItem.querySelector('.accordion-body');
        const isOpen = accordionItem.classList.contains('is-open');

        // Close all other accordions in the same group
        const accordion = accordionItem.closest('.accordion');
        if (accordion) {
          const allItems = accordion.querySelectorAll('.accordion-item');
          allItems.forEach(item => {
            if (item !== accordionItem) {
              item.classList.remove('is-open');
              const otherBody = item.querySelector('.accordion-body');
              if (otherBody) {
                otherBody.style.maxHeight = null;
              }
            }
          });
        }

        // Toggle current accordion
        if (isOpen) {
          accordionItem.classList.remove('is-open');
          accordionBody.style.maxHeight = null;
        } else {
          accordionItem.classList.add('is-open');
          accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
        }
      });
    });
  }

  /**
   * Tab Functionality
   */
  function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');

    tabButtons.forEach(button => {
      button.addEventListener('click', function() {
        const tabGroup = this.closest('.tabs');
        const tabId = this.dataset.tab;

        // Remove active class from all tabs and panels
        tabGroup.querySelectorAll('.tab-button').forEach(btn => {
          btn.classList.remove('active');
          btn.setAttribute('aria-selected', 'false');
        });

        tabGroup.querySelectorAll('.tab-panel').forEach(panel => {
          panel.classList.remove('active');
          panel.setAttribute('aria-hidden', 'true');
        });

        // Add active class to clicked tab and corresponding panel
        this.classList.add('active');
        this.setAttribute('aria-selected', 'true');

        const activePanel = tabGroup.querySelector(`#${tabId}`);
        if (activePanel) {
          activePanel.classList.add('active');
          activePanel.setAttribute('aria-hidden', 'false');
        }
      });
    });
  }

  /**
   * Form Validation Enhancement
   */
  function initFormValidation() {
    const forms = document.querySelectorAll('form[data-validate]');

    forms.forEach(form => {
      form.addEventListener('submit', function(e) {
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');

        requiredFields.forEach(field => {
          if (!field.value.trim()) {
            isValid = false;
            field.classList.add('is-invalid');

            // Show error message
            let errorMsg = field.parentElement.querySelector('.error-message');
            if (!errorMsg) {
              errorMsg = document.createElement('span');
              errorMsg.className = 'error-message';
              errorMsg.textContent = 'This field is required';
              errorMsg.style.color = 'red';
              errorMsg.style.fontSize = '14px';
              errorMsg.style.marginTop = '4px';
              errorMsg.style.display = 'block';
              field.parentElement.appendChild(errorMsg);
            }
          } else {
            field.classList.remove('is-invalid');
            const errorMsg = field.parentElement.querySelector('.error-message');
            if (errorMsg) {
              errorMsg.remove();
            }
          }
        });

        if (!isValid) {
          e.preventDefault();
        }
      });

      // Remove error state on input
      const requiredFields = form.querySelectorAll('[required]');
      requiredFields.forEach(field => {
        field.addEventListener('input', function() {
          if (this.value.trim()) {
            this.classList.remove('is-invalid');
            const errorMsg = this.parentElement.querySelector('.error-message');
            if (errorMsg) {
              errorMsg.remove();
            }
          }
        });
      });
    });
  }

  /**
   * Back to Top Button
   */
  function initBackToTop() {
    const backToTop = document.querySelector('.back-to-top');

    if (backToTop) {
      window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
          backToTop.classList.add('is-visible');
        } else {
          backToTop.classList.remove('is-visible');
        }
      });

      backToTop.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  }

  /**
   * Sticky Header
   */
  function initStickyHeader() {
    const header = document.querySelector('.site-header');

    if (header) {
      let lastScroll = 0;

      window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
          header.classList.add('is-scrolled');

          // Hide header on scroll down, show on scroll up
          if (currentScroll > lastScroll) {
            header.classList.add('is-hidden');
          } else {
            header.classList.remove('is-hidden');
          }
        } else {
          header.classList.remove('is-scrolled', 'is-hidden');
        }

        lastScroll = currentScroll;
      });
    }
  }

  /**
   * Initialize all functions on DOM ready
   */
  function init() {
    initMobileMenu();
    initSmoothScroll();
    initLazyLoading();
    initScrollAnimations();
    initAccordions();
    initTabs();
    initFormValidation();
    initBackToTop();
    initStickyHeader();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose public API
  window.AdvancedProTheme = {
    init: init,
    initMobileMenu: initMobileMenu,
    initSmoothScroll: initSmoothScroll,
    initLazyLoading: initLazyLoading,
    initScrollAnimations: initScrollAnimations,
    initAccordions: initAccordions,
    initTabs: initTabs,
    initFormValidation: initFormValidation
  };

})();
