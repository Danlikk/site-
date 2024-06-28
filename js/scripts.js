document.addEventListener('DOMContentLoaded', function() {
    const iframes = document.querySelectorAll('iframe');

    iframes.forEach(iframe => {
        // Обработка события нажатия
        iframe.addEventListener('touchstart', function() {
            iframe.style.pointerEvents = 'auto';
        });

        // Обработка окончания нажатия
        iframe.addEventListener('touchend', function() {
            setTimeout(() => {
                iframe.style.pointerEvents = 'none';
            }, 300);
        });
    });
});
