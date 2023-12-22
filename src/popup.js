document.addEventListener('DOMContentLoaded', function () {
    const gemDropCheckbox = document.getElementById('gemDropCheckbox');
  
    gemDropCheckbox.addEventListener('change', function () {
      // Send a message to the background script to enable or disable the content script
      chrome.runtime.sendMessage({ enabled: gemDropCheckbox.checked });
    });
  
    // Retrieve the current state from the background script
    chrome.runtime.sendMessage({ getEnabled: true }, function (response) {
      gemDropCheckbox.checked = response.enabled;
    });
  });