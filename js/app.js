console.log("js is wrkng")

// CONCEPTUAL QUESTIONS

// 1. let/const variable = value
// 2. variable = newValue
// 3. let/const newVariable = variable

// STRINGS

// 1.
  let firstVariable;

  firstVariable = 'Hello World';

  firstVariable = 27;

  let secondVariable = firstVariable;

  secondVariable = secondVariable.toString();

  console.log(firstVariable);
  // => 27 (number)

// 2. 
  const yourName = 'Ron Clark'

  console.log(`Hello, my name is ${yourName}`);

// BOOLEANS

  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

// a < b
// c > d
// 'Name' === 'Name'
// a < b < c
// a === a < d
// e === 'Kevin'
// 48 == '48'


// THE FARM

// 1.
  let animal;
    
  if (animal === 'cow') {
    console.log('mooooo')
  };

// 2.
    
  if (animal === 'cow') {
    console.log('mooooo')
  } else {
    console.log("Hey! You're not a cow.")
  };

// DRIVER'S ED

// 1.
  let age;

// 2.
  
  if (age >= 16) {
    console.log('Here are the keys')
  };

// 3.
  
  if (age >= 16) {
    console.log('Here are the keys')
  } else if (age < 16) {
    console.log("Sorry, you're too young.")
  };
  
// JUST LOOP IT

// 1.
  
  for (let i = 0; i <= 10; i++) {
    console.log(i)
  };

// 2.

  for (let i = 10; i <= 4000; i++) {
    console.log(i)
  };

// 3.

  for (let i = 10; i <= 4000; i += 2) {
    console.log(i)
  };

// LET'S GET EVEN

// 1.

  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log(i)
    }
  };

// 2.

  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is an even number`)
    }
  };

// GIVE ME FIVE

// 1.

  for (let i = 0; i <= 100; i++) {
    if (i % 5 === 0) {
      console.log(`I found a ${i}. High five!`)
    }
  };

// 2.

  for (let i = 0; i <= 100; i++) {
    if (i % 5 === 0) {
      console.log(`I found a ${i}. High five!`)
    } else if (i % 3 === 0) {
      console.log(`I found a ${i}. Three is a crowd`)
    }
  };

// SAVINGS ACCOUNT

// 1.
  
  let bankAccount = 0;

  for (let i = 1; i <= 10; i++) {
    bankAccount = bankAccount + i;
  };

  console.log(bankAccount);

// 2.

  bankAccount = 0;

  for (let i = 1; i <= 100; i++) {
    bankAccount = bankAccount + 2*i;
  };  

  console.log(bankAccount);

// MULTIPLES OF 3 AND 5

  const multiples = [];

  for (let i = 0; i < 1000; i++) {
    if (i % 5 === 0 || i % 3 === 0) {
      multiples.push(i);
    }
  };
  const finalSum = multiples.reduce((a, b) => a + b, 0);
  console.log (finalSum);

// EASY DOES IT

// 1.
  
  const quotes = ["vini vidi vici", "et tu brute?", "that's a spicy meatball!"];

// RANDOM

  const randomThings = [1, 10, "Hello", true];

// 1.
  
  randomThings[0];

// 2.

  randomThings[2] = "World";

// 3.

  console.log(randomThings);

// WE'VE GOT CLASS

// 4.

  const myArray = [5 ,10 ,500, 20]

// 5.

  myArray.push("Egon");

// 6.

  myArray.pop();

// 7.

  myArray.unshift("Bob Marley");

// 8.

  myArray.shift();

// 9.

  myArray.reverse();

  console.log(myArray);

// BIGGIE SMALLS

  let num;

// 1.

  if (num < 5) {
    console.log('little number')
  } else {
    console.log(num)
  };

// 2.

  if (num > 100) {
    alert('big number')
  } else {
    console.log(num)
  };

// MONKEY IN THE MIDDLE

  if (num < 5) {
    console.log('little number')
  } else if (num > 10) {
    console.log('big number')
  } else {
    console.log('monkey')
  };

// WHATS IN YOUR CLOSET

  const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];

  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

// 1. 

  console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`)

// 2.

  const kristynShoe = kristynsCloset.shift();

// 3.

  kristynsCloset.splice(5, 0, "raybans");

// 4.

  kristynsCloset[4] = "stained knit hat";

// 5.

  thomsCloset[0][0];

// 6.

  thomsCloset[1][1];

// 7.

  thomsCloset[2][2];

// 8.

  console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]} and ${thomsCloset[2][2]}!`);

// 9.

  thomsCloset[1][2] = "Footie Pajamas"

// FUNCTIONS

// Print Greeting

  const printGreeting = (name) => {
    console.log(`Hello there, ${name}!`)
  };

// Reverse Word Order

  const reverseWordOrder = (string) => {
    return string.split(" ").reverse().join(" ");
  };

  console.log(reverseWordOrder('Call me Ishmael'))

// Calculate

  const calculate = (num1, num2, operation) => {
    if (operation === 'add') {
      return num1 + num2
    } else if (operation === 'sub') {
      return num1 - num2
    } else if (operation === 'mult') {
      return num1 * num2
    } else if (operation === 'div') {
      return num1 / num2
    } else if (operation === 'exp') {
      return Math.pow(num1, num2)
    }
  };

// NUMBER 1
// Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.

  const printCool = (name) => {
    console.log(`${name} is cool`)
  };

  printCool("Captain Reynolds");
//=> "Captain Reynolds is cool";

// NUMBER 2
// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.

  const calculateCube = (cubeSide) => {
    console.log(Math.pow(cubeSide, 3))
  }

  calculateCube(5);
//=> 125

// NUMBER 3
// Write a function isAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.

  const isAVowel = (character) => {
    if (character === 'a' || 'e' || 'i' || 'o' || 'u' || 'A' || 'E' || 'I' || 'O' || 'U') {
      return true;
    } else {
      return false;
    }
  };

  console.log(isAVowel('U'));
//=> true

// NUMBER 4
// Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

  const getTwoLengths = (str1, str2) => {
    return [str1.length, str2.length];
  }

  console.log(getTwoLengths("Hank", "Hippopopalous"));
//=> [4, 13]

// NUMBER 5
// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

  const getMultipleLengths = (arr) => {
    const output = [];

    for (let i = 0; i < arr.length; i++) {
      output.push(arr[i].length);
    }

    return output;

  };

  console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
//=> [5, 4, 2, 2, 4]

// NUMBER 6
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.

  const maxOfThree = (number1, number2, number3) => {
    if (number1 >= number2 && number3) {
      return number1
    } else if (number2 >= number1 && number3) {
      return number2
    } else if (number3 >= number1 && number2) {
      return number3
    }
  };

  console.log(maxOfThree(6, 9, 1));
//=> 9

// NUMBER 7
// Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

  const printLongestWord = (arrayOfStrings) => {
    let longestWordSoFar = arrayOfStrings[0];

    for (let i = 0; i < arrayOfStrings.length; i++) {
      if (arrayOfStrings[i].length > longestWordSoFar.length) {
        longestWordSoFar = arrayOfStrings[i];
      }
    }
    return longestWordSoFar;
  }

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// => "Peanutbutter"

// NUMBER 8
//Write a Javascript function called transmogrify. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.

//The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.

//For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.

  const transmogrify = (digit1, digit2, digit3) => {
    return Math.pow((digit1 * digit2), digit3)
  };

  console.log(transmogrify(5, 3, 2));
//=> 225

// OBJECTS

// Syntax

  // Variable: the name of the object
  // {}: curly braces define the object's contents
  // Properties: made of Key/Value combinations, data about the object
  // Key: the index part of each property
  // Value: the information about the object tied to each key
  // Comma; used to seperate the individual properties and methods 
  // Method: a function within the object
  // This: keyword referring to the current object the code is being written inside

// Me

// 1.
  const me = {};

// 2.
  me.name = "Ron Clark";
  me.age = 32;
  me.email = "ronaldtclark@gmail.com";

// 3.
  console.log(me.name);
  
// 4.
  me.age = 1000;

// 5.
  console.log(me.age);

// 6.
  me["place of residence"] = "Chicago"

// 7.
  console.log(me["place of residence"]);

// SLIMER

  const monster = {
     name: "Slimer",
     color: "greenish",
     type: "plasm or ghost or something"
  };

// 1.
  console.log(monster.name);

// 2.
  monster.type = "creature"

// 3.
  monster.age = 6

// 4.
  console.log(monster);

// OGRES

// I did it this way...

  const adventurer = {
    name: "Poppinfresh",
    hitpoints: 32,
    attack: 10
  }

  const ogre = {
    hitpoints: 30,
    attack: 7
  }

  while (ogre.hitpoints != 0 && adventurer.hitpoints != 0) {
    (ogre.hitpoints) -= (adventurer.attack);
    (adventurer.hitpoints) -= (ogre.attack);
    console.log(`Ogre ${ogre.hitpoints} vs Adventurer ${adventurer.hitpoints}`);
    if(ogre.hitpoints === 0) {
      console.log("The Adventurer has slain the Ogre!")
    } else if (adventurer.hitpoints === 0) {
      console.log("The Ogre has slain the Adventurer!")
    }
  };

// but I am aware that this was supposed to use a function. I would like to go over this function tomorrow in class if we have time.






















