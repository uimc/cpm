// Function to load HTML components
function loadComponent(url, elementId) {
    return fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById(elementId).innerHTML = html;
            return document.getElementById(elementId);
        });
}

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Load promises array
    const loadPromises = [];
    
    // Set constant component path
    const componentPath = '../components/';
    
    // Load header
    if (document.getElementById('header-container')) {
        loadPromises.push(
            loadComponent(componentPath + 'header.html', 'header-container')
        );
    }
    
    // Load footer
    if (document.getElementById('footer-container')) {
        loadPromises.push(
            loadComponent(componentPath + 'footer.html', 'footer-container')
                .then(() => {
                    // Handle footer logo if needed
                    const footerLogo = document.getElementById('footer-logo');
                    if (footerLogo) {
                        footerLogo.src = '../images/deluxo-full-white.png';
                    }
                })
        );
    }
    
    // Load image carousel
    if (document.getElementById('image-carousel-container')) {
        loadPromises.push(
            loadComponent(componentPath + 'image-carousel.html', 'image-carousel-container')
        );
    }
    
    // After all components are loaded
    Promise.all(loadPromises).then(() => {
        // Dispatch a custom event to notify that all components are loaded
        document.dispatchEvent(new CustomEvent('componentsLoaded'));
    });
}); 