"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = {
    name: "John",
    // age: 23, // No error
    id: 3,
    email: '2140103@sliet.ac.in'
};
let employee = {
    name: 'Shubham',
    id: 2,
    email: '23@sd',
    salary: 23424
};
let [user1, user2, ...remainingUsers] = [
    { name: 'Shubh', id: 1, email: '' },
    { name: 'Sunny', id: 2, email: '' },
    { name: 'Kriti', id: 3, email: '' },
    { name: 'Shudh', id: 4, email: '' },
    { name: 'Ravi', id: 5, email: '' }
];
console.log(user1, user2, ...remainingUsers);
