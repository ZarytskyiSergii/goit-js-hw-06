// test
const decrement = document.querySelector('[data-action = "decrement"]');
const increment = document.querySelector('[data-action = "increment"]');
const showValue = document.querySelector('#value');

let counterValue = 0;

decrement.addEventListener('click', btnDecrementHandler);
increment.addEventListener('click', btnIncrementHandler);

function btnDecrementHandler(event) {
    counterValue -= 1;
    showValue.textContent = counterValue;
    
};

function btnIncrementHandler(event) {
    counterValue += 1;
    showValue.textContent = counterValue;
    
};

