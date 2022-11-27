const form = document.querySelector('.form');
console.log(form)

form.addEventListener('submit', onFormSubmit);

function createPromise(position, delay) {
  const promis = new Promise((resolve, reject) => {      
  const shouldResolve = Math.random() > 0.3;
  
setTimeout(() => {
  if (shouldResolve) {
    resolve({position, delay});
  } else {
    reject({position, delay});
  }
}, delay)
});
return promis;
}

function onFormSubmit(evt) {
  evt.preventDefault();

  let delay = Number(evt.currentTarget.delay.value);
  const step = Number(evt.currentTarget.step.value);
  const amount = Number(evt.currentTarget.amount.value);

  for(let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    delay += step;
  }
}

