// Kirjeldame aadressiraamatut
describe('Address Book', function() {
    var addressBook,
        thisContact;

    // Funktsioon, mis käivitatakse iga testi(it) alguses
    beforeEach(function() {
        addressBook = new AddressBook();
        thisContact = new Contact();
    });

    // Aadressiraamat peaks oskama lisada uut kontakti
    it('should be able to add a contact', function() {
        // Lisame aadressiraamatusse uue kontakti
        addressBook.addContact(thisContact);

        // Kontrollime, et esimene kontakt mille me aadressiraamatust saame on see sama
        // mille me lisasime
        expect(addressBook.getContact(0)).toBe(thisContact);
    });

    it('should be able to delete a contact', function() {
        addressBook.addContact(thisContact);
        addressBook.deleteContact(0);

        expect(addressBook.getContact(0)).not.toBe(thisContact);
    })
});