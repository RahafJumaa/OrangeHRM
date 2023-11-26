class LeavePageAssertions {
    checkScheduledStatus(){
        cy.get('.oxd-table-row').get('.oxd-table-cell').contains("Scheduled").should('exist'); 
    }

    waitSkeletonDisappeared() {
        cy.get(".oxd-loading-spinner-container", { timeout: 10000 }).should("not.exist");
        return this;
    }
}
export default LeavePageAssertions;