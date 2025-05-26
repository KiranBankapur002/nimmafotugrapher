const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentGallery = [];
let currentIndex = 0;

function openLightbox(anchorElement, index) {
    // Get all img tags inside the clicked <a> tag (including hidden ones)
    const images = Array.from(anchorElement.querySelectorAll('img'));
    currentGallery = images.map(img => img.src);
    currentIndex = index;

    lightboxImg.src = currentGallery[currentIndex];
    lightbox.classList.remove('hidden');
    setTimeout(() => lightbox.classList.add('visible'), 10);
}

function closeLightbox() {
    lightbox.classList.remove('visible');
    setTimeout(() => lightbox.classList.add('hidden'), 300);
}

function showPrev() {
    currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
    lightboxImg.src = currentGallery[currentIndex];
}

function showNext() {
    currentIndex = (currentIndex + 1) % currentGallery.length;
    lightboxImg.src = currentGallery[currentIndex];
}

// Fix: Attach click event to all <a> tags with [data-gallery]
document.querySelectorAll('[data-gallery]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        const index = parseInt(anchor.getAttribute('data-index')) || 0;
        openLightbox(anchor, index);
    });
});

closeBtn.addEventListener('click', closeLightbox);
prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);

document.addEventListener('keydown', e => {
    if (lightbox.classList.contains('visible')) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showPrev();
        if (e.key === 'ArrowRight') showNext();
    }
});