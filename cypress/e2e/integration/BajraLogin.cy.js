describe("Login",()=>{
    it("Login Test",()=>{

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from failing the test
            return false
        })
        
        cy.visit("/")
        cy.xpath("//input[@id='login']").type("binisha.awale@bajratechnologies.com")
        cy.xpath("//input[@id='password']").type(1243456789)
        // cy.get("#password").type("123456789")
        cy.xpath("//button[@type='submit']").click()
        // cy.url().should("be.equal","#https://bajratechnologies.com/web#action=106&active_id=mailbox_inbox&cids=1&menu_id=83")
        // cy.get(".breadcrumb-item").should("have","#Inbox")
        cy.title().should("equal","#Inbox - BizOS")
    })
    it("Reset Password test",()=>{
        cy.visit("/")
        cy.get(".justify-content-between > a").click()
        cy.get('#login').type("binisha.awale@bajratechnologies.com")
        cy.get("button[type='submit']").click()
        cy.get('.btn').click()
    })
})

