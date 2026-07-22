// // // // // // // // console.log("Hello, TypeScript!");

// // // // // // // // function add(n1: number, n2: number): number {
// // // // // // // //     return n1 + n2;
// // // // // // // // }


// // // // // // // // //let age: number = "20";// type string asssigned to number variable, this will cause a type error in TypeScript.


// // // // // // // // //let age: number = 20;
// // // // // // // // //let language = "typescript"; // type inference, TypeScript infers the type of the variable based on the assigned value.

// // // // // // // // //let language: string = "TypeScript"; // type annotation, explicitly specifying the type of the variable.
// // // // // // // // //let year = 2000;//
// // // // // // // // //let ispassed = true;//


// // // // // // // // let data: any = "harun";
// // // // // // // // console.log(data.toUpperCase());

// // // // // // // // let data2: unknown = "harun ";
// // // // // // // // if (typeof data2 === "string") {
// // // // // // // //     console.log(data2.toUpperCase());
// // // // // // // // }

// // // // // // // // function welcome(): void {
// // // // // // // //     console.log("welcome to typescript");
// // // // // // // // }
// // // // // // // // let student = {
// // // // // // // //     name: "harun ",
// // // // // // // //     age: 22,
// // // // // // // //     city: "indore",
// // // // // // // //     ispassed: true
// // // // // // // // }


// // // // // // // // console.log(student);
// // // // // // // // console.log(student.name);
// // // // // // // // console.log(student.age);//dot notation
// // // // // // // // console.log(student["city"]);//bracket notation
// // // // // // // // console.log(student["ispassed"]);//bracket notation

// // // // // // // // let student2: {
// // // // // // // //     name: string;
// // // // // // // //     age: number;
// // // // // // // //     city: string;
// // // // // // // //     ispassed: boolean;
// // // // // // // // } = {
// // // // // // // //     name: "harun",
// // // // // // // //     age: 22,
// // // // // // // //     city: "indore",
// // // // // // // //     ispassed: true
// // // // // // // // };
// // // // // // // // student2.name = "sniy";
// // // // // // // // console.log(student2.name);

// // // // // // // // let employee: {
// // // // // // // //     id: number;
// // // // // // // //     name: string;
// // // // // // // //     company: string;
// // // // // // // //     salary: number;
// // // // // // // //     isworking: boolean;

// // // // // // // // } = {
// // // // // // // //     id: 1,
// // // // // // // //     name: "harun ",
// // // // // // // //     company: "tcs",
// // // // // // // //     salary: 20000,
// // // // // // // //     isworking: true,
// // // // // // // // }
// // // // // // // // console.log(employee);
// // // // // // // // employee.salary = 50000;
// // // // // // // // console.log(employee.name);
// // // // // // // // console.log(employee.salary);

// // // // // // // // console.log(employee);


// // // // // // // // //funtions in javascropt
// // // // // // // // functuon

// // // // // // // function greet() {
// // // // // // //     console.log("Hello, welcome to TypeScript!");
// // // // // // // }

// // // // // // // //function with parameters

// // // // // // // function greet2(name: string) {
// // // // // // //     console.log(`Hello, ${name}! Welcome to TypeScript!`);
// // // // // // // }

// // // // // // // greet2("Harun");

// // // // // // function addNumbers(num1: number, num2: number): number {
// // // // // //     return num1 + num2;

// // // // // // }
// // // // // // let num1 = 2;
// // // // // // let num2 = 3;
// // // // // // console.log(addNumbers(num1, num2));

// // // // // //functions with optinal prameters

// // // // // //retutn tyoes

// // // // // function add(num1: number, num2: number): number {
// // // // //     return num1 + num2;
// // // // // }
// // // // // function greet(name: string): string {
// // // // //     console.log(`${name}`)
// // // // // }

// // // // // greet("harun");

// // // // //funtions with optinal paaramters
// // // // function greet(name: string, city?: string): string {
// // // //     console.log(`Hello, ${name}! Welcome to ${city || "your city"}!`);
// // // //     return "name"
// // // // }

// // // // greet("harun")
// // // // greet("harun", "indore");

// // // //default parameters
// // // function greet(name: string = "guest") {
// // //     console.log(name);
// // // }
// // // greet();
// // // greet("harun");

// // function sum(...numbers: number[]) {
// //     console.log(numbers);
// // }
// // sum(1, 2, 3, 4, 5);

// const add = (a: number, b: number): number => {
//     return a + b;
// }

