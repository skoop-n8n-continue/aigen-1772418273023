// Hello World Signage Script
document.addEventListener('DOMContentLoaded', () => {
    console.log('Signage App Loaded');
    
    // Add a timestamp in console for verification
    const timestamp = new Date().toLocaleTimeString();
    console.log(`Last updated: ${timestamp}`);

    // Update the version parameters dynamically for any future asset logic
    const updateCacheBusters = () => {
        const v = Date.now();
        // This is a placeholder for dynamic asset handling if needed
    };
});
