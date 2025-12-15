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
   * Dark Mode Toggle
   */
  function initDarkMode() {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

    // Apply initial theme
    document.documentElement.setAttribute('data-theme', initialTheme);

    // Create theme toggle button if it doesn't exist
    let themeToggle = document.querySelector('.theme-toggle');
    if (!themeToggle) {
      themeToggle = document.createElement('button');
      themeToggle.className = 'theme-toggle';
      themeToggle.setAttribute('aria-label', 'Toggle dark mode');
      themeToggle.innerHTML = initialTheme === 'dark' ? '☀️' : '🌙';
      document.body.appendChild(themeToggle);
    }

    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      themeToggle.innerHTML = newTheme === 'dark' ? '☀️' : '🌙';

      // Dispatch custom event for modules that need to know about theme changes
      window.dispatchEvent(new CustomEvent('themechange', { detail: { theme: newTheme } }));
    });

    // Listen for system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
      if (!localStorage.getItem('theme')) {
        const newTheme = e.matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        themeToggle.innerHTML = newTheme === 'dark' ? '☀️' : '🌙';
      }
    });
  }

  /**
   * Performance Monitoring
   */
  function initPerformanceMonitoring() {
    if ('PerformanceObserver' in window) {
      // Monitor Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
      });

      try {
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        // Silently fail if not supported
      }

      // Monitor First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          console.log('FID:', entry.processingStart - entry.startTime);
        });
      });

      try {
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (e) {
        // Silently fail if not supported
      }
    }
  }

  /**
   * Utility: Debounce Function
   */
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  /**
   * Utility: Throttle Function
   */
  function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  /**
   * Utility: Check if Element is in Viewport
   */
  function isInViewport(element, offset = 0) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 - offset &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  /**
   * Utility: Get CSS Variable Value
   */
  function getCSSVariable(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }

  /**
   * Utility: Set CSS Variable Value
   */
  function setCSSVariable(name, value) {
    document.documentElement.style.setProperty(name, value);
  }

  /**
   * Cookie Utilities
   */
  const Cookie = {
    set: function(name, value, days = 365) {
      const expires = new Date();
      expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
      document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
    },

    get: function(name) {
      const nameEQ = name + "=";
      const ca = document.cookie.split(';');
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    },

    delete: function(name) {
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/`;
    }
  };

  /**
   * LocalStorage Utilities with JSON support
   */
  const Storage = {
    set: function(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
      } catch (e) {
        console.error('LocalStorage error:', e);
        return false;
      }
    },

    get: function(key, defaultValue = null) {
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
      } catch (e) {
        console.error('LocalStorage error:', e);
        return defaultValue;
      }
    },

    remove: function(key) {
      try {
        localStorage.removeItem(key);
        return true;
      } catch (e) {
        console.error('LocalStorage error:', e);
        return false;
      }
    },

    clear: function() {
      try {
        localStorage.clear();
        return true;
      } catch (e) {
        console.error('LocalStorage error:', e);
        return false;
      }
    }
  };

  /**
   * Scroll Progress Indicator
   */
  function initScrollProgress() {
    let progressBar = document.querySelector('.scroll-progress');

    if (!progressBar) {
      progressBar = document.createElement('div');
      progressBar.className = 'scroll-progress';
      progressBar.style.cssText = 'position: fixed; top: 0; left: 0; height: 3px; background: var(--color-primary); width: 0%; z-index: 9999; transition: width 0.1s ease;';
      document.body.appendChild(progressBar);
    }

    const updateProgress = throttle(function() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / scrollHeight) * 100;
      progressBar.style.width = scrollPercent + '%';
    }, 50);

    window.addEventListener('scroll', updateProgress);
    updateProgress();
  }

  /**
   * Modal Trap Focus (Accessibility)
   */
  function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    element.addEventListener('keydown', function(e) {
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        } else if (!e.shiftKey && document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }

      if (e.key === 'Escape') {
        const closeBtn = element.querySelector('[data-dismiss="modal"], .modal-close');
        if (closeBtn) closeBtn.click();
      }
    });
  }

  /**
   * Image Preloader
   */
  function preloadImages(urls, callback) {
    let loadedCount = 0;
    const totalImages = urls.length;

    if (totalImages === 0 && callback) {
      callback();
      return;
    }

    urls.forEach(url => {
      const img = new Image();
      img.onload = img.onerror = () => {
        loadedCount++;
        if (loadedCount === totalImages && callback) {
          callback();
        }
      };
      img.src = url;
    });
  }

  /**
   * Copy to Clipboard
   */
  function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    } else {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        document.execCommand('copy');
        textArea.remove();
        return Promise.resolve();
      } catch (err) {
        textArea.remove();
        return Promise.reject(err);
      }
    }
  }

  /**
   * Get Query Parameters
   */
  function getQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const regex = /([^&=]+)=([^&]*)/g;
    let m;

    while (m = regex.exec(queryString)) {
      params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }

    return params;
  }

  /**
   * Detect Mobile Device
   */
  function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  /**
   * Detect Touch Device
   */
  function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }

  /**
   * Format Number with Commas
   */
  function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  /**
   * Truncate Text
   */
  function truncateText(text, maxLength, suffix = '...') {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength - suffix.length) + suffix;
  }

  /**
   * Generate Random ID
   */
  function generateId(prefix = 'id') {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * External Link Handler (open in new tab with security)
   */
  function initExternalLinks() {
    const externalLinks = document.querySelectorAll('a[href^="http"]:not([href*="' + window.location.hostname + '"])');

    externalLinks.forEach(link => {
      if (!link.hasAttribute('target')) {
        link.setAttribute('target', '_blank');
      }
      if (!link.hasAttribute('rel')) {
        link.setAttribute('rel', 'noopener noreferrer');
      }
    });
  }

  /**
   * Parallax Effect Helper
   */
  function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');

    if (parallaxElements.length === 0) return;

    const handleParallax = throttle(function() {
      const scrolled = window.pageYOffset;

      parallaxElements.forEach(element => {
        const speed = parseFloat(element.dataset.parallax) || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translate3d(0, ${yPos}px, 0)`;
      });
    }, 10);

    window.addEventListener('scroll', handleParallax);
    handleParallax();
  }

  /**
   * Sticky Sidebar
   */
  function initStickySidebar() {
    const sidebars = document.querySelectorAll('[data-sticky-sidebar]');

    sidebars.forEach(sidebar => {
      const offsetTop = parseInt(sidebar.dataset.stickyOffset) || 100;

      window.addEventListener('scroll', throttle(function() {
        const scrollY = window.pageYOffset;

        if (scrollY > offsetTop) {
          sidebar.style.position = 'sticky';
          sidebar.style.top = offsetTop + 'px';
        } else {
          sidebar.style.position = 'static';
        }
      }, 50));
    });
  }

  /**
   * Read Time Calculator
   */
  function calculateReadTime(text, wordsPerMinute = 200) {
    const wordCount = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return minutes;
  }

  /**
   * Auto-display read time for blog posts
   */
  function initReadTime() {
    const contentElement = document.querySelector('[data-read-time-target]');
    const displayElement = document.querySelector('[data-read-time-display]');

    if (contentElement && displayElement) {
      const text = contentElement.textContent;
      const minutes = calculateReadTime(text);
      displayElement.textContent = `${minutes} min read`;
    }
  }

  /**
   * Notification Toast System
   */
  const Toast = {
    show: function(message, type = 'info', duration = 3000) {
      const toast = document.createElement('div');
      toast.className = `toast toast-${type}`;
      toast.textContent = message;
      toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: var(--color-${type === 'success' ? 'success' : type === 'error' ? 'danger' : type === 'warning' ? 'warning' : 'info'});
        color: white;
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-xl);
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
        max-width: 350px;
        word-wrap: break-word;
      `;

      document.body.appendChild(toast);

      setTimeout(() => {
        toast.style.animation = 'slideInRight 0.3s ease-out reverse';
        setTimeout(() => toast.remove(), 300);
      }, duration);
    },

    success: function(message, duration) {
      this.show(message, 'success', duration);
    },

    error: function(message, duration) {
      this.show(message, 'error', duration);
    },

    warning: function(message, duration) {
      this.show(message, 'warning', duration);
    },

    info: function(message, duration) {
      this.show(message, 'info', duration);
    }
  };

  /**
   * Lazy Load Background Images
   */
  function initLazyBackgrounds() {
    if ('IntersectionObserver' in window) {
      const lazyBackgrounds = document.querySelectorAll('[data-bg]');

      const bgObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target;
            element.style.backgroundImage = `url('${element.dataset.bg}')`;
            element.removeAttribute('data-bg');
            bgObserver.unobserve(element);
          }
        });
      });

      lazyBackgrounds.forEach(bg => bgObserver.observe(bg));
    }
  }

  /**
   * Scroll Reveal Animation
   */
  function initScrollReveal() {
    if ('IntersectionObserver' in window) {
      const revealElements = document.querySelectorAll('[data-reveal]');

      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.revealDelay || 0;
            setTimeout(() => {
              entry.target.classList.add('revealed');
            }, parseInt(delay));
            revealObserver.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        revealObserver.observe(el);
      });

      // Add CSS for revealed state
      const style = document.createElement('style');
      style.textContent = '.revealed { opacity: 1 !important; transform: translateY(0) !important; }';
      document.head.appendChild(style);
    }
  }

  /**
   * Video Background Handler
   */
  function initVideoBackgrounds() {
    const videoBackgrounds = document.querySelectorAll('[data-video-bg]');

    videoBackgrounds.forEach(container => {
      const videoUrl = container.dataset.videoBg;
      const video = document.createElement('video');

      video.setAttribute('autoplay', '');
      video.setAttribute('muted', '');
      video.setAttribute('loop', '');
      video.setAttribute('playsinline', '');
      video.style.cssText = 'position: absolute; top: 50%; left: 50%; min-width: 100%; min-height: 100%; width: auto; height: auto; transform: translate(-50%, -50%); object-fit: cover; z-index: -1;';

      video.innerHTML = `<source src="${videoUrl}" type="video/mp4">`;

      container.style.position = 'relative';
      container.style.overflow = 'hidden';
      container.insertBefore(video, container.firstChild);
    });
  }

  /**
   * Animated Counter on Scroll
   */
  function initAnimatedCounters() {
    const counters = document.querySelectorAll('[data-counter]');

    if ('IntersectionObserver' in window) {
      const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseFloat(counter.dataset.counter) || 0;
            const duration = parseInt(counter.dataset.duration) || 2000;
            const isDecimal = target % 1 !== 0;

            animateValue(counter, 0, target, duration, isDecimal);
            counterObserver.unobserve(counter);
          }
        });
      }, { threshold: 0.5 });

      counters.forEach(counter => counterObserver.observe(counter));
    }

    function animateValue(element, start, end, duration, isDecimal = false) {
      const startTime = Date.now();
      const range = end - start;

      function update() {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function
        const easeProgress = progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        const current = start + (range * easeProgress);
        element.textContent = isDecimal ? current.toFixed(1) : Math.floor(current);

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          element.textContent = isDecimal ? end.toFixed(1) : end;
        }
      }

      update();
    }
  }

  /**
   * Form Auto-save to LocalStorage
   */
  function initFormAutoSave() {
    const forms = document.querySelectorAll('[data-autosave]');

    forms.forEach(form => {
      const formId = form.id || generateId('form');
      const storageKey = `form-autosave-${formId}`;

      // Load saved data
      const savedData = Storage.get(storageKey);
      if (savedData) {
        Object.keys(savedData).forEach(name => {
          const field = form.querySelector(`[name="${name}"]`);
          if (field) field.value = savedData[name];
        });
      }

      // Save on input
      const saveForm = debounce(function() {
        const formData = {};
        const fields = form.querySelectorAll('input, textarea, select');

        fields.forEach(field => {
          if (field.name) {
            formData[field.name] = field.value;
          }
        });

        Storage.set(storageKey, formData);
      }, 500);

      form.addEventListener('input', saveForm);

      // Clear on submit
      form.addEventListener('submit', function() {
        Storage.remove(storageKey);
      });
    });
  }

  /**
   * Keyboard Shortcuts Handler
   */
  function initKeyboardShortcuts() {
    const shortcuts = {
      // Ctrl/Cmd + K for search
      'ctrl+k': function() {
        const searchInput = document.querySelector('[data-search-input]');
        if (searchInput) {
          searchInput.focus();
        }
      },
      // Escape to close modals
      'esc': function() {
        const activeModal = document.querySelector('.modal.active, .modal.show');
        if (activeModal) {
          const closeBtn = activeModal.querySelector('[data-dismiss="modal"]');
          if (closeBtn) closeBtn.click();
        }
      }
    };

    document.addEventListener('keydown', function(e) {
      const key = e.key.toLowerCase();
      const ctrl = e.ctrlKey || e.metaKey;

      if (ctrl && key === 'k' && shortcuts['ctrl+k']) {
        e.preventDefault();
        shortcuts['ctrl+k']();
      }

      if (key === 'escape' && shortcuts['esc']) {
        shortcuts['esc']();
      }
    });
  }

  /**
   * Initialize all functions on DOM ready
   */
  function init() {
    initMobileMenu();
    initSmoothScroll();
    initLazyLoading();
    initLazyBackgrounds();
    initScrollAnimations();
    initScrollReveal();
    initAccordions();
    initTabs();
    initFormValidation();
    initFormAutoSave();
    initBackToTop();
    initStickyHeader();
    initStickySidebar();
    initDarkMode();
    initScrollProgress();
    initExternalLinks();
    initParallax();
    initVideoBackgrounds();
    initAnimatedCounters();
    initReadTime();
    initKeyboardShortcuts();
    initPerformanceMonitoring();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose public API
  window.AdvancedProTheme = {
    // Core
    init: init,
    version: '2.0.0',

    // Features
    initMobileMenu: initMobileMenu,
    initSmoothScroll: initSmoothScroll,
    initLazyLoading: initLazyLoading,
    initScrollAnimations: initScrollAnimations,
    initAccordions: initAccordions,
    initTabs: initTabs,
    initFormValidation: initFormValidation,
    initDarkMode: initDarkMode,
    initScrollProgress: initScrollProgress,
    initParallax: initParallax,

    // Utilities
    debounce: debounce,
    throttle: throttle,
    isInViewport: isInViewport,
    getCSSVariable: getCSSVariable,
    setCSSVariable: setCSSVariable,
    Cookie: Cookie,
    Storage: Storage,
    Toast: Toast,
    copyToClipboard: copyToClipboard,
    getQueryParams: getQueryParams,
    isMobile: isMobile,
    isTouchDevice: isTouchDevice,
    formatNumber: formatNumber,
    truncateText: truncateText,
    generateId: generateId,
    preloadImages: preloadImages,
    trapFocus: trapFocus,
    calculateReadTime: calculateReadTime
  };

})();
