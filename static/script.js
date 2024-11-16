// Function to load HTML content dynamically and insert into the DOM
async function loadContent() {
    try {
        // Fetch content for each section using Flask routes
        const topBar = await fetch('/topbar.html').then(res => res.text());
        const sidebar = await fetch('/sidebar.html').then(res => res.text());
        const mainContent = await fetch('/maincontent.html').then(res => res.text());
        const aboutSystem = await fetch('/aboutsystem.html').then(res => res.text());
        const aboutUs = await fetch('/aboutus.html').then(res => res.text());

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

// Call the function to load content when the page loads
window.onload = async function () {
    await loadContent(); // Ensure content is loaded first

    const fileDropArea = document.getElementById('file-drop-area');
    const fileInput = document.getElementById('file-upload');
    const uploadButton = document.getElementById('upload-btn');
    const fileNameDisplay = document.getElementById('file-name-display'); // Add this line to select the file name display element

    // Enable upload button and display file name when a file is selected
    fileInput.addEventListener('change', function() {
        if (fileInput.files.length > 0) {
            const fileName = fileInput.files[0].name;
            console.log("File selected:", fileName);

            // Update the file name display
            fileNameDisplay.textContent = `${fileName}`;

            uploadButton.disabled = false; // Enable the upload button
        } else {
            fileNameDisplay.textContent = 'Drag & Drop your file here or click to select'; // Clear display if no file is selected
            uploadButton.disabled = true; // Disable button if no file
        }
    });

    // Drag & Drop functionality
    fileDropArea.addEventListener('dragover', function(event) {
        event.preventDefault(); // Allow dropping
        fileDropArea.classList.add('drag-over'); // Add drag-over class for styling
    });

    fileDropArea.addEventListener('dragleave', function() {
        fileDropArea.classList.remove('drag-over'); // Remove drag-over class when dragging leaves
    });

    fileDropArea.addEventListener('drop', function(event) {
        event.preventDefault(); // Prevent default behavior (open file)
        fileDropArea.classList.remove('drag-over'); // Remove drag-over class

        const files = event.dataTransfer.files;
        if (files.length > 0) {
            fileInput.files = files; // Assign dropped files to the file input

            const fileName = files[0].name;
            console.log("File dropped:", fileName);

            // Update the file name display
            fileNameDisplay.textContent = `${fileName}`;

            uploadButton.disabled = false; // Enable the upload button
        }
    });

    // Function to handle file upload
    function uploadFile() {
        const file = fileInput.files[0];
        if (file) {
            console.log(`Uploading: ${file.name}`);
            alert(`Uploading: ${file.name}`);
            // Implement file upload logic here (e.g., send the file to the server using FormData)
        } else {
            alert("No file selected for upload.");
        }
    }
};

