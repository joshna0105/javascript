// console.log(10);
// console.log(20);
// console.log(30);
// setTimeout(()=>{
//     console.log(80);
// },5000)
// console.log(40);
// console.log(50);
// console.log(60);
// setInterval(()=>{
//     document.writeln("mru");
// },50)


// let p1 = new Promise((resolve , reject)=>{});
// console.log(p1);

let p2 = new Promise((resolve,reject)=>{
    resolve("success");
});
console.log(p2);
p2.then((response)=>
{
    console.log(response);
}).catch((error)=>{
    console.log(error);
}).finally(()=>console.log("finally printing for both"))

let p3 = new Promise((resolve,reject)=>{
    reject("failures");
});
console.log(p3);