
function copyToClipboard() {
   
    const copyText = document.getElementById("shortUrl");
    const link = copyText.innerText; 

    navigator.clipboard.writeText(link).then(() => {
        
        const copyButton = document.querySelector(".copy-btn");
        const originalText = copyButton.innerHTML;

        copyButton.style.backgroundColor = "#28a745"; // Green color
        copyButton.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
        
        setTimeout(() => {
            copyButton.style.backgroundColor = ""; 
            copyButton.innerHTML = originalText;   
        }, 2000);

    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}