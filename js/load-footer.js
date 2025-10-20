document.addEventListener('DOMContentLoaded', async function() {
    const footerPlaceholder = document.getElementById('footer');
    if (!footerPlaceholder) return;

    try {
        // Determine if we're in a page inside the pages/ directory
        const isInPagesDir = window.location.pathname.includes('/pages/');
        const pathPrefix = isInPagesDir ? '../' : '';

        // Fetch the footer content
        const response = await fetch(pathPrefix + 'footer.html');
        const html = await response.text();
        
        // Insert the footer HTML
        footerPlaceholder.innerHTML = html;

        // Load footer styles
        if (!document.querySelector('link[href$="footer-component.css"]')) {
            const linkElem = document.createElement('link');
            linkElem.rel = 'stylesheet';
            linkElem.href = pathPrefix + 'css/footer-component.css';
            document.head.appendChild(linkElem);
        }

        // Update relative URLs in the footer when in pages/ directory
        if (isInPagesDir) {
            footerPlaceholder.querySelectorAll('a[href^="pages/"]').forEach(anchor => {
                anchor.href = anchor.href.replace('pages/', '');
            });
        }
    } catch (error) {
        console.error('Error loading footer:', error);
    }
});