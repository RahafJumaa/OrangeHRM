import { EmployeeAPIBody, UserAPIBody, UpdateAPIBody, DeleteAPIBody } from "./types";

export const createEmployeeBody = (employeeAPIBody : EmployeeAPIBody) => {
    return {
        ...employeeAPIBody,
    }
};

export const createUserBody = (userAPIBody : UserAPIBody) => {
    return {
        ...userAPIBody,
    }
};

export const createUpdateEmployeeBody = (updateAPIBody : UpdateAPIBody) => {
    return {
        ...updateAPIBody,
    }
};

export const createDeleteEmployeeBody = (deleteAPIBody : DeleteAPIBody) => {
    return {
        ...deleteAPIBody,
    }
};
