import { v4 as uuid } from 'uuid';

export enum Department {
    Dev = 'dev',
    Sales = 'sales',
}

export interface Employee {
    jobId: string;
    name: string;
    dob: Date;
    department: Department;
}

export interface EmployeeAdd {
    name: string;
    dob: Date;
    department: Department;
}

export interface EmployeeUpdate {
    department?: Department;
    dob?: Date;
    name?: string;
}

export class Developer implements Employee {
    jobId = uuid();
    name: string;
    dob: Date;
    department: Department;

    constructor(init: EmployeeAdd) {
        this.name = init?.name;
        this.dob = init?.dob;
        this.department = init?.department;
    }

    update(params: EmployeeUpdate) {
        Object.assign(this, params);
    }
}

const gopal = new Developer({
    name: 'Gopal',
    dob: new Date(2022, 9, 15),
    department: Department.Dev
});

console.log(gopal)

gopal.update({
    // name: 'T.C. Gopal',
    department: Department.Sales,
    // dob: new Date(1997, 9, 1)
})

console.log(gopal)