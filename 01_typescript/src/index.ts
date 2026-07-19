console.log("hello world");
let harun: string = "hello harun";
console.log(harun);
let age: number = 12;
let oname: string = "harun mansuri";
const uname: string = "saniya baby";
let isloggedin: boolean = true;
let value: any = 10;
value = "hello";
value = true;
console.log(value);


let data: unknown = "haerun";

if (typeof data === "string") {
    console.log(data.toUpperCase());
}

void function printname(name: string, age: number): void {

    console.log(`my name is ${name} and my age is ${age}`);
}
const add = (n1: number, n2: number): number => {
    return n1 + n2;
}


let value2: null = null;
let value3: undefined = undefined;

let person = "harun"//atomatically deetect type compiler decide kareag 
let person2: string = "harun"//manually detect type developer decide karega 


// tsc index.ts
//tsc --watch
//tsc --init

//let age: number = "harun";
// type stig is not assgineed to number

