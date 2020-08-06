// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 *
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 *
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
 */
function processFirstItem(stringList, callback) {
  return callback(stringList[0]);
}

var str = ["foo", "bar"];
console.log("Example Challenge:");
console.log(processFirstItem(str, (str) => str + str));
console.log("\n");

// ⭐️ Example Challenge END ⭐️

///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2?
 * The count value in counter1 is stored locally in the function but globally in counter2
 *
 * 2. Which of the two uses a closure? How can you tell?
 * counter1 is the more relevant use case of closure (as it stores the variable count using closure locally by declaring a function inside another function)
 *
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 * counter1 is preferable if we want to keep track of the count value without being able to change it (keeping it private). Since the count value in counter2 is global, we can change its value anywhere in the code if our use case requires manipulation of the counter value in the code.
 */

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    return count++;
  };
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

console.log("Task 1:");
console.log("Check answers in index.js");
console.log("\n");

/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning() {
  return Math.floor(3 * Math.random());
}

console.log("Task 2:");
for (let i = 0; i < 5; i++) console.log("Inning: " + inning());
console.log("\n");

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/

function finalScore(inning, num) {
  let score = { Home: 0, Away: 0 };
  for (i = 0; i < num; i++) {
    score["Home"] += inning();
    score["Away"] += inning();
  }
  return score;
}

console.log("Task 3:");
console.dir(finalScore(inning, 9));
console.log("\n");

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

function scoreboard(getInningScore, inning, num) {
  let score = {};
  let finalScore = getInningScore(0, 0);
  let inningNum = [
    "1st",
    "2nd",
    "3rd",
    "4th",
    "5th",
    "6th",
    "7th",
    "8th",
    "9th",
  ];
  for (i = 0; i < num; i++) {
    score = getInningScore(inning(), inning());
    finalScore["Home"] += score["Home"];
    finalScore["Away"] += score["Away"];
    console.log(`${inningNum[i]} inning: ${score["Away"]} - ${score["Home"]}`);
  }
  console.log(`Final Score: ${finalScore["Away"]} - ${finalScore["Home"]}`);
}

function getInningScore(val1, val2) {
  return { Home: val1, Away: val2 };
}

console.log("Task 5:");
console.dir(scoreboard(getInningScore, inning, 9));
console.log("\n");

//--------------------Stretch----------------------------

// 2. Write a function that would allow you to do this using a closure. (This is another interview question we've seen before - when you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions)).

function createBase(baseNum) {
  return function (num) {
    return baseNum + num;
  };
}

var addSix = createBase(6);
console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27
