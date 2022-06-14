class LoginPage{

    navigate()
    {
        cy.visit("/")
    }
    fillEmail(username)
    {
        const field= cy.get('#login').clear().type(username)
        return this
    }
    fillPassword(pw)
    {
        const field= cy.get('#password')
        field.clear()
        field.type(pw)
        return this
    }
    submit()
    {
        cy.get("button[type='submit']").click()
    //    cy.get('.login-button').click()
       
   }
}
export default LoginPage
//to access LoginPage class by all other testcase

