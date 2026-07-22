"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("hello world");
let harun = "hello harun";
console.log(harun);
let age = 12;
let oname = "harun mansuri";
const uname = "saniya baby";
let isloggedin = true;
let value = 10;
value = "hello";
value = true;
console.log(value);
let data = "haerun";
if (typeof data === "string") {
    console.log(data.toUpperCase());
}
void function printname(name, age) {
    console.log(`my name is ${name} and my age is ${age}`);
};
const add = (n1, n2) => {
    return n1 + n2;
};
let value2 = null;
let value3 = undefined;
let person = "harun"; //atomatically deetect type compiler decide kareag 
let person2 = "harun"; //manually detect type developer decide karega 
let hname = "harun mansuri";
let age2 = 12;
let personn4 = "harun mansuri";
personn4 = 12; //the type number is assignable to type any
let person8 = "harun mansuri";
person8 = 12; //the type number is not assignable to type string
//solution
// if(typeof person8 === "string"){
//    console.log(person8.toUpperCase());
//}
// tsc index.ts
//tsc --watch
//tsc --init
//const salary: number = "harun";//the type string is not assignable to type number
//let age: number = "harun";
// type stig is not assgineed to number
//strict yse karon
//any avoid karo
//meaningfullm veriables use kaeo
//type inference use karo
//# sourceMappingURL=index.js.map