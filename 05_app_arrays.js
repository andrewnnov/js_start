//Array

const cars = ["Маза", "Форд", "БМВ", "Мерседес"];
const fib = [1, 1, 2, 3, 5, 8, 13];

const people = [
  { firstName: "Andrey", budget: 4200 },
  { firstName: "Marina", budget: 6200 },
  { firstName: "Vitaliy", budget: 2200 },
];

const index = cars.indexOf("БМВ");
console.log(index);
cars[index] = "Porshe";

let findPeson;
for (const person of people) {
  console.log(person);
  if (person.budget === 2200) {
    findPeson = person;
  }
}
console.log(findPeson);

const indexWithFindIndex = people.findIndex(function (person) {
  return person.budget === 6200;
});

console.log(people[indexWithFindIndex]);

cars.push("Рено"); //добавляет в конец
console.log(cars);
cars.unshift("Волга"); //добавляет в начало
console.log(cars);
const firstItem = cars.shift(); //удаляет первый элементы
console.log(cars);
const lastItem = cars.pop(); //удаляет последний элемент
console.log(cars);

console.log("If we have Ford", cars.includes("Форд"));

console.log(cars);
console.log(firstItem);
console.log(lastItem);

console.log(cars.reverse()); //перевернуть массив

const text = "Hello we are styding JS";
const reverseText = text.split("").reverse();
console.log(reverseText);
const reverstTextWithJoin = reverseText.join(" ");
console.log(reverstTextWithJoin);

const newCars = ["Жугуль", "Москвич", "Волга", "Запор"];
const upperCaseCars = newCars.map((car) => {
  //map всегда возвращает новый массив
  return car.toUpperCase();
});

console.log(upperCaseCars);

const pow3 = (num) => num ** 3;
const pow3Fib = fib.map(pow3);
console.log(pow3Fib);

const sqrt = (num) => Math.sqrt(num);
const pow2Fib = fib.map((num) => num ** 2).map(sqrt);
console.log(pow2Fib);

const fibNew = [1, 1, 2, 3, 5, 8, 13];

const fibNewPow2 = fibNew.map((num) => num ** 2);
const filteredNumbers = fibNewPow2.filter((num) => {
  return num > 20;
});
console.log(fibNewPow2);
console.log(filteredNumbers);

const budgerForPeople = [
  { firstName: "Andrey", budget: 4200 },
  { firstName: "Marina", budget: 6200 },
  { firstName: "Vitaliy", budget: 200 },
];

const allBudget = budgerForPeople.reduce(function (acc, person) {
  if (person.budget > 2000) {
    acc += person.budget;
  }
  return acc;
}, 0);

console.log(allBudget);

const allBudgetOther = budgerForPeople
  .filter((person) => person.budget > 2000)
  .reduce((acc, person) => {
    acc += person.budget;
    return acc;
  }, 0);
console.log(allBudgetOther);
