// content.js
function clickGemDropButton() {
    // Retrieve the state of the extension from the background script
    chrome.runtime.sendMessage({ getEnabled: true }, function (response) {
        // Check if the extension is enabled before proceeding
        if (response.enabled) {
            const chatAside = document.querySelector("aside.chat");
        
            if (chatAside) {
                const gemDropButton = chatAside.querySelector("button");
  
                if (gemDropButton.innerText.includes('1,000')) {  
                    gemDropButton.click();
                }
            }
        }
    });
}

// Run the function initially
clickGemDropButton();

// Check for the button every 5 seconds (adjust the interval as needed)
setInterval(clickGemDropButton, 5000);