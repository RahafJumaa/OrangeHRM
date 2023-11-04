import { createDeleteEmployeeBody, createEmployeeBody, createUpdateEmployeeBody, createUserBody } from "@support/EmolyeeTypes/constants";
import {EmployeeAPIBody,UserAPIBody,DeleteAPIBody,UpdateAPIBody} from "../../../support/EmolyeeTypes/types";
class EmployeePageDataUtils{
   public empNumber: string;
    createEmployee(employeeAPIBody: EmployeeAPIBody){
       return cy.request({
            method: 'POST',
            url: '/api/v2/pim/employees',
            body: 
            createEmployeeBody(employeeAPIBody),
          }).then((response) => response.body
          );
    }

    createUser(userAPIBody: UserAPIBody){
      return cy.request({
         method: 'POST',
         url: '/api/v2/admin/users',
         body: 
         createUserBody(userAPIBody),
       }).then((response) => {
         return response.body;
      });
   }
   
    checkPersonalDerails(employeeId: string, empNumber: string){
        cy.request({
            method: 'GET',
            url: `/api/v2/pim/employees/${empNumber}/personal-details`,
          }).then((response) => {
            expect(response.body.data.employeeId).to.equal(employeeId);
          });
    }

updateEmployee(updateAPIBody: UpdateAPIBody,empNumber: string){
    cy.request({
        method: 'PUT',
        url: `/api/v2/pim/employees/${empNumber}/personal-details`,
        body:
        createUpdateEmployeeBody(updateAPIBody)
      }).then((response) => {
        return response.body;
      });  
}

getEmployeeByName(name: string){
  cy.request({
    method: 'GET',
    url: `/api/v2/pim/employees?limit=50&offset=0&model=detailed&nameOrId=${name}&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC`,
  }).then((response) => {
    for(let i=0; i<response.body.meta.total; i++){
    expect(response.body.data[i].firstName).to.include(name);
    }
  });
}

getEmployeeByID(id :string){
  return cy.request({
    method: 'GET',
    url: `/api/v2/pim/employees?limit=50&offset=0&model=detailed&employeeId=${id}&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC`,
  }).then((response) => {
    return response.body;
  });
}

getEmployeeByNameAndID(name: string, id :string){
  cy.request({
    method: 'GET',
    url: `/api/v2/pim/employees?limit=50&offset=0&model=detailed&nameOrId=${name}&employeeId=${id}&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC`,
  }).then((response) => {
    expect(response.body.data[0].employeeId).to.equal(id);
    expect(response.body.data[0].firstName).to.equal(name);
  });
}

deleteEmployee(id :string){
  this.getEmployeeByID(id).then((response) => {
     if (Array.isArray(response) && response.length === 0) {
      return;
      }
      else {
    cy.request({
      method: 'DELETE',
      url: '/api/v2/pim/employees',
      body:
      {ids: [response.data[0].empNumber]}
    }); 
  }
  });    
}
}
export default EmployeePageDataUtils;