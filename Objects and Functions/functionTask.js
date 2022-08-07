// Pears and apples are accepted to the warehouse, write a function that returns the result of adding the number of accepted pears and apples

function sumPearsAndApples(pears, apples) {
  return pears + apples;
}

// Your name is saved in the payment terminal, write a function to define the name in the terminal (if you entered your name, then hello + name, if not, then there is no such name)

let myNameInTerminal = "Vlad";

function checkMyName(name) {
  if (myNameInTerminal === name) {
    console.log("Helllo" + name);
  } else {
    console.log("There is no such name");
  }
}

// Write a function for calculating the type of argument and type output to the console

function getType(argument) {
  console.log(typeof argument);
}

// Write a function that determines whether a number is prime or not

function isPrime(number) {
  if (number < 1) {
    console.log("Number is less than 1");
    return;
  }
  if (number === 1) {
    console.log(`It's just 1`);
    return;
  }
  if (number % 1 !== 0) {
    console.log("Number is not integer");
    return;
  }
  if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        console.log("Number is not prime");
        return;
      }
    }
    console.log("Number is prime");
  }
}
