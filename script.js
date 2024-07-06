document.getElementById('donationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const amount = document.getElementById('amount').value;
    
    if (name && email && phone && amount) {
        document.getElementById('message').textContent = `Thank you, ${name}! Your donation of $${amount} has been registered.`;
    } else {
        document.getElementById('message').textContent = 'Please fill out all fields.';
    }
});
