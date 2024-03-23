// background.js

// Listen for messages from the content script
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
// chrome.runtime.onMessage.addListener((message) => {
//   if (message.action === 'inputValue') {
//     // Do something with the received input value
//     console.log('Input value:', message.value);
//   }
// });

// // Example function to trigger content script
// function getInputValue() {
//   console.log('que chucha fue aca??');
//   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//     if (tabs && tabs[0]?.id) {
//       // Send message to the content script to get input value
//       chrome.tabs.sendMessage(tabs[0].id, { action: 'getInputValue' });
//     } else {
//       console.error('No active tab found or tab ID is undefined.');
//     }
//   });
// }

// // Call this function when you want to get the input value
// getInputValue();

// background.js

// Listen for messages from content script
chrome.runtime.onMessage.addListener((message) => {
  console.log('on message: ' + message);
  if (message.action === 'inputFocused') {
    // Input focused, do something
    console.log('Input focused');
  }
});
