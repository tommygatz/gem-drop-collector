let isEnabled = true;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.enabled !== undefined) {
    isEnabled = request.enabled;

    // Update the content script when the state changes
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { enabled: isEnabled });
    });
  } else if (request.getEnabled !== undefined) {
    sendResponse({ enabled: isEnabled });
  }
});