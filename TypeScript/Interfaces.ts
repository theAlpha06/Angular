export interface User{
    name: string;
    age?: number; // age is optional
    id: number;
    email: string;
}

let user : User = {
    name: "John",
    // age: 23, // No error
    id: 3,
    email: '2140103@sliet.ac.in'
};

interface Employee extends User {
    salary: number;
}

let employee: Employee = {
    name: 'Shubham',
    id: 2,
    email: '23@sd',
    salary: 23424
}

export interface Login {
    Login(): User;
}

let [user1, user2, ...remainingUsers]: User[] = [
    {name: 'Shubh', id: 1, email: ''},
    {name: 'Sunny', id: 2, email: ''},
    {name: 'Kritagya', id: 3, email: ''},
    {name: 'Shudhanshu', id: 4, email: ''},
    {name: 'Rich Ravi', id: 5, email: ''}
];
console.log(user1, user2, ...remainingUsers);

//! Interfaces will be removed in production build