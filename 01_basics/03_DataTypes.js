"use strict"; //treat all js code as a newer version

// alert(3+3); not run bcoz we are in node js

// coding standard

console.log(3+ 
    3); // code readability should be high

//Data types in javascript

//Primitive data types 
let name = "Mangesh";
let isloggegIn = true;
let home = null;
let office = undefined;
let number = BigInt(152463345)
let i = Symbol("Welcome");

// Check types of data type wuth the use of typeof keyword 
console.log(typeof name);
console.log(typeof isloggegIn);
console.log(typeof home);
console.log(typeof office);
console.log(typeof number);
console.log(typeof i);

// Print all the data type value in console
console.log( "value of name" , name);
console.log( "value of isloggedIn" , isloggegIn);
console.log( "value of home" , home);
console.log( "value of office" , office);
console.log( "value of number" , number);
console.log( "value of i" , i); 


//Object type / non primitive data types 
//in object we can store array value also we can define a function in it 


let obj =[{
    id:101,
    name:'Mangesh',
    age:25,
    salary:2500,
    department:'IT',
}]  // define student details in an array object 

for(let std of obj){
    console.table([std.id,std.name,std.age,std.salary,std.department]);
}

for(let s in obj){
    console.log(obj[s]);
}

// Some example of object data types 

let studentDetails = [{
    studentId : 101,
    studentName : 'Mangesh',
    email : 'mghule1020@gmail.com',
    password : 'pass@123',
    mobileNumber : 8669676072
}]

for(let student of studentDetails){
    console.table([
        student.studentId,
        student.studentName,
        student.email,
        student.password,
        student.mobileNumber
    ])
} // use for of loop 

for(let student in studentDetails){
    console.log(studentDetails[student]);
}

