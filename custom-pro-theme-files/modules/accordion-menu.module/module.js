document.addEventListener('DOMContentLoaded', function() {
  const triggers = document.querySelectorAll('.accordion-menu__trigger');

  triggers.forEach(function(trigger) {
    trigger.addEventListener('click', function() {
      const item = this.closest('.accordion-menu__item');
      const content = item.querySelector('.accordion-menu__content');
      const isActive = item.classList.contains('active');

      // Close all accordion items
      document.querySelectorAll('.accordion-menu__item').forEach(function(accordionItem) {
        accordionItem.classList.remove('active');
        const accordionItemContent = accordionItem.querySelector('.accordion-menu__content');
        if (accordionItemContent) accordionItemContent.style.maxHeight = null;
      });

      // Open clicked item if it wasn't active
      if (!isActive && content) {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
        this.setAttribute('aria-expanded', 'true');
      } else {
        this.setAttribute('aria-expanded', 'false');
      }
    });
  });
});
