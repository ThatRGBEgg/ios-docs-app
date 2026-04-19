// app.js - High Performance Script

// 1. Tab Switching Logic
function switchTab(event, tabName) {
    // Update Nav Buttons
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));
    
    // Fallback for direct button calls vs event triggers
    const target = event ? event.currentTarget : document.querySelector(`.nav-item:nth-child(3)`);
    if(target) target.classList.add('active');

    // Update Content
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));
    document.getElementById(`tab-${tabName}`).classList.add('active');
}

// 2. Storage Tracker Logic
function updateStorageUI(usedMB) {
    const totalMB = 20 * 1024; // 20 GB
    const percentage = (usedMB / totalMB) * 100;
    
    const bar = document.getElementById('progress-bar');
    const usageLabel = document.getElementById('usage');
    const card = document.getElementById('card');

    if (bar) bar.style.width = percentage + "%";
    if (usageLabel) usageLabel.innerText = (usedMB / 1024).toFixed(1) + " GB / 20 GB";

    // Failsafe Visual: Turn Red if over 90%
    if (percentage > 90) {
        card.style.background = "#ff3b30"; // iOS Red
    } else {
        card.style.background = "var(--accent)";
    }
}

// 3. The Update Shield (Auto-updates Home Screen app)
function checkUpdates() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').then(reg => {
            reg.onupdatefound = () => {
                const installingWorker = reg.installing;
                installingWorker.onstatechange = () => {
                    if (installingWorker.state === 'installed' && navigator.serviceWorker.controller) {
                        // New version found! Force reload.
                        window.location.reload();
                    }
                };
            };
        });
    }
}

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
    checkUpdates();
    // Simulated load to show animation
    setTimeout(() => updateStorageUI(2560), 300);
});
