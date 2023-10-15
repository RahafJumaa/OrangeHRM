export interface EmployeeAPIBody {
    firstName : string;
    middleName : string;
    lastName : string;
    employeeId: string;
}

export interface UserAPIBody {
    username : string;
    password : string;
    userRoleId : number;
    status : boolean;
    empNumber: string ;
}
