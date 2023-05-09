"use strict";
// Prefer pascal case for naming classes
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _EmployeeInformation_id;
Object.defineProperty(exports, "__esModule", { value: true });
// import * as UserLogin from './Interfaces';  UserLogin.Login and UserLogin.User
class EmployeeInformation {
    constructor(id, name, address) {
        _EmployeeInformation_id.set(this, void 0);
        this.address = address;
        __classPrivateFieldSet(this, _EmployeeInformation_id, id, "f");
        this.name = name;
    }
    ;
    //getter
    get empId() {
        return __classPrivateFieldGet(this, _EmployeeInformation_id, "f");
    }
    //setter
    set empId(id) {
        __classPrivateFieldSet(this, _EmployeeInformation_id, id, "f");
    }
    getNameWithAddress() {
        return `${this.name} stays at ${this.address}`;
    }
    static getEmployeeCount() {
        return 50;
    }
    Login() {
        return {
            name: "John",
            id: 3,
            email: '2140103@sliet.ac.in'
        };
    }
}
_EmployeeInformation_id = new WeakMap();
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
    constructor(id, name, address) {
        super(id, name, address);
    }
}
let kriti = new Manager(2, 'Kriti', 'Punjab');
console.log(kriti.getNameWithAddress());
// Static members can be accessed with the class name
console.log(EmployeeInformation.getEmployeeCount());
