// Image Carousel - Scrolls images from right to left
function initImageCarousel() {
    const carouselTrack = document.getElementById('image-carousel-track');
    
    if (!carouselTrack) {
        return;
    }
    
    // List of images from the images folder
    const images = [
        'b1.jpg',
        'd1.jpg',
        'f1.jpg',
        'mt2.gif',
        'l1.jpg',
        'mt1.jpg',
        'a1.jpg',
        'p1.jpg',
        'dc1.jpg',
        'xm1.jpg',
        'j1.gif',
        'z1.jpg',
        'w1.jpg',
        'j2.jpg',
        'b2.jpg',
        'j3.jpg',
        'p2.gif',
        'g1.jpg',
        'dc2.jpg',
        'c1.jpg'
    ];
    
    // Create image elements and add to track
    images.forEach(image => {
        const img = document.createElement('img');
        img.src = `../images/${image}`;
        img.alt = image.replace(/\.[^/.]+$/, ''); // Remove file extension for alt text
        img.className = 'carousel-image';
        carouselTrack.appendChild(img);
    });
    
    // Duplicate images for seamless infinite scroll
    images.forEach(image => {
        const img = document.createElement('img');
        img.src = `../images/${image}`;
        img.alt = image.replace(/\.[^/.]+$/, '');
        img.className = 'carousel-image';
        carouselTrack.appendChild(img);
    });
    
    // Start the animation (slower speed - longer duration = slower scroll)
    carouselTrack.style.animation = 'scroll 160s linear infinite';
}

// Initialize when DOM is ready and component is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        document.addEventListener('componentsLoaded', initImageCarousel);
        // Also try to init immediately in case component is already loaded
        setTimeout(initImageCarousel, 100);
    });
} else {
    document.addEventListener('componentsLoaded', initImageCarousel);
    // Also try to init immediately in case component is already loaded
    setTimeout(initImageCarousel, 100);
}
