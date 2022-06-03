//Функции

//function declaration
function greet(name) {
  console.log("Hello " + name);
}

//function expression
const greet2 = function greet2(name) {
  console.log("Hello2 " + name);
};

greet("Марина");
greet2("Марина");

console.log(typeof greet);
console.dir(greet);

//анонимные функции
// let counter = 0;
// const interval = setInterval(function () {
//   if (counter === 5) {
//     clearInterval(interval);
//   } else {
//     console.log(++counter);
//   }
// }, 1000);

function greet(name) {
  console.log("Hello " + name);
}

//стрелочные функции
const arrow = (name) => {
  console.log("Hello " + name);
};

const2 = arrow2 = (name2) => console.log("Hello " + name2);

arrow("Andrew");
arrow2("Vit");

const pow2 = (num) => {
  return num ** 2;
};

const pow2New = (num) => num ** 2;

console.log(pow2(4));
console.log(pow2New(5));

//Параметры по умолчанию

const sum = (a = 1, b = 2) => a + b;
console.log(sum(41, 1));
console.log(sum());

function sumAll(...all) {
  let result = 0;
  for (let num of all) {
    result += num;
  }
  return result;
}

const res = sumAll(1, 2, 3, 4, 5, 6, 7);

console.log(res);

//Замыкания
function createMember(name) {
  return function (lastName) {
    console.log(name + lastName);
  };
}

const logWithLastName = createMember("Andrew");
console.log(logWithLastName("Maslow"));
console.log(logWithLastName("Pirogov"));
