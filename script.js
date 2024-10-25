document.getElementById('addressForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Create a contact object
    const contact = { name, address, email, phone };

    // Get existing contacts from local storage
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];

    // Add the new contact to the contacts array
    contacts.push(contact);

    // Save the updated contacts back to local storage
    localStorage.setItem('contacts', JSON.stringify(contacts));

    // Clear the form
    document.getElementById('addressForm').reset();
});

// Add event listener to the View Contacts button
document.getElementById('viewContactsBtn').addEventListener('click', function() {
    window.location.href = 'view-contacts.html';
});