var a = 12;

//Array

let arr = [1, 2, 3, 4, 5];

//Tuples

let arr2: [number, string, boolean] = [1, "Hamid", true];

//Enumerations

enum Color { NAME = 'hamid', AGE = 12 }

//Any
let a: number;
a = 12;

//Unknown
//void
//null
//undefined
//never


interface Hamid{
    name: string;
    age: number;
    email: string;
    password: string;
    salary?: number; //optional
}

function hamid(fawaz: Hamid){
    fawaz.
}  

interface User {
    name: string;
    age: number;
    email: string;
    password: string;
    salary?: number;
}

interface Admin extends User {
    admin: boolean;
}