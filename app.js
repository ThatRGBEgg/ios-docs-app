// app.js

function showTab(event, tabName) {
    // Update active state in UI
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));
    
    // Set the clicked element as active
    event.currentTarget.classList.add('active');

    // Logic for tab switching will go here
    console.log(`Mapsd to: ${tabName}`);
}

// Storage Failsafe Logic
function updateStorageUI(usedMB) {
    const totalMB = 20 * 1024; // 20 GB
    const percentage = (usedMB / totalMB) * 100;
    
    const bar = document.getElementById('progress-bar');
    const usageLabel = document.getElementById('usage');
    const card = document.getElementById('main-storage-card');

    if (bar) bar.style.width = percentage + "%";
    if (usageLabel) usageLabel.innerText = (usedMB / 1024).toFixed(1) + " GB";

    // Failsafe Visual: Turn Red if over 90%
    if (percentage > 90) {
        card.style.background = "#ff3b30"; // iOS Red
    } else {
        card.style.background = "var(--accent)";
    }
}

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
    // Start with a simulated value (e.g., 2.5 GB)
    updateStorageUI(2560);
});
