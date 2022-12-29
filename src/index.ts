let sales : number = 100_4304_032234;
let course : string = "TypeScript";
let isPublished : boolean = true;
let ratings = 5;
let value;
value = 1;
value = "stringtype";

//Array
let array : number[] = [12,34,90];
let array1 = ["hello","world"];

//Tuple
let tuple : [number, string] = [21, "hello"];

//enum
const enum Size{
    small=1,
    medium,
    large
}

let mySize : Size = Size.medium;
console.log(mySize);
type User = {
    name: string,
    age: number,
    email? : string
}

let user : User = { name : "aditya", age: 29};

console.log(user.name);
console.log(user.email);

let message = "hello how are you";
let msg = message.slice(2,5)
console.log(msg);

