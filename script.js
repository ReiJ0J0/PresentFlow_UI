// Function to load HTML content dynamically and insert into the DOM
async function loadContent() {
    try {
        // Fetch content for each section
        const topBar = await fetch('/PresentFlow_UI/topbar.html').then(res => res.text());
        const sidebar = await fetch('/PresentFlow_UI/sidebar.html').then(res => res.text());
        const mainContent = await fetch('/PresentFlow_UI/maincontent.html').then(res => res.text());
        const aboutSystem = await fetch('/PresentFlow_UI/aboutsystem.html').then(res => res.text());
        const aboutUs = await fetch('/PresentFlow_UI/aboutus.html').then(res => res.text());        

        // Insert fetched content into respective elements
        document.getElementById('top-bar').innerHTML = topBar;
        document.getElementById('sidebar').innerHTML = sidebar;
        document.getElementById('main-content').innerHTML = mainContent;
        document.getElementById('about-system').innerHTML = aboutSystem;
        document.getElementById('about-us').innerHTML = aboutUs;
    } catch (error) {
        console.error("Error loading content:", error);
    }
}

// Call the function to load content when the page loads
window.onload = loadContent;
