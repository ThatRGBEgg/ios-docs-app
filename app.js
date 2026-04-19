/* app.js */
function showTab(tabName) {
    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Find the clicked button by its text or icon and make it active
    event.currentTarget.classList.add('active');

    // Here we can later add code to swap the actual content of the page
    console.log("Switched to tab: " + tabName);
}

// Keep the storage display function from before
function updateStorage(usedMB) {
    const totalMB = 20 * 1024;
    const percentage = (usedMB / totalMB) * 100;
    const fill = document.getElementById('fill');
    const usageText = document.getElementById('usage');
    
    if(fill) fill.style.width = percentage + "%";
    if(usageText) usageText.innerText = (usedMB / 1024).toFixed(1) + " / 20 GB";
}

updateStorage(2560); // Testing with 2.5GB
