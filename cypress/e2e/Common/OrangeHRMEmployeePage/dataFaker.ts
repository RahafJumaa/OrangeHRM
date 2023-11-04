import {EmployeeAPIBody,UserAPIBody} from "../../../support/EmolyeeTypes/types";
import { getPrefix } from "@support/data";

const range = {min: 1000, max: 9999};
const delta = range.max - range.min;
const employeeId = (Math.round(range.min + Math.random() * delta)).toString();

export const getEmployee = (): EmployeeAPIBody => {
    return {
        firstName: "Rahaf",
        middleName: "Suliman",
        lastName: "Jumaa",
        employeeId: employeeId
    }
};

export const getUser = (): UserAPIBody => {
    return {
        username: getPrefix()+"rahaf",
        password: "rahaf123",
        userRoleId: 2,
        status: true,
        empNumber: ""
    }
};