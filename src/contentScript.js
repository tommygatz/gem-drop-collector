// content.js
function clickGemDropButton() {
    const chatAside = document.querySelector("aside.chat");
    
    if (chatAside) {
      const gemDropButton = chatAside.querySelector("button:contains('Count me in!')");
  
      if (gemDropButton) {
        gemDropButton.click();
      }
    }
  }
  
  // Run the function initially
  clickGemDropButton();
  
  // Check for the button every 5 seconds (adjust the interval as needed)
  setInterval(clickGemDropButton, 5000);