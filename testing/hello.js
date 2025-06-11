// let a=11
// if(a%2==0){
//     console.log("The Number is even")
// }else{
//     console.log("The Number is odd")
// }
// const prompt = require('prompt-sync')();
// const name = prompt("What is your name? ");
// console.log("Hello, " + name + "!");

// function square(x) {
//     let ans = 0;
//     ans = x*x ;
//     return ans;

// }
// console.log("The square of 5 is: " + square(5));

// const square= function(x=7){
//     let ans =0
//         ans = x*x ;
//     return ans;

// }
// console.log("The square of 5 is: " + square());


 function hello(name, age) {
     console.log("Hello " + name );
    age ();

 }

function greetUser(){
    console.log("age is 25");
}
hello("Alice",greetUser);

// function greet(name,cb)
// {
//     console.log("Hello " + name);
//     cb();
// }
// function greetUser() {
//     console.log("Welcome to the JavaScript world!");
// }
// greet("Alice", greetUser);

function delay(){
    return new Promise(resolve => setTimeout(() => {
            resolve('done waiting');
        }, 5000));
         }

async function run() {
 console.log('waiting...');
 const result = await delay();
 console.log(result);
         }  
         run();
