import {EmployeeAPIBody,UserAPIBody,DeleteAPIBody,UpdateAPIBody} from "../../../support/EmolyeeTypes/types";
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
         return response.body;
      });
   }


    checkPersonalDerails(employeeId: string, empNumber: string){
        cy.request({
            method: 'GET',
            url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees/'+empNumber+'/personal-details',
          }).then((response) => {
            expect(response.body.data.employeeId).to.equal(employeeId);
          });
    }

    DeleteEmployee(DeleteAPIBody: DeleteAPIBody){
      cy.request({
          method: 'DELETE',
          url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees',
          body:
            DeleteAPIBody
        });       
  }

UpdateEmployee(UpdateAPIBody: UpdateAPIBody,empNumber: string){
    cy.request({
        method: 'PUT',
        url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees/'+empNumber+'/personal-details',
        body:
        UpdateAPIBody
      });  
}

searchOnEmployeeByName(name: string){
  cy.request({
    method: 'GET',
    url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&nameOrId='+name+'&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC',
  }).then((response) => {
    for(let i=0; i<response.body.meta.total; i++){
    expect(response.body.data[i].firstName).to.include(name);
    }
  });
}

 searchOnEmployeeByID(id :string){
  return cy.request({
    method: 'GET',
    url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&employeeId='+id+'&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC',
  }).then((response) => {
    expect(response.body.data[0].employeeId).to.equal(id);
    expect(response.body.meta.total).to.equal(1);
    return response.body;
  });
}

searchOnEmployeeByNameAndID(name: string, id :string){
  cy.request({
    method: 'GET',
    url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&nameOrId='+name+'&employeeId='+id+'&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC',
  }).then((response) => {
    expect(response.body.data[0].employeeId).to.equal(id);
    expect(response.body.data[0].firstName).to.equal(name);
  });
}

}
export default api;