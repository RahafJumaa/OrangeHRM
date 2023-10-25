class assertions {
    checkScheduledStatus(){
        cy.get('.oxd-table-row').get('.oxd-table-cell').contains("Scheduled").should('exist'); 
    }
}
export default assertions;