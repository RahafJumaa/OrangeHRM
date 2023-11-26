class LeavePageActions {
    navigateToMyLeavePage(){
        cy.visit('/leave/viewMyLeaveList');
    }
}
export default LeavePageActions;