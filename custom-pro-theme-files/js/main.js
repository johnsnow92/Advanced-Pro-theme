/**
 * Custom Pro Theme - Main JavaScript
 */

(function() {
  'use strict';

  // Mobile Menu Toggle
  function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
      });
    }
  }

  // Sticky Header
  function initStickyHeader() {
    const header = document.querySelector('.site-header');
    const stickyEnabled = header && header.dataset.sticky === 'true';

    if (!stickyEnabled || !header) return;

    let lastScroll = 0;

    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 100) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }

      lastScroll = currentScroll;
    });
  }

  // Smooth Scroll
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // Lazy Load Images
  function initLazyLoad() {
    if ('IntersectionObserver' in window) {
      const images = document.querySelectorAll('img[data-src]');

      const imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(function(img) {
        imageObserver.observe(img);
      });
    }
  }

  // Accordion Functionality
  function initAccordions() {
    const accordions = document.querySelectorAll('.accordion-item');

    accordions.forEach(function(item) {
      const trigger = item.querySelector('.accordion-trigger');
      const content = item.querySelector('.accordion-content');

      if (trigger && content) {
        trigger.addEventListener('click', function() {
          const isActive = item.classList.contains('active');

          // Close all accordions
          accordions.forEach(function(acc) {
            acc.classList.remove('active');
            acc.querySelector('.accordion-content').style.maxHeight = null;
          });

          // Open clicked accordion if it wasn't active
          if (!isActive) {
            item.classList.add('active');
            content.style.maxHeight = content.scrollHeight + 'px';
          }
        });
      }
    });
  }

  // Tab Functionality
  function initTabs() {
    const tabContainers = document.querySelectorAll('.tabs-container');

    tabContainers.forEach(function(container) {
      const tabButtons = container.querySelectorAll('.tab-button');
      const tabPanels = container.querySelectorAll('.tab-panel');

      tabButtons.forEach(function(button, index) {
        button.addEventListener('click', function() {
          // Remove active class from all buttons and panels
          tabButtons.forEach(btn => btn.classList.remove('active'));
          tabPanels.forEach(panel => panel.classList.remove('active'));

          // Add active class to clicked button and corresponding panel
          button.classList.add('active');
          tabPanels[index].classList.add('active');
        });
      });
    });
  }

  // Initialize all functions on DOM ready
  function init() {
    initMobileMenu();
    initStickyHeader();
    initSmoothScroll();
    initLazyLoad();
    initAccordions();
    initTabs();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
