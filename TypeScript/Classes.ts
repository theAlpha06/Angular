// Prefer pascal case for naming classes

import { Login, User } from './Interfaces';
// import * as UserLogin from './Interfaces';  UserLogin.Login and UserLogin.User

class EmployeeInformation implements Login {

    #id: number;
    protected name: string;
    address: string; // '!' is just to remove error

    constructor(id: number, name: string, address: string) {
        this.address = address;
        this.#id = id;
        this.name = name;
    };

    //getter
    get empId(): number {
        return this.#id;
    }

    //setter
    set empId(id: number) {
        this.#id = id;
    }

    getNameWithAddress(): string {
        return `${this.name} stays at ${this.address}`;
    }

    static getEmployeeCount(): number {
        return 50;
    }

    Login(): User {
        return {
            name: "John",
            id: 3,
            email: '2140103@sliet.ac.in'
        }
    }
}

// You can have either parametarized contructor or default contructor.

let shubh = new EmployeeInformation(1, 'Shubham', 'Punjab');
let address = shubh.getNameWithAddress();
console.log(address);

shubh.empId = 100;
console.log(shubh.empId);

// shubh.id; //!Error id is private
// shubh.name; //!Error name is protected

// let shubh = new EmployeeInformation();
// shubh.id = 1;
// shubh.name = 'Shubham';
// shubh.address = 'Punjab';

console.log(shubh);

class Manager extends EmployeeInformation {
    constructor(id: number, name: string, address: string) {
        super(id, name, address);
    }

    // getNameWithAddress(): string {
    //     return `${this.name} is a manager at ${this.address}`;
    // }
}

let kriti = new Manager(2, 'Kriti', 'Punjab');
console.log(kriti.getNameWithAddress());

// Static members can be accessed with the class name
console.log(EmployeeInformation.getEmployeeCount());