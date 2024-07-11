const id = 1;
var name = 'Mangesh';
let email ='mghule1020@gmail.com'

/* 
id = 2 error getting const can  not redclared and updated this is block scope variable
console.log(ids);
*/

/*
var is global scope that can be redeclared and updated
*/
var name = 'rahul'
console.log(name); 

// let email ='test@gmail.com'; we cannot redeclared block scope varibale but update it !

email = 'test@gmail.com';
console.log(email);

console.table([id,name,email]);

