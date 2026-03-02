// let x = 5;
// function myfunc() {
//   x = 3;
// }
// myfunc();
// console.log(x);
// // alert(x);

// carName = "Volvo";
// let carName;

// {
// "use strict";
// x = 3.14; 
// }

// let factorial = (function factorial(number){
    
//     if(number<=1){
//         return 1;
//     }else{
//         console.log(number);
//         return number*factorial(number-1);
//     }
// }
// )(5);

// console.log(factorial);

// let counter = (
//     function(){
//         let count = 0;
//         return {
//             increment() {count++;},
//             get() {return count;}
//             }
//         }
// )();

// counter.increment();
// counter.increment();
// counter.increment();
// let count = counter.get();
// console.log(count); 


// let likes = (
//     function(){
//          let numberOfLikes = 0;
//          return{
//             like(){numberOfLikes++;},
//             dislike(){numberOfLikes--;},
//             getLikes(){return numberOfLikes;}
//          }
//     }
// )();


// likes.like();
// likes.like();
// likes.like();
// likes.like();
// likes.like();
// likes.like();
// likes.dislike();
// let numberOfLikes = likes.getLikes();
// console.log(numberOfLikes);


function likesCounter(){
    let likes = 0;
    return {
        increment() {
            likes++;
        },
        decrement() {
            likes--;
        },
        getLikes() {
            return likes;
        }
    };
}

let count = likesCounter();
count.increment();
count.increment();
count.increment();
count.increment();
console.log(count.getLikes());
count.decrement();
count.decrement();
count.decrement();
console.log(count.getLikes());