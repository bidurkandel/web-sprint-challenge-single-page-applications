/// <reference types="cypress" />
describe("Test app", ()=> {
    beforeEach(()=>{
        cy.visit("http://localhost:3000/");
    });

    const nameInput = () => cy.get("input[name='name']");
    const mushroomsCheckbox = () => cy.get("input[name='mushrooms']");
    const blackOlivesCheckbox = () => cy.get("input[name='blackOlives']");
    const pepperoniCheckbox = () => cy.get("input[name='pepperoni']");
    const extraCheeseCheckbox = () => cy.get("input[name='extraCheese']");
    const sizeSelect = () => cy.get("select[name='size']");
    const submitButton = () => cy.get("#submitButton");
    const orderButton = () => cy.get("#orderButton");

    it("test works", ()=>{
        expect(true === true).to.equal(true);
    });

    it("elements exist", ()=>{
        orderButton().should("exist");
        orderButton().click();
        nameInput().should("exist");
        submitButton().should("exist");
    });

    it("add text to name input", ()=>{
        orderButton().should("exist");
        orderButton().click();
        nameInput().type("Perfect Pizza").should("have.value","Perfect Pizza");
        sizeSelect().select("18'").should("have.value", "18'");
        mushroomsCheckbox().check();
        blackOlivesCheckbox().check();
        pepperoniCheckbox().check();
        extraCheeseCheckbox().check();

        (mushroomsCheckbox()
         && blackOlivesCheckbox()
         && pepperoniCheckbox() 
         && extraCheeseCheckbox())
         .should("be.checked");
    });

    it("submit form", () => {
        orderButton().should("exist");
        orderButton().click();
        nameInput().type("Perfect Pizza").should("have.value","Perfect Pizza");
        sizeSelect().select("18'").should("have.value", "18'");
        mushroomsCheckbox().check();
        blackOlivesCheckbox().check();
        pepperoniCheckbox().check();
        extraCheeseCheckbox().check();
        submitButton().click();

        nameInput().should("have.value", "");
        sizeSelect().should("have.value", "");

        (mushroomsCheckbox()
         && blackOlivesCheckbox()
         && pepperoniCheckbox() 
         && extraCheeseCheckbox())
         .should("be.not.checked");
    })
})