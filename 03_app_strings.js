//String

const name = "Andrew";
console.log(typeof name);

function getAge() {
  return age;
}

const age = 26;
//const output = "Hello my name is " + name + " and my age is " + age;
const output = `Hello, my name is ${name} and my age is ${getAge()}`;
console.log(output);

const firstName = "Andrey";
console.log(firstName.length);
console.log(firstName.toUpperCase());
console.log(firstName.charAt(2));
console.log(firstName.indexOf("de"));
console.log(firstName.startsWith("An"));
console.log(firstName.repeat(8));

const spaceWith = "      addff     ";
console.log(spaceWith.trim());
console.log(spaceWith.trimStart());
console.log(spaceWith.trimEnd());

function logPerson(s, name, age) {
  return "Info about person";
}

const personName = "Andrey";
const pesonAge = 26;

const outputNew = logPerson`Имя: ${personName}, Возраст: ${pesonAge}`;
