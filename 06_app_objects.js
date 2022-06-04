const person = {
  firstName: "Andrey",
  age: 26,
  isProgrammer: true,
  languages: ["ru", "en", "de"],
  "complex key": "komplex value",
  ["key" + (1 + 3)]: "Computed key",
  greet() {
    console.log("greet from peson");
  },
};

console.log(person.firstName);
console.log(person["age"]);
console.log(person["complex key"]);

console.log(person);
person.greet();

person.age++;
person.languages.push("by");
console.log(person);
person["key4"] = undefined;

delete person["key4"];
console.log(person);

//деструктуризация

// const firstName = person.firstName;
// const age = person.age;
// const languages = person.languages;

//console.log(firstName, age, languages);

const { firstName, age: personAge, languages } = person;
console.log(firstName, personAge, languages);

console.log(person);

for (let key in person) {
  console.log("key:", key);
  console.log("value:", person[key]);
}

const keys = Object.keys(person);
console.log(keys);
keys.forEach((key) => {
  console.log("key:", key);
  console.log("value:", person[key]);
});

//context
const personNew = {
  firstName: "Andrey",
  age: 26,
  isProgrammer: true,
  languages: ["ru", "en", "de"],
  "complex key": "komplex value",
  ["key" + (1 + 3)]: "Computed key",
  greet() {
    console.log("greet from peson");
  },
  info() {
    console.info("Информация про человека по имени " + this.firstName);
  },
};

personNew.info();

const logger = {
  keys() {
    console.log("Object keys: ", Object.keys(this));
  },

  keysAndValues() {
    Object.keys(this).forEach((key) => {
      console.log(`${key} : ${this[key]}`);
    });
  },
};

const bound = logger.keys.bind(person);
bound();

logger.keys.call(person);
logger.keysAndValues.call(logger);
