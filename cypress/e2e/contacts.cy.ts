import { ContactsPage } from '../pageObjects/ContactsPage';

describe('HubSpot Contact Management', () => {
  const contactsPage = new ContactsPage();

  it('should create a contact using HubSpot API', () => {
    const timestamp = Date.now(); // Unique timestamp for email to let test success
    const contactData = {
      properties: {
        email: `user${timestamp}@example.com`,
        firstname: 'Sizar',
        lastname: 'Simaan',
        phone: '123-456'
      }
    };

    contactsPage.createContact(contactData).then((response) => {
      expect(response.status).to.eq(201); // Expect successful creation
      cy.log('Contact created with ID:', response.body.id);
    });
  });

  it('should update an existing contact using HubSpot API', () => {
    const contactId = '65594590093'; // Replace with an actual contact ID
    const updatedData = {
      properties: {
        firstname: 'test',
        lastname: 'test1',
        phone: '987'
      }
    };

    contactsPage.updateContact(contactId, updatedData).then((response) => {
      expect(response.status).to.eq(200); // Expect successful update
      cy.log('Contact updated:', response.body.id);
    });
  });
});
