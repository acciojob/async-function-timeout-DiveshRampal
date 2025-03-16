//your JS code here. If required.
// Wait for the DOM to load before adding event listener
document.addEventListener("DOMContentLoaded", function() {
  // Get references to the form inputs and output div
  const textInput = document.getElementById("text");
  const delayInput = document.getElementById("delay");
  const outputDiv = document.getElementById("output");
  const btn = document.getElementById("btn");

  // Function to create a delay using setTimeout wrapped in a Promise
  function delayFunction(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Async function to handle the text display after delay
  async function displayMessage() {
    // Get the values from input fields
    const message = textInput.value;
    const delay = parseInt(delayInput.value);

    // Check if the inputs are valid
    if (!message || isNaN(delay) || delay <= 0) {
      outputDiv.innerText = "Please enter a valid message and delay.";
      return;
    }

    // Wait for the specified delay
    await delayFunction(delay);

    // Display the message in the output div
    outputDiv.innerText = message;
  }

  // Add event listener for the Submit button click
  btn.addEventListener("click", displayMessage);
});
