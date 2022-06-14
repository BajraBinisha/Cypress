// describe("My First Suite",function(){
//     it("My FirstTest case",function(){
//         cy.visit("https://www.cypress.io/");

//     });
//     it("My SecondTest case".function(){

//     })

// })


// describe("My First Suite",function()
// {  
//     it('finds the content', () => {
//         cy.visit('https://www.saucedemo.com/')
//         cy.get("#user-name").type('standard_user')
//         cy.get("#password").type('secret_sauce')
//         cy.get("#login-button").click()
//         cy.url().should('contains','/inventory.html')
       
//       })
// });


describe(
  "first",()=>{
    // retries
    it("test",
    {
  
      retries:2
      },
  
    function(){
      cy.visit('https://example.cypress.io/')
      cy.contains('click')
    })
    
    // it("external endpoint test",()=>{
    //   cy.visit(${Cypress.env('externalApi')})
    // })
  }
)


// cy.visit('https://www.saucedemo.com/',{timeout: 60000})