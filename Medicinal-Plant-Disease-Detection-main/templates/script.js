document.getElementById("imageInput").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("imagePreview").innerHTML = `<img src="${e.target.result}" style="max-width: 100%; border-radius: 10px;"/>`;
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById("dropZone").addEventListener("click", () => {
    document.getElementById("imageInput").click();
});

// Adjust icon sizes
const icons = document.querySelectorAll(".upload-icon, .logo, .placeholder img");
icons.forEach(icon => {
    icon.style.width = "50px";
    icon.style.height = "50px";
});

function uploadImage() {
    const fileInput = document.getElementById("imageInput");
    if (!fileInput.files.length) {
        alert("Please select an image first.");
        return;
    }
    
    document.getElementById("disease-name").innerText = "Analyzing...";
    document.getElementById("confidenceValue").innerText = "Processing...";
    document.getElementById("confidenceBar").style.width = "0%";
    document.getElementById("treatment").innerText = "Please wait...";
    
    // Simulated AI Response
    setTimeout(() => {
        document.getElementById("disease-name").innerText = "Leaf Spot Disease";
        document.getElementById("confidenceValue").innerText = "87%";
        document.getElementById("confidenceBar").style.width = "87%";
        document.getElementById("treatment").innerText = "Apply neem oil and avoid overwatering.";
    }, 2000);
}
