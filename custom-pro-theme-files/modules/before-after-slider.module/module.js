document.addEventListener('DOMContentLoaded', function() {
  const sliders = document.querySelectorAll('.before-after-slider');

  sliders.forEach(function(slider) {
    const container = slider.querySelector('.before-after-container');
    const afterImage = slider.querySelector('.after-image-container');
    const handle = slider.querySelector('.slider-handle');
    let isDragging = false;

    function updateSlider(x) {
      const rect = container.getBoundingClientRect();
      let position = ((x - rect.left) / rect.width) * 100;
      position = Math.max(0, Math.min(100, position));

      afterImage.style.clipPath = `inset(0 ${100 - position}% 0 0)`;
      handle.style.left = position + '%';
    }

    function handleMove(e) {
      if (!isDragging) return;
      const x = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
      updateSlider(x);
    }

    function startDrag(e) {
      isDragging = true;
      container.classList.add('dragging');
      handleMove(e);
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
    container.addEventListener('click', function(e) {
      const x = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
      updateSlider(x);
    });
  });
});
