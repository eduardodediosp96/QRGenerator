// // Function to format input value to HH:MM with leading zeros
// function updateTime(
//   timeInput: HTMLInputElement,
//   minutes: string,
//   hours: string,
// ) {
//   timeInput.value =
//     (hours.padStart(2, '0') || '00') + ':' + (minutes.padStart(2, '0') || '00');
//   console.log(
//     "🚀 ~ (hours.padStart(2, '0') || '00') + ':' + (minutes.padStart(2, '0') || '00'):",
//     (hours.padStart(2, '0') || '00') + ':' + (minutes.padStart(2, '0') || '00'),
//   );
// }

// // Function to handle focus events
// function handleFocus(event: Event) {
//   const target = event.target as HTMLInputElement;
//   if (target.tagName === 'INPUT') {
//     // Check if the input element matches the desired criteria
//     const hasDesiredAttributes =
//       target.type === 'text' &&
//       target.name === 'hours' &&
//       target.classList.contains('pds-input') &&
//       target.classList.contains('js-hours') &&
//       target.classList.contains('hours-input') &&
//       target.getAttribute('aria-label') === 'hours';

//     // If the input element matches the desired criteria, replace it with a time input
//     if (hasDesiredAttributes) {
//       // Optional: Add event listener to handle input change in the time input
//       target.addEventListener('input', handleInput);
//     }
//   }
// }

// // Function to handle input events
// function handleInput(event: Event) {
//   const key = event instanceof KeyboardEvent ? event.key : '';
//   const target = event.target as HTMLInputElement;

//   // Check if the input element matches the desired criteria
//   if (
//     target.tagName === 'INPUT' &&
//     target.type === 'text' &&
//     target.name === 'hours' &&
//     target.classList.contains('pds-input') &&
//     target.classList.contains('js-hours') &&
//     target.classList.contains('hours-input') &&
//     target.getAttribute('aria-label') === 'hours'
//   ) {
//     // Get the input value
//     let hours = target.value.split(':')[0] || '';
//     let minutes = target.value.split(':')[1] || '';

//     if (
//       !isNaN(parseInt(key, 10)) &&
//       parseInt(key, 10) >= 0 &&
//       parseInt(key, 10) <= 9
//     ) {
//       // If hours haven't been set, add the first digit to hours
//       if (hours === '') {
//         hours = key;
//       }
//       // If hours have been set but minutes haven't, add the second digit to hours
//       else if (hours.length === 1 && minutes === '') {
//         hours += key;
//       }
//       // If minutes haven't been set, add the first digit to minutes
//       else if (minutes === '') {
//         minutes = key;
//       }
//       // If minutes have been set but not the second digit, add the second digit to minutes
//       else if (minutes.length === 1) {
//         minutes += key;
//       }
//     }
//     // Check if the "Backspace" key is pressed to clear the time
//     else if (key === 'Backspace') {
//       hours = '';
//       minutes = '';
//     }

//     // Validate hours to be within the range of 0 to 23
//     if (hours !== '' && parseInt(hours) > 23) {
//       hours = '23';
//     }

//     // Validate minutes to be within the range of 0 to 59
//     if (minutes !== '' && parseInt(minutes) > 59) {
//       minutes = '59';
//     }

//     // Update the input field
//     updateTime(target, minutes, hours);
//   }
// }

// // Add event listener for focus events
// document.addEventListener('focus', handleFocus, true);
