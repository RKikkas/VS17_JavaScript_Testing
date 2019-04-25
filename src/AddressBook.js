function AddressBook() {
    this.contacts = [];
    this.initialComplete = false;
}

// Meetod, mis tagastab algsed kontaktid
AddressBook.prototype.getInitialContacts = function(cb) {
    var self = this;

    // setTimeout, et meetod oleks "asünkroonne"
    setTimeout(function() {
        self.initialComplete = true;
        if (cb) {
            return cb();
        }
    }, 3);
};

// Meetod mis lisab kontakti aadressiraamatusse
AddressBook.prototype.addContact = function(contact) {
    this.contacts.push(contact);
};

// Meetod, mis võtab kindla indeksiga elemendi kontaktide arrayst
AddressBook.prototype.getContact = function(index) {
    return this.contacts[index];
};

// Meetod, mis kustutab kindla indeksiga kontakti
AddressBook.prototype.deleteContact = function(index) {
    this.contacts.splice(index, 1);
};