//Типы данных

const isProgrammer = true;
const name = "Andrey";
const age = 26;
let x;

console.log(typeof isProgrammer);
console.log(typeof name);
console.log(typeof age);
console.log(typeof x);
console.log(typeof null);

//5 Приоритет операторов
const fullAge = 26;
const birthYear = 1993;
const currentYear = 2022;

const isFullAge = currentYear - birthYear >= fullAge;
console.log(isFullAge);

// 6 Условные операторы

const courseStatus = "pendin";

if (courseStatus === "ready") {
  console.log("Course is ready");
} else if (courseStatus === "pending") {
  console.log("Course is not ready yet");
} else {
  console.log("Fail");
}

const num1 = 42;
const num2 = "42";
console.log(num1 === num2);

const isReady = "true";
if (isReady) {
  console.log("Ready");
} else {
  console.log("Not yet");
}

isReady ? console.log("Ready") : console.log("Not Ready");
