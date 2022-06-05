//асинхронность
//event loop

const timeout = setTimeout(() => {
  console.log("after timeout");
}, 2500);

clearTimeout(timeout);

const interval = setInterval(() => {
  console.log("after timeout");
}, 1000);

clearInterval(interval);

const delay = (callback, wait = 1000) => {
  setTimeout(callback, wait);
};

delay(() => {
  console.log("After 2 seconds"), 2000;
});

const delayNew = (wait = 1000) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      //reject("Что-то пошло не так. Повторите попытку");
    }, wait);
  });
  return promise;
};

delayNew(2500)
  .then(() => {
    console.log("After 2 seconds");
  })
  .catch((err) => console.error("Error: ", err))
  .finally(() => {
    console.log("Finally");
  });

const getData = () =>
  new Promise((resolve) => {
    resolve([1, 1, 2, 3, 5, 8, 13]);
  });

getData().then((data) => console.log(data));

async function asyncExample() {
  await delayNew(3000);
  const data = await getData();
  console.log("Data", data);
}

asyncExample();
