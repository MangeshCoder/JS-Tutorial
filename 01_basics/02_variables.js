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


/*
  1. variable is global scope and can be redeclared and updated 
  2. const is clock scope and it can be redclared and updated 
  3. let is fubction scoped can be updated but cannot be redclared 
*/

