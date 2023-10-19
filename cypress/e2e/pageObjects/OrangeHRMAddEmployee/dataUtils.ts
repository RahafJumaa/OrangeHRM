import {EmployeeAPIBody,UserAPIBody,DeleteAPIBody,UpdateAPIBody, UpdateAPIResponse} from "../../../support/types";
class api{
   public empNumber: string;

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

    DeleteEmployee(deleteEmployee: DeleteAPIBody){
      cy.request({
          method: 'DELETE',
          url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees',
          body:
            deleteEmployee,
        }).then((response) => {
         expect(response.status).to.equal(200);
      });   
  }

UpdateEmployee(UpdateAPIBody: UpdateAPIBody,empNumber: string){
    cy.request({
        method: 'PUT',
        url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees/'+empNumber+'/personal-details',
        body:
        UpdateAPIBody
      }).then((response) => {
       expect(response.status).to.equal(200);
    });   
}

checkUpdatedPersonalDerails(UpdateAPIResponse: UpdateAPIResponse, empNumber: string){
  cy.request({
      method: 'GET',
      url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees/'+empNumber+'/personal-details',
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.data).to.equal(UpdateAPIResponse);
    });
}

}
export default api;