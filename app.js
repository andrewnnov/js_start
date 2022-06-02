//number
const num = 42;
const float = 42.42;
const pow = 10e3;
console.log(num);
console.log(float);
console.log(pow);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Math.pow(2, 53) - 1);
console.log("MAX_VALUE", Number.MAX_VALUE);
console.log("MIN_SAFE_INTEGER", Number.MIN_SAFE_INTEGER);
console.log("infinity", 2 / 0);
console.log("NaN", Number.NaN); // Not a number

const stringInt = "42";
const stringFloat = "42.42";
console.log(stringInt + 2);
console.log(Number.parseInt(stringInt) + 2);
console.log(parseInt(stringInt) + 2);
console.log(Number(stringInt) + 2);
console.log(+stringInt + 2);

console.log("?", 0.4 + 0.2);
console.log(parseFloat((0.4 + 0.2).toFixed(1)));
