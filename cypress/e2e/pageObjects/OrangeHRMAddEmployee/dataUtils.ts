import {EmployeeAPIBody,UserAPIBody} from "../../../support/types";
class api{
   public empNumber: string;
    NavigateToAddEmployeePage(){
        cy.intercept("GET", "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary").as("action-summary");
        cy.intercept("GET", "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/shortcuts").as("shortcuts");
        cy.intercept("GET", "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/subunit").as("subunit");
        cy.intercept("GET", "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/locations").as("locations");
        
        cy.wait("@action-summary");
        cy.wait("@shortcuts");
        cy.wait("@subunit");
        cy.wait("@locations");
    }

    AddEmployeeWithoutCreateLoginDetails(EmployeeAPIBody: EmployeeAPIBody){
       return cy.request({
            method: 'POST',
            url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees',
            body: 
            EmployeeAPIBody,
          }).then((response) => response.body
          );
    }

    AddEmployeeWithCreateLoginDetails(UserAPIBody: UserAPIBody){
      return cy.request({
         method: 'POST',
         url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users',
         body: 
         UserAPIBody,
       }).then((response) => {
         expect(response.status).to.equal(200);
         return response.body;
      });
   }


    checkPersonalDerails(employeeId: string, empNumber: string){
        cy.request({
            method: 'GET',
            url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees/'+empNumber+'/personal-details',
          }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.data.employeeId).to.equal(employeeId);
          });
    }

}
export default api;