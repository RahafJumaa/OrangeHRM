import { employeeAPIBody, userAPIBody, updateAPIBody, deleteAPIBody } from "./types";

export const createEmployeeBody = (employeeAPIBody : employeeAPIBody) => {
    return {
        ...employeeAPIBody,
    }
};

export const createUserBody = (userAPIBody : userAPIBody) => {
    return {
        ...userAPIBody,
    }
};

export const createUpdateEmployeeBody = (updateAPIBody : updateAPIBody) => {
    return {
        ...updateAPIBody,
    }
};

export const createDeleteEmployeeBody = (deleteAPIBody : deleteAPIBody) => {
    return {
        ...deleteAPIBody,
    }
};
