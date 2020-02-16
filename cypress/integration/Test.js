import moment from 'moment';
const currentMonth = Cypress.moment().format('MMMM');
describe('Test', () => {
    it('Open page', () => {
        cy.visit('/');
    });

    it('oznacit checkbox', () => {
     cy.get("[data-value='Check this']").first().click()
     cy.get("[data-value='Check this']").last().click()
    });

    it('vyplnit datum ktere bylo pred peti dny', () => {
        let futureDate = moment().add(5, "days").format("YYYY-MM-DD")
        cy.get("[type='date']").type(futureDate)
    });
    

    it('zkontrolovat aby pole bylo jiste vyplneno', () => {
        cy.get(".freebirdFormviewerViewItemsItemItem.freebirdFormviewerViewItemsTextTextItem").should('have.attr', 'data-required', 'true')
    });

    it('je potreba vyplnit pole', () => {
        cy.get("[name='entry.1864473569']").type(currentMonth)
    });

    it('stisknout tlacitko dale', () => {
        cy.get('[jsname="OCpkoe"]').click()
    });

    it('zvolit tri serialy', () => {
        let myFavMovies = ['Ray Donovan', 'Knight Rider', 'Air Wolf', 'A Team', 'The Twilight Zone'];
        let myFavMoviesThreeRand = myFavMovies.sort(() => Math.random() - Math.random()).slice(0, 3).toString();
        cy.get('[jsname="YPqjbf"]').type(myFavMoviesThreeRand);
    });

    it('zvolit barvu', () => {
        cy.get('[jsname="d9BH4c"]').click()
        cy.get('[jsname="V68bde"]').contains('Black').click()
    });

    it('jdeme na predchozi stranku', () => {
        cy.get('[jsname="GeGHKb"]').click()
    });

    it('Reverse mesice', () => {
        function reverseMonth(currentMonth) {
            let currentMonthReversed = ""
            for (let i = currentMonth.length - 1; i >= 0; i--) {
                currentMonthReversed += currentMonth[i];
            }
            return currentMonthReversed;
        }
        let currentMonthReversed = reverseMonth(currentMonth);
        cy.get('input.quantumWizTextinputPaperinputInput').last().as('thirdInput').clear();
        cy.get("[name='entry.1864473569']").type(currentMonthReversed)
    });

    it('stisknout tlacitko dale', () => {
        cy.get('[jsname="OCpkoe"]').click()
    });

    it('stisknout tlacitko dale a prejit na posledni stranku', () => {
        cy.get('[jsname="OCpkoe"]').click()
    });

    it('zvolit Yes', () => {
        cy.get('.docssharedWizToggleLabeledLabelText').first().should('have.text', 'Yes').click()
    });

    it('stisknout tlacitko odeslat a ukoncit test', () => {
        cy.get('[jsname="M2UYVd"]').click()
    });

});
