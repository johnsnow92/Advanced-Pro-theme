document.addEventListener('DOMContentLoaded', function() {
  const sliders = document.querySelectorAll('.before-after-slider');

  sliders.forEach(function(slider) {
    const container = slider.querySelector('.before-after-container');
    const afterImage = slider.querySelector('.after-image-container');
    const handle = slider.querySelector('.slider-handle');
    let isDragging = false;

    function updateSlider(clientX) {
      const rect = container.getBoundingClientRect();
      let position = ((clientX - rect.left) / rect.width) * 100;
      position = Math.max(0, Math.min(100, position));

      afterImage.style.clipPath = `inset(0 ${100 - position}% 0 0)`;
      handle.style.left = position + '%';
    }

    function handleMove(event) {
      if (!isDragging) return;
      const clientX = event.type.includes('touch') ? event.touches[0].clientX : event.clientX;
      updateSlider(clientX);
    }

    function startDrag(event) {
      isDragging = true;
      container.classList.add('dragging');
      handleMove(event);
    }

    function stopDrag() {
      isDragging = false;
      container.classList.remove('dragging');
    }

    // Mouse events
    handle.addEventListener('mousedown', startDrag);
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', stopDrag);

    // Touch events
    handle.addEventListener('touchstart', startDrag);
    document.addEventListener('touchmove', handleMove);
    document.addEventListener('touchend', stopDrag);

    // Click to position
    container.addEventListener('click', function(event) {
      const clientX = event.type.includes('touch') ? event.touches[0].clientX : event.clientX;
      updateSlider(clientX);
    });
  });
});
