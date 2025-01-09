

// function isPalindrome(str)
// {
//     let revStr="";
//     for(let i = str.length-1;i>=0;i--){
//         revStr += str[i];
//     }
//     if(str == revStr){
//         console.log("palindrom");
//     }
//     else{
//         console.log("not a palindrom")
//     }

// }
// isPalindrome("sir")
// isPalindrome("madam")
// isPalindrome("malayalam")
// isPalindrome("badad")


// /! Palindrome program
// function isPalindrome(str) {
//     let revstr = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         revstr += str[i];
//     }

//     if (str == revstr) {
//         console.log("Palindrome");
//     } else {
//         console.log("Not a palindrome");
//     }
// }
// isPalindrome("sir");
// isPalindrome("Madam");
// isPalindrome("madam");
// isPalindrome("malayalam");


// //! Named function
// function onemoretime() {
//     console.log("Not understood, tell me one more time");
// }
// onemoretime();


//! Anonymous function
// function() {
//     console.log("Anonymous function");
// }


// Array
// let x = [1, 2, 3, 4];
// console.log(x);


//! function expression
// let a = function {
//     console.log("Function expresson");
// };
// console.log(x);
// a();


//! Immediate invoke function expression
// (
//     function () {
//         console.log("IIFE");
//     }
// )();


//! Arrow function
// let v = () => { console.log("hello") };
// v();

// let c = _ => console.log("Hello");
// c();

// let b = s => console.log(s);
// b(10);

// let r = (t, y) => console.log(t + y);
// r(10, 20);

// let u = _ => console.log("hi");
// console.log("bye");
// console.log("ok");
// u();

// let i = _ => {

// }
// i();


//! return - Explicit return 
// function add(a, b) {
//     console.log("I am printing before return keyword");
//     return a + b;
//     console.log("I am printing after return keyword");
// }
// let x = add(10, 20);
// console.log(x);

//! return - Implicit return
let x = (a, b) => { return a + b; }
console.log(x(3, 3));

let y = (a, b) => a + b;
console.log(y(3, 3));