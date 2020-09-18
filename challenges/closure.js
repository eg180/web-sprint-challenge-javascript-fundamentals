// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */



const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

// The variable internal can be accessed because the are both within the same scope inside myFunction()


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(number) {
  let cumulativeTotal = 0;
  let counter = -1;
  for(let i=0; counter < number; i++) {
    cumulativeTotal += i;
    counter += 1;
  } console.log(cumulativeTotal);
}

summation(4);