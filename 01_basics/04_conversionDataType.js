// convert string or another data type in Number

let  name = undefined;
// let name = "33abc"  its getting error after convert in number -NaN
// let name = true  its getting boolean value if true -1 / false -2
// let name = null getting null - 0 value 
// let name = undefined getting NaN value
console.log("Type  of name before convert is ",typeof name);
console.log("value of datatype",name)

let convertName = Number(name) // for convert dataType to number we use Number before parenthesis
console.log("Type of name after convert is ",typeof convertName);
console.log(convertName);

//convert dataType into boolean

let id = "hello";
// let id ="name" convert to booleant value true
// let id =" " convert to boolean value false
// let id = null convert to boolean value false
// let id = undefined  convert to boolean value false 
console.log("Type of id before convert is ", typeof id);
console.log(id);

let myId = Boolean(id);
console.log("Type of id after convert is ",myId);
console.log(myId);
