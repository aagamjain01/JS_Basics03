console.log("Chaliye shuru Karte hai");

//Hoisting

// run();

// //Function Declaration
// function run(){
//     console.log("running");
// }


// //Named Function Assignment
// let stand = function walk(){
//     console.log('walking');
// }

// stand();

// let jump = stand;
// jump();

// //Anonymous Function Assingment
// let stand2 = function(){
//     console.log('walking')
// }

// stand2();

//Function Declaration allows hoisting but Function Assignment not allowed hoisting.

//
// let x = 1;
// x = 'a';
// console.log(x);

// //
// function sum(a,b){
//     return a+b;
// };

// console.log(sum(5));


//Argument Object in JS
// function sum() {
//     let total = 0;
//     for(let value of arguments){
//         total= total + value;
//         return total;
//     }   
// }

// let ans = sum(9,1,2,3,4);
// console.log(ans);


//Rest Operator......
// function sum(a,b,...args){
//     console.log(args);
// }

// sum(1,2,3,4,5);


//Default Parameters
function interest(p,r=20,y){
    return p*r*y/100;
}

console.log(interest(1000,10,2));