document.getElementById('year').textContent = new Date().getFullYear();

function scrollCarousel1(direction) {
    const gallery = document.getElementById('gallery1');
    const item = gallery.querySelector('.screenshot-item');

    // Calculate dynamic width: item width + the current CSS gap
    const style = window.getComputedStyle(gallery);
    const gap = parseInt(style.columnGap || style.gap) || 0;
    const scrollAmount = item.offsetWidth + gap;

    gallery.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

document.getElementById('year').textContent = new Date().getFullYear();

function scrollCarousel2(direction) {
    const gallery = document.getElementById('gallery2');
    const item = gallery.querySelector('.screenshot-item');

    // Calculate dynamic width: item width + the current CSS gap
    const style = window.getComputedStyle(gallery);
    const gap = parseInt(style.columnGap || style.gap) || 0;
    const scrollAmount = item.offsetWidth + gap;

    gallery.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}