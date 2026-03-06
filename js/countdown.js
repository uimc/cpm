// Countdown to October 2, 2026
function initCountdown() {
    const countdownElement = document.getElementById('countdown-text');
    
    if (!countdownElement) {
        return;
    }
    
    // Set the target date: October 2, 2026
    const targetDate = new Date('2026-10-02T00:00:00');
    
    function updateCountdown() {
        const now = new Date();
        const timeDifference = targetDate - now;
        
        // Calculate days remaining
        const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
        
        // Update the element
        if (daysRemaining > 0) {
            countdownElement.textContent = daysRemaining;
        } else if (daysRemaining === 0) {
            countdownElement.textContent = '0';
        } else {
            // If the date has passed
            countdownElement.textContent = '0';
        }
    }
    
    // Update immediately
    updateCountdown();
    
    // Update every hour to keep it accurate
    setInterval(updateCountdown, 1000 * 60 * 60);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCountdown);
} else {
    initCountdown();
}
