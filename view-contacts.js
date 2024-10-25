let contacts = JSON.parse(localStorage.getItem('contacts')) || [];

function loadContacts() {
    const contactList = document.getElementById('contactList');
    contactList.innerHTML = '';

    contacts.forEach((contact, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="contact-info">
                Name: <input type="text" value="${contact.name}" disabled />
                Address: <input type="text" value="${contact.address}" disabled />
                Email: <input type="email" value="${contact.email}" disabled />
                Phone: <input type="tel" value="${contact.phone}" disabled />
            </span>
            <button class="edit-button" onclick="editContact(${index})">Edit</button>
            <button class="delete-button" onclick="deleteContact(${index})">Delete</button>
        `;
        contactList.appendChild(li);
    });
}

function goBack() {
    window.location.href = 'index.html'; // Redirects to the main page
}

function editContact(index) {
    const contactInputs = document.querySelectorAll(`li:nth-child(${index + 1}) input`);
    const editButton = document.querySelector(`li:nth-child(${index + 1}) .edit-button`);

    if (editButton.textContent === 'Edit') {
        contactInputs.forEach(input => {
            input.disabled = false; // Enable inputs for editing
        });
        editButton.textContent = 'Save'; // Change button text to Save
    } else {
        const updatedContact = {
            name: contactInputs[0].value,
            address: contactInputs[1].value,
            email: contactInputs[2].value,
            phone: contactInputs[3].value
        };
        contacts[index] = updatedContact; // Update the contact in the array
        localStorage.setItem('contacts', JSON.stringify(contacts)); // Save updated contacts to local storage
        loadContacts(); // Reload contacts to refresh the list
    }
}

function deleteContact(index) {
    contacts.splice(index, 1); // Remove the contact from the array
    localStorage.setItem('contacts', JSON.stringify(contacts)); // Update local storage
    loadContacts(); // Reload contacts to refresh the list
}

// Load contacts when the page loads
window.onload = loadContacts;