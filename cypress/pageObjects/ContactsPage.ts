export class ContactsPage {
    createContact(contactData: any) {
      return cy.request({
        method: 'POST',
        url: 'https://api.hubapi.com/crm/v3/objects/contacts',
        headers: {
          Authorization: `Bearer ${Cypress.env('HUBSPOT_ACCESS_TOKEN')}`,
          'Content-Type': 'application/json'
        },
        body: contactData
      });
    }
  
    updateContact(contactId: string, contactData: any) {
      return cy.request({
        method: 'PATCH',
        url: `https://api.hubapi.com/crm/v3/objects/contacts/${contactId}`,
        headers: {
          Authorization: `Bearer ${Cypress.env('HUBSPOT_ACCESS_TOKEN')}`,
          'Content-Type': 'application/json'
        },
        body: contactData
      });
    }
  
  }
  