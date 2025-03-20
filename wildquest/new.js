document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Capture form data
    let activity = document.getElementById('activity').value;
    let date = document.getElementById('date').value;
    let participants = document.getElementById('participants').value;
  
    // Confirmation message
    let confirmationMessage = `Thank you for booking! You have selected the ${activity} for ${participants} participants on ${date}.`;
  
    // Display the confirmation message
    document.getElementById('confirmation-message').textContent = confirmationMessage;
  
    // Optionally, trigger an email or SMS notification here (via backend integration)
  });
  
