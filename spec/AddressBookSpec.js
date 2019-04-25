// Kirjeldame aadressiraamatut
describe('Address Book', function() {
    var addressBook,
        thisContact;

    // Funktsioon, mis käivitatakse iga test speci(it) alguses
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

// Asünkroonse meetodi testimise suite
describe('Async Address Book', function() {
    var addressBook = new AddressBook();

    // Done annab Jasminele teada, et antud meetod on lõppenud, ehk done.
    // Seega kasutatakse infot mis on meetodi lõpus, mitte alguses/vahepeal
    beforeEach(function(done) {
        // Kutsun välja getInitialContacts meetodi koos callbackiga, mis annab
        // Jasminele teada, et meetod on oma töö lõpetanud.
        addressBook.getInitialContacts(function() {
            done();
        });
    });

    // Peaks oskama saada algsed kontaktid
    it('should grab initial contacts', function(done) {
        // Eeldan, et initialComplete on true
        expect(addressBook.initialComplete).toBe(true);
        done();
    });
});