describe("My TestSuite",function()
{
    before(() => {
        // runs once before all tests in the block
        cy.log("this is setup block")

      })
    
      beforeEach(() => {
        // runs before each test in the block
        cy.log("This is login block")
      })
    
      afterEach(() => {
        // runs after each test in the block
        cy.log("this is logout block")
      })
    
      after(() => {
        // runs once after all tests in the block
        cy.log("this is tear down block")
      })

    it("Searching",function()
    {
        cy.log("This is searching text")
    })
    it("Advanced Searching Test",function()
    {
     cy.log("Advanced Searching Test")   
    })
    it("Listing Product Test",function()
    {
        cy.log("Listing Product Test")
    })
})