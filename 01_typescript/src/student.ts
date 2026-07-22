let studentName: string = "harun mansuri";
let age: number = 23;
let ispassed: boolean = true;
let favoriteSubjects: string[] = ["Math", "Science", "English"];

//greet function
function greet(name: string): string {
    console.log(`Hello, ${name}!`);
    return `Hello, ${name}!`;
}

console.log(greet(studentName));
console.log(`age ${age}`);
console.log(`ispassed ${ispassed}`);
console.log(`favorite subjects: ${favoriteSubjects.join(", ")}`);

