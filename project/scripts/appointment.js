document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        date: document.getElementById('day').value,
        time: document.getElementById('time').value,
        reason: document.getElementById('reason').value
    };

    // Store the form data in localStorage
    localStorage.setItem('appointmentData', JSON.stringify(formData));

    // Optionally, you can show a success message or perform further actions
    console.log('Form Data stored in localStorage:', formData);
    alert('Your appointment request has been saved!');
    
    // Optionally reset the form
    this.reset();
});