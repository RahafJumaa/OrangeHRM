class api{
  public empNumber;
  
    NavigateToAddEmployeePage(){
        cy.request('GET','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC')
        .then((response) =>{
        expect(response.status).to.eq(200);
    })
    
        cy.request('GET','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees')
        .then((response) =>{
        expect(response.status).to.eq(200);
    })
    }

    AddEmployeeWithoutCreateLoginDetails(){
         cy.request({
            method: 'POST',
            url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees',
            body: {
                "firstName":"Rahaf",
                "middleName":"Suliman",
                "lastName":"Jumaa",
                "employeeId":"4422",
            }
          }).then((response) => {
            expect(response.status).to.equal(200);
            console.log(response.body.data.empNumber);
            console.log("rahaf");
            this.empNumber = response.body.data.empNumber;
          });
    }

    AddEmployeeWithCreateLoginDetails(){
      cy.request({
         method: 'POST',
         url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees',
         body: {
             "firstName":"Rahaf",
             "middleName":"Suliman",
             "lastName":"Jumaa",
             "employeeId":"4422",
         }
       }).then((response) => {
         expect(response.status).to.equal(200);
         console.log(response.body.data.empNumber);
         console.log("rahaf");
         this.empNumber = response.body.data.empNumber;
       });

       cy.request({
         method: 'POST',
         url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users',
         body: {
           "username": "rahaf43288",
           "password": "roro1234",
           "status": true,
           "userRoleId": 2,
           "empNumber": this.empNumber
       }}).then((response) => {
         expect(response.status).to.equal(200);
      });
   }

    checkPersonalDerails(){
        cy.request({
            method: 'GET',
            url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees/'+this.empNumber+'/personal-details',
          }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.data.employeeId).to.equal('4422');
          });
    }

}
export default api;