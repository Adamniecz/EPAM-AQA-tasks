// Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console

for (let i = 0; i < movies.length; i++) {
  console.log(movies[i]);
}

// Given an array of car manufacturers, convert the array to a string and back to an array

let stringFromArray = carManufacturers.toString();

let arrayFromString = stringFromArray.split(",");

// Given an array of the names of your friends, add the words hello to each element of the array

let helloFriends = friends.map((friend) => "Hello " + friend);

// Convert numeric array to Boolean

let numArrayToBoolean = array.map((num) => Boolean(num));

// Sort the array [1,6,7,8,3,4,5,6] in descending order

let arrDescendigOrder = [1, 6, 7, 8, 3, 4, 5, 6]
  .sort((a, b) => a - b)
  .reverse();

// Filter array [1,6,7,8,3,4,5,6] by value> 3

let elementsMoreThanThree = [1, 6, 7, 8, 3, 4, 5, 6].filter((el) => el > 3);

// Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number

function indexOfArray(arr, num) {
  return arr.indexOf(num);
}

// ﻿Implement a loop that will print the number 'a' until it is less than 10

for (let i = 0; i < 10; i++) {
  console.log("a");
}

// Implement a loop that prints prime numbers to the console

for (let i = 0; i < 12; i++) {
  let isPrime = true;

  if (i < 1) {
    console.log("Number is less than 1");
    continue;
  }
  if (i === 1) {
    console.log(`It's just 1`);
    continue;
  }
  if (i > 1) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        console.log(`Number ${i} is not prime`);
        isPrime = false;
        break;
      }
    }
  }
  if (isPrime) {
    console.log(`Number ${i} is prime`);
  }
}

// Implement a loop that prints odd numbers to the console

for (let i = 0; i < 12; i++) {
  if (i % 2 === 1) {
    console.log(`Number ${i} is odd`);
  }
}
