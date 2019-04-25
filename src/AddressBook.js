function AddressBook() {
    this.contacts = [];
}

// Meetod mis lisab kontakti aadressiraamatusse
AddressBook.prototype.addContact = function(contact) {
    this.contacts.push(contact);
};

// Meetod, mis võtab kindla indeksiga elemendi kontaktide arrayst
AddressBook.prototype.getContact = function(index) {
    return this.contacts[index];
};