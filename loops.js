// Week 2 - Loops

// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

let i = 1;
 while (i<6){
console.log(i++)  };

// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

do {
  console.log(i++);
} while (i<6)

// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

//each condition in for loop is sep by ";" don't forget

var k;
for (k=1; k < 6; k++){
  console.log(k);
};



// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.
//first way
let i=10;
while ( i<=10 && i>0){
  console.log(i--);
}

//second ways
do {
  console.log(i--);
} while (i<=10 && i>0);

// for loop
var k;
for (k=10; k <= 10 && k >0; k--){
  console.log(k);
};




// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

//1
let i = 7;
 while (i<28){
console.log(i++)  };
//2
do {
  console.log(i++);
} while (i<28)
//3
var k;
for (k=7; k < 28; k++){
  console.log(k);
};

var k;
for (k=0; k < 91;){
  k= k+10;
  console.log(k);
};




// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

let i = -10;
 while (i<91){
  (i=i+10)
  console.log(i)  };


  let i=0;
  do {
    i=i+10;
    console.log(i)
    ;
  } while (i<91)






// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.



//it will never stop because 1 already satisifies the while loop condition and will never end or break
let counterFour = -100;
while (counterFour >= -100) {
  console.log("HELP ME!");
  counterFour--;
}

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.

var k;
for (k= -232333; k < 1000000;){
  k= k+232333;
  console.log(k);
};

// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)


var k;
let favnum = 4;
for (k=0; k < 20;){
  k++;
        if (k === favnum) {
    console.log(favnum + ' is my favorite');
  }
  console.log(k);
};





// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:


// For loop is good for going through an index. While loop is good for just doing something for a specific
// condition. Do loop hmmm not really sure what that's good for. ehhh



// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
***********************************
counting down from 1
inside 1
***********************************
counting down from 2
inside 2
inside 1
***********************************
counting down from 3
inside 3
inside 2
inside 1
***********************************
*/

// for (let outsideCounter = 0; outsideCounter <= 3 /*???*/; ) {
//   console.log("counting down from", outsideCounter);
//   for (let insideCounter = outsideCounter /*???*/ /*???*/; ; ) {
//     console.log("inside" /*???*/);
//   }
//   console.log("***********************************");
// }

//references:

//https://www.w3schools.com/js/js_loop_for.asp
//https://www.w3schools.com/js/js_loop_while.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
//https://www.freecodecamp.org/news/javascript-loops-explained-for-loop-for/




// Email your file to us or commit your file to GitHub and email us a link.
