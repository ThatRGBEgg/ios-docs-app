// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    console.log("Docs App Ready");
    
    // Simulate current storage usage
    updateStorageDisplay(2.5); // Using 2.5 GB for example
});

function updateStorageDisplay(usedGB) {
    const totalGB = 20;
    const percentage = (usedGB / totalGB) * 100;
    
    const bar = document.getElementById('storage-bar');
    const label = document.getElementById('storage-label');
    
    bar.style.width = percentage + "%";
    label.innerText = usedGB + " / " + totalGB + " GB";

    // Failsafe: Hard cap at 20GB
    if (usedGB >= totalGB) {
        bar.style.background = "#ff3b30"; // iOS Red
        label.style.color = "#ff3b30";
        alert("STORAGE FULL: Failsafe triggered. You cannot upload more.");
    }
}

