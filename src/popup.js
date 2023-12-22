document.addEventListener('DOMContentLoaded', function () {
    const gemDropCheckbox = document.getElementById('gemDropCheckbox');
    const toggleSlider = document.querySelector('.toggle-slider');

    gemDropCheckbox.addEventListener('change', function () {
      // Send a message to the background script to enable or disable the content script
      chrome.runtime.sendMessage({ enabled: gemDropCheckbox.checked });
    });

    // Retrieve the current state from the background script
    chrome.runtime.sendMessage({ getEnabled: true }, function (response) {
      gemDropCheckbox.checked = response.enabled;
    });

    // Set initial state based on the checkbox
    updateToggleState();

    // Handle slider click to toggle checkbox state
    toggleSlider.addEventListener('click', function () {
      gemDropCheckbox.checked = !gemDropCheckbox.checked;
      // Trigger the change event manually to update the extension state
      gemDropCheckbox.dispatchEvent(new Event('change'));
      // Update the toggle state after the click
      updateToggleState();
    });

    function updateToggleState() {
      toggleSlider.style.backgroundColor = gemDropCheckbox.checked ? '#4CAF50' : '#ccc';
      toggleSlider.style.transform = gemDropCheckbox.checked ? 'translateX(30px)' : 'translateX(0)';
    }
});
