//functions

function calculateYear(year) {
  return 2022 - year;
}

const myAge = calculateYear(1999);
console.log(myAge);

function logInfoAbout(name, year) {
  const age = calculateYear(year);
  if (age > 0) {
    console.log("Человек по имени " + name + " имеет возраст " + age);
  } else {
    console.log("Такого не может быть");
  }
}

logInfoAbout("Andrey", 4054);

// 9 Array

const cars = ["mazda", "BMW", "IZh"];
const carsNew = new Array("mazda", "BMW", "IZh");
console.log(cars);
console.log(carsNew);
console.log(cars[1]);
console.log(cars[4]);
console.log(cars.length);

cars[0] = "Porshe";
cars[4] = "Жигуль";
cars[cars.length] = "Жигульlast";

console.log(cars);

//Циклы

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

for (let car of cars) {
  console.log(car);
}

// 11 Objects
const person = {
  firstName: "Andrew",
  lastName: "Surname",
  year: 1993,
  language: ["Ru", "En", "De"],
  hasWife: false,
  greet: function () {
    console.log("greet from person");
  },
};

console.log(person);
console.log(person.firstName);
console.log(person["lastName"]);
person.newItem = "New Item";

console.log(person);

person.greet();
