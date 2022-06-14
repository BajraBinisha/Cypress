import LoginPage from "./PageObject/LoginPage.cy";
describe("Test Suite",function(){
    it("Valid Login Suite",function(){
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from failing the test
            return false
        })
        const lp = new LoginPage();
        lp.navigate();
        lp.fillEmail('binisha.awale@bajratechnologies.com');
        lp.fillPassword('123456789');
        lp.submit();
        cy.url().should('be.equal', 'https://bajratechnologies.com/web#action=106&active_id=mailbox_inbox&cids=1&menu_id=83');
    })
})
