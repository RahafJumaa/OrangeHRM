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

export interface DeleteAPIBody {
    "ids" : string[]
}

export interface UpdateAPIBody {
    empNumber: string,
    lastName: string,
    firstName: string,
    middleName: string,
    employeeId: string,
    otherId: string,
    drivingLicenseNo: string,
    drivingLicenseExpiredDate: string,
    gender: number,
    birthday: string,
    nationalityId: number,
    ssnNumber: string,
    sinNumber: string,
    nickname: string,
    smoker: boolean,
    militaryService: string,
}



