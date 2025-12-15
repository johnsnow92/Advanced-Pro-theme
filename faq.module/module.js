/**
 * FAQ Accordion Module
 * Handles expand/collapse functionality with smooth animations
 */

(function() {
  'use strict';

  /**
   * Initialize FAQ accordion
   */
  function initFAQ() {
    const faqModules = document.querySelectorAll('.faq-module');

    faqModules.forEach(function(module) {
      const allowMultiple = module.dataset.allowMultiple === 'true';
      const triggers = module.querySelectorAll('[data-faq-trigger]');

      triggers.forEach(function(trigger) {
        trigger.addEventListener('click', function() {
          toggleFAQItem(trigger, module, allowMultiple);
        });

        // Keyboard accessibility
        trigger.addEventListener('keydown', function(e) {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleFAQItem(trigger, module, allowMultiple);
          }
        });
      });

      // Set initial max-height for open items
      const activeItems = module.querySelectorAll('.faq-item--active');
      activeItems.forEach(function(item) {
        const content = item.querySelector('[data-faq-content]');
        if (content) {
          setMaxHeight(content);
        }
      });
    });
  }

  /**
   * Toggle FAQ item open/closed
   * @param {HTMLElement} trigger - The clicked button
   * @param {HTMLElement} module - The FAQ module container
   * @param {boolean} allowMultiple - Whether multiple items can be open
   */
  function toggleFAQItem(trigger, module, allowMultiple) {
    const faqItem = trigger.closest('[data-faq-item]');
    const content = faqItem.querySelector('[data-faq-content]');
    const isActive = faqItem.classList.contains('faq-item--active');

    // Close other items if allowMultiple is false
    if (!allowMultiple && !isActive) {
      const allItems = module.querySelectorAll('[data-faq-item]');
      allItems.forEach(function(item) {
        if (item !== faqItem) {
          closeFAQItem(item);
        }
      });
    }

    // Toggle current item
    if (isActive) {
      closeFAQItem(faqItem);
    } else {
      openFAQItem(faqItem);
    }
  }

  /**
   * Open an FAQ item
   * @param {HTMLElement} faqItem - The FAQ item to open
   */
  function openFAQItem(faqItem) {
    const trigger = faqItem.querySelector('[data-faq-trigger]');
    const content = faqItem.querySelector('[data-faq-content]');

    faqItem.classList.add('faq-item--active');
    trigger.setAttribute('aria-expanded', 'true');
    content.setAttribute('aria-hidden', 'false');

    // Set max-height for smooth animation
    setMaxHeight(content);
  }

  /**
   * Close an FAQ item
   * @param {HTMLElement} faqItem - The FAQ item to close
   */
  function closeFAQItem(faqItem) {
    const trigger = faqItem.querySelector('[data-faq-trigger]');
    const content = faqItem.querySelector('[data-faq-content]');

    faqItem.classList.remove('faq-item--active');
    trigger.setAttribute('aria-expanded', 'false');
    content.setAttribute('aria-hidden', 'true');
    content.style.maxHeight = '0';
  }

  /**
   * Set max-height based on content height for smooth animation
   * @param {HTMLElement} content - The content wrapper element
   */
  function setMaxHeight(content) {
    // Get the actual content height
    const contentHeight = content.scrollHeight;
    content.style.maxHeight = contentHeight + 'px';
  }

  /**
   * Recalculate max-heights on window resize
   */
  function handleResize() {
    const activeContents = document.querySelectorAll('.faq-item--active [data-faq-content]');
    activeContents.forEach(function(content) {
      setMaxHeight(content);
    });
  }

  // Debounce function for resize events
  function debounce(func, wait) {
    var timeout;
    return function() {
      var context = this;
      var args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        func.apply(context, args);
      }, wait);
    };
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFAQ);
  } else {
    initFAQ();
  }

  // Handle window resize with debouncing
  window.addEventListener('resize', debounce(handleResize, 250));

  // Re-initialize if content is dynamically added (for AJAX/SPAs)
  if (typeof MutationObserver !== 'undefined') {
    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.addedNodes.length) {
          mutation.addedNodes.forEach(function(node) {
            if (node.nodeType === 1 && (node.classList.contains('faq-module') || node.querySelector('.faq-module'))) {
              initFAQ();
            }
          });
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
})();
