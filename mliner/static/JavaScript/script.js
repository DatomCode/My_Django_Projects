function copyToClipboard() {
    // 1. Get the URL text from the 'a' tag with id 'shortUrl'
    const urlText = document.getElementById('shortUrl').href;

    // 2. Use the modern Clipboard API to write that text to the user's clipboard
    navigator.clipboard.writeText(urlText).then(() => {
        
        // 3. Success Feedback: Change the button text
        const btn = document.querySelector('.copy-btn');
        const originalContent = btn.innerHTML; // Save the icon and "Copy" text
        
        // Change text to "Copied!" and show a checkmark
        btn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
        
        // 4. Timer: Wait 2 seconds (2000ms), then change it back
        setTimeout(() => {
            btn.innerHTML = '<i class="fa-regular fa-copy"></i> Copy';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}